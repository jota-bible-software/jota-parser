const locale = 'pl'
const spaces0 = '\\s*'
const spaces1 = '\\s+'

const saint = `(([śs]w(iętego)?|ap(ost(o(łl)a)?)?)\\.?${spaces1}?)?`
const bookWord = `\\.?${spaces0}(ks(\\.|(i[ęe](g[aąięe]|dze)))?${spaces1})?`
const book0 = bookWord
const book1 = `(1|I|pierwsz[aąey]j?)${bookWord}`
const book2 = `(2|II|drug[aąi](ej)?)${bookWord}`
const book3 = `(3|III|trzeci[aąe]j?)${bookWord}`
const book4 = `(4|IV|czwart[aąe]j?)${bookWord}`
const book5 = `(5|V|pi[ąa]t[aąe]j?)${bookWord}`

const gospelWord = `(ew(an(g(eli(a|i|ią|ię))?)?)?\\.?${spaces1}?${saint})?`

const letterWord = `\\.?${spaces0}(li(s(tu?)?|[śs]cie|tem)?)?${spaces0}(${saint}(paw[łl]a${spaces1})?)?(do${spaces1})?`
const letter0 = letterWord
const letter1 = `(1|I|pierwsz(ym?|ego|emu))${letterWord}`
const letter2 = `(2|II|drugi(m|ego|emu)?)${letterWord}`
const letter3 = `(3|III|trzeci(m|ego|emu)?)${letterWord}`

const moses = 'm(o([jy]([żz](esz(a|ow(a|ą|ej?))?)?)?)?)?'
const samuel = '(sa(m(u(ela?)?)?)?(owa)?|sm)'
const kings = '(kr[óo]l(ew(sk(a|ą|iej)?)?|[oó]w)?|krl)'
const chronicles = '(kro(n(ik)?)?|krn)'
const corinthians = '(ko(r(y(n(t(ian)?)?)?)?)?|korynt[oó]w)'
const timothy = '(ty(m(o(t(eusza?)?)?)?)?|tm)'
const thessalonians = 'te(s(a(l(oniczan|onicens[oó]w)?)?)?)?'
const peter = '(pi(o(t(ra?)?)?)?|pt?r?)'
const john = '(j(ana?)?|jn)'

const order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 43]

