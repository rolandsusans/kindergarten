const places = [
    {
      "name": "Jaunciema pamatskola",
      "address": "JAUNCIEMA 4. ŠĶĒRSLĪNIJA 4, ZIEMEĻU RAJONS, RĪGA, LV-1023",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 54,
      "location": { "lat": 57.0419468, "lng": 24.1758419 }
    },
    {
      "name": "Rīgas 106. pirmsskolas izglītības iestāde",
      "address": "ŪNIJAS IELA 83, VIDZEMES PRIEKŠPILSĒTA, RĪGA, LV-1084",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 526,
      "location": { "lat": 56.9629989, "lng": 24.1815887 }
    },
    {
      "name": "Rīgas 11. pirmsskolas izglītības iestāde",
      "address": "RAŅĶA DAMBIS 3, KURZEMES RAJONS, RĪGA, LV-1048",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 145,
      "location": { "lat": 56.9418254, "lng": 24.0920407 }
    },
    {
      "name": "Rīgas 123. pirmsskolas izglītības iestāde",
      "address": "KRISTAPA IELA 39, KURZEMES RAJONS, RĪGA, LV-1046",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 352,
      "location": { "lat": 56.9454642, "lng": 24.070421 }
    },
    {
      "name": "Rīgas 124. pirmsskolas izglītības iestāde \"Dzērvenīte\"",
      "address": "BĒRZUPES IELA 3, ZEMGALES PRIEKŠPILSĒTA, RĪGA, LV-1004",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 225,
      "location": { "lat": 56.9175581, "lng": 24.0936252 }
    },
    {
      "name": "Rīgas 135. pirmsskolas izglītības iestāde \"Liepziediņi\"",
      "address": "ČIEKURKALNA 1. LĪNIJA 53a, ZIEMEĻU RAJONS, RĪGA, LV-1026",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 358,
      "location": { "lat": 56.9825287, "lng": 24.1776282 }
    },
    {
      "name": "Rīgas 13. pirmsskolas izglītības iestāde \"Ābecītis\"",
      "address": "ALTONAVAS IELA 1, ZEMGALES PRIEKŠPILSĒTA, RĪGA, LV-1004",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 574,
      "location": { "lat": 56.9263641, "lng": 24.0883946 }
    },
    {
      "name": "Rīgas 14. pirmsskolas izglītības iestāde",
      "address": "VIRCAVAS IELA 2, KURZEMES RAJONS, RĪGA, LV-1083",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 54,
      "location": { "lat": 56.956696, "lng": 24.0491009 }
    },
    {
      "name": "Rīgas 154. pirmsskolas izglītības iestāde",
      "address": "ANDROMEDAS GATVE 3, VIDZEMES PRIEKŠPILSĒTA, RĪGA, LV-1084",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 201,
      "location": { "lat": 56.9593516, "lng": 24.1966192 }
    },
    {
      "name": "Rīgas 160. pirmsskolas izglītības iestāde",
      "address": "VANGAŽU IELA 40a, VIDZEMES PRIEKŠPILSĒTA, RĪGA, LV-1024",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 421,
      "location": { "lat": 56.9872163, "lng": 24.2342239 }
    },
    {
      "name": "Rīgas 161. pirmsskolas izglītības iestāde",
      "address": "AUGUSTA DOMBROVSKA IELA 9c, ZIEMEĻU RAJONS, RĪGA, LV-1015",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 14,
      "location": { "lat": 57.0286225, "lng": 24.1144497 }
    },
    {
      "name": "Rīgas 167. pirmsskolas izglītības iestāde",
      "address": "RAUNAS IELA 43b, VIDZEMES PRIEKŠPILSĒTA, RĪGA, LV-1084",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 589,
      "location": { "lat": 56.9667018, "lng": 24.1888519 }
    },
    {
      "name": "Rīgas 169. pirmsskolas izglītības iestāde",
      "address": "VIESTURA PROSPEKTS 27, ZIEMEĻU RAJONS, RĪGA, LV-1005",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 168,
      "location": { "lat": 56.9994993, "lng": 24.1313395 }
    },
    {
      "name": "Rīgas 170. pirmsskolas izglītības iestāde",
      "address": "FIRSA SADOVŅIKOVA IELA 20A, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1003",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 223,
      "location": { "lat": 56.9402678, "lng": 24.1352224 }
    },
    {
      "name": "Rīgas 173. pirmsskolas izglītības iestāde",
      "address": "MASKAVAS IELA 254, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1063",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 267,
      "location": { "lat": 56.9116784, "lng": 24.1745641 }
    },
    {
      "name": "Rīgas 182. pirmsskolas izglītības iestāde",
      "address": "DZELZAVAS IELA 17a, VIDZEMES PRIEKŠPILSĒTA, RĪGA, LV-1084",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 546,
      "location": { "lat": 56.96324190000001, "lng": 24.1732213 }
    },
    {
      "name": "Rīgas 192. pirmsskolas izglītības iestāde",
      "address": "KĀRĻA VATSONA IELA 11A, ZIEMEĻU RAJONS, RĪGA, LV-1014",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 83,
      "location": { "lat": 56.996693, "lng": 24.1589285 }
    },
    {
      "name": "Rīgas 197. pirmsskolas izglītības iestāde",
      "address": "BIRZES IELA 44, KURZEMES RAJONS, RĪGA, LV-1016",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 40,
      "location": { "lat": 57.03717349999999, "lng": 24.0270884 }
    },
    {
      "name": "Rīgas 200. pirmsskolas izglītības iestāde",
      "address": "AKAS IELA 1, CENTRA RAJONS, RĪGA, LV-1011",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 943,
      "location": { "lat": 56.9558368, "lng": 24.1232437 }
    },
    {
      "name": "Rīgas 208. pirmsskolas izglītības iestāde",
      "address": "SALASPILS IELA 18 k-5, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1057",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 254,
      "location": { "lat": 56.9179739, "lng": 24.1828819 }
    },
    {
      "name": "Rīgas 209. pirmsskolas izglītības iestāde \"Bitīte\"",
      "address": "BIŠU IELA 5, ZEMGALES PRIEKŠPILSĒTA, RĪGA, LV-1002",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 341,
      "location": { "lat": 56.9415704, "lng": 24.07701 }
    },
    {
      "name": "Rīgas 213. pirmsskolas izglītības iestāde",
      "address": "VESETAS IELA 11, VIDZEMES PRIEKŠPILSĒTA, RĪGA, LV-1013",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 872,
      "location": { "lat": 56.96534029999999, "lng": 24.1232541 }
    },
    {
      "name": "Rīgas 215. pirmsskolas izglītības iestāde",
      "address": "USMAS IELA 10, KURZEMES RAJONS, RĪGA, LV-1083",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 185,
      "location": { "lat": 56.9528161, "lng": 24.0496581 }
    },
    {
      "name": "Rīgas 216. pirmsskolas izglītības iestāde",
      "address": "SALASPILS IELA 10, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1057",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 174,
      "location": { "lat": 56.9199359, "lng": 24.1797194 }
    },
    {
      "name": "Rīgas 21. pirmsskolas izglītības iestāde \"Laimiņa\"",
      "address": "KALNGALES IELA 2, ZIEMEĻU RAJONS, RĪGA, LV-1015",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 100,
      "location": { "lat": 57.0385347, "lng": 24.1007541 }
    },
    {
      "name": "Rīgas 220. pirmsskolas izglītības iestāde",
      "address": "IZVALTAS IELA 2, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1057",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 216,
      "location": { "lat": 56.9128665, "lng": 24.1805018 }
    },
    {
      "name": "Rīgas 221. pirmsskolas izglītības iestāde",
      "address": "KAZARMU IELA 1a, VIDZEMES PRIEKŠPILSĒTA, RĪGA, LV-1013",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 418,
      "location": { "lat": 56.9743067, "lng": 24.1397809 }
    },
    {
      "name": "Rīgas 224. pirmsskolas izglītības iestāde",
      "address": "PRŪŠU IELA 82, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1057",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 206,
      "location": { "lat": 56.90619179999999, "lng": 24.2005295 }
    },
    {
      "name": "Rīgas 225. pirmsskolas izglītības iestāde",
      "address": "IKŠĶILES IELA 10, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1057",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 152,
      "location": { "lat": 56.9019962, "lng": 24.2095047 }
    },
    {
      "name": "Rīgas 229. pirmsskolas izglītības iestāde",
      "address": "OGRES IELA 8, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1019",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 184,
      "location": { "lat": 56.926002, "lng": 24.1651432 }
    },
    {
      "name": "Rīgas 232. pirmsskolas izglītības iestāde",
      "address": "AUGUSTA DOMBROVSKA IELA 87, ZIEMEĻU RAJONS, RĪGA, LV-1015",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 15,
      "location": { "lat": 57.0383349, "lng": 24.0925263 }
    },
    {
      "name": "Rīgas 233. pirmsskolas izglītības iestāde",
      "address": "MADONAS IELA 24B, VIDZEMES PRIEKŠPILSĒTA, RĪGA, LV-1084",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 210,
      "location": { "lat": 56.9595223, "lng": 24.1713072 }
    },
    {
      "name": "Rīgas 234. pirmsskolas izglītības iestāde",
      "address": "KURZEMES PROSPEKTS 86C, KURZEMES RAJONS, RĪGA, LV-1069",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 123,
      "location": { "lat": 56.96713829999999, "lng": 24.0140543 }
    },
    {
      "name": "Rīgas 241. pirmsskolas izglītības iestāde",
      "address": "HIPOKRĀTA IELA 25, VIDZEMES PRIEKŠPILSĒTA, RĪGA, LV-1079",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 300,
      "location": { "lat": 56.9652299, "lng": 24.2377982 }
    },
    {
      "name": "Rīgas 244. pirmsskolas izglītības iestāde",
      "address": "MARSA GATVE 8, VIDZEMES PRIEKŠPILSĒTA, RĪGA, LV-1082",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 192,
      "location": { "lat": 56.9513732, "lng": 24.2009468 }
    },
    {
      "name": "Rīgas 251. pirmsskolas izglītības iestāde \"Mežciems\"",
      "address": "MEŽCIEMA IELA 43A, VIDZEMES PRIEKŠPILSĒTA, RĪGA, LV-1079",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 414,
      "location": { "lat": 56.972378, "lng": 24.2385724 }
    },
    {
      "name": "Rīgas 255. pirmsskolas izglītības iestāde",
      "address": "AKADĒMIĶA MSTISLAVA KELDIŠA IELA 5, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1082",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 257,
      "location": { "lat": 56.9408026, "lng": 24.1983758 }
    },
    {
      "name": "Rīgas 256. pirmsskolas izglītības iestāde",
      "address": "ILŪKSTES IELA 28, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1082",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 142,
      "location": { "lat": 56.94300639999999, "lng": 24.1971872 }
    },
    {
      "name": "Rīgas 258. pirmsskolas izglītības iestāde",
      "address": "TĪNŪŽU IELA 1, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1021",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 101,
      "location": { "lat": 56.9351144, "lng": 24.2055427 }
    },
    {
      "name": "Rīgas 262. pirmsskolas izglītības iestāde",
      "address": "JUKUMA VĀCIEŠA IELA 2E, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1021",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 130,
      "location": { "lat": 56.9329671, "lng": 24.206171 }
    },
    {
      "name": "Rīgas 266. pirmsskolas izglītības iestāde",
      "address": "PĻAVNIEKU IELA 4, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1021",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 218,
      "location": { "lat": 56.9415299, "lng": 24.21018 }
    },
    {
      "name": "Rīgas 267. pirmsskolas izglītības iestāde",
      "address": "DRAVNIEKU IELA 8, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1021",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 86,
      "location": { "lat": 56.9433064, "lng": 24.2115214 }
    },
    {
      "name": "Rīgas 270. pirmsskolas izglītības iestāde",
      "address": "SALNAS IELA 18, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1021",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 158,
      "location": { "lat": 56.9417935, "lng": 24.2239712 }
    },
    {
      "name": "Rīgas 272. pirmsskolas izglītības iestāde \"Pērlīte\"",
      "address": "JELGAVAS IELA 86A, ZEMGALES PRIEKŠPILSĒTA, RĪGA, LV-1004",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 201,
      "location": { "lat": 56.92483199999999, "lng": 24.0920301 }
    },
    {
      "name": "Rīgas 275. pirmsskolas izglītības iestāde \"Austriņa\"",
      "address": "DIŽOZOLU IELA 6, ZEMGALES PRIEKŠPILSĒTA, RĪGA, LV-1058",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 640,
      "location": { "lat": 56.9025779, "lng": 24.0971291 }
    },
    {
      "name": "Rīgas 27. pirmsskolas izglītības iestāde",
      "address": "STENDES IELA 4, ZEMGALES PRIEKŠPILSĒTA, RĪGA, LV-1046",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 190,
      "location": { "lat": 56.9414304, "lng": 24.0387598 }
    },
    {
      "name": "Rīgas 36. pirmsskolas izglītības iestāde",
      "address": "LUGAŽU IELA 8, ZIEMEĻU RAJONS, RĪGA, LV-1045",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 63,
      "location": { "lat": 56.9745283, "lng": 24.1071588 }
    },
    {
      "name": "Rīgas 41. pirmsskolas izglītības iestāde",
      "address": "LUDZAS IELA 74, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1003",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 78,
      "location": { "lat": 56.9405976, "lng": 24.1515117 }
    },
    {
      "name": "Rīgas 42. pirmsskolas izglītības iestāde",
      "address": "SOFIJAS IELA 3, ZIEMEĻU RAJONS, RĪGA, LV-1005",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 38,
      "location": { "lat": 56.99895489999999, "lng": 24.1200009 }
    },
    {
      "name": "Rīgas 46. pirmsskolas izglītības iestāde",
      "address": "VECUMNIEKU IELA 5a, KURZEMES RAJONS, RĪGA, LV-1067",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 126,
      "location": { "lat": 56.9547998, "lng": 24.0323385 }
    },
    {
      "name": "Rīgas 49. pirmsskolas izglītības iestāde",
      "address": "GROSTONAS IELA 6, VIDZEMES PRIEKŠPILSĒTA, RĪGA, LV-1013",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 656,
      "location": { "lat": 56.9655994, "lng": 24.121811 }
    },
    {
      "name": "Rīgas 4. pirmsskolas izglītības iestāde \"Avotiņš\"",
      "address": "ĪSLĪCES IELA 10, ZEMGALES PRIEKŠPILSĒTA, RĪGA, LV-1058",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 256,
      "location": { "lat": 56.9011181, "lng": 24.0828778 }
    },
    {
      "name": "Rīgas 57. pirmsskolas izglītības iestāde",
      "address": "MAZĀ CAUNES IELA 3, VIDZEMES PRIEKŠPILSĒTA, RĪGA, LV-1006",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 189,
      "location": { "lat": 56.98101759999999, "lng": 24.1863617 }
    },
    {
      "name": "Rīgas 5. pirmsskolas izglītības iestāde \"Čiekuriņš\"",
      "address": "GAUJAS IELA 32b, ZIEMEĻU RAJONS, RĪGA, LV-1026",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 276,
      "location": { "lat": 56.9878095, "lng": 24.1662531 }
    },
    {
      "name": "Rīgas 61. pirmsskolas izglītības iestāde",
      "address": "VAIDAVAS IELA 11, VIDZEMES PRIEKŠPILSĒTA, RĪGA, LV-1084",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 325,
      "location": { "lat": 56.96150489999999, "lng": 24.1783901 }
    },
    {
      "name": "Rīgas 62. pirmsskolas izglītības iestāde",
      "address": "ALĪSES IELA 19, KURZEMES RAJONS, RĪGA, LV-1046",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 152,
      "location": { "lat": 56.9470645, "lng": 24.0675065 }
    },
    {
      "name": "Rīgas 80. pirmsskolas izglītības iestāde",
      "address": "GARĀ IELA 24, KURZEMES RAJONS, RĪGA, LV-1055",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 71,
      "location": { "lat": 56.9686482, "lng": 24.05397 }
    },
    {
      "name": "Rīgas 80. vidusskola",
      "address": "ANDROMEDAS GATVE 11, VIDZEMES PRIEKŠPILSĒTA, RĪGA, LV-1084",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 90,
      "location": { "lat": 56.9581406, "lng": 24.2016791 }
    },
    {
      "name": "Rīgas 81. pirmsskolas izglītības iestāde",
      "address": "GRĪVAS IELA 15, KURZEMES RAJONS, RĪGA, LV-1055",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 34,
      "location": { "lat": 56.9650334, "lng": 24.0496185 }
    },
    {
      "name": "Rīgas 85. pamatskola",
      "address": "PURVCIEMA IELA 23A, VIDZEMES PRIEKŠPILSĒTA, RĪGA, LV-1035",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 135,
      "location": { "lat": 56.9549234, "lng": 24.1730822 }
    },
    {
      "name": "Rīgas 94. pirmsskolas izglītības iestāde",
      "address": "KRIŠJĀŅA BARONA IELA 97b, CENTRA RAJONS, RĪGA, LV-1012",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 601,
      "location": { "lat": 56.9627359, "lng": 24.140658 }
    },
    {
      "name": "Rīgas 97. pirmsskolas izglītības iestāde",
      "address": "IKŠĶILES IELA 8, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1057",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 118,
      "location": { "lat": 56.9008715, "lng": 24.2092949 }
    },
    {
      "name": "Rīgas Juglas vidusskola",
      "address": "KVĒLES IELA 64, VIDZEMES PRIEKŠPILSĒTA, RĪGA, LV-1064",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 464,
      "location": { "lat": 56.9809113, "lng": 24.2461216 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Ābelīte\"",
      "address": "KATRĪNAS IELA 5A, ZIEMEĻU RAJONS, RĪGA, LV-1045",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 234,
      "location": { "lat": 56.9674606, "lng": 24.0991673 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Annele\"",
      "address": "ANNIŅMUIŽAS BULVĀRIS 78, KURZEMES RAJONS, RĪGA, LV-1069",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 260,
      "location": { "lat": 56.9559301, "lng": 24.0067094 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Asniņš\"",
      "address": "MASKAVAS IELA 268C, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1063",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 144,
      "location": { "lat": 56.9054894, "lng": 24.1848859 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Bizmārītes\"",
      "address": "MOTORU IELA 8, KURZEMES RAJONS, RĪGA, LV-1055",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 72,
      "location": { "lat": 56.9688423, "lng": 24.0671211 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Blāzmiņa\"",
      "address": "SKUJU IELA 14, ZIEMEĻU RAJONS, RĪGA, LV-1015",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 166,
      "location": { "lat": 57.0313627, "lng": 24.1051457 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Cielaviņa\"",
      "address": "DAMMES IELA 42, KURZEMES RAJONS, RĪGA, LV-1069",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 122,
      "location": { "lat": 56.96679289999999, "lng": 24.0129659 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Domino\"",
      "address": "ILŪKSTES IELA 2, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1082",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 105,
      "location": { "lat": 56.9331308, "lng": 24.1970096 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Dzilniņa\"",
      "address": "DZILNAS IELA 20, VIDZEMES PRIEKŠPILSĒTA, RĪGA, LV-1021",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 190,
      "location": { "lat": 56.9458493, "lng": 24.2344729 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Dzīpariņš\"",
      "address": "RŪPNIECĪBAS IELA 21, ZIEMEĻU RAJONS, RĪGA, LV-1045",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 369,
      "location": { "lat": 56.9651534, "lng": 24.1020631 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Jumis\"",
      "address": "JAUNROZES IELA 12, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1035",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 111,
      "location": { "lat": 56.9464268, "lng": 24.1670564 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Kadiķītis\"",
      "address": "GARĀ IELA 31, KURZEMES RAJONS, RĪGA, LV-1055",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 161,
      "location": { "lat": 56.9695587, "lng": 24.0532638 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Kamenīte\"",
      "address": "SLOKAS IELA 126a, KURZEMES RAJONS, RĪGA, LV-1067",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 133,
      "location": { "lat": 56.9615191, "lng": 24.0279267 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Kamolītis\"",
      "address": "IĻĢUCIEMA IELA 4, KURZEMES RAJONS, RĪGA, LV-1055",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 131,
      "location": { "lat": 56.9620245, "lng": 24.051389 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Kurzeme\"",
      "address": "SLOKAS IELA 130, KURZEMES RAJONS, RĪGA, LV-1067",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 88,
      "location": { "lat": 56.9636195, "lng": 24.0193371 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Laismiņa\"",
      "address": "SLOKAS IELA 211, KURZEMES RAJONS, RĪGA, LV-1069",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 156,
      "location": { "lat": 56.9624271, "lng": 24.0049312 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Liepiņa\"",
      "address": "VIESTURA PROSPEKTS 29, ZIEMEĻU RAJONS, RĪGA, LV-1005",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 88,
      "location": { "lat": 56.9994279, "lng": 24.1287157 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Ligzdiņa\"",
      "address": "APUZES IELA 74, ZEMGALES PRIEKŠPILSĒTA, RĪGA, LV-1029",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 158,
      "location": { "lat": 56.946607, "lng": 24.0165443 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Māra\"",
      "address": "SESKU IELA 33B, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1082",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 227,
      "location": { "lat": 56.9462959, "lng": 24.1873869 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Mārdega\"",
      "address": "TALLINAS IELA 64, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1009",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 269,
      "location": { "lat": 56.9580061, "lng": 24.144394 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Margrietiņa\"",
      "address": "SLOKAS IELA 126, KURZEMES RAJONS, RĪGA, LV-1067",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 76,
      "location": { "lat": 56.96126940000001, "lng": 24.0290079 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Mežaparks\"",
      "address": "STOKHOLMAS IELA 3a, ZIEMEĻU RAJONS, RĪGA, LV-1014",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 251,
      "location": { "lat": 57.0039066, "lng": 24.1657516 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Mežrozīte\"",
      "address": "RODODENDRU IELA 6, KURZEMES RAJONS, RĪGA, LV-1083",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 94,
      "location": { "lat": 56.9487393, "lng": 24.051971 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Ozoliņš\"",
      "address": "SLĀVU IELA 19, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1073",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 119,
      "location": { "lat": 56.929967, "lng": 24.1775591 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Pasaciņa\"",
      "address": "EIŽENIJAS IELA 8, KURZEMES RAJONS, RĪGA, LV-1007",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 81,
      "location": { "lat": 56.95739159999999, "lng": 24.0595168 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Pienenītes\"",
      "address": "MORES IELA 8, ZIEMEĻU RAJONS, RĪGA, LV-1034",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 93,
      "location": { "lat": 57.0178604, "lng": 24.1358365 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Pīlādzītis\"",
      "address": "AUGŠIELA 8, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1009",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 125,
      "location": { "lat": 56.95422809999999, "lng": 24.1552965 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Priedīte\"",
      "address": "VALENTĪNA IELA 10a, KURZEMES RAJONS, RĪGA, LV-1046",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 212,
      "location": { "lat": 56.9432549, "lng": 24.0575416 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Pūcīte\"",
      "address": "ĒRGĻU IELA 1, CENTRA RAJONS, RĪGA, LV-1012",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 568,
      "location": { "lat": 56.962212, "lng": 24.1457011 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Riekstiņš\"",
      "address": "RIEKSTU IELA 14, KURZEMES RAJONS, RĪGA, LV-1055",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 67,
      "location": { "lat": 56.9672753, "lng": 24.0641105 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Rotaļa\"",
      "address": "LAUKU IELA 2b, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1009",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 225,
      "location": { "lat": 56.956349, "lng": 24.1505122 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Rūķītis\"",
      "address": "VECMĪLGRĀVJA 1. LĪNIJA 41, ZIEMEĻU RAJONS, RĪGA, LV-1015",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 114,
      "location": { "lat": 57.0318447, "lng": 24.099021 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Saulstariņi\"",
      "address": "GOBAS IELA 27, KURZEMES RAJONS, RĪGA, LV-1016",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 72,
      "location": { "lat": 57.031566, "lng": 24.053183 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Sprīdītis\"",
      "address": "PĀRSLAS IELA 16, ZEMGALES PRIEKŠPILSĒTA, RĪGA, LV-1002",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 385,
      "location": { "lat": 56.93386839999999, "lng": 24.0618458 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Vadakstīte\"",
      "address": "VADAKSTES IELA 16, ZEMGALES PRIEKŠPILSĒTA, RĪGA, LV-1058",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 258,
      "location": { "lat": 56.9136798, "lng": 24.0947607 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Zilbīte\"",
      "address": "MALNAVAS IELA 4, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1057",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 28,
      "location": { "lat": 56.9084793, "lng": 24.1875465 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Zīļuks\"",
      "address": "HIPOKRĀTA IELA 25a, VIDZEMES PRIEKŠPILSĒTA, RĪGA, LV-1079",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 494,
      "location": { "lat": 56.9639428, "lng": 24.2376845 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Zvaigznīte\"",
      "address": "ZVAIGŽŅU IELA 6, LATGALES PRIEKŠPILSĒTA, RĪGA, LV-1009",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 318,
      "location": { "lat": 56.9588034, "lng": 24.1467808 }
    },
    {
      "name": "Rīgas pirmsskolas izglītības iestāde \"Zvaniņš\"",
      "address": "IMANTAS 18. LĪNIJA 5A, ZEMGALES PRIEKŠPILSĒTA, RĪGA, LV-1029",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 180,
      "location": { "lat": 56.9440301, "lng": 24.0055037 }
    },
    {
      "name": "Rīgas Valdorfskola",
      "address": "BALTĀ IELA 10, KURZEMES RAJONS, RĪGA, LV-1055",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 111,
      "location": { "lat": 56.9680397, "lng": 24.0651937 }
    },
    {
      "name": "Rīgas Ziepniekkalna pirmsskola",
      "address": "SVĒTES IELA 7, ZEMGALES PRIEKŠPILSĒTA, RĪGA, LV-1058",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 364,
      "location": { "lat": 56.9139421, "lng": 24.0916502 }
    },
    {
      "name": "Rīgas Zolitūdes pirmsskola",
      "address": "IMANTAS 18. LĪNIJA 3A, ZEMGALES PRIEKŠPILSĒTA, RĪGA, LV-1029",
      "language": "Latviešu",
      "age": 1.5,
      "applications": 166,
      "location": { "lat": 56.9443492, "lng": 24.0047648 }
    }
];  

// Initialize and add the map
function initMap() {
    // The location of riga
    const riga = { lat: 56.953677, lng: 24.10037 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: riga,
    });

    places.forEach(place => {
        const contentString = `<div class="content">Name: <b>${place.name}</b><br>Address:${place.address}<br>Language: ${place.language}<br>Min age: ${place.age}<br>Applications: ${place.applications}</div>`
        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            ariaLabel: "Uluru",
          });
        
        const marker = new google.maps.Marker({
            position: place.location,
            map: map,
            title: place.name
        });

        marker.addListener("click", () => {
            infowindow.open({
              anchor: marker,
              map,
            });
        });  
    });
  }
  
  window.initMap = initMap;