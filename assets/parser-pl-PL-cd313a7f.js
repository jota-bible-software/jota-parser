const y="pl",s="\\s*",$="\\s+",k=`(([śs]w(iętego)?|ap(ost(o(łl)a)?)?)\\.?${$}?)?`,e=`\\.?${s}(ks(\\.|(i[ęe](g[aąięe]|dze)))?${$})?`,a=e,t=`(1|I|pierwsz[aąey]j?)${e}`,n=`(2|II|drug[aąi](ej)?)${e}`,g=`(3|III|trzeci[aąe]j?)${e}`,I=`(4|IV|czwart[aąe]j?)${e}`,f=`(5|V|pi[ąa]t[aąe]j?)${e}`,m=`(ew(an(g(eli(a|i|ią|ię))?)?)?\\.?${$}?${k})?`,l=`\\.?${s}(li(s(tu?)?|[śs]cie|tem)?)?${s}(${k}(paw[łl]a${$})?)?(do${$})?`,o=l,i=`(1|I|pierwsz(ym?|ego|emu))${l}`,c=`(2|II|drugi(m|ego|emu)?)${l}`,W=`(3|III|trzeci(m|ego|emu)?)${l}`,r="m(o([jy]([żz](esz(a|ow(a|ą|ej?))?)?)?)?)?",j="(sa(m(u(ela?)?)?)?(owa)?|sm)",w="(kr[óo]l(ew(sk(a|ą|iej)?)?|[oó]w)?|krl)",h="(kro(n(ik)?)?|krn)",p="(ko(r(y(n(t(ian)?)?)?)?)?|korynt[oó]w)",u="(ty(m(o(t(eusza?)?)?)?)?|tm)",b="te(s(a(l(oniczan|onicens[oó]w)?)?)?)?",d="(pi(o(t(ra?)?)?)?|pt?r?)",z="(j(ana?)?|jn)",V=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,43],x=[`(${t}${r}|(rodz(aju?)?)|rdz)`,`(${n}${r}|(wy(j([śs](c(ia)?)?)?)?)|wj)`,`(${g}${r}|(kap([łl](a[ńn](sk(a|ą|iej)?)?)?)?)|kp[lł])`,`(${I}${r}|(li(czb?)?)|lb)`,`(${f}${r}|pow(t([oó]rzonego)?)?.?(${$}prawa)?|pwt)`,`${a}(joz(u(e(go)?)?)?|jz)`,`${a}(s[eę](d(z(i[oó]w)?)?)?|sdz)`,`${a}(rut?(hy?)?|rt)`,`${t}${j}`,`${n}${j}`,`${t}${w}`,`${n}${w}`,`${t}${h}`,`${n}${h}`,`${a}ezd(r(a(sza?)?)?)?`,`${a}(ne(h(e(m(iasza?)?)?)?)?|nhm)`,`${a}es(t(e(ry?)?)?)?`,`${a}(hi(o(ba?)?)?|joba?|jb|hb)`,`${a}ps(a(l(m(u|em|ie|owi|y|[óo]w|ami)?)?)?)?`,`${a}(pr(z(y(p(ow(ie[śs]ci)?)?|s([łl][óo]w)?)?)?)?.?s*(salomona)?)|(salomona?)`,`${a}(ka(z(n(odziei)?)?)?\\.?${s}(salomona)?|kzn?|koh(e(l(eta?)?)?)?|eklezjastesa)`,`${a}(pie[śs][ńn]${$}(nad${$}pieśniami|salomona)|pnp)`,`${a}iz(a(j(asza?)?)?)?`,`${a}(je(r(em(iasza?)?)?)?|jrm?)`,`${a}(la(m(en(t(acj[eia](mi)?)?)?)?)?|tr(e(n(y|ach|ami|om|[óo]w)?)?)?)\\s*(jeremiasza?)?`,`${a}(ez(e(ch(iela?)?)?)?|ezch)`,`${a}(da(n(iela?)?)?|dn)`,`${a}oz(e(a(sza?)?)?)?`,`${a}(joe(la?)?|jl)`,`${a}am(o(sa?)?)?`,`${a}ab(d(i(asza?)?)?)?`,`${a}jon(a(sza?)?)?`,`${a}mi(ch(easza?)?)?`,`${a}(na(h(uma?)?)?|proroctwo nahumowe|nach)`,`${a}(ha(b(ak(uka?)?)?)?|proroctwo abakukowe|abakuka?)`,`${a}(so(f(o(n(iasza?)?)?)?)?|proroctwo sofoniaszowe)`,`${a}ag(g(eusza?)?)?`,`${a}(za(ch(ar(iasza?)?)?)?|zch)`,`${a}(ma(l(a(ch(iasza?)?)?)?)?|ml)`,`${m}(mat(eusza?)?|mt)`,`${m}(mar(ka?)?|mr|mk)`,`${m}([łl]u(k(asza?)?)?|[łl]k)`,`${m}${z}`,`${a}dz(iej(e|ach))?\\.?${s}(ap(o(s(t(olski(e|ch))?)?)?)?)?`,`${o}rz(y(m(ian)?)?)?|rzm`,`${i}${p}`,`${c}${p}`,`${o}ga(l(a(t[óo]w|cjan)?)?)?|glt?`,`${o}ef(e(z(jan|[oó]w)?)?)?|efz`,`${o}(fili(p(ian|ens[oó]w)?)?|flp?)`,`${o}kol(o(s(an|ens[oó]w)?)?)?`,`${i}${b}`,`${c}${b}`,`${i}${u}`,`${c}${u}`,`${o}(tyt(u(sa?)?)?|tt)`,`${o}(fi(l(e(m(ona?)?)?)?)?|flm)`,`${o}(he(b(r(a(j(cz(yk[óo]w)?)?)?)?)?)?|hbr|[zż]yd([oó]w)?)`,`${o}(jak(u(ba?)?)?|jkb?)`,`${i}${d}`,`${c}${d}`,`${i}${z}`,`${c}${z}`,`${W}${z}`,`${o}(ju(dy?)?|jd)`,`${a}(ob(j(aw(ieni[ea])?)?)?|ap(o(k(al(ips[ay])?)?)?)?)(\\.?${s}${k}jana)?`,`${a}(judy(ty|cie)|jdt)`,`${a}(tob(i(a(sz[au]?)?)?)?|tb)`,`${t}(mac(h(a(b(ej(sk[aąi](ej)?)?)?)?)?)?|mch)`,`${n}(mac(h(a(b(ej(ska?)?)?)?)?)?|mch)`,`${a}(m[ąa]d(r(o([śs][cć]i?(ach|ami)?)?)?)?\\s+(Salomona)?|mdr)`,`${a}((m([aą]d(r(o[śs][ćc])?)?)?\\.?${$})?sy(r(a(cha?)?)?)?|ekl(e(z(j(asty(ka?|ce)?)?)?)?)?|msr|syr)`,`${a}(ba(r(u(ch[au]?)?)?)?|br)`],M={locale:y,bookMatchers:x,order:V};export{M as default};
