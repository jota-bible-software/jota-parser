export const data = [
  {
    group: 'Chapter and verses', cases: [
      { input: 'Gen 1:2', expectedOutput: [[0, 1, 2]] },
      { input: '1J 1:2', expectedOutput: [[61, 1, 2]] },
      { input: 'Gen 2:3a', expectedOutput: [[0, 2, 3]] },
      { input: 'Gen 2:3-5', expectedOutput: [[0, 2, 3, 5]] },
      { input: 'Gen 2:3,5', expectedOutput: [[0, 2, 3], [0, 2, 5]] },
      { input: 'Gen 2,3-5', expectedOutput: [[0, 2, 3, 5]] },
      { input: 'Gen 2,3;5', expectedOutput: [[0, 2, 3], [0, 2, 5]] },
      { input: 'Gen 2,3.5', expectedOutput: [[0, 2, 3], [0, 2, 5]] },
      { input: 'aa Gen 2,3 Exo 4:5 bb ', expectedOutput: [[0, 2, 3], [1, 4, 5]] },
      { input: 'Gen 2:3-5, 7-8', expectedOutput: [[0, 2, 3, 5], [0, 2, 7, 8]] },
      { input: 'Gen. 1;2-3', expectedOutput: [[0, 1, 2, 3]] },
      { input: 'John 1:2, 1 John 1:2', expectedOutput: [[42, 1, 2], [61, 1, 2]] },
      { input: '1 John 1:2, John 1:2', expectedOutput: [[61, 1, 2], [42, 1, 2]] },
      { input: 'Eph 3.20 ', expectedOutput: [[48, 3, 20]] },
      { input: 'Gen 2,3,4', expectedOutput: [[0, 2, 3], [0, 2, 4]] },
      { input: 'Gen 2:3:4', expectedOutput: [[0, 2, 3], [0, 2, 4]] },
    ]
  },
  {
    group: 'Case insensitive', cases: [
      { input: 'jos 1:2', expectedOutput: [[5, 1, 2]] },
    ]
  },
  {
    group: 'Genesis', cases: [
      { input: 'Gen 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Gene 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Genes 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Genesis 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Book of Genesis 1:2', expectedOutput: [[0, 1, 2]] },
    ]
  },
  {
    group: 'Exodus', cases: [
      { input: 'Ex 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'Exo 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'Exod 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'Exodus 1:2', expectedOutput: [[1, 1, 2]] },
    ]
  },
  {
    group: 'Leviticus', cases: [
      { input: 'Lev 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Levi 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Levit 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Leviticus 1:2', expectedOutput: [[2, 1, 2]] },
    ]
  },
  {
    group: 'Numbers', cases: [
      { input: 'Num 1:2', expectedOutput: [[3, 1, 2]] },
      { input: 'Numb 1:2', expectedOutput: [[3, 1, 2]] },
      { input: 'Number 1:2', expectedOutput: [[3, 1, 2]] },
      { input: 'Numbers 1:2', expectedOutput: [[3, 1, 2]] },
    ]
  },
  {
    group: 'Deuteronomy', cases: [
      { input: 'Deu 1:2', expectedOutput: [[4, 1, 2]] },
      { input: 'Deut 1:2', expectedOutput: [[4, 1, 2]] },
      { input: 'Deuter 1:2', expectedOutput: [[4, 1, 2]] },
      { input: 'Deuteronomy 1:2', expectedOutput: [[4, 1, 2]] },
    ]
  },
  {
    group: 'Joshua', cases: [
      { input: 'Jos 1:2', expectedOutput: [[5, 1, 2]] },
      { input: 'Josh 1:2', expectedOutput: [[5, 1, 2]] },
      { input: 'Joshua 1:2', expectedOutput: [[5, 1, 2]] },
    ]
  },
  {
    group: 'Judges', cases: [
      { input: 'Jdg 1:2', expectedOutput: [[6, 1, 2]] },
      { input: 'Judg 1:2', expectedOutput: [[6, 1, 2]] },
      { input: 'Judges 1:2', expectedOutput: [[6, 1, 2]] },
    ]
  },
  {
    group: 'Ruth', cases: [
      { input: 'Ruth 1:2', expectedOutput: [[7, 1, 2]] },
      { input: 'Rut 1:2', expectedOutput: [[7, 1, 2]] },
      { input: 'Rt 1:2', expectedOutput: [[7, 1, 2]] },
    ]
  },
  {
    group: 'Samuel', cases: [
      { input: '1 Samuel 1:2', expectedOutput: [[8, 1, 2]] },
      { input: '1 Samu 1:2', expectedOutput: [[8, 1, 2]] },
      { input: '1 Sam 1:2', expectedOutput: [[8, 1, 2]] },
    ]
  },
  {
    group: 'Kings', cases: [
      { input: '1 Kings 1:2', expectedOutput: [[10, 1, 2]] },
      { input: '1 King 1:2', expectedOutput: [[10, 1, 2]] },
      { input: '1 Kgs 1:2', expectedOutput: [[10, 1, 2]] },
    ]
  },
  {
    group: 'Chronicles', cases: [
      { input: '1 Chr 1:2', expectedOutput: [[12, 1, 2]] },
      { input: '1 Chro 1:2', expectedOutput: [[12, 1, 2]] },
      { input: '1 Chron 1:2', expectedOutput: [[12, 1, 2]] },
      { input: '1 Chronic 1:2', expectedOutput: [[12, 1, 2]] },
      { input: '1 Chronicle 1:2', expectedOutput: [[12, 1, 2]] },
      { input: '1 Chronicles 1:2', expectedOutput: [[12, 1, 2]] },
      { input: '1 Chn 1:2', expectedOutput: [[12, 1, 2]] },
    ]
  },
  {
    group: 'Ezra', cases: [
      { input: 'Ezra 1:2', expectedOutput: [[14, 1, 2]] },
      { input: 'Ezr 1:2', expectedOutput: [[14, 1, 2]] },
    ]
  },
  {
    group: 'Nehemiah', cases: [
      { input: 'Neh 1:2', expectedOutput: [[15, 1, 2]] },
      { input: 'Nehe 1:2', expectedOutput: [[15, 1, 2]] },
      { input: 'Nehem 1:2', expectedOutput: [[15, 1, 2]] },
      { input: 'Nehemiah 1:2', expectedOutput: [[15, 1, 2]] },
    ]
  },
  {
    group: 'Esther', cases: [
      { input: 'Est 1:2', expectedOutput: [[16, 1, 2]] },
      { input: 'Esth 1:2', expectedOutput: [[16, 1, 2]] },
      { input: 'Esther 1:2', expectedOutput: [[16, 1, 2]] },
    ]
  },
  {
    group: 'Job', cases: [
      { input: 'Job 1:2', expectedOutput: [[17, 1, 2]] },
    ]
  },
  {
    group: 'Psalm', cases: [
      { input: 'Ps 1:2', expectedOutput: [[18, 1, 2]] },
      { input: 'Psa 1:2', expectedOutput: [[18, 1, 2]] },
      { input: 'Psalm 1:2', expectedOutput: [[18, 1, 2]] },
      { input: 'Psalms 1:2', expectedOutput: [[18, 1, 2]] },
    ]
  },
  {
    group: 'Proverbs', cases: [
      { input: 'Pro 1:2', expectedOutput: [[19, 1, 2]] },
      { input: 'Prov 1:2', expectedOutput: [[19, 1, 2]] },
      { input: 'Proverb 1:2', expectedOutput: [[19, 1, 2]] },
      { input: 'Proverbs 1:2', expectedOutput: [[19, 1, 2]] },
    ]
  },
  {
    group: 'Ecclesiastes', cases: [
      { input: 'Ec 1:2', expectedOutput: [[20, 1, 2]] },
      { input: 'Ecc 1:2', expectedOutput: [[20, 1, 2]] },
      { input: 'Eccl 1:2', expectedOutput: [[20, 1, 2]] },
      { input: 'Eccles 1:2', expectedOutput: [[20, 1, 2]] },
      { input: 'Ecclesiastes 1:2', expectedOutput: [[20, 1, 2]] },
    ]
  },
  {
    group: 'Song of Solomon', cases: [
      { input: 'Song 1:2', expectedOutput: [[21, 1, 2]] },
      { input: 'Song of Solomon 1:2', expectedOutput: [[21, 1, 2]] },
    ]
  },
  {
    group: 'Isaiah', cases: [
      { input: 'Is 1:2', expectedOutput: [[22, 1, 2]] },
      { input: 'Isa 1:2', expectedOutput: [[22, 1, 2]] },
      { input: 'Isaiah 1:2', expectedOutput: [[22, 1, 2]] },
    ]
  },
  {
    group: 'Jeremiah', cases: [
      { input: 'Jer 1:2', expectedOutput: [[23, 1, 2]] },
      { input: 'Jerem 1:2', expectedOutput: [[23, 1, 2]] },
      { input: 'Jeremiah 1:2', expectedOutput: [[23, 1, 2]] },
    ]
  },
  {
    group: 'Lamentations', cases: [
      { input: 'Lam 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Lamen 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Lament 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Lamentation 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Lamentations 1:2', expectedOutput: [[24, 1, 2]] },
    ]
  },
  {
    group: 'Ezekiel', cases: [
      { input: 'Eze 1:2', expectedOutput: [[25, 1, 2]] },
      { input: 'Ezek 1:2', expectedOutput: [[25, 1, 2]] },
      { input: 'Ezekiel 1:2', expectedOutput: [[25, 1, 2]] },
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
    group: 'Hosea', cases: [
      { input: 'Hos 1:2', expectedOutput: [[27, 1, 2]] },
      { input: 'Hose 1:2', expectedOutput: [[27, 1, 2]] },
      { input: 'Hosea 1:2', expectedOutput: [[27, 1, 2]] },
    ]
  },
  {
    group: 'Joel', cases: [
      { input: 'Joe 1:2', expectedOutput: [[28, 1, 2]] },
      { input: 'Joel 1:2', expectedOutput: [[28, 1, 2]] },
    ]
  },
  {
    group: 'Amos', cases: [
      { input: 'Am 1:2', expectedOutput: [[29, 1, 2]] },
      { input: 'Amo 1:2', expectedOutput: [[29, 1, 2]] },
      { input: 'Amos 1:2', expectedOutput: [[29, 1, 2]] },
    ]
  },
  {
    group: 'Obadiah', cases: [
      { input: 'Oba 1:2', expectedOutput: [[30, 1, 2]] },
      { input: 'Obad 1:2', expectedOutput: [[30, 1, 2]] },
      { input: 'Obadiah 1:2', expectedOutput: [[30, 1, 2]] },
    ]
  },
  {
    group: 'Jonah', cases: [
      { input: 'Jon 1:2', expectedOutput: [[31, 1, 2]] },
      { input: 'Jona 1:2', expectedOutput: [[31, 1, 2]] },
      { input: 'Jonah 1:2', expectedOutput: [[31, 1, 2]] },
    ]
  },
  {
    group: 'Micah', cases: [
      { input: 'Mi 1:2', expectedOutput: [[32, 1, 2]] },
      { input: 'Mic 1:2', expectedOutput: [[32, 1, 2]] },
      { input: 'Micah 1:2', expectedOutput: [[32, 1, 2]] },
    ]
  },
  {
    group: 'Nahum', cases: [
      { input: 'Na 1:2', expectedOutput: [[33, 1, 2]] },
      { input: 'Nah 1:2', expectedOutput: [[33, 1, 2]] },
      { input: 'Nahum 1:2', expectedOutput: [[33, 1, 2]] },
    ]
  },
  {
    group: 'Habakuk', cases: [
      { input: 'Ha 1:2', expectedOutput: [[34, 1, 2]] },
      { input: 'Hab 1:2', expectedOutput: [[34, 1, 2]] },
      { input: 'Habakuk 1:2', expectedOutput: [[34, 1, 2]] },
      { input: 'Habakkuk 1:2', expectedOutput: [[34, 1, 2]] },
      { input: 'Hb 1:2', expectedOutput: [[34, 1, 2]] },
    ]
  },
  {
    group: 'Zephaniah', cases: [
      { input: 'Zep 1:2', expectedOutput: [[35, 1, 2]] },
      { input: 'Zeph 1:2', expectedOutput: [[35, 1, 2]] },
      { input: 'Zephan 1:2', expectedOutput: [[35, 1, 2]] },
      { input: 'Zephaniah 1:2', expectedOutput: [[35, 1, 2]] },
    ]
  },
  {
    group: 'Haggai', cases: [
      { input: 'Hag 1:2', expectedOutput: [[36, 1, 2]] },
      { input: 'Hagg 1:2', expectedOutput: [[36, 1, 2]] },
      { input: 'Haggai 1:2', expectedOutput: [[36, 1, 2]] },
      { input: 'Hg 1:2', expectedOutput: [[36, 1, 2]] },
    ]
  },
  {
    group: 'Zechariah', cases: [
      { input: 'Ze 1:2', expectedOutput: [[37, 1, 2]] },
      { input: 'Zech 1:2', expectedOutput: [[37, 1, 2]] },
      { input: 'Zechar 1:2', expectedOutput: [[37, 1, 2]] },
      { input: 'Zechariah 1:2', expectedOutput: [[37, 1, 2]] },
      { input: 'Zch 1:2', expectedOutput: [[37, 1, 2]] },
    ]
  },
  {
    group: 'Malachi', cases: [
      { input: 'Mal 1:2', expectedOutput: [[38, 1, 2]] },
      { input: 'Mala 1:2', expectedOutput: [[38, 1, 2]] },
      { input: 'Malach 1:2', expectedOutput: [[38, 1, 2]] },
      { input: 'Malachi 1:2', expectedOutput: [[38, 1, 2]] },
    ]
  },
  {
    group: 'Matthew', cases: [
      { input: 'Mt 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Mat 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Matt 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Matthew 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Gospel of Matthew 1:2', expectedOutput: [[39, 1, 2]] },
    ]
  },
  {
    group: 'Mark', cases: [
      { input: 'Mk 1:2', expectedOutput: [[40, 1, 2]] },
      { input: 'Mar 1:2', expectedOutput: [[40, 1, 2]] },
      { input: 'Mark 1:2', expectedOutput: [[40, 1, 2]] },
    ]
  },
  {
    group: 'Luke', cases: [
      { input: 'Lk 1:2', expectedOutput: [[41, 1, 2]] },
      { input: 'Luk 1:2', expectedOutput: [[41, 1, 2]] },
      { input: 'Luke 1:2', expectedOutput: [[41, 1, 2]] },
    ]
  },
  {
    group: 'John', cases: [
      { input: 'J 1:2', expectedOutput: [[42, 1, 2]] },
      { input: 'Jn 1:2', expectedOutput: [[42, 1, 2]] },
      { input: 'Joh 1:2', expectedOutput: [[42, 1, 2]] },
      { input: 'John 1:2', expectedOutput: [[42, 1, 2]] },
    ]
  },
  {
    group: 'Acts', cases: [
      { input: 'Act 1:2', expectedOutput: [[43, 1, 2]] },
      { input: 'Acts 1:2', expectedOutput: [[43, 1, 2]] },
    ]
  },
  {
    group: 'Rzymian', cases: [
      { input: 'Ro 1:2', expectedOutput: [[44, 1, 2]] },
      { input: 'Rom 1:2', expectedOutput: [[44, 1, 2]] },
      { input: 'Romans 1:2', expectedOutput: [[44, 1, 2]] },
      { input: 'Letter to Romans 1:2', expectedOutput: [[44, 1, 2]] },
      { input: 'Epistle to Romans 1:2', expectedOutput: [[44, 1, 2]] },
    ]
  },
  {
    group: '1 Corinthians', cases: [
      { input: '1 Cor 1:2', expectedOutput: [[45, 1, 2]] },
      { input: '1 Corin 1:2', expectedOutput: [[45, 1, 2]] },
      { input: '1 Corinth 1:2', expectedOutput: [[45, 1, 2]] },
      { input: '1 Corinthian 1:2', expectedOutput: [[45, 1, 2]] },
      { input: '1 Corinthians 1:2', expectedOutput: [[45, 1, 2]] },
    ]
  },
  {
    group: '2 Corinthians', cases: [
      { input: '2 Cor 1:2', expectedOutput: [[46, 1, 2]] },
      { input: '2 Corinth 1:2', expectedOutput: [[46, 1, 2]] },
      { input: '2 Corinthian 1:2', expectedOutput: [[46, 1, 2]] },
      { input: '2 Corinthians 1:2', expectedOutput: [[46, 1, 2]] },
      { input: 'II Letter Corinthians 1:2', expectedOutput: [[46, 1, 2]] },
    ]
  },
  {
    group: 'Galatians', cases: [
      { input: 'Ga 1:2', expectedOutput: [[47, 1, 2]] },
      { input: 'Gal 1:2', expectedOutput: [[47, 1, 2]] },
      { input: 'Gala 1:2', expectedOutput: [[47, 1, 2]] },
      { input: 'Galat 1:2', expectedOutput: [[47, 1, 2]] },
      { input: 'Galatian 1:2', expectedOutput: [[47, 1, 2]] },
      { input: 'Galatians 1:2', expectedOutput: [[47, 1, 2]] },
    ]
  },
  {
    group: 'Ephesians', cases: [
      { input: 'Eph 1:2', expectedOutput: [[48, 1, 2]] },
      { input: 'Ephe 1:2', expectedOutput: [[48, 1, 2]] },
      { input: 'Ephes 1:2', expectedOutput: [[48, 1, 2]] },
      { input: 'Ephesian 1:2', expectedOutput: [[48, 1, 2]] },
      { input: 'Ephesians 1:2', expectedOutput: [[48, 1, 2]] },
    ]
  },
  {
    group: 'Philippians', cases: [
      { input: 'Phi 1:2', expectedOutput: [[49, 1, 2]] },
      { input: 'Phil 1:2', expectedOutput: [[49, 1, 2]] },
      { input: 'Philip 1:2', expectedOutput: [[49, 1, 2]] },
      { input: 'Philipp 1:2', expectedOutput: [[49, 1, 2]] },
      { input: 'Philippian 1:2', expectedOutput: [[49, 1, 2]] },
      { input: 'Philippians 1:2', expectedOutput: [[49, 1, 2]] },
    ]
  },
  {
    group: 'Colossians', cases: [
      { input: 'Col 1:2', expectedOutput: [[50, 1, 2]] },
      { input: 'Colos 1:2', expectedOutput: [[50, 1, 2]] },
      { input: 'Coloss 1:2', expectedOutput: [[50, 1, 2]] },
      { input: 'Colossian 1:2', expectedOutput: [[50, 1, 2]] },
      { input: 'Colossians 1:2', expectedOutput: [[50, 1, 2]] },
    ]
  },
  {
    group: '1 Thessalonians', cases: [
      { input: '1 Thes 1:2', expectedOutput: [[51, 1, 2]] },
      { input: '1 Thess 1:2', expectedOutput: [[51, 1, 2]] },
      { input: '1 Thessal 1:2', expectedOutput: [[51, 1, 2]] },
      { input: '1 Thessalonian 1:2', expectedOutput: [[51, 1, 2]] },
      { input: '1 Thessalonians 1:2', expectedOutput: [[51, 1, 2]] },
    ]
  },
  {
    group: '1 Timothy', cases: [
      { input: '1 Tim 1:2', expectedOutput: [[53, 1, 2]] },
      { input: '1 Timo 1:2', expectedOutput: [[53, 1, 2]] },
      { input: '1 Timothy 1:2', expectedOutput: [[53, 1, 2]] },
    ]
  },
  {
    group: 'Titus', cases: [
      { input: 'Tit 1:2', expectedOutput: [[55, 1, 2]] },
      { input: 'Titus 1:2', expectedOutput: [[55, 1, 2]] },
    ]
  },
  {
    group: 'Philemon', cases: [
      { input: 'Phile 1:2', expectedOutput: [[56, 1, 2]] },
      { input: 'Philem 1:2', expectedOutput: [[56, 1, 2]] },
      { input: 'Philemon 1:2', expectedOutput: [[56, 1, 2]] },
      { input: 'phlm 1:2', expectedOutput: [[56, 1, 2]] },
    ]
  },
  {
    group: 'Hebrews', cases: [
      { input: 'He 1:2', expectedOutput: [[57, 1, 2]] },
      { input: 'Heb 1:2', expectedOutput: [[57, 1, 2]] },
      { input: 'Hebr 1:2', expectedOutput: [[57, 1, 2]] },
      { input: 'Hebrew 1:2', expectedOutput: [[57, 1, 2]] },
      { input: 'Hebrews 1:2', expectedOutput: [[57, 1, 2]] },
      { input: 'hbr 1:2', expectedOutput: [[57, 1, 2]] },
    ]
  },
  {
    group: 'James', cases: [
      { input: 'Jam 1:2', expectedOutput: [[58, 1, 2]] },
      { input: 'James 1:2', expectedOutput: [[58, 1, 2]] },
      { input: 'Jms 1:2', expectedOutput: [[58, 1, 2]] },
      { input: 'Jas 1:2', expectedOutput: [[58, 1, 2]] },
    ]
  },
  {
    group: '1 Peter', cases: [
      { input: '1 P 1:2', expectedOutput: [[59, 1, 2]] },
      { input: '1 Pe 1:2', expectedOutput: [[59, 1, 2]] },
      { input: '1 Pet 1:2', expectedOutput: [[59, 1, 2]] },
      { input: '1 Peter 1:2', expectedOutput: [[59, 1, 2]] },
      { input: '1 pt 1:2', expectedOutput: [[59, 1, 2]] },
      { input: '1 ptr 1:2', expectedOutput: [[59, 1, 2]] },
    ]
  },
  {
    group: '1 Johna', cases: [
      { input: '1 J 1:2', expectedOutput: [[61, 1, 2]] },
      { input: '1 Jo 1:2', expectedOutput: [[61, 1, 2]] },
      { input: '1 Joh 1:2', expectedOutput: [[61, 1, 2]] },
      { input: '1 John 1:2', expectedOutput: [[61, 1, 2]] },
      { input: '1 Jn 1:2', expectedOutput: [[61, 1, 2]] },
    ]
  },
  {
    group: 'Jude', cases: [
      { input: 'Ju 1:2', expectedOutput: [[64, 1, 2]] },
      { input: 'Jud 1:2', expectedOutput: [[64, 1, 2]] },
      { input: 'Jude 1:2', expectedOutput: [[64, 1, 2]] },
      { input: 'Jd 1:2', expectedOutput: [[64, 1, 2]] },
    ]
  },
  {
    group: 'Objawienie', cases: [
      { input: 'Rev 1:2', expectedOutput: [[65, 1, 2]] },
      { input: 'Reve 1:2', expectedOutput: [[65, 1, 2]] },
      { input: 'Revel 1:2', expectedOutput: [[65, 1, 2]] },
      { input: 'Revelat 1:2', expectedOutput: [[65, 1, 2]] },
      { input: 'Revelation 1:2', expectedOutput: [[65, 1, 2]] },
    ]
  },
  {
    group: 'Judith', cases: [
      { input: 'Judith 1:2', expectedOutput: [[66, 1, 2]] },
      { input: 'Judi 1:2', expectedOutput: [[66, 1, 2]] },
      { input: 'Jdt 1:2', expectedOutput: [[66, 1, 2]] },
    ]
  },
  {
    group: 'Tobith', cases: [
      { input: 'Tobith 1:2', expectedOutput: [[67, 1, 2]] },
      { input: 'Tobi 1:2', expectedOutput: [[67, 1, 2]] },
      { input: 'Tob 1:2', expectedOutput: [[67, 1, 2]] },
      { input: 'Tb 1:2', expectedOutput: [[67, 1, 2]] },
    ]
  },
  {
    group: '1 Maccabees', cases: [
      { input: '1 Maccabees 1:2', expectedOutput: [[68, 1, 2]] },
      { input: '1 Maccabee 1:2', expectedOutput: [[68, 1, 2]] },
      { input: '1 Maccab 1:2', expectedOutput: [[68, 1, 2]] },
      { input: '1 Macc 1:2', expectedOutput: [[68, 1, 2]] },
      { input: '1 Mac 1:2', expectedOutput: [[68, 1, 2]] },
    ]
  },
  {
    group: 'Wisdom', cases: [
      { input: 'Wisdom 1:2', expectedOutput: [[70, 1, 2]] },
      { input: 'Wisd 1:2', expectedOutput: [[70, 1, 2]] },
      { input: 'Wis 1:2', expectedOutput: [[70, 1, 2]] },
      { input: 'Wsd 1:2', expectedOutput: [[70, 1, 2]] },
    ]
  },
  {
    group: 'Sirah', cases: [
      { input: 'Sirah 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'Sira 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'Sir 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'Si 1:2', expectedOutput: [[71, 1, 2]] },
    ]
  },
  {
    group: 'Baruch', cases: [
      { input: 'Baruch 1:2', expectedOutput: [[72, 1, 2]] },
      { input: 'Baru 1:2', expectedOutput: [[72, 1, 2]] },
      { input: 'Bar 1:2', expectedOutput: [[72, 1, 2]] },
      { input: 'Ba 1:2', expectedOutput: [[72, 1, 2]] },
      { input: 'Br 1:2', expectedOutput: [[72, 1, 2]] },
    ]
  },
]
export default data
