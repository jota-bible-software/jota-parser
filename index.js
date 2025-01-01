import JotaParser from './src/parser'

const supportedLocales = ['en-US', 'pl-PL', 'pt-BR']

// Set default locale and the change handler
let defaultLocale = navigator.languages[0].substring(0, 2)
if (!supportedLocales.includes(defaultLocale)) defaultLocale = 'en-US'

let parser1 // Jota parser recreated on locale change
const parser2 = new bcv_parser()
parser2.include_apocrypha(true)
const osisBookAbbreviations = ['Gen', 'Exod', 'Lev', 'Num', 'Deut', 'Josh', 'Judg', 'Ruth', '1Sam', '2Sam', '1Kgs', '2Kgs', '1Chr', '2Chr', 'Ezra', 'Neh', 'Esth', 'Job', 'Ps', 'Prov', 'Eccl', 'Song', 'Isa', 'Jer', 'Lam', 'Ezek', 'Dan', 'Hos', 'Joel', 'Amos', 'Obad', 'Jonah', 'Mic', 'Nah', 'Hab', 'Zeph', 'Hag', 'Zech', 'Mal', 'Matt', 'Mark', 'Luke', 'John', 'Acts', 'Rom', '1Cor', '2Cor', 'Gal', 'Eph', 'Phil', 'Col', '1Thess', '2Thess', '1Tim', '2Tim', 'Titus', 'Phlm', 'Heb', 'Jas', '1Pet', '2Pet', '1John', '2John', '3John', 'Jude', 'Rev', 'Jdt', 'Tob', '1Macc', '2Macc', 'Wis', 'Sir', 'Bar']
let commonHTML

async function displayTestCases(locale, common) {
  let parserRules, data
  if (common) {
    /* @vite-ignore */
    parserRules = await import(`./src/parser-en-US`)
    /* @vite-ignore */
    data = (await import(`./test/data-common`)).data
  } else {
    /* @vite-ignore */
    parserRules = await import(`./src/parser-${locale}.js`)
    /* @vite-ignore */
    data = (await import(`./test/data-${locale}.js`)).data
  }
  parser1 = new JotaParser({ locales: [parserRules] })

  let stat1 = 0
  let stat2 = 0
  let duration1 = 0
  let duration2 = 0

  // Add test cases
  const testCases = data.map(group => {
    const cases = group.cases.map(it => {
      let time1 = performance.now()
      const output1 = parser1.parse(it.input)
      time1 = performance.now() - time1
      const result1 = JSON.stringify(output1) == JSON.stringify(it.expectedOutput)
      if (!result1) stat1++

      let time2 = performance.now()
      parser2.parse(it.input)
      const output2before = parser2.osis()
      time2 = performance.now() - time2
      const output2 = addSpaces(output2before)
      const osisOutput = output2osis(it.expectedOutput)
      const result2 = output2 == osisOutput
      if (!result2) stat2++

      if (result1 && result2) {
        duration1 += time1
        duration2 += time2
      }

      return `
      <div> ${it.input} </div>
      <div class="jota">${outcomeIcon(result1)} ${output2osis(output1)} </div>
      <div class="bcv">${outcomeIcon(result2)} ${output2} </div>
      `
    }).join('\n')
    return `<div class="span"><h4>${group.group}</h4></div>${cases}`
  }).join('\n')

  // Jota is about 30% slower then BCV, but is is justifiable considering 
  // it has to do more to cover higher variety of cases
  console.log(`Parsing time of Jota parser is ${duration1} ms`)
  console.log(`Parsing time of BCV parser is ${duration2} ms`)

  const gridElement = document.getElementById('grid')
  if (!commonHTML) commonHTML = gridElement.innerHTML
  gridElement.innerHTML = commonHTML + testCases
  document.getElementById('stat1').innerHTML += `${outcomeIcon(!stat1)} ${statMessage(stat1, 1)}`
  document.getElementById('stat2').innerHTML += `${outcomeIcon(!stat2)} ${statMessage(stat2, 2)}`

  const optionToSelect = document.querySelector(`#locale option[value="${locale}"]`)
  optionToSelect.selected = true

  const selectElement = document.querySelector('#locale select')
  selectElement.addEventListener('change', () => {
    displayTestCases(selectElement.value)
  })

  const tabBooks = document.querySelector('#tabs h3:nth-child(1)')
  const tabcommon = document.querySelector('#tabs h3:nth-child(2)')
  if (common) {
    tabBooks.classList.remove('selected')
    tabcommon.classList.add('selected')
  } else {
    tabBooks.classList.add('selected')
    tabcommon.classList.remove('selected')
  }
  tabBooks.addEventListener('click', () => {
    window.location.href = 'index.html'
  })
  tabcommon.addEventListener('click', () => {
    window.location.href = '?common=true'
  })
  setupInputElement()
}

const common = !!window.location.search.includes('common=true')
displayTestCases(defaultLocale, common)

function setupInputElement() {
  document.getElementById('text-input').addEventListener('input', (e) => {
    const v = e.target.value
    const output1 = output2osis(parser1.parse(v))
    parser2.parse(v)
    const output2 = addSpaces(parser2.osis())
    document.getElementById("output1").innerHTML = output1
    document.getElementById("output2").innerHTML = output2

    const theSame = output1 === output2
    const element = document.getElementById('compare-output')
    element.innerHTML = `
      ${outcomeIcon(theSame)} Outputs of Jota and BCV parsers ${theSame ? 'are the same' : 'differ'}
    `
    element.style.display = e.target.value ? 'block' : 'none'
  })
}

function outcomeIcon(outcome) {
  const symbol = outcome ? '&#x2714;' : '&#x2718;'
  const color = outcome ? 'success' : 'failure'
  return `<span class="${color}">${symbol}</span>`
}

function statMessage(stat, suffix) {
  const cls = !stat ? 'success' : 'failure'
  const message = stat ? ` ${stat} failure(s)` : ' All good!'
  const duration = performance.getEntriesByName('parsing' + suffix).reduce((acc, cur) => acc + cur.duration, 0)

  return `<span class="${cls}">${message}</span>`
}

function output2osis(output) {
  return output.map(passage => {
    const isRange = Array.isArray(passage[0])
    return isRange
      ? `${convert(passage[0])} - ${convert(passage[1])}`
      : convert(passage)
  }).join(', ')

  function convert(consecutive) {
    const verseStart = consecutive[2] ? '.' + consecutive[2] : ''
    const bookChapter = `${osisBookAbbreviations[consecutive[0]]}.${consecutive[1]}`
    const verseEnd = consecutive[3] ? ` - ${bookChapter}.${consecutive[3]}` : ''
    return `${bookChapter}${verseStart}${verseEnd}`
  }
}

function addSpaces(s) {
  return s.replace(/\,/g, ', ').replace(/\-/g, ' - ')
}
