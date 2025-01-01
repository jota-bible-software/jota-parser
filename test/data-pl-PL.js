export const data = [

  {
    group: 'Book word', cases: [
      { input: 'Ks Rodzaju 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Ks. Rodzaju 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Ks.Rodzaju 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Księgą Rodzaju 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Ksiega Rodzaju 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Księgi Rodzaju 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Ksiegi Rodzaju 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Księdze Rodzaju 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Ksiedze Rodzaju 1:2', expectedOutput: [[0, 1, 2]] },
    ]
  },
  {
    group: 'Book word with number', cases: [
      { input: '1 Ks Mojżeszowa 1:2', expectedOutput: [[0, 1, 2]] },
      { input: '1 Ks. Mojżeszowa 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Pierwsza Ksiega Mojżeszowa 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'I Księga Mojżeszowa 1:2', expectedOutput: [[0, 1, 2]] },
    ]
  },
  {
    group: 'Book numbers', cases: [
      { input: '1 Mojżeszowa 1:2', expectedOutput: [[0, 1, 2]] },
      { input: '1. Mojżeszowa 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'I Mojżeszowa 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'I. Mojżeszowa 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Pierwsza Mojżeszowa 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Pierwsza. Mojżeszowa 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Pierwszą Mojżeszową 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'W Pierwszej Mojżeszowej 1:2', expectedOutput: [[0, 1, 2]] },
      { input: '2 Mojżeszowa 1:2', expectedOutput: [[1, 1, 2]] },
      { input: '2. Mojżeszowa 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'II Mojżeszowa 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'Druga Mojżeszowa 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'Drugą Mojżeszową 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'W Drugiej Mojżeszowej 1:2', expectedOutput: [[1, 1, 2]] },
      { input: '3 Mojżeszowa 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'III Mojżeszowa 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Trzecią Mojżeszową 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Trzecia Mojżeszowa 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'W Trzeciej Mojżeszowej 1:2', expectedOutput: [[2, 1, 2]] },
      { input: '4 Mojżeszowa 1:2', expectedOutput: [[3, 1, 2]] },
      { input: 'IV Mojżeszowej 1:2', expectedOutput: [[3, 1, 2]] },
      { input: 'Czwarta Mojżeszowa 1:2', expectedOutput: [[3, 1, 2]] },
      { input: 'Czwartą Mojżeszową 1:2', expectedOutput: [[3, 1, 2]] },
      { input: 'W Czwartej Mojżeszowej 1:2', expectedOutput: [[3, 1, 2]] },
      { input: '5 Mojżeszowa 1:2', expectedOutput: [[4, 1, 2]] },
      { input: 'V Mojżeszowa 1:2', expectedOutput: [[4, 1, 2]] },
      { input: 'Piąta Mojżeszowa 1:2', expectedOutput: [[4, 1, 2]] },
      { input: 'Piata Mojżeszowa 1:2', expectedOutput: [[4, 1, 2]] },
      { input: 'Piątą Mojżeszową 1:2', expectedOutput: [[4, 1, 2]] },
      { input: 'W Piątej Mojżeszowej 1:2', expectedOutput: [[4, 1, 2]] },

      { input: '1 J 1:2', expectedOutput: [[61, 1, 2]] },
      { input: '1. J 1:2', expectedOutput: [[61, 1, 2]] },
      { input: 'I J 1:2', expectedOutput: [[61, 1, 2]] },
      { input: 'I. J 1:2', expectedOutput: [[61, 1, 2]] },
      { input: 'Pierwszy J 1:2', expectedOutput: [[61, 1, 2]] },
      { input: 'Pierwszy. J 1:2', expectedOutput: [[61, 1, 2]] },
      { input: 'Pierwszym J 1:2', expectedOutput: [[61, 1, 2]] },
      { input: 'Pierwszego J 1:2', expectedOutput: [[61, 1, 2]] },
      { input: 'Pierwszemu J 1:2', expectedOutput: [[61, 1, 2]] },
      { input: '2 J 1:2', expectedOutput: [[62, 1, 2]] },
      { input: 'II J 1:2', expectedOutput: [[62, 1, 2]] },
      { input: 'Drugi J 1:2', expectedOutput: [[62, 1, 2]] },
      { input: 'Drugim J 1:2', expectedOutput: [[62, 1, 2]] },
      { input: 'Drugiemu J 1:2', expectedOutput: [[62, 1, 2]] },
      { input: 'Drugiego J 1:2', expectedOutput: [[62, 1, 2]] },
      { input: '3 J 1:2', expectedOutput: [[63, 1, 2]] },
      { input: 'III J 1:2', expectedOutput: [[63, 1, 2]] },
      { input: 'Trzeci J 1:2', expectedOutput: [[63, 1, 2]] },
      { input: 'Trzecim J 1:2', expectedOutput: [[63, 1, 2]] },
      { input: 'Trzeciemu J 1:2', expectedOutput: [[63, 1, 2]] },
      { input: 'Trzeciego J 1:2', expectedOutput: [[63, 1, 2]] },
    ]
  },
  {
    group: 'Mojżeszowe', cases: [
      { input: '1 M 1:2', expectedOutput: [[0, 1, 2]] },
      { input: '1 Mo 1:2', expectedOutput: [[0, 1, 2]] },
      { input: '1 Moj 1:2', expectedOutput: [[0, 1, 2]] },
      { input: '1 Moy 1:2', expectedOutput: [[0, 1, 2]] },
      { input: '1 Mojz 1:2', expectedOutput: [[0, 1, 2]] },
      { input: '1 Mojż 1:2', expectedOutput: [[0, 1, 2]] },
      { input: '1 Mojżesz 1:2', expectedOutput: [[0, 1, 2]] },
      { input: '1 Mojzesz 1:2', expectedOutput: [[0, 1, 2]] },
      { input: '1 Mojżesza 1:2', expectedOutput: [[0, 1, 2]] },
      { input: '1 Mojzesza 1:2', expectedOutput: [[0, 1, 2]] },
      { input: '1 Mojżeszowa 1:2', expectedOutput: [[0, 1, 2]] },
      { input: '1 Mojzeszowa 1:2', expectedOutput: [[0, 1, 2]] },
      { input: '1 Mojżeszową 1:2', expectedOutput: [[0, 1, 2]] },
      { input: '1 Mojzeszową 1:2', expectedOutput: [[0, 1, 2]] },
      { input: '1 Mojżeszowej 1:2', expectedOutput: [[0, 1, 2]] },
      { input: '1 Mojzeszowej 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Rodz 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Rodz. 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Rodzaj 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Rodzaj. 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Rodzaju 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Rdz 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'Wy 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'Wy. 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'Wyj 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'Wyj. 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'Wyjś 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'Wyjś. 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'Wyjs 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'Wyjśc 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'Wyjsc 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'Wyjścia 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'Wyjscia 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'Wyjscia. 1:2', expectedOutput: [[1, 1, 2]] },
      { input: 'Kap 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Kapł 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Kapl 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Kapłań 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Kaplań 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Kapłan 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Kaplan 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Kapłańska 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Kapłańską 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Kaplanska 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Kapłańskiej 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Kaplanskiej 1:2', expectedOutput: [[2, 1, 2]] },
      { input: 'Licz 1:2', expectedOutput: [[3, 1, 2]] },
      { input: 'Liczb 1:2', expectedOutput: [[3, 1, 2]] },
      { input: 'Lb 1:2', expectedOutput: [[3, 1, 2]] },
      { input: 'Pwt 1:2', expectedOutput: [[4, 1, 2]] },
      { input: 'Pow 1:2', expectedOutput: [[4, 1, 2]] },
      { input: 'Powt 1:2', expectedOutput: [[4, 1, 2]] },
      { input: 'Powt Prawa 1:2', expectedOutput: [[4, 1, 2]] },
      { input: 'Powtórzonego Prawa 1:2', expectedOutput: [[4, 1, 2]] },
      { input: 'Powtorzonego Prawa 1:2', expectedOutput: [[4, 1, 2]] },
    ]
  },
  {
    group: 'Jozuego', cases: [
      { input: 'Joz 1:2', expectedOutput: [[5, 1, 2]] },
      { input: 'Jozue 1:2', expectedOutput: [[5, 1, 2]] },
      { input: 'Jozuego 1:2', expectedOutput: [[5, 1, 2]] },
      { input: 'Jz 1:2', expectedOutput: [[5, 1, 2]] },
    ]
  },
  {
    group: 'Sędziów', cases: [
      { input: 'Sę 1:2', expectedOutput: [[6, 1, 2]] },
      { input: 'Se 1:2', expectedOutput: [[6, 1, 2]] },
      { input: 'Sęd 1:2', expectedOutput: [[6, 1, 2]] },
      { input: 'Sed 1:2', expectedOutput: [[6, 1, 2]] },
      { input: 'Sędz 1:2', expectedOutput: [[6, 1, 2]] },
      { input: 'Sedz 1:2', expectedOutput: [[6, 1, 2]] },
      { input: 'Sędziów 1:2', expectedOutput: [[6, 1, 2]] },
      { input: 'Sędziow 1:2', expectedOutput: [[6, 1, 2]] },
      { input: 'Sedziow 1:2', expectedOutput: [[6, 1, 2]] },
      { input: 'Sdz 1:2', expectedOutput: [[6, 1, 2]] },
    ]
  },
  {
    group: 'Rut', cases: [
      { input: 'Ru 1:2', expectedOutput: [[7, 1, 2]] },
      { input: 'Rt 1:2', expectedOutput: [[7, 1, 2]] },
      { input: 'Rut 1:2', expectedOutput: [[7, 1, 2]] },
      { input: 'Ruthy 1:2', expectedOutput: [[7, 1, 2]] },
    ]
  },
  {
    group: 'Samuela', cases: [
      { input: '1 Sa 1:2', expectedOutput: [[8, 1, 2]] },
      { input: '1 Sm 1:2', expectedOutput: [[8, 1, 2]] },
      { input: '1 Sam 1:2', expectedOutput: [[8, 1, 2]] },
      { input: '1 Samu 1:2', expectedOutput: [[8, 1, 2]] },
      { input: '1 Samuel 1:2', expectedOutput: [[8, 1, 2]] },
      { input: '1 Samuela 1:2', expectedOutput: [[8, 1, 2]] },
      { input: '1 Samuelowa 1:2', expectedOutput: [[8, 1, 2]] },
      { input: '2 Sa 1:2', expectedOutput: [[9, 1, 2]] },
    ]
  },
  {
    group: 'Królewska', cases: [
      { input: '1 Krl 1:2', expectedOutput: [[10, 1, 2]] },
      { input: '1 Król 1:2', expectedOutput: [[10, 1, 2]] },
      { input: '1 Krol 1:2', expectedOutput: [[10, 1, 2]] },
      { input: '1 Krolow 1:2', expectedOutput: [[10, 1, 2]] },
      { input: '1 Królów 1:2', expectedOutput: [[10, 1, 2]] },
      { input: '1 Królewska 1:2', expectedOutput: [[10, 1, 2]] },
      { input: '1 Krolewska 1:2', expectedOutput: [[10, 1, 2]] },
      { input: '1 Królewską 1:2', expectedOutput: [[10, 1, 2]] },
      { input: '1 Królewskiej 1:2', expectedOutput: [[10, 1, 2]] },
      { input: '2 Krl 1:2', expectedOutput: [[11, 1, 2]] },
    ]
  },
  {
    group: 'Kronik', cases: [
      { input: '1 Krn 1:2', expectedOutput: [[12, 1, 2]] },
      { input: '1 Kron 1:2', expectedOutput: [[12, 1, 2]] },
      { input: '1 Kronik 1:2', expectedOutput: [[12, 1, 2]] },
      { input: '2 Krn 1:2', expectedOutput: [[13, 1, 2]] },
    ]
  },
  {
    group: 'Ezdrasza', cases: [
      { input: 'Ezd 1:2', expectedOutput: [[14, 1, 2]] },
      { input: 'Ezdr 1:2', expectedOutput: [[14, 1, 2]] },
      { input: 'Ezdra 1:2', expectedOutput: [[14, 1, 2]] },
      { input: 'Ezdrasz 1:2', expectedOutput: [[14, 1, 2]] },
      { input: 'Ezdrasza 1:2', expectedOutput: [[14, 1, 2]] },
    ]
  },
  {
    group: 'Nehemiasza', cases: [
      { input: 'Ne 1:2', expectedOutput: [[15, 1, 2]] },
      { input: 'Neh 1:2', expectedOutput: [[15, 1, 2]] },
      { input: 'Nehe 1:2', expectedOutput: [[15, 1, 2]] },
      { input: 'Nehem 1:2', expectedOutput: [[15, 1, 2]] },
      { input: 'Nehemiasz 1:2', expectedOutput: [[15, 1, 2]] },
      { input: 'Nehemiasza 1:2', expectedOutput: [[15, 1, 2]] },
    ]
  },
  {
    group: 'Estery', cases: [
      { input: 'Est 1:2', expectedOutput: [[16, 1, 2]] },
      { input: 'Este 1:2', expectedOutput: [[16, 1, 2]] },
      { input: 'Ester 1:2', expectedOutput: [[16, 1, 2]] },
      { input: 'Estery 1:2', expectedOutput: [[16, 1, 2]] },
    ]
  },
  {
    group: 'Joba', cases: [
      { input: 'Job 1:2', expectedOutput: [[17, 1, 2]] },
      { input: 'Joba 1:2', expectedOutput: [[17, 1, 2]] },
      { input: 'Hi 1:2', expectedOutput: [[17, 1, 2]] },
      { input: 'Hb 1:2', expectedOutput: [[17, 1, 2]] },
      { input: 'Hio 1:2', expectedOutput: [[17, 1, 2]] },
      { input: 'Hiob 1:2', expectedOutput: [[17, 1, 2]] },
      { input: 'Hioba 1:2', expectedOutput: [[17, 1, 2]] },
    ]
  },
  {
    group: 'Psalm', cases: [
      { input: 'Ps 1:2', expectedOutput: [[18, 1, 2]] },
      { input: 'Psa 1:2', expectedOutput: [[18, 1, 2]] },
      { input: 'Psalm 1:2', expectedOutput: [[18, 1, 2]] },
      { input: 'Psalmy 1:2', expectedOutput: [[18, 1, 2]] },
      { input: 'Psalmem 1:2', expectedOutput: [[18, 1, 2]] },
      { input: 'Psalmu 1:2', expectedOutput: [[18, 1, 2]] },
      { input: 'Psalmie 1:2', expectedOutput: [[18, 1, 2]] },
      { input: 'Psalmowi 1:2', expectedOutput: [[18, 1, 2]] },
      { input: 'Psalmów 1:2', expectedOutput: [[18, 1, 2]] },
      { input: 'Psalmow 1:2', expectedOutput: [[18, 1, 2]] },
      { input: 'Psalmami 1:2', expectedOutput: [[18, 1, 2]] },
    ]
  },
  {
    group: 'Przypowieści', cases: [
      { input: 'Pr 1:2', expectedOutput: [[19, 1, 2]] },
      { input: 'Prz 1:2', expectedOutput: [[19, 1, 2]] },
      { input: 'Przy 1:2', expectedOutput: [[19, 1, 2]] },
      { input: 'Przyp 1:2', expectedOutput: [[19, 1, 2]] },
      { input: 'Przypow 1:2', expectedOutput: [[19, 1, 2]] },
      { input: 'Przypowieści 1:2', expectedOutput: [[19, 1, 2]] },
      { input: 'Przypowiesci 1:2', expectedOutput: [[19, 1, 2]] },
      { input: 'Przypowiesci Salomona 1:2', expectedOutput: [[19, 1, 2]] },
      { input: 'Przys 1:2', expectedOutput: [[19, 1, 2]] },
      { input: 'Przysłów 1:2', expectedOutput: [[19, 1, 2]] },
      { input: 'Przyslow 1:2', expectedOutput: [[19, 1, 2]] },
      { input: 'Przysłów Salomona 1:2', expectedOutput: [[19, 1, 2]] },
      { input: 'Salomona 1:2', expectedOutput: [[19, 1, 2]] },
    ]
  },
  {
    group: 'Kaznodziei', cases: [
      { input: 'Kaz 1:2', expectedOutput: [[20, 1, 2]] },
      { input: 'Kazn 1:2', expectedOutput: [[20, 1, 2]] },
      { input: 'Kaznodziei 1:2', expectedOutput: [[20, 1, 2]] },
      { input: 'Kaznodziei Salomona 1:2', expectedOutput: [[20, 1, 2]] },
      { input: 'Kazn. Salomona 1:2', expectedOutput: [[20, 1, 2]] },
      { input: 'Kz 1:2', expectedOutput: [[20, 1, 2]] },
      { input: 'Kzn 1:2', expectedOutput: [[20, 1, 2]] },
      { input: 'Koh 1:2', expectedOutput: [[20, 1, 2]] },
      { input: 'Kohel 1:2', expectedOutput: [[20, 1, 2]] },
      { input: 'Kohelet 1:2', expectedOutput: [[20, 1, 2]] },
      { input: 'Koheleta 1:2', expectedOutput: [[20, 1, 2]] },
      { input: 'Eklezjastesa 1:2', expectedOutput: [[20, 1, 2]] },
    ]
  },
  {
    group: 'Pieśń nad Pieśniami', cases: [
      { input: 'Pieśń nad Pieśniami 1:2', expectedOutput: [[21, 1, 2]] },
      { input: 'Pieśń Salomona 1:2', expectedOutput: [[21, 1, 2]] },
      { input: 'Pnp 1:2', expectedOutput: [[21, 1, 2]] },
    ]
  },
  {
    group: 'Izajasz', cases: [
      { input: 'Iz 1:2', expectedOutput: [[22, 1, 2]] },
      { input: 'Iza 1:2', expectedOutput: [[22, 1, 2]] },
      { input: 'Izaj 1:2', expectedOutput: [[22, 1, 2]] },
      { input: 'Izajasz 1:2', expectedOutput: [[22, 1, 2]] },
      { input: 'Izajasza 1:2', expectedOutput: [[22, 1, 2]] },
    ]
  },
  {
    group: 'Jeremiasz', cases: [
      { input: 'Jr 1:2', expectedOutput: [[23, 1, 2]] },
      { input: 'Jrm 1:2', expectedOutput: [[23, 1, 2]] },
      { input: 'Jer 1:2', expectedOutput: [[23, 1, 2]] },
      { input: 'Jerem 1:2', expectedOutput: [[23, 1, 2]] },
      { input: 'Jeremiasz 1:2', expectedOutput: [[23, 1, 2]] },
      { input: 'Jeremiasza 1:2', expectedOutput: [[23, 1, 2]] },
    ]
  },
  {
    group: 'Treny', cases: [
      { input: 'Tr 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Tre 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Tren 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Treny 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Treny Jeremiasza 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Trenach 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Trenami 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Trenom 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Trenów 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Trenow 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Lamentacje 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Lamentacje Jeremiasza 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Ksiega Lamentacji 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Lamentacjami 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'Lam 1:2', expectedOutput: [[24, 1, 2]] },
      { input: 'La 1:2', expectedOutput: [[24, 1, 2]] },
    ]
  },
  {
    group: 'Ezekiel', cases: [
      { input: 'Ez 1:2', expectedOutput: [[25, 1, 2]] },
      { input: 'Eze 1:2', expectedOutput: [[25, 1, 2]] },
      { input: 'Ezech 1:2', expectedOutput: [[25, 1, 2]] },
      { input: 'Ezechiel 1:2', expectedOutput: [[25, 1, 2]] },
      { input: 'Ezechiela 1:2', expectedOutput: [[25, 1, 2]] },
      { input: 'Ezch 1:2', expectedOutput: [[25, 1, 2]] },
    ]
  },
  {
    group: 'Daniel', cases: [
      { input: 'Dn 1:2', expectedOutput: [[26, 1, 2]] },
      { input: 'Da 1:2', expectedOutput: [[26, 1, 2]] },
      { input: 'Dan 1:2', expectedOutput: [[26, 1, 2]] },
      { input: 'Daniel 1:2', expectedOutput: [[26, 1, 2]] },
      { input: 'Daniela 1:2', expectedOutput: [[26, 1, 2]] },
    ]
  },
  {
    group: 'Ozeasz', cases: [
      { input: 'Oz 1:2', expectedOutput: [[27, 1, 2]] },
      { input: 'Oze 1:2', expectedOutput: [[27, 1, 2]] },
      { input: 'Ozeasz 1:2', expectedOutput: [[27, 1, 2]] },
      { input: 'Ozeasza 1:2', expectedOutput: [[27, 1, 2]] },
    ]
  },
  {
    group: 'Joel', cases: [
      { input: 'Jl 1:2', expectedOutput: [[28, 1, 2]] },
      { input: 'Joe 1:2', expectedOutput: [[28, 1, 2]] },
      { input: 'Joel 1:2', expectedOutput: [[28, 1, 2]] },
      { input: 'Joela 1:2', expectedOutput: [[28, 1, 2]] },
    ]
  },
  {
    group: 'Amos', cases: [
      { input: 'Am 1:2', expectedOutput: [[29, 1, 2]] },
      { input: 'Amo 1:2', expectedOutput: [[29, 1, 2]] },
      { input: 'Amos 1:2', expectedOutput: [[29, 1, 2]] },
      { input: 'Amosa 1:2', expectedOutput: [[29, 1, 2]] },
    ]
  },
  {
    group: 'Abdiasz', cases: [
      { input: 'Ab 1:2', expectedOutput: [[30, 1, 2]] },
      { input: 'Abd 1:2', expectedOutput: [[30, 1, 2]] },
      { input: 'Abdiasz 1:2', expectedOutput: [[30, 1, 2]] },
      { input: 'Abdiasza 1:2', expectedOutput: [[30, 1, 2]] },
    ]
  },
  {
    group: 'Jonasz', cases: [
      { input: 'Jon 1:2', expectedOutput: [[31, 1, 2]] },
      { input: 'Jona 1:2', expectedOutput: [[31, 1, 2]] },
      { input: 'Jonasz 1:2', expectedOutput: [[31, 1, 2]] },
      { input: 'Jonasza 1:2', expectedOutput: [[31, 1, 2]] },
    ]
  },
  {
    group: 'Micheasz', cases: [
      { input: 'Mi 1:2', expectedOutput: [[32, 1, 2]] },
      { input: 'Mich 1:2', expectedOutput: [[32, 1, 2]] },
      { input: 'Micheasz 1:2', expectedOutput: [[32, 1, 2]] },
      { input: 'Micheasza 1:2', expectedOutput: [[32, 1, 2]] },
    ]
  },
  {
    group: 'Nahum', cases: [
      { input: 'Na 1:2', expectedOutput: [[33, 1, 2]] },
      { input: 'Nah 1:2', expectedOutput: [[33, 1, 2]] },
      { input: 'Nach 1:2', expectedOutput: [[33, 1, 2]] },
      { input: 'Nahum 1:2', expectedOutput: [[33, 1, 2]] },
      { input: 'Nahuma 1:2', expectedOutput: [[33, 1, 2]] },
      { input: 'Proroctwo Nahumowe 1:2', expectedOutput: [[33, 1, 2]] },
    ]
  },
  {
    group: 'Habakuk', cases: [
      { input: 'Ha 1:2', expectedOutput: [[34, 1, 2]] },
      { input: 'Hab 1:2', expectedOutput: [[34, 1, 2]] },
      { input: 'Habakuk 1:2', expectedOutput: [[34, 1, 2]] },
      { input: 'Habakuka 1:2', expectedOutput: [[34, 1, 2]] },
      { input: 'Abakuka 1:2', expectedOutput: [[34, 1, 2]] },
      { input: 'Proroctwo Abakukowe 1:2', expectedOutput: [[34, 1, 2]] },
    ]
  },
  {
    group: 'Sofoniasz', cases: [
      { input: 'So 1:2', expectedOutput: [[35, 1, 2]] },
      { input: 'Sof 1:2', expectedOutput: [[35, 1, 2]] },
      { input: 'Sofo 1:2', expectedOutput: [[35, 1, 2]] },
      { input: 'Sofoniasz 1:2', expectedOutput: [[35, 1, 2]] },
      { input: 'Sofoniasza 1:2', expectedOutput: [[35, 1, 2]] },
    ]
  },
  {
    group: 'Aggeusz', cases: [
      { input: 'Ag 1:2', expectedOutput: [[36, 1, 2]] },
      { input: 'Agg 1:2', expectedOutput: [[36, 1, 2]] },
      { input: 'Aggeusz 1:2', expectedOutput: [[36, 1, 2]] },
      { input: 'Aggeusza 1:2', expectedOutput: [[36, 1, 2]] },
    ]
  },
  {
    group: 'Zachariasz', cases: [
      { input: 'Za 1:2', expectedOutput: [[37, 1, 2]] },
      { input: 'Zach 1:2', expectedOutput: [[37, 1, 2]] },
      { input: 'Zachariasz 1:2', expectedOutput: [[37, 1, 2]] },
      { input: 'Zachariasza 1:2', expectedOutput: [[37, 1, 2]] },
      { input: 'Zch 1:2', expectedOutput: [[37, 1, 2]] },
    ]
  },
  {
    group: 'Malachiasz', cases: [
      { input: 'Ml 1:2', expectedOutput: [[38, 1, 2]] },
      { input: 'Mal 1:2', expectedOutput: [[38, 1, 2]] },
      { input: 'Mala 1:2', expectedOutput: [[38, 1, 2]] },
      { input: 'Malach 1:2', expectedOutput: [[38, 1, 2]] },
      { input: 'Malachiasz 1:2', expectedOutput: [[38, 1, 2]] },
      { input: 'Malachiasza 1:2', expectedOutput: [[38, 1, 2]] },
    ]
  },
  {
    group: 'Mateusz', cases: [
      { input: 'Mt 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Mat 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Ew Mat 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Mateusz 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Mateusza 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Ew Mateusza 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Ew. Mateusza 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Ewan. Mateusza 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Ewang. Mateusza 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Ewangelia Mateusza 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Ewangelia według Mateusza 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Ewangelia wg św. Mateusza 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Ewangelia według św Mateusza 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Ewangelia według świętego Mateusza 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Ewangelia Św. Mateusza 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Ewangelia Świętego Mateusza 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Ewangelia Swietego Mateusza 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Ewangelia Apostola Mateusza 1:2', expectedOutput: [[39, 1, 2]] },
      { input: 'Ewangelia Apostola Mateusza 1:2', expectedOutput: [[39, 1, 2]] },
    ]
  },
  {
    group: 'Marek', cases: [
      { input: 'Mk 1:2', expectedOutput: [[40, 1, 2]] },
      { input: 'Mar 1:2', expectedOutput: [[40, 1, 2]] },
      { input: 'Mark 1:2', expectedOutput: [[40, 1, 2]] },
      { input: 'Marka 1:2', expectedOutput: [[40, 1, 2]] },
    ]
  },
  {
    group: 'Łukasz', cases: [
      { input: 'Łk 1:2', expectedOutput: [[41, 1, 2]] },
      { input: 'Łuk 1:2', expectedOutput: [[41, 1, 2]] },
      { input: 'Łukasz 1:2', expectedOutput: [[41, 1, 2]] },
      { input: 'Łukasza 1:2', expectedOutput: [[41, 1, 2]] },
    ]
  },
  {
    group: 'Jan', cases: [
      { input: 'J 1:2', expectedOutput: [[42, 1, 2]] },
      { input: 'Jn 1:2', expectedOutput: [[42, 1, 2]] },
      { input: 'Jan 1:2', expectedOutput: [[42, 1, 2]] },
      { input: 'Jana 1:2', expectedOutput: [[42, 1, 2]] },
    ]
  },
  {
    group: 'Dzieje Apostolskie', cases: [
      { input: 'Dz 1:2', expectedOutput: [[43, 1, 2]] },
      { input: 'Dzieje 1:2', expectedOutput: [[43, 1, 2]] },
      { input: 'Dz Ap 1:2', expectedOutput: [[43, 1, 2]] },
      { input: 'Dz. Ap. 1:2', expectedOutput: [[43, 1, 2]] },
      { input: 'Dzieje Apost 1:2', expectedOutput: [[43, 1, 2]] },
      { input: 'Dzieje Apostolskie 1:2', expectedOutput: [[43, 1, 2]] },
      { input: 'Dziejach Apostolskich 1:2', expectedOutput: [[43, 1, 2]] },
    ]
  },
  {
    group: 'Rzymian', cases: [
      { input: 'Rz 1:2', expectedOutput: [[44, 1, 2]] },
      { input: 'Rzy 1:2', expectedOutput: [[44, 1, 2]] },
      { input: 'Rzym 1:2', expectedOutput: [[44, 1, 2]] },
      { input: 'Rzymian 1:2', expectedOutput: [[44, 1, 2]] },
      { input: 'List Rzymian 1:2', expectedOutput: [[44, 1, 2]] },
      { input: 'List Do Rzymian 1:2', expectedOutput: [[44, 1, 2]] },
      { input: 'List Św. Pawła Do Rzymian 1:2', expectedOutput: [[44, 1, 2]] },
      { input: 'List Sw. Pawla Do Rzymian 1:2', expectedOutput: [[44, 1, 2]] },
      { input: 'List Świętego Pawła Do Rzymian 1:2', expectedOutput: [[44, 1, 2]] },
      { input: 'List Swietego Pawla Do Rzymian 1:2', expectedOutput: [[44, 1, 2]] },
      { input: 'List Apostoła Pawla Do Rzymian 1:2', expectedOutput: [[44, 1, 2]] },
      { input: 'List Apost. Pawla Do Rzymian 1:2', expectedOutput: [[44, 1, 2]] },
      { input: 'List Ap. Pawla Do Rzymian 1:2', expectedOutput: [[44, 1, 2]] },
      { input: 'List Pawla Do Rzymian 1:2', expectedOutput: [[44, 1, 2]] },
    ]
  },
  {
    group: '1 Koryntian', cases: [
      { input: '1 Kor 1:2', expectedOutput: [[45, 1, 2]] },
      { input: '1 Kory 1:2', expectedOutput: [[45, 1, 2]] },
      { input: '1 Korynt 1:2', expectedOutput: [[45, 1, 2]] },
      { input: '1 Koryntian 1:2', expectedOutput: [[45, 1, 2]] },
      { input: '1 Koryntów 1:2', expectedOutput: [[45, 1, 2]] },
      { input: '1 Koryntow 1:2', expectedOutput: [[45, 1, 2]] },
    ]
  },
  {
    group: '2 Koryntian', cases: [
      { input: '2 Kor 1:2', expectedOutput: [[46, 1, 2]] },
      { input: '2 Kory 1:2', expectedOutput: [[46, 1, 2]] },
      { input: '2 Korynt 1:2', expectedOutput: [[46, 1, 2]] },
      { input: '2 Koryntian 1:2', expectedOutput: [[46, 1, 2]] },
      { input: 'II List Koryntian 1:2', expectedOutput: [[46, 1, 2]] },
    ]
  },
  {
    group: 'Galacjan', cases: [
      { input: 'Ga 1:2', expectedOutput: [[47, 1, 2]] },
      { input: 'Gal 1:2', expectedOutput: [[47, 1, 2]] },
      { input: 'Gala 1:2', expectedOutput: [[47, 1, 2]] },
      { input: 'Galacjan 1:2', expectedOutput: [[47, 1, 2]] },
      { input: 'Galatów 1:2', expectedOutput: [[47, 1, 2]] },
      { input: 'Galatow 1:2', expectedOutput: [[47, 1, 2]] },
    ]
  },
  {
    group: 'Efezjan', cases: [
      { input: 'Ef 1:2', expectedOutput: [[48, 1, 2]] },
      { input: 'Efe 1:2', expectedOutput: [[48, 1, 2]] },
      { input: 'Efez 1:2', expectedOutput: [[48, 1, 2]] },
      { input: 'Efezjan 1:2', expectedOutput: [[48, 1, 2]] },
      { input: 'Efezów 1:2', expectedOutput: [[48, 1, 2]] },
    ]
  },
  {
    group: 'Filipian', cases: [
      { input: 'Fl 1:2', expectedOutput: [[49, 1, 2]] },
      { input: 'Flp 1:2', expectedOutput: [[49, 1, 2]] },
      { input: 'Fili 1:2', expectedOutput: [[49, 1, 2]] },
      { input: 'Filip 1:2', expectedOutput: [[49, 1, 2]] },
      { input: 'Filipian 1:2', expectedOutput: [[49, 1, 2]] },
      { input: 'Filipensów 1:2', expectedOutput: [[49, 1, 2]] },
    ]
  },
  {
    group: 'Kolosan', cases: [
      { input: 'Kol 1:2', expectedOutput: [[50, 1, 2]] },
      { input: 'Kolo 1:2', expectedOutput: [[50, 1, 2]] },
      { input: 'Kolos 1:2', expectedOutput: [[50, 1, 2]] },
      { input: 'Kolosan 1:2', expectedOutput: [[50, 1, 2]] },
      { input: 'Kolosensow 1:2', expectedOutput: [[50, 1, 2]] },
    ]
  },
  {
    group: '1 Tesaloniczan', cases: [
      { input: '1 Tes 1:2', expectedOutput: [[51, 1, 2]] },
      { input: '1 Tesa 1:2', expectedOutput: [[51, 1, 2]] },
      { input: '1 Tesal 1:2', expectedOutput: [[51, 1, 2]] },
      { input: '1 Tesaloniczan 1:2', expectedOutput: [[51, 1, 2]] },
      { input: '1 Tesalonicensow 1:2', expectedOutput: [[51, 1, 2]] },
    ]
  },
  {
    group: '2 Tesaloniczan', cases: [
      { input: '2 Tes 1:2', expectedOutput: [[52, 1, 2]] },
      { input: '2 Tesa 1:2', expectedOutput: [[52, 1, 2]] },
      { input: '2 Tesal 1:2', expectedOutput: [[52, 1, 2]] },
      { input: '2 Tesaloniczan 1:2', expectedOutput: [[52, 1, 2]] },
    ]
  },
  {
    group: '1 Timoteusza', cases: [
      { input: '1 Tm 1:2', expectedOutput: [[53, 1, 2]] },
      { input: '1 Ty 1:2', expectedOutput: [[53, 1, 2]] },
      { input: '1 Tym 1:2', expectedOutput: [[53, 1, 2]] },
      { input: '1 Tymo 1:2', expectedOutput: [[53, 1, 2]] },
      { input: '1 Tymot 1:2', expectedOutput: [[53, 1, 2]] },
      { input: '1 Tymoteusz 1:2', expectedOutput: [[53, 1, 2]] },
      { input: '1 Tymoteusza 1:2', expectedOutput: [[53, 1, 2]] },
    ]
  },
  {
    group: '2 Timoteusza', cases: [
      { input: '2 Tm 1:2', expectedOutput: [[54, 1, 2]] },
      { input: '2 Ty 1:2', expectedOutput: [[54, 1, 2]] },
      { input: '2 Tym 1:2', expectedOutput: [[54, 1, 2]] },
      { input: '2 Tymo 1:2', expectedOutput: [[54, 1, 2]] },
      { input: '2 Tymot 1:2', expectedOutput: [[54, 1, 2]] },
      { input: '2 Tymoteusz 1:2', expectedOutput: [[54, 1, 2]] },
      { input: '2 Tymoteusza 1:2', expectedOutput: [[54, 1, 2]] },
    ]
  },
  {
    group: 'Tytus', cases: [
      { input: 'Tt 1:2', expectedOutput: [[55, 1, 2]] },
      { input: 'Tyt 1:2', expectedOutput: [[55, 1, 2]] },
      { input: 'Tytus 1:2', expectedOutput: [[55, 1, 2]] },
      { input: 'Tytusa 1:2', expectedOutput: [[55, 1, 2]] },
    ]
  },
  {
    group: 'Filemona', cases: [
      { input: 'Fi 1:2', expectedOutput: [[56, 1, 2]] },
      { input: 'Fil 1:2', expectedOutput: [[56, 1, 2]] },
      { input: 'File 1:2', expectedOutput: [[56, 1, 2]] },
      { input: 'Filem 1:2', expectedOutput: [[56, 1, 2]] },
      { input: 'Filemon 1:2', expectedOutput: [[56, 1, 2]] },
      { input: 'Filemona 1:2', expectedOutput: [[56, 1, 2]] },
      { input: 'flm 1:2', expectedOutput: [[56, 1, 2]] },
    ]
  },
  {
    group: 'Hebrajczyków', cases: [
      { input: 'hbr 1:2', expectedOutput: [[57, 1, 2]] },
      { input: 'He 1:2', expectedOutput: [[57, 1, 2]] },
      { input: 'Heb 1:2', expectedOutput: [[57, 1, 2]] },
      { input: 'Hebr 1:2', expectedOutput: [[57, 1, 2]] },
      { input: 'Hebra 1:2', expectedOutput: [[57, 1, 2]] },
      { input: 'Hebraj 1:2', expectedOutput: [[57, 1, 2]] },
      { input: 'Hebrajcz 1:2', expectedOutput: [[57, 1, 2]] },
      { input: 'Hebrajczyków 1:2', expectedOutput: [[57, 1, 2]] },
      { input: 'Hebrajczykow 1:2', expectedOutput: [[57, 1, 2]] },
      { input: 'Żydów 1:2', expectedOutput: [[57, 1, 2]] },
      { input: 'Żyd 1:2', expectedOutput: [[57, 1, 2]] },
      { input: 'zyd 1:2', expectedOutput: [[57, 1, 2]] },
    ]
  },
  {
    group: 'Jakuba', cases: [
      { input: 'Jak 1:2', expectedOutput: [[58, 1, 2]] },
      { input: 'Jakub 1:2', expectedOutput: [[58, 1, 2]] },
      { input: 'Jakuba 1:2', expectedOutput: [[58, 1, 2]] },
      { input: 'jk 1:2', expectedOutput: [[58, 1, 2]] },
      { input: 'jkb 1:2', expectedOutput: [[58, 1, 2]] },
    ]
  },
  {
    group: '1 Piotra', cases: [
      { input: '1 Pi 1:2', expectedOutput: [[59, 1, 2]] },
      { input: '1 Pio 1:2', expectedOutput: [[59, 1, 2]] },
      { input: '1 Piotr 1:2', expectedOutput: [[59, 1, 2]] },
      { input: '1 Piotra 1:2', expectedOutput: [[59, 1, 2]] },
      { input: '1 p 1:2', expectedOutput: [[59, 1, 2]] },
      { input: '1 pt 1:2', expectedOutput: [[59, 1, 2]] },
      { input: '1 ptr 1:2', expectedOutput: [[59, 1, 2]] },
    ]
  },
  {
    group: '2 Piotra', cases: [
      { input: '2 Pi 1:2', expectedOutput: [[60, 1, 2]] },
      { input: '2 Pio 1:2', expectedOutput: [[60, 1, 2]] },
      { input: '2 Piotr 1:2', expectedOutput: [[60, 1, 2]] },
      { input: '2 Piotra 1:2', expectedOutput: [[60, 1, 2]] },
      { input: '2 pt 1:2', expectedOutput: [[60, 1, 2]] },
      { input: '2 ptr 1:2', expectedOutput: [[60, 1, 2]] },
    ]
  },
  {
    group: '1 Jana', cases: [
      { input: '1 Jan 1:2', expectedOutput: [[61, 1, 2]] },
      { input: '1 Jana 1:2', expectedOutput: [[61, 1, 2]] },
      { input: '1 J 1:2', expectedOutput: [[61, 1, 2]] },
      { input: '1 Jn 1:2', expectedOutput: [[61, 1, 2]] },
    ]
  },
  {
    group: '3 Jana', cases: [
      { input: '3 Jan 2', expectedOutput: [[63, 1, 2]] },
      { input: '3 Jana 2', expectedOutput: [[63, 1, 2]] },
      { input: '3 J 2', expectedOutput: [[63, 1, 2]] },
      { input: '3 Jn 2', expectedOutput: [[63, 1, 2]] },
      { input: '3 Jn 1:2', expectedOutput: [[63, 1, 2]] },
    ]
  },
  {
    group: 'Judy', cases: [
      { input: 'Judy 1:2', expectedOutput: [[64, 1, 2]] },
      { input: 'Jud 1:2', expectedOutput: [[64, 1, 2]] },
      { input: 'Ju 1:2', expectedOutput: [[64, 1, 2]] },
      { input: 'Jd 1:2', expectedOutput: [[64, 1, 2]] },
      { input: 'slajd 1', expectedOutput: [] },
    ]
  },
  {
    group: 'Objawienie', cases: [
      { input: 'Apokalipsa Świętego Jana 1:2', expectedOutput: [[65, 1, 2]] },
      { input: 'Apokalipsa 1:2', expectedOutput: [[65, 1, 2]] },
      { input: 'Apokalipsy 1:2', expectedOutput: [[65, 1, 2]] },
      { input: 'Apokal 1:2', expectedOutput: [[65, 1, 2]] },
      { input: 'Apok 1:2', expectedOutput: [[65, 1, 2]] },
      { input: 'Apo 1:2', expectedOutput: [[65, 1, 2]] },
      { input: 'Ap 1:2', expectedOutput: [[65, 1, 2]] },
      { input: 'Objawienie Św. Jana 1:2', expectedOutput: [[65, 1, 2]] },
      { input: 'Objawienie Jana 1:2', expectedOutput: [[65, 1, 2]] },
      { input: 'Objawienia 1:2', expectedOutput: [[65, 1, 2]] },
      { input: 'Księga Objawienia 1:2', expectedOutput: [[65, 1, 2]] },
      { input: 'Objaw 1:2', expectedOutput: [[65, 1, 2]] },
      { input: 'Obj 1:2', expectedOutput: [[65, 1, 2]] },
      { input: 'Ob 1:2', expectedOutput: [[65, 1, 2]] },
    ]
  },
  {
    group: 'Judyty', cases: [
      { input: 'Judyty 1:2', expectedOutput: [[66, 1, 2]] },
      { input: 'Judycie 1:2', expectedOutput: [[66, 1, 2]] },
      { input: 'Jdt 1:2', expectedOutput: [[66, 1, 2]] },
    ]
  },
  {
    group: 'Tobiasza', cases: [
      { input: 'Tobiasza 1:2', expectedOutput: [[67, 1, 2]] },
      { input: 'Tobiaszu 1:2', expectedOutput: [[67, 1, 2]] },
      { input: 'Tobiasz 1:2', expectedOutput: [[67, 1, 2]] },
      { input: 'Tobia 1:2', expectedOutput: [[67, 1, 2]] },
      { input: 'Tobi 1:2', expectedOutput: [[67, 1, 2]] },
      { input: 'Tob 1:2', expectedOutput: [[67, 1, 2]] },
      { input: 'Tb 1:2', expectedOutput: [[67, 1, 2]] },
    ]
  },
  {
    group: '1 Machabejska', cases: [
      { input: '1 Machabejska 1:2', expectedOutput: [[68, 1, 2]] },
      { input: '1 Machabejską 1:2', expectedOutput: [[68, 1, 2]] },
      { input: '1 Machabejskiej 1:2', expectedOutput: [[68, 1, 2]] },
      { input: '1 Machabej 1:2', expectedOutput: [[68, 1, 2]] },
      { input: '1 Machab 1:2', expectedOutput: [[68, 1, 2]] },
      { input: '1 Macha 1:2', expectedOutput: [[68, 1, 2]] },
      { input: '1 Mach 1:2', expectedOutput: [[68, 1, 2]] },
      { input: '1 Mac 1:2', expectedOutput: [[68, 1, 2]] },
      { input: '1 Mch 1:2', expectedOutput: [[68, 1, 2]] },
    ]
  },
  {
    group: 'Mądrości', cases: [
      { input: 'Mądrość Salomona 1:2', expectedOutput: [[70, 1, 2]] },
      { input: 'Mądrości Salomona 1:2', expectedOutput: [[70, 1, 2]] },
      { input: 'Mądrości 1:2', expectedOutput: [[70, 1, 2]] },
      { input: 'Mądrościach 1:2', expectedOutput: [[70, 1, 2]] },
      { input: 'Mądrościami 1:2', expectedOutput: [[70, 1, 2]] },
      { input: 'Mądrość 1:2', expectedOutput: [[70, 1, 2]] },
      { input: 'Madrosci 1:2', expectedOutput: [[70, 1, 2]] },
      { input: 'Madrosc 1:2', expectedOutput: [[70, 1, 2]] },
      { input: 'Mądro 1:2', expectedOutput: [[70, 1, 2]] },
      { input: 'Mądr 1:2', expectedOutput: [[70, 1, 2]] },
      { input: 'Mdr 1:2', expectedOutput: [[70, 1, 2]] },
    ]
  },
  {
    group: 'Mądrość Syracha', cases: [
      { input: 'Mądrość Syracha 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'Madrosc Syracha 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'Mądr Syracha 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'Mąd Syracha 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'M Syracha 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'M. Syracha 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'M. Syrach 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'Syracha 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'Syrach 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'Syra 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'Syr 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'Sy 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'Msr 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'Eklezjastyka 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'Eklezjastyce 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'Eklezjastyk 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'Eklezj 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'Eklez 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'Ekle 1:2', expectedOutput: [[71, 1, 2]] },
      { input: 'Ekl 1:2', expectedOutput: [[71, 1, 2]] },
    ]
  },
  {
    group: 'Barucha', cases: [
      { input: 'Barucha 1:2', expectedOutput: [[72, 1, 2]] },
      { input: 'Baruchu 1:2', expectedOutput: [[72, 1, 2]] },
      { input: 'Baruch 1:2', expectedOutput: [[72, 1, 2]] },
      { input: 'Baru 1:2', expectedOutput: [[72, 1, 2]] },
      { input: 'Bar 1:2', expectedOutput: [[72, 1, 2]] },
      { input: 'Ba 1:2', expectedOutput: [[72, 1, 2]] },
      { input: 'Br 1:2', expectedOutput: [[72, 1, 2]] },
    ]
  },
]
export default data
