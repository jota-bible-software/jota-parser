const locale = 'pt-BR'
const spaces0 = '\\s*'
const spaces1 = '\\s+'

const saint = `((s(anto|ão)\\.?|ap(óstolo)?)\\.?${spaces1}?)?`
const bookWord = `(livro${spaces1}de${spaces1})?`
const book0 = bookWord
const book1 = `(1[ªºa]?|I|primeir.)${spaces0}${bookWord}`
const book2 = `(2[ªºa]?|II|segund.)${spaces0}${bookWord}`

const gospelWord = `(ev(angelho)?${spaces1}?(segundo|de)${spaces1}${saint})?`

const letterWord = `(carta|ep[íi]stola)?${spaces0}(${saint}(paulo${spaces1})?)?(aos?${spaces1})?`
const letter0 = letterWord
const letter1 = `(1[ªºa]?|I|primeir.)${spaces0}${letterWord}`
const letter2 = `(2[ªºa]?|II|segund.)${spaces0}${letterWord}`
const letter3 = `(3[ªºa]?|III|terceir.)${spaces0}${letterWord}`

const samuel = '(sa(m(u(el)?)?)?|sm)'
const kings = '(re(is?)?|rs)'
const chronicles = '(cr([ôo](n(i(cas?)?)?)?)?)'
const corinthians = 'co(r([íi](n(t(ios?)?)?)?)?)?'
const timothy = '(ti(m([óo](t(eo)?)?)?)?|tm)'
const thessalonians = 'te(s(s(a(l(on(i(censes?)?)?)?)?)?)?)?'
const peter = '(p(e(d(ro)?)?)?)'
const john = '(j(o([ãa]o)?)?)'
const maccabees = 'mac(ab(eus?)?)?'

// Natural order
const order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73]

const bookMatchers = [
  `${book0}(g[êe](n(e(s(is)?)?)?)?|gn)`,
  `${book0}[êe]x(o(d(o)?)?)?`,
  `${book0}(le(v([íi](t(ico)?)?)?)?|lv)`,
  `${book0}(n[úu](m(eros?)?)?|nm)`,
  `${book0}(deu(t(e(r(o(n([ôo](m(io)?)?)?)?)?)?)?)?|dt)`,
  `${book0}(jos(u([ée])?)?|js)`,
  `${book0}(ju[íi](z(es)?)?|jz)`,
  `${book0}(rute?|rt)`,
  `${book1}${samuel}`,
  `${book2}${samuel}`,
  `${book1}${kings}`,
  `${book2}${kings}`,
  `${book1}${chronicles}`,
  `${book2}${chronicles}`,
  `${book0}e(s(d(ras?)?)?)?`,
  `${book0}(ne(e(m(ias?)?)?)?|ne)`,
  `${book0}est(er?)?`,
  `${book0}jó`,
  `${book0}(s(al(mos?)?)?|sl)`,
  `${book0}pr(o(v([ée](r(b(ios?)?)?)?)?)?)?`,
  `${book0}ec(l(e(s(iastes?)?)?)?)?`,
  `${book0}(c[âa]nt(ico dos c[âa]nticos)?|cnt)`,
  `${book0}is(a([íi](as?)?)?)?`,
  `${book0}(je(r(e(m(ias?)?)?)?)?|jr)`,
  `${book0}(la(m(en(t(a[çc][õo]es?)?)?)?)?|lm)`,
  `${book0}(eze(q(u(iel)?)?)?|ez)`,
  `${book0}(da(n(iel)?)?|dn)`,
  `${book0}os([ée](i(as?)?)?)?`,
  `${book0}(joel?|jl)`,
  `${book0}am([óo]s?)?`,
  `${book0}(ob(a(d(ias?)?)?)?|obd)`,
  `${book0}jon(as?)?`,
  `${book0}mi(q(u([ée](i(as?)?)?)?)?)?`,
  `${book0}na(u(m)?)?`,
  `${book0}(ha(b(a(c(u(que)?)?)?)?)?|hc)`,
  `${book0}so(f(o(n(ias?)?)?)?)?`,
  `${book0}(ag(eu)?|ag)`,
  `${book0}(za(c(a(r(ias?)?)?)?)?|zc)`,
  `${book0}ma(l(a(q(u(ias?)?)?)?)?)?`,
  `${gospelWord}(mat(eus)?|mt)`,
  `${gospelWord}(mar(cos)?|mc|mr)`,
  `${gospelWord}(luc(as)?|lc)`,
  `${gospelWord}${john}`,
  `${book0}ac?t(os?)?`,
  `${letter0}(ro(m(anos?)?)?|rm)`,
  `${letter1}${corinthians}`,
  `${letter2}${corinthians}`,
  `${letter0}g[áa](l(a(t(as?)?)?)?)?`,
  `${letter0}ef([ée](s(ios?)?)?)?`,
  `${letter0}(fi(l(i(p(enses?)?)?)?)?|flp)`,
  `${letter0}col(o(ss?(enses?)?)?)?`,
  `${letter1}${thessalonians}`,
  `${letter2}${thessalonians}`,
  `${letter1}${timothy}`,
  `${letter2}${timothy}`,
  `${letter0}ti(t(o)?)?`,
  `${letter0}(file(m(on)?)?|flm)`,
  `${letter0}(he(b(r(eus?)?)?)?|hb)`,
  `${letter0}ti(ago)?|tg`,
  `${letter1}${peter}`,
  `${letter2}${peter}`,
  `${letter1}${john}`,
  `${letter2}${john}`,
  `${letter3}${john}`,
  `${letter0}(ju(d(as?)?)?|jds?)`,
  `${book0}ap(o(c(a(l(i(p(se)?)?)?)?)?)?)?`,
  // apócrifos
  `${book0}(judite?|jdt)`,
  `${book0}(tob(ias?)?|tb)`,
  `${book1}${maccabees}`,
  `${book2}${maccabees}`,
  `${book0}(sab(e(d(o(r(ia)?)?)?)?)?|sb)`,
  `${book0}(si(r([áa](c(ido)?)?)?)?|eclo)`,
  `${book0}(ba(r(uc?)?)?|br)`
]

const parserRules = { locale, bookMatchers, order }
export default parserRules