const bookMatchers = [
  `(${book1}${moses}|(rodz(aju?)?)|rdz)`, // #0
  `(${book2}${moses}|(wy(j([śs](c(ia)?)?)?)?)|wj)`, // #1
  `(${book3}${moses}|(kap([łl](a[ńn](sk(a|ą|iej)?)?)?)?)|kp[lł])`, // #2
  `(${book4}${moses}|(li(czb?)?)|lb)`, // #3
  `(${book5}${moses}|pow(t([oó]rzonego)?)?\.?(${spaces1}prawa)?|pwt)`, // #4
  `${book0}(joz(u(e(go)?)?)?|jz)`, // #5
  `${book0}(s[eę](d(z(i[oó]w)?)?)?|sdz)`, // #6
  `${book0}(rut?(hy?)?|rt)`, // #7
  `${book1}${samuel}`, // #8
  `${book2}${samuel}`, // #9
  `${book1}${kings}`, // #10
  `${book2}${kings}`, // #11
  `${book1}${chronicles}`, // #12
  `${book2}${chronicles}`, // #13
  `${book0}ezd(r(a(sza?)?)?)?`, // #14
  `${book0}(ne(h(e(m(iasza?)?)?)?)?|nhm)`, // #15
  `${book0}es(t(e(ry?)?)?)?`, // #16
  `${book0}(hi(o(ba?)?)?|joba?|jb|hb)`, // #17
  `${book0}ps(a(l(m(u|em|ie|owi|y|[óo]w|ami)?)?)?)?`, // #18
  `${book0}(pr(z(y(p(ow(ie[śs]ci)?)?|s([łl][óo]w)?)?)?)?\.?\s*(salomona)?)|(salomona?)`, // #19
  `${book0}(ka(z(n(odziei)?)?)?\\.?${spaces0}(salomona)?|kzn?|koh(e(l(eta?)?)?)?|eklezjastesa)`, // #20
  `${book0}(pie[śs][ńn]${spaces1}(nad${spaces1}pieśniami|salomona)|pnp)`, // #21
  `${book0}iz(a(j(asza?)?)?)?`, // #22
  `${book0}(je(r(em(iasza?)?)?)?|jrm?)`, // #23
  `${book0}(la(m(en(t(acj[eia](mi)?)?)?)?)?|tr(e(n(y|ach|ami|om|[óo]w)?)?)?)\\s*(jeremiasza?)?`, // #24
  `${book0}(ez(e(ch(iela?)?)?)?|ezch)`, // #25
  `${book0}(da(n(iela?)?)?|dn)`, // #26
  `${book0}oz(e(a(sza?)?)?)?`, // #27
  `${book0}(joe(la?)?|jl)`, // #28
  `${book0}am(o(sa?)?)?`, // #29
  `${book0}ab(d(i(asza?)?)?)?`, // #30
  `${book0}jon(a(sza?)?)?`, // #31
  `${book0}mi(ch(easza?)?)?`, // #32
  `${book0}(na(h(uma?)?)?|proroctwo nahumowe|nach)`, // #33
  `${book0}(ha(b(ak(uka?)?)?)?|proroctwo abakukowe|abakuka?)`, // #34
  `${book0}(so(f(o(n(iasza?)?)?)?)?|proroctwo sofoniaszowe)`, // #35
  `${book0}ag(g(eusza?)?)?`, // #36
  `${book0}(za(ch(ar(iasza?)?)?)?|zch)`, // #37
  `${book0}(ma(l(a(ch(iasza?)?)?)?)?|ml)`, // #38
  `${gospelWord}(mat(eusza?)?|mt)`, // #39
  `${gospelWord}(mar(ka?)?|mr|mk)`, // #40
  `${gospelWord}([łl]u(k(asza?)?)?|[łl]k)`, // #41
  `${gospelWord}${john}`, // #42
  `${book0}dz(iej(e|ach))?\\.?${spaces0}(ap(o(s(t(olski(e|ch))?)?)?)?)?`, // #43
  `${letter0}rz(y(m(ian)?)?)?|rzm`, // #44
  `${letter1}${corinthians}`, // #45
  `${letter2}${corinthians}`, // #46
  `${letter0}ga(l(a(t[óo]w|cjan)?)?)?|glt?`, // #47
  `${letter0}ef(e(z(jan|[oó]w)?)?)?|efz`, // #48
  `${letter0}(fili(p(ian|ens[oó]w)?)?|flp?)`, // #49
  `${letter0}kol(o(s(an|ens[oó]w)?)?)?`, // #50
  `${letter1}${thessalonians}`, // #51
  `${letter2}${thessalonians}`, // #52
  `${letter1}${timothy}`, // #53
  `${letter2}${timothy}`, // #54
  `${letter0}(tyt(u(sa?)?)?|tt)`, // #55
  `${letter0}(fi(l(e(m(ona?)?)?)?)?|flm)`, // #56
  `${letter0}(he(b(r(a(j(cz(yk[óo]w)?)?)?)?)?)?|hbr|[zż]yd([oó]w)?)`, // #57
  `${letter0}(jak(u(ba?)?)?|jkb?)`, // #58
  `${letter1}${peter}`, // #59
  `${letter2}${peter}`, // #60
  `${letter1}${john}`, // #61
  `${letter2}${john}`, // #62
  `${letter3}${john}`, // #63
  `${letter0}(ju(dy?)?|jd)`, // #64
  `${book0}(ob(j(aw(ieni[ea])?)?)?|ap(o(k(al(ips[ay])?)?)?)?)(\\.?${spaces0}${saint}jana)?`, // #65
  // apokryfy
  `${book0}(judy(ty|cie)|jdt)`,  // #66
  `${book0}(tob(i(a(sz[au]?)?)?)?|tb)`, // #67
  `${book1}(mac(h(a(b(ej(sk[aąi](ej)?)?)?)?)?)?|mch)`, // #68
  `${book2}(mac(h(a(b(ej(ska?)?)?)?)?)?|mch)`, // #69
  `${book0}(m[ąa]d(r(o([śs][cć]i?(ach|ami)?)?)?)?\\s+(Salomona)?|mdr)`, // #70
  `${book0}((m([aą]d(r(o[śs][ćc])?)?)?\\.?${spaces1})?sy(r(a(cha?)?)?)?|ekl(e(z(j(asty(ka?|ce)?)?)?)?)?|msr|syr)`, // #71
  `${book0}(ba(r(u(ch[au]?)?)?)?|br)` // #672
]

const parserRules = { locale, bookMatchers, order }
export default parserRules
