const k="pt-BR",e="\\s*",o="\\s+",f=`((s(anto|ão)\\.?|ap(óstolo)?)\\.?${o}?)?`,m=`(livro${o}de${o})?`,s=m,c=`(1[ªºa]?|I|primeir.)${e}${m}`,n=`(2[ªºa]?|II|segund.)${e}${m}`,i=`(ev(angelho)?${o}?(segundo|de)${o}${f})?`,l=`(carta|ep[íi]stola)?${e}(${f}(paulo${o})?)?(aos?${o})?`,$=l,a=`(1[ªºa]?|I|primeir.)${e}${l}`,t=`(2[ªºa]?|II|segund.)${e}${l}`,z=`(3[ªºa]?|III|terceir.)${e}${l}`,u="(sa(m(u(el)?)?)?|sm)",d="(re(is?)?|rs)",b="(cr([ôo](n(i(cas?)?)?)?)?)",p="co(r([íi](n(t(ios?)?)?)?)?)?",j="(ti(m([óo](t(eo)?)?)?)?|tm)",g="te(s(s(a(l(on(i(censes?)?)?)?)?)?)?)?",h="(p(e(d(ro)?)?)?)",r="(j(o([ãa]o)?)?)",I="mac(ab(eus?)?)?",v=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73],q=[`${s}(g[êe](n(e(s(is)?)?)?)?|gn)`,`${s}[êe]x(o(d(o)?)?)?`,`${s}(le(v([íi](t(ico)?)?)?)?|lv)`,`${s}(n[úu](m(eros?)?)?|nm)`,`${s}(deu(t(e(r(o(n([ôo](m(io)?)?)?)?)?)?)?)?|dt)`,`${s}(jos(u([ée])?)?|js)`,`${s}(ju[íi](z(es)?)?|jz)`,`${s}(rute?|rt)`,`${c}${u}`,`${n}${u}`,`${c}${d}`,`${n}${d}`,`${c}${b}`,`${n}${b}`,`${s}e(s(d(ras?)?)?)?`,`${s}(ne(e(m(ias?)?)?)?|ne)`,`${s}est(er?)?`,`${s}jó`,`${s}(s(al(mos?)?)?|sl)`,`${s}pr(o(v([ée](r(b(ios?)?)?)?)?)?)?`,`${s}ec(l(e(s(iastes?)?)?)?)?`,`${s}(c[âa]nt(ico dos c[âa]nticos)?|cnt)`,`${s}is(a([íi](as?)?)?)?`,`${s}(je(r(e(m(ias?)?)?)?)?|jr)`,`${s}(la(m(en(t(a[çc][õo]es?)?)?)?)?|lm)`,`${s}(eze(q(u(iel)?)?)?|ez)`,`${s}(da(n(iel)?)?|dn)`,`${s}os([ée](i(as?)?)?)?`,`${s}(joel?|jl)`,`${s}am([óo]s?)?`,`${s}(ob(a(d(ias?)?)?)?|obd)`,`${s}jon(as?)?`,`${s}mi(q(u([ée](i(as?)?)?)?)?)?`,`${s}na(u(m)?)?`,`${s}(ha(b(a(c(u(que)?)?)?)?)?|hc)`,`${s}so(f(o(n(ias?)?)?)?)?`,`${s}(ag(eu)?|ag)`,`${s}(za(c(a(r(ias?)?)?)?)?|zc)`,`${s}ma(l(a(q(u(ias?)?)?)?)?)?`,`${i}(mat(eus)?|mt)`,`${i}(mar(cos)?|mc|mr)`,`${i}(luc(as)?|lc)`,`${i}${r}`,`${s}ac?t(os?)?`,`${$}(ro(m(anos?)?)?|rm)`,`${a}${p}`,`${t}${p}`,`${$}g[áa](l(a(t(as?)?)?)?)?`,`${$}ef([ée](s(ios?)?)?)?`,`${$}(fi(l(i(p(enses?)?)?)?)?|flp)`,`${$}col(o(ss?(enses?)?)?)?`,`${a}${g}`,`${t}${g}`,`${a}${j}`,`${t}${j}`,`${$}ti(t(o)?)?`,`${$}(file(m(on)?)?|flm)`,`${$}(he(b(r(eus?)?)?)?|hb)`,`${$}ti(ago)?|tg`,`${a}${h}`,`${t}${h}`,`${a}${r}`,`${t}${r}`,`${z}${r}`,`${$}(ju(d(as?)?)?|jds?)`,`${s}ap(o(c(a(l(i(p(se)?)?)?)?)?)?)?`,`${s}(judite?|jdt)`,`${s}(tob(ias?)?|tb)`,`${c}${I}`,`${n}${I}`,`${s}(sab(e(d(o(r(ia)?)?)?)?)?|sb)`,`${s}(si(r([áa](c(ido)?)?)?)?|eclo)`,`${s}(ba(r(uc?)?)?|br)`],W={locale:k,bookMatchers:q,order:v};export{W as default};