export const data = [
  {
    group: 'Números de livros', cases: [
      { input: '1 Rs 1:2', expectedOutput: [[10, 1, 2]] },
      { input: 'I Rs 1:2', expectedOutput: [[10, 1, 2]] },
      { input: '1º Rs 1:2', expectedOutput: [[10, 1, 2]] },
      { input: 'Primeiro Rs 1:2', expectedOutput: [[10, 1, 2]] },
      { input: '2 Rs 1:2', expectedOutput: [[11, 1, 2]] },
      { input: 'II Rs 1:2', expectedOutput: [[11, 1, 2]] },
      { input: '2º Rs 1:2', expectedOutput: [[11, 1, 2]] },
      { input: 'Segundo Rs 1:2', expectedOutput: [[11, 1, 2]] },
      { input: '1 Jo 1:2', expectedOutput: [[61, 1, 2]] },
      { input: 'I Jo 1:2', expectedOutput: [[61, 1, 2]] },
      { input: '1º Jo 1:2', expectedOutput: [[61, 1, 2]] },
      { input: 'Primeiro Jo 1:2', expectedOutput: [[61, 1, 2]] },
    ]
  },
  {
    group: 'Gênesis', cases: [
      { input: 'Gn 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Gen 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Gêne 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Genes 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Gênesis 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Livro de Gênesis 1:2', expectedOutput: [[0, 1, 2]] },
    ]
  },
  {
    group: 'Êxodo', cases: [
      { input: 'Êx 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'Ex 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'Exo 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'Êxod 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'Exodo 1:2', expectedOutput: [[1, 1, 2]] },
    ]
  },
  {
    group: 'Levítico', cases: [
      { input: 'Lv 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Le 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Lev 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Levit 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Levítico 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Levitico 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Levitico 1:2', expectedOutput: [[2, 1, 2]] },
    ]
  },
  {
    group: 'Números', cases: [
      { input: 'Nm 1:2', expectedOutput: [[3, 1, 2]] },
      { input: 'Num 1:2', expectedOutput: [[3, 1, 2]] },
      { input: 'Núm 1:2', expectedOutput: [[3, 1, 2]] },
      { input: 'Números 1:2', expectedOutput: [[3, 1, 2]] },
      { input: 'Numeros 1:2', expectedOutput: [[3, 1, 2]] },
    ]
  },
  {
    group: 'Deuteronômio', cases: [
      { input: 'Dt 1:2', expectedOutput: [[4, 1, 2]] },
      { input: 'Deut 1:2', expectedOutput: [[4, 1, 2]] },
      { input: 'Deutero 1:2', expectedOutput: [[4, 1, 2]] },
      { input: 'Deuteronômio 1:2', expectedOutput: [[4, 1, 2]] },
      { input: 'Deuteronomio 1:2', expectedOutput: [[4, 1, 2]] },
    ]
  },
  {
    group: 'Josué', cases: [
      { input: 'Js 1:2', expectedOutput: [[5, 1, 2]] },
      { input: 'Jos 1:2', expectedOutput: [[5, 1, 2]] },
      { input: 'Josué 1:2', expectedOutput: [[5, 1, 2]] },
      { input: 'Josue 1:2', expectedOutput: [[5, 1, 2]] },
    ]
  },
  {
    group: 'Juízes', cases: [
      { input: 'Jz 1:2', expectedOutput: [[6, 1, 2]] },
      { input: 'Juiz 1:2', expectedOutput: [[6, 1, 2]] },
      { input: 'Juízes 1:2', expectedOutput: [[6, 1, 2]] },
      { input: 'Juizes 1:2', expectedOutput: [[6, 1, 2]] },
    ]
  },
  {
    group: 'Rute', cases: [
      { input: 'Rt 1:2', expectedOutput: [[7, 1, 2]] },
      { input: 'Rut 1:2', expectedOutput: [[7, 1, 2]] },
      { input: 'Rute 1:2', expectedOutput: [[7, 1, 2]] },
    ]
  },
  {
    group: 'Samuel', cases: [
      { input: '1 Sm 1:2', expectedOutput: [[8, 1, 2]] },
      { input: '1 Sam 1:2', expectedOutput: [[8, 1, 2]] },
      { input: '1 Samuel 1:2', expectedOutput: [[8, 1, 2]] },
    ]
  },
  {
    group: 'Reis', cases: [
      { input: '1 Rs 1:2', expectedOutput: [[10, 1, 2]] },
      { input: '1 Rei 1:2', expectedOutput: [[10, 1, 2]] },
      { input: '1 Reis 1:2', expectedOutput: [[10, 1, 2]] },
    ]
  },
  {
    group: 'Crônicas', cases: [
      { input: '1 Cr 1:2', expectedOutput: [[12, 1, 2]] },
      { input: '1 Cro 1:2', expectedOutput: [[12, 1, 2]] },
      { input: '1 Crôn 1:2', expectedOutput: [[12, 1, 2]] },
      { input: '1 Crônica 1:2', expectedOutput: [[12, 1, 2]] },
      { input: '1 Crônicas 1:2', expectedOutput: [[12, 1, 2]] },
      { input: '1 Cronicas 1:2', expectedOutput: [[12, 1, 2]] },
    ]
  },
  {
    group: 'Esdras', cases: [
      { input: 'Es 1:2', expectedOutput: [[14, 1, 2]] },
      { input: 'Esd 1:2', expectedOutput: [[14, 1, 2]] },
      { input: 'Esdras 1:2', expectedOutput: [[14, 1, 2]] },
    ]
  },
  {
    group: 'Neemias', cases: [
      { input: 'Ne 1:2', expectedOutput: [[15, 1, 2]] },
      { input: 'Nee 1:2', expectedOutput: [[15, 1, 2]] },
      { input: 'Neem 1:2', expectedOutput: [[15, 1, 2]] },
      { input: 'Neemias 1:2', expectedOutput: [[15, 1, 2]] },
    ]
  },
  {
    group: 'Ester', cases: [
      { input: 'Est 1:2', expectedOutput: [[16, 1, 2]] },
      { input: 'Ester 1:2', expectedOutput: [[16, 1, 2]] },
    ]
  },
  {
    group: 'Jó', cases: [
      { input: 'Jó 1:2', expectedOutput: [[17, 1, 2]] },
    ]
  },
  {
    group: 'Salmos', cases: [
      { input: 'Sl 1:2', expectedOutput: [[18, 1, 2]] },
      { input: 'Sal 1:2', expectedOutput: [[18, 1, 2]] },
      { input: 'Salmo 1:2', expectedOutput: [[18, 1, 2]] },
      { input: 'Salmos 1:2', expectedOutput: [[18, 1, 2]] },
    ]
  },
  {
    group: 'Provérbios', cases: [
      { input: 'Pr 1:2', expectedOutput: [[19, 1, 2]] },
      { input: 'Pro 1:2', expectedOutput: [[19, 1, 2]] },
      { input: 'Prov 1:2', expectedOutput: [[19, 1, 2]] },
      { input: 'Provérbios 1:2', expectedOutput: [[19, 1, 2]] },
      { input: 'Proverbios 1:2', expectedOutput: [[19, 1, 2]] },
    ]
  },
  {
    group: 'Eclesiastes', cases: [
      { input: 'Ec 1:2', expectedOutput: [[20, 1, 2]] },
      { input: 'Ecl 1:2', expectedOutput: [[20, 1, 2]] },
      { input: 'Ecles 1:2', expectedOutput: [[20, 1, 2]] },
      { input: 'Eclesiastes 1:2', expectedOutput: [[20, 1, 2]] },
    ]
  },
  {
    group: 'Cânticos', cases: [
      { input: 'Cant 1:2', expectedOutput: [[21, 1, 2]] },
      { input: 'Cântico dos Cânticos 1:2', expectedOutput: [[21, 1, 2]] },
    ]
  },
  {
    group: 'Isaías', cases: [
      { input: 'Is 1:2', expectedOutput: [[22, 1, 2]] },
      { input: 'Isa 1:2', expectedOutput: [[22, 1, 2]] },
      { input: 'Isaías 1:2', expectedOutput: [[22, 1, 2]] },
      { input: 'Isaias 1:2', expectedOutput: [[22, 1, 2]] },
    ]
  },
  {
    group: 'Jeremias', cases: [
      { input: 'Jr 1:2', expectedOutput: [[23, 1, 2]] },
      { input: 'Jer 1:2', expectedOutput: [[23, 1, 2]] },
      { input: 'Jerem 1:2', expectedOutput: [[23, 1, 2]] },
      { input: 'Jeremias 1:2', expectedOutput: [[23, 1, 2]] },
    ]
  },
  {
    group: 'Lamentações', cases: [
      { input: 'Lm 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'La 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Lam 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Lament 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Lamentações 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Lamentacoes 1:2', expectedOutput: [[24, 1, 2]] },
    ]
  },
  {
    group: 'Ezequiel', cases: [
      { input: 'Ez 1:2', expectedOutput: [[25, 1, 2]] },
      { input: 'Eze 1:2', expectedOutput: [[25, 1, 2]] },
      { input: 'Ezeq 1:2', expectedOutput: [[25, 1, 2]] },
      { input: 'Ezequiel 1:2', expectedOutput: [[25, 1, 2]] },
    ]
  },
  {
    group: 'Daniel', cases: [
      { input: 'Dn 1:2', expectedOutput: [[26, 1, 2]] },
      { input: 'Dan 1:2', expectedOutput: [[26, 1, 2]] },
      { input: 'Daniel 1:2', expectedOutput: [[26, 1, 2]] },
    ]
  },
  {
    group: 'Oseias', cases: [
      { input: 'Os 1:2', expectedOutput: [[27, 1, 2]] },
      { input: 'Ose 1:2', expectedOutput: [[27, 1, 2]] },
      { input: 'Oséias 1:2', expectedOutput: [[27, 1, 2]] },
      { input: 'Oseias 1:2', expectedOutput: [[27, 1, 2]] },
    ]
  },
  {
    group: 'Joel', cases: [
      { input: 'Jl 1:2', expectedOutput: [[28, 1, 2]] },
      { input: 'Joel 1:2', expectedOutput: [[28, 1, 2]] },
    ]
  },
  {
    group: 'Amós', cases: [
      { input: 'Am 1:2', expectedOutput: [[29, 1, 2]] },
      { input: 'Amos 1:2', expectedOutput: [[29, 1, 2]] },
      { input: 'Amós 1:2', expectedOutput: [[29, 1, 2]] },
    ]
  },
  {
    group: 'Obadias', cases: [
      { input: 'Ob 1:2', expectedOutput: [[30, 1, 2]] },
      { input: 'Obd 1:2', expectedOutput: [[30, 1, 2]] },
      { input: 'Obad 1:2', expectedOutput: [[30, 1, 2]] },
      { input: 'Obadias 1:2', expectedOutput: [[30, 1, 2]] },
    ]
  },
  {
    group: 'Jonas', cases: [
      { input: 'Jon 1:2', expectedOutput: [[31, 1, 2]] },
      { input: 'Jonas 1:2', expectedOutput: [[31, 1, 2]] },
    ]
  },
  {
    group: 'Miqueias', cases: [
      { input: 'Mi 1:2', expectedOutput: [[32, 1, 2]] },
      { input: 'Miq 1:2', expectedOutput: [[32, 1, 2]] },
      { input: 'Miqueias 1:2', expectedOutput: [[32, 1, 2]] },
    ]
  },
  {
    group: 'Naum', cases: [
      { input: 'Na 1:2', expectedOutput: [[33, 1, 2]] },
      { input: 'Naum 1:2', expectedOutput: [[33, 1, 2]] },
    ]
  },
  {
    group: 'Habacuque', cases: [
      { input: 'Hc 1:2', expectedOutput: [[34, 1, 2]] },
      { input: 'Hab 1:2', expectedOutput: [[34, 1, 2]] },
      { input: 'Habac 1:2', expectedOutput: [[34, 1, 2]] },
      { input: 'Habacuque 1:2', expectedOutput: [[34, 1, 2]] },
    ]
  },
  {
    group: 'Sofonias', cases: [
      { input: 'So 1:2', expectedOutput: [[35, 1, 2]] },
      { input: 'Sof 1:2', expectedOutput: [[35, 1, 2]] },
      { input: 'Sofonias 1:2', expectedOutput: [[35, 1, 2]] },
    ]
  },
  {
    group: 'Ageu', cases: [
      { input: 'Ag 1:2', expectedOutput: [[36, 1, 2]] },
      { input: 'Ageu 1:2', expectedOutput: [[36, 1, 2]] },
    ]
  },
  {
    group: 'Zacarias', cases: [
      { input: 'Zc 1:2', expectedOutput: [[37, 1, 2]] },
      { input: 'Zac 1:2', expectedOutput: [[37, 1, 2]] },
      { input: 'Zacarias 1:2', expectedOutput: [[37, 1, 2]] },
    ]
  },
  {
    group: 'Malaquias', cases: [
      { input: 'Mal 1:2', expectedOutput: [[38, 1, 2]] },
      { input: 'Malaq 1:2', expectedOutput: [[38, 1, 2]] },
      { input: 'Malaquias 1:2', expectedOutput: [[38, 1, 2]] },
    ]
  },
  {
    group: 'Mateus', cases: [
      { input: 'Mt 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Mat 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Mateus 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Evangelho de Mateus 1:2', expectedOutput: [[39, 1, 2]] },
    ]
  },
  {
    group: 'Marcos', cases: [
      { input: 'Mc 1:2', expectedOutput: [[40, 1, 2]] },
      { input: 'Mar 1:2', expectedOutput: [[40, 1, 2]] },
      { input: 'Marcos 1:2', expectedOutput: [[40, 1, 2]] },
    ]
  },
  {
    group: 'Lucas', cases: [
      { input: 'Lc 1:2', expectedOutput: [[41, 1, 2]] },
      { input: 'Luc 1:2', expectedOutput: [[41, 1, 2]] },
      { input: 'Lucas 1:2', expectedOutput: [[41, 1, 2]] },
    ]
  },
  {
    group: 'João', cases: [
      { input: 'J 1:2', expectedOutput: [[42, 1, 2]] },
      { input: 'Jo 1:2', expectedOutput: [[42, 1, 2]] },
      { input: 'João 1:2', expectedOutput: [[42, 1, 2]] },
      { input: 'Joao 1:2', expectedOutput: [[42, 1, 2]] },
    ]
  },
  {
    group: 'Atos', cases: [
      { input: 'At 1:2', expectedOutput: [[43, 1, 2]] },
      { input: 'Atos 1:2', expectedOutput: [[43, 1, 2]] },
      { input: 'Actos 1:2', expectedOutput: [[43, 1, 2]] },
    ]
  },
  {
    group: 'Romanos', cases: [
      { input: 'Rm 1:2', expectedOutput: [[44, 1, 2]] },
      { input: 'Rom 1:2', expectedOutput: [[44, 1, 2]] },
      { input: 'Romanos 1:2', expectedOutput: [[44, 1, 2]] },
      { input: 'Carta aos Romanos 1:2', expectedOutput: [[44, 1, 2]] },
    ]
  },
  {
    group: 'Coríntios', cases: [
      { input: '1 Co 1:2', expectedOutput: [[45, 1, 2]] },
      { input: '1 Cor 1:2', expectedOutput: [[45, 1, 2]] },
      { input: '1 Coríntios 1:2', expectedOutput: [[45, 1, 2]] },
      { input: '1 Corintios 1:2', expectedOutput: [[45, 1, 2]] },
      { input: '2 Co 1:2', expectedOutput: [[46, 1, 2]] },
      { input: '2 Cor 1:2', expectedOutput: [[46, 1, 2]] },
      { input: '2 Coríntios 1:2', expectedOutput: [[46, 1, 2]] },
    ]
  },
  {
    group: 'Gálatas', cases: [
      { input: 'Gal 1:2', expectedOutput: [[47, 1, 2]] },
      { input: 'Gálatas 1:2', expectedOutput: [[47, 1, 2]] },
      { input: 'Galatas 1:2', expectedOutput: [[47, 1, 2]] },
    ]
  },
  {
    group: 'Efésios', cases: [
      { input: 'Ef 1:2', expectedOutput: [[48, 1, 2]] },
      { input: 'Efe 1:2', expectedOutput: [[48, 1, 2]] },
      { input: 'Efésios 1:2', expectedOutput: [[48, 1, 2]] },
      { input: 'Efesios 1:2', expectedOutput: [[48, 1, 2]] },
    ]
  },
  {
    group: 'Filipenses', cases: [
      { input: 'Flp 1:2', expectedOutput: [[49, 1, 2]] },
      { input: 'Fil 1:2', expectedOutput: [[49, 1, 2]] },
      { input: 'Filip 1:2', expectedOutput: [[49, 1, 2]] },
      { input: 'Filipenses 1:2', expectedOutput: [[49, 1, 2]] },
    ]
  },
  {
    group: 'Colossenses', cases: [
      { input: 'Col 1:2', expectedOutput: [[50, 1, 2]] },
      { input: 'Colos 1:2', expectedOutput: [[50, 1, 2]] },
      { input: 'Colossenses 1:2', expectedOutput: [[50, 1, 2]] },
    ]
  },
  {
    group: 'Tessalonicenses', cases: [
      { input: '1 Tess 1:2', expectedOutput: [[51, 1, 2]] },
      { input: '1 Tessalonicenses 1:2', expectedOutput: [[51, 1, 2]] },
      { input: '2 Tess 1:2', expectedOutput: [[52, 1, 2]] },
      { input: '2 Tessalonicenses 1:2', expectedOutput: [[52, 1, 2]] },
    ]
  },
  {
    group: 'Timóteo', cases: [
      { input: '1 Tm 1:2', expectedOutput: [[53, 1, 2]] },
      { input: '1 Tim 1:2', expectedOutput: [[53, 1, 2]] },
      { input: '1 Timóteo 1:2', expectedOutput: [[53, 1, 2]] },
      { input: '1 Timoteo 1:2', expectedOutput: [[53, 1, 2]] },
      { input: '2 Tm 1:2', expectedOutput: [[54, 1, 2]] },
      { input: '2 Tim 1:2', expectedOutput: [[54, 1, 2]] },
      { input: '2 Timóteo 1:2', expectedOutput: [[54, 1, 2]] },
    ]
  },
  {
    group: 'Tito', cases: [
      { input: 'Tit 1:2', expectedOutput: [[55, 1, 2]] },
      { input: 'Tito 1:2', expectedOutput: [[55, 1, 2]] },
    ]
  },
  {
    group: 'Filemom', cases: [
      { input: 'File 1:2', expectedOutput: [[56, 1, 2]] },
      { input: 'Filem 1:2', expectedOutput: [[56, 1, 2]] },
      { input: 'Filemon 1:2', expectedOutput: [[56, 1, 2]] },
    ]
  },
  {
    group: 'Hebreus', cases: [
      { input: 'Hb 1:2', expectedOutput: [[57, 1, 2]] },
      { input: 'Heb 1:2', expectedOutput: [[57, 1, 2]] },
      { input: 'Hebreus 1:2', expectedOutput: [[57, 1, 2]] },
    ]
  },
  {
    group: 'Tiago', cases: [
      { input: 'Tg 1:2', expectedOutput: [[58, 1, 2]] },
      { input: 'Tiago 1:2', expectedOutput: [[58, 1, 2]] },
    ]
  },
  {
    group: 'Pedro', cases: [
      { input: '1 Pe 1:2', expectedOutput: [[59, 1, 2]] },
      { input: '1 Ped 1:2', expectedOutput: [[59, 1, 2]] },
      { input: '1 Pedro 1:2', expectedOutput: [[59, 1, 2]] },
      { input: '2 Pe 1:2', expectedOutput: [[60, 1, 2]] },
      { input: '2 Ped 1:2', expectedOutput: [[60, 1, 2]] },
      { input: '2 Pedro 1:2', expectedOutput: [[60, 1, 2]] },
    ]
  },
  {
    group: 'João', cases: [
      { input: '1 Jo 1:2', expectedOutput: [[61, 1, 2]] },
      { input: '1 João 1:2', expectedOutput: [[61, 1, 2]] },
      { input: '2 Jo 1:2', expectedOutput: [[62, 1, 2]] },
      { input: '2 João 1:2', expectedOutput: [[62, 1, 2]] },
      { input: '3 Jo 1:2', expectedOutput: [[63, 1, 2]] },
      { input: '3 João 1:2', expectedOutput: [[63, 1, 2]] },
    ]
  },
  {
    group: 'Judas', cases: [
      { input: 'Jds 1:2', expectedOutput: [[64, 1, 2]] },
      { input: 'Jud 1:2', expectedOutput: [[64, 1, 2]] },
      { input: 'Judas 1:2', expectedOutput: [[64, 1, 2]] },
    ]
  },
  {
    group: 'Apocalipse', cases: [
      { input: 'Ap 1:2', expectedOutput: [[65, 1, 2]] },
      { input: 'Apoc 1:2', expectedOutput: [[65, 1, 2]] },
      { input: 'Apocal 1:2', expectedOutput: [[65, 1, 2]] },
      { input: 'Apocalip 1:2', expectedOutput: [[65, 1, 2]] },
      { input: 'Apocalipse 1:2', expectedOutput: [[65, 1, 2]] },
    ]
  },
  {
    group: 'Judite', cases: [
      { input: 'Judite 1:2', expectedOutput: [[66, 1, 2]] },
      { input: 'Jdt 1:2', expectedOutput: [[66, 1, 2]] },
    ]
  },
  {
    group: 'Tobias', cases: [
      { input: 'Tobias 1:2', expectedOutput: [[67, 1, 2]] },
      { input: 'Tob 1:2', expectedOutput: [[67, 1, 2]] },
    ]
  },
  {
    group: '1 Macabeus', cases: [
      { input: '1 Macabeus 1:2', expectedOutput: [[68, 1, 2]] },
      { input: '1 Macabeu 1:2', expectedOutput: [[68, 1, 2]] },
      { input: '1 Macab 1:2', expectedOutput: [[68, 1, 2]] },
      { input: '1 Mac 1:2', expectedOutput: [[68, 1, 2]] },
    ]
  },
  {
    group: 'Sabedoria', cases: [
      { input: 'Sabedoria 1:2', expectedOutput: [[70, 1, 2]] },
      { input: 'Sab 1:2', expectedOutput: [[70, 1, 2]] },
      { input: 'Sb 1:2', expectedOutput: [[70, 1, 2]] },
    ]
  },
  {
    group: 'Eclesiástico', cases: [
      { input: 'Siracido 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'Sir 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'Si 1:2', expectedOutput: [[71, 1, 2]] },
    ]
  },
  {
    group: 'Baruc', cases: [
      { input: 'Baruc 1:2', expectedOutput: [[72, 1, 2]] },
      { input: 'Bar 1:2', expectedOutput: [[72, 1, 2]] },
      { input: 'Ba 1:2', expectedOutput: [[72, 1, 2]] },
    ]
  }
]  
