const locale = 'en'
const spaces0 = '\\s*'
const spaces1 = '\\s+'

const saint = `((holy|ap(ostle)?)\\.?${spaces1}?)?`
const bookWord = `(book${spaces1})?`
const book0 = bookWord
const book1 = `(1|I|first|1st)${spaces0}${bookWord}`
const book2 = `(2|II|second|2nd)${spaces0}${bookWord}`

const gospelWord = `(ew(an(g(eli(a|i|ią|ię))?)?)?\\.?${spaces1}?${saint})?`

const letterWord = `(letter|epistle)?${spaces0}(${saint}(paul${spaces1})?)?(to${spaces1})?`
const letter0 = letterWord
const letter1 = `(1|I|first|1st)${spaces0}${letterWord}`
const letter2 = `(2|II|second|2nd)${spaces0}${letterWord}`
const letter3 = `(3|III|third|3rd)${spaces0}${letterWord}`

const samuel = 'sa(m(u(el)?)?)?'
const kings = '(kings?|kgs)'
const chronicles = '(chr(o(n(ic(les?)?)?)?)?|chn)'
const corinthians = 'cor(i(n(t(h(ians?)?)?)?)?)?'
const timothy = '(ti(m(o(t(hy)?)?)?)?|tm)'
const thessalonians = 'thes(s(a(l(on(ians?)?)?)?)?)?'
const peter = '(p(e(t(er)?)?)?|pt?r?)'
const john = '(j(o(hn?)?)?|jh?n)'
const maccabees = 'macc?(ab(ees?)?)?'

export const bookMatchers = [
  `${book0}(ge(n(e(s(is)?)?)?)?|gn)`,
  `${book0}ex(o(d(us)?)?)?`,
  `${book0}lev(i(t(icus)?)?)?`,
  `${book0}num(b(ers?)?)?`,
  `${book0}deu(t(e(r(onomy)?)?)?)?`,
  `${book0}(jos(h(ua)?)?|jsh)`,
  `${book0}(judg(es)?|jdg)`,
  `${book0}(ruth?|rt)`,
  `${book1}${samuel}`,
  `${book2}${samuel}`,
  `${book1}${kings}`,
  `${book2}${kings}`,
  `${book1}${chronicles}`,
  `${book2}${chronicles}`,
  `${book0}ezra?`,
  `${book0}(ne(h(e(m(iah)?)?)?)?|nhm)`,
  `${book0}es(t(h(er?)?)?)?`,
  `${book0}(job|jb)`,
  `${book0}ps(a(lms?)?)?`,
  `${book0}pr(o(v(erbs?)?)?)?`,
  `${book0}ec(c?(l(e(s(iastes)?)?)?)?)?`,
  `${book0}(song( of solomon)?|sos)`,
  `${book0}is(a(i(ah?)?)?)?`,
  `${book0}(je(r(em(iah?)?)?)?|jrm?)`,
  `${book0}la(m(en(t(ations?)?)?)?)?`,
  `${book0}(eze(k(iel)?)?|ezk)`,
  `${book0}(da(n(iel)?)?|dn)`,
  `${book0}hos(e(a?)?)?`,
  `${book0}joel?`,
  `${book0}am(os?)?`,
  `${book0}oba(d(iah)?)?`,
  `${book0}jon(ah?)?`,
  `${book0}mi(c(ah)?)?`,
  `${book0}na(h(um)?)?`,
  `${book0}(ha(b(akk?(uk)?)?)?|hb)`,
  `${book0}ze(p(h(a(n(iah)?)?)?)?)?`,
  `${book0}(hag(g(ai)?)?|hg)`,
  `${book0}(ze(ch(ar(iah)?)?)?|zch)`,
  `${book0}ma(l(a(chi?)?)?)?`,
  `${gospelWord}(matt?(h(ew)?)?|mt)`,
  `${gospelWord}(mark?|mr|mk)`,
  `${gospelWord}(lu(ke?)?|lk)`,
  `${gospelWord}${john}`,
  `${book0}ac(ts?)?`,
  `${letter0}ro(m(ans?)?)?`,
  `${letter1}${corinthians}`,
  `${letter2}${corinthians}`,
  `${letter0}ga(l(a(t(ians?)?)?)?)?`,
  `${letter0}eph(e(s(ians?)?)?)?`,
  `${letter0}phi(l(i(pp?(ians?)?)?)?)?`,
  `${letter0}col(o(ss?(ians?)?)?)?`,
  `${letter1}${thessalonians}`,
  `${letter2}${thessalonians}`,
  `${letter1}${timothy}`,
  `${letter2}${timothy}`,
  `${letter0}tit(us)?`,
  `${letter0}(phile(m(on)?)?|phlm)`,
  `${letter0}(he(b(r(ews?)?)?)?|hbr)`,
  `${letter0}jam(es)?|jas|jms`,
  `${letter1}${peter}`,
  `${letter2}${peter}`,
  `${letter1}${john}`,
  `${letter2}${john}`,
  `${letter3}${john}`,
  `${letter0}(ju(de?)?|jd)`,
  `${book0}rev(e(l(at(ion)?)?)?)?`,
  // apokryfy
  `${book0}(judi(th)?|jdt)`,
  `${book0}(tob(i(th)?)?|tb)`,
  `${book1}${maccabees}`,
  `${book2}${maccabees}`,
  `${book0}(wis(d(om)?)?|wsd)`,
  `${book0}(si(r(ah?)?)?|ecclesiasticus)`,
  `${book0}(ba(r(u(ch)?)?)?|br)`
]

const parserRules = { locale, bookMatchers }
export default parserRules
