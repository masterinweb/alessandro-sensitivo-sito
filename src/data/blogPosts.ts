export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  youtubeId: string;
  isShort?: boolean;
  excerpt: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "percezioni-extrasensoriali-guida-nel-cammino",
    title: "Percezioni Extrasensoriali: orientarsi quando il cammino sembra incerto",
    subtitle: "Come l'intuizione profonda aiuta a fare chiarezza nei momenti di svolta.",
    date: "24 Novembre 2026",
    readTime: "4 min",
    category: "Percezioni Extrasensoriali",
    image: "/images/alessandro-ritratto.jpg",
    youtubeId: "-Fw2NlFG8WE",
    excerpt: "La vita è un viaggio pieno di svolte e imprevisti: a volte serve una guida sincera per ritrovare lucidità e sicurezza nelle proprie scelte.",
    content: [
      "Quando attraversiamo un momento delicato, la mente tende a sovrapporre paure, dubbi e mille ipotesi diverse. In questi passaggi, le percezioni extrasensoriali rappresentano una bussola silenziosa ma concreta per leggere ciò che sta accadendo oltre la superficie.",
      "In oltre 52 anni di ascolto diretto con migliaia di persone in tutta Italia, ho imparato che la vera sensibilità non ha bisogno di effetti speciali né di false promesse: serve invece rispetto, riservatezza e uno sguardo limpido sulla realtà.",
      "Un confronto telefonico diretto permette spesso di sciogliere fin da subito il peso dell'incertezza e di guardare con maggiore serenità ai passi da compiere."
    ]
  },
  {
    slug: "cinquantadue-anni-di-ascolto-e-chiarezza",
    title: "52 anni con lo stesso nome e lo stesso numero: il valore della continuità",
    subtitle: "Perché la trasparenza e la presenza costante sono la base di ogni consulto serio.",
    date: "20 Novembre 2026",
    readTime: "5 min",
    category: "Esperienza & Metodo",
    image: "/images/libro-candele.jpeg",
    youtubeId: "FbVLlq_TsHk",
    excerpt: "Lo storico numero a sei cifre 337 70 92 63 è rimasto invariato in oltre mezzo secolo: una scelta di coerenza e rispetto verso chi chiede aiuto.",
    content: [
      "Nel mondo di oggi tutto cambia in fretta e spesso chi cerca un consiglio si trova davanti a voci anonime o promesse irrealistiche. Per me, invece, la credibilità si costruisce giorno dopo giorno mettendo sempre la propria faccia e il proprio nome.",
      "Da 52 anni rispondo personalmente allo stesso recapito telefonico a sei cifre, il 337 70 92 63: una continuità che testimonia la serietà di un percorso dedicato interamente all'ascolto degli altri.",
      "Ogni storia è unica e merita attenzione vera, senza giudizi e con la massima discrezione."
    ]
  },
  {
    slug: "un-messaggio-di-luce-e-riflessione",
    title: "Un pensiero di luce per affrontare le scelte di ogni giorno",
    subtitle: "Riflessioni brevi sull'ascolto interiore e sull'energia dei momenti decisivi.",
    date: "15 Novembre 2026",
    readTime: "3 min",
    category: "Riflessioni",
    image: "/images/sigillo-luna.jpeg",
    youtubeId: "sFztw1fupEM",
    isShort: true,
    excerpt: "Basta talvolta fermarsi un istante e ascoltare con calma per cogliere i segnali che orientano le nostre decisioni.",
    content: [
      "Spesso cerchiamo risposte complicate fuori da noi, quando il primo passo consiste nel fermarsi e fare silenzio intorno ai pensieri più rumorosi.",
      "Anche un breve momento di confronto può accendere una luce nuova su una situazione sentimentale, lavorativa o familiare che sembrava bloccata.",
      "Se senti il bisogno di confrontarti a voce, puoi chiamarmi direttamente al 337 70 92 63 per parlare insieme della tua domanda."
    ]
  }
];