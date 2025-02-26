const spaces0 = '\\s*'
const delimiterWithSpace = ':;/,. '
// const nonAlphanumeric = '[^0-9A-Za-zZąćęłńóśźżĄĘŁŃÓŚŹŻ]'
const nonAlphanumeric = '[^\dA-Za-zªµºÀ-ÖØ-öø-ɏḀ-ỿⱠ-ⱿꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꟿ]'
const bookMarker = '\uF000'

class JotaParser {
  constructor(options) {
    this.options = options
    const locales = options.locales
    if (!locales || locales.length === 0) {
      throw new Error('No locales in the options.')
    }
  }
  parse(text) {
    let content = text
    const passages = []
    this.options.locales.forEach(parserRules => {
      const { bookMatchers, order } = parserRules.default || parserRules
      // For a given locale
      content = parseLocale(content, passages, bookMatchers, order)
      // Remove the found books so the next locale parse would not find them
      content = content.replace(new RegExp(bookMarker, 'g'), '')

    })
    return passages
  }
}

function parseLocale(text, passages, bookMatchers, order) {
  let content = text

  // Find books with following chapter first and change the book name abbreviation to the book index prefixed with bookMarker
  // This is necessary in order to parse "john 1,1 king 2,3" as "john 1" and "1 king 2,3"
  for (let i = order.length; i-- > 0;) {
    const bookIndex = order[i]
    const bookMatcher = bookMatchers[bookIndex]
    const bookChapterMatcher = `(${nonAlphanumeric}|^)(?<book>${bookMatcher})(?=[${delimiterWithSpace}]+\\d|\\d)`
    // console.log(bookIndex, bookChapterMatcher)
    const bookChapterRegExp = new RegExp(bookChapterMatcher, 'gi')
    content = content.replace(bookChapterRegExp, `${bookMarker}${bookIndex} `)
  }

  let lastPassage

  // It is important to identify the chapter delimiter so that 1M 1:2; 3:4 would yield [[0, 1, 2], [0, 3, 4]] instead of [[0, 1, 2, 4]]
  // const bookChapterMatcher = `${bookMarker}(?<book>\\d+)[:;/,. ]*(?<firstChapter>\\d+)((?<chapterDelimiterMatch>[:;/,. ]+)(?<tail>[:;/,. \\-–\\d]*))?`
  const head = `${bookMarker}(?<book>\\d+)[:;/,. ]*(?<firstChapter>\\d+)((?<chapterDelimiterMatch>[:;/,. ]+)`
  const tail = `(?<tail>([:;/,. ]*|(\\d+[a-zA-Z]?)|\s*[\\-–]\s*(?=[\\d${bookMarker}]))*))?`
  const bookChapterMatcher = head + tail

  const bookRegExp = new RegExp(bookChapterMatcher, 'gi')
  for (let bookMatch; bookMatch = bookRegExp.exec(content);) {
    const { book, firstChapter, chapterDelimiterMatch, tail } = bookMatch.groups
    const bookIndex = parseInt(book)
    const chapterDelimiter = chapterDelimiterMatch ? chapterDelimiterMatch.substring(0, 1) : ''
    const chapterDelimiterEscaped = chapterDelimiterMatch ? '\\' + chapterDelimiter : chapterDelimiter

    const chapterFragments = firstChapter + chapterDelimiter + (tail || '').replace(/[a-zA-Z]/g, '')
    const chapterFragmentMatcher = `(?<chapter>\\d+)${spaces0}${chapterDelimiterEscaped}(?<verses>.*?((?=\\d+${chapterDelimiterEscaped}\\s*\\d)|\\n|$))?`
    const chapterFragmentRegExp = new RegExp(chapterFragmentMatcher, 'gi')

    for (let chapterFragmentMatch; chapterFragmentMatch = chapterFragmentRegExp.exec(chapterFragments);) {
      const { chapter, verses } = chapterFragmentMatch.groups
      const chapterIndex = parseInt(chapter)

      const versesMatcher = `(?<start>\\d+)(${spaces0}[\\-–]${spaces0}(?<end>\\d+))?`
      const versesRegExp = new RegExp(versesMatcher, 'gi')
      let found = false
      if (verses) {
        for (let versesMatch; versesMatch = versesRegExp.exec(verses);) {
          found = true
          const { start, end } = versesMatch.groups
          if (!isNaN(start)) {
            const passage = [bookIndex, chapterIndex]
            passage.push(parseInt(start))
            if (!isNaN(end)) {
              passage.push(parseInt(end))
            }
            if (verses.match(/[-–]\s*$/)) {
              // It means there is a chapter range
              // if (!lastPassage) {
              lastPassage = passage
              // }
            } else {
              if (lastPassage) {
                passages.push([lastPassage, passage])
              } else {
                const last = passages[passages.length - 1]
                if (last && last[0] === passage[0] && last[1] === passage[1] && (last[2] === passage[2] - 1 || last[3] === passage[2] - 1)) {
                  last[3] = (passage[3] === undefined ? passage[2] : passage[3])
                } else {
                  passages.push(passage)
                }
              }
            }
          }
        }
      }
      if (!found) {
        if (isOneChapterBook(bookIndex)) {
          passages.push([bookIndex, 1, chapterIndex])
        } else {
          passages.push([bookIndex, chapterIndex])
        }
      }
    }
  }

  return content
}

function isOneChapterBook(bookIndex) {
  return [30, 56, 62, 63, 64].includes(bookIndex)
}

export default JotaParser
