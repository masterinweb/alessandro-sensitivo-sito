import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Briefcase,
  Eye,
  Facebook,
  Globe,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Sparkles,
  Youtube,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { LightCard } from "@/components/site/LightCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";
import { WriteToMe } from "@/components/site/WriteToMe";
import { CONTACT, telHref, whatsappHref } from "@/lib/contact";

import hero from "@/assets/ponte-di-luce.jpg.asset.json";
import occhioOro from "@/assets/occhio-oro.jpeg.asset.json";
import consulto from "@/assets/consulto-tramonto.jpeg.asset.json";
import libro from "@/assets/libro-candele.jpeg.asset.json";
import sigillo from "@/assets/sigillo-luna.jpeg.asset.json";
import sguardo from "@/assets/sguardo-rosso.jpeg.asset.json";
import veggente from "@/assets/occhio-veggente.jpeg.asset.json";
import pendolo from "@/assets/pendolo.jpeg.asset.json";
import tetra from "@/assets/tetragrammaton.jpeg.asset.json";
import ritratto from "@/assets/alessandro-ritratto.jpg.asset.json";
import occhiDipinti from "@/assets/occhi-dipinti.jpeg.asset.json";
import sator from "@/assets/quadrato-sator.jpeg.asset.json";
import libroOro from "@/assets/libro-candele-oro.jpeg.asset.json";

const TITLE = "Alessandro Della Marca — Sensitivo e Chiaroveggente Toscano";
const DESCRIPTION =
  "Alessandro Sensitivo, il veggente toscano che negli anni '90 era il Mago dei VIP. Consulti di chiaroveggenza, tarocchi, amore e lavoro in tutta Italia. Chiama il 337 709263.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: CONTACT.name,
          alternateName: ["Alessandro Sensitivo", "Alexander"],
          jobTitle: "Sensitivo chiaroveggente",
          telephone: CONTACT.phoneE164,
          email: CONTACT.email,
          address: { "@type": "PostalAddress", addressLocality: "Grosseto", addressCountry: "IT" },
          sameAs: [CONTACT.website, CONTACT.facebook, CONTACT.youtube, CONTACT.tiktok],
        }),
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#luce", label: "La luce" },
  { href: "#storia", label: "La storia" },
  { href: "#consulti", label: "Consulti" },
  { href: "#carta", label: "La tua carta" },
  { href: "#contatti", label: "Contatti" },
];

function Index() {
  return (
    <div className="relative overflow-x-hidden bg-background">
      <Header />
      <Hero />
      <Manifesto />
      <Storia />
      <Consulti />
      <Autentico />
      <Carta />
      <Galleria />
      <Contatti />
      <Footer />
      <MobileBar />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-midnight/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href="#" className="font-script text-3xl text-primary">
          Alessandro Sensitivo
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <Button asChild variant="veil" size="sm" className="hidden sm:inline-flex">
          <a href={telHref}>
            <Phone /> {CONTACT.phoneDisplay}
          </a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center pt-16">
      <img
        src={hero.url}
        alt="Due mani unite da un ponte di luce dorata sopra le colline toscane di notte"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="bg-veil absolute inset-0" />
      <div className="relative mx-auto max-w-4xl px-5 pb-24 pt-10 text-center">
        <Reveal>
          <p className="font-script text-4xl text-primary md:text-6xl">Alessandro Della Marca</p>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="mt-4 text-4xl uppercase leading-tight text-foreground md:text-7xl">
            Un ponte di <span className="text-gold animate-shimmer">luce</span>
            <br /> tra te e la tua strada
          </h1>
        </Reveal>
        <Reveal delay={300}>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-foreground/85 md:text-2xl">
            Sensitivo e chiaroveggente toscano. Trent'anni con lo stesso nome, lo stesso volto e lo
            stesso numero di telefono, sempre dalla parte delle persone.
          </p>
        </Reveal>
        <Reveal delay={450}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="gold" size="xl">
              <a href={telHref}>
                <Phone /> Chiama {CONTACT.phoneDisplay}
              </a>
            </Button>
            <Button asChild variant="veil" size="xl">
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Scrivi su WhatsApp
              </a>
            </Button>
          </div>
          <p className="mt-6 font-display text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Il primo passo: una chiamata
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section id="luce" className="relative scroll-mt-16 py-28 md:py-36">
      <div className="starfield absolute inset-0 animate-twinkle opacity-60" />
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <SectionTitle kicker="Il suo credo" title="Lo stesso lume per tutti" />
        </Reveal>
        <Reveal delay={150}>
          <blockquote className="mt-14 text-2xl leading-relaxed text-foreground md:text-[2rem] md:leading-snug">
            <span className="text-gold font-display text-6xl leading-none">“</span>
            Per me non esistono classi, appartenenze o etichette. Ogni persona è un{" "}
            <em className="text-primary">essere di luce</em>, venuto sulla Terra per nutrire gli
            altri e lasciarsi nutrire.
          </blockquote>
        </Reveal>
        <Reveal delay={300}>
          <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
            Il mondo è com'è perché troppo spesso si cerca di spegnere la luce altrui per brillare di
            più. Ma Dio ha dato a tutti lo stesso lume e le stesse possibilità: sta a noi farle
            crescere nel modo giusto.
          </p>
          <p className="mt-10 font-script text-4xl text-primary">Alessandro</p>
        </Reveal>
      </div>
    </section>
  );
}

const TIMELINE = [
  {
    era: "Le radici",
    title: "Firenze, pane ed esoterismo",
    text: "Nato in una famiglia nobile e cresciuto nella Firenze bene, fin da bambino mostra un dono particolare per le persone: sempre pronto a fare da scudo, da mentore, a volte da insegnante.",
  },
  {
    era: "Anni '90",
    title: "Il Mago dei VIP",
    text: "Con il nome d'arte Alexander frequenta i salotti buoni ed entra in televisione, dove esegue dal vivo esperimenti esoterici, anche a Uno Mattina. Mai come fenomeno da baraccone.",
  },
  {
    era: "La scelta",
    title: "Lontano dal mondo finto",
    text: "Assaporata la finzione dello spettacolo, decide di lasciarlo per dedicarsi davvero ai suoi cari. E per lui sono cari tutti: amici, clienti, chiunque bussi alla sua porta.",
  },
  {
    era: "Oggi",
    title: "Un ponte di energia pura",
    text: "Dalla sede di Grosseto segue persone in tutta Italia, al telefono e online. Con un'unica missione: aiutarti a tirare fuori il tuo vero potenziale.",
  },
];

function Storia() {
  return (
    <section id="storia" className="relative scroll-mt-16 bg-night py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionTitle kicker="Chi è Alessandro" title="Una vita al servizio degli altri" />
        </Reveal>
        <div className="mt-20 grid items-start gap-16 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="lg:sticky lg:top-28">
            <figure className="arcana-frame overflow-hidden rounded-md shadow-card">
              <img
                src={ritratto.url}
                alt="Alessandro Della Marca negli anni '90, ritratto in bianco e nero"
                className="w-full object-cover grayscale"
                loading="lazy"
              />
              <figcaption className="border-t border-primary/30 bg-midnight/80 px-5 py-3 text-center">
                <span className="font-script text-3xl text-primary">Alexander</span>
                <span className="ml-3 font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  anni '90
                </span>
              </figcaption>
            </figure>
          </Reveal>
          <ol className="relative space-y-14 border-l border-primary/30 pl-10">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.title} delay={i * 100}>
                <li className="relative">
                  <span className="absolute -left-[2.85rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-primary bg-background shadow-glow">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  <p className="font-display text-xs uppercase tracking-[0.35em] text-primary">{t.era}</p>
                  <h3 className="mt-2 text-2xl uppercase text-foreground md:text-3xl">{t.title}</h3>
                  <p className="mt-4 text-xl leading-relaxed text-muted-foreground">{t.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const CONSULTI = [
  {
    n: "I",
    icon: Eye,
    title: "Chiaroveggenza",
    text: "Uno sguardo oltre il visibile per capire cosa sta accadendo davvero e dove ti porta.",
  },
  {
    n: "II",
    icon: Heart,
    title: "Amore e coppia",
    text: "Crisi, distacchi, nuovi incontri, ritorni. Per leggere i sentimenti senza illusioni.",
  },
  {
    n: "III",
    icon: Briefcase,
    title: "Lavoro e affari",
    text: "Scelte, opportunità e collaborazioni: dove conviene investire le tue energie.",
  },
  {
    n: "IV",
    icon: Sparkles,
    title: "Tarocchi e pendolo",
    text: "Arcani Maggiori e Minori, radiestesia e simboli antichi per mettere ordine nei pensieri.",
  },
  {
    n: "V",
    icon: Shield,
    title: "Rituali e protezione",
    text: "Per liberarti da energie pesanti e proteggere la tua luce da chi vorrebbe spegnerla.",
  },
];

function Consulti() {
  return (
    <section id="consulti" className="relative scroll-mt-16 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <SectionTitle kicker="I consulti" title="Cinque porte verso la chiarezza" />
        </Reveal>
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {CONSULTI.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <article className="arcana-frame group flex h-full flex-col items-center rounded-md bg-card p-8 text-center shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
                <span className="font-display text-sm tracking-[0.3em] text-muted-foreground">{c.n}</span>
                <div className="my-8 flex h-20 w-20 items-center justify-center rounded-full border border-primary/40 transition-colors group-hover:border-primary">
                  <c.icon className="h-8 w-8 text-primary" strokeWidth={1.2} />
                </div>
                <h3 className="text-lg uppercase text-foreground">{c.title}</h3>
                <div className="gold-rule my-5 w-12" />
                <p className="text-lg leading-relaxed text-muted-foreground">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
            <img
              src={consulto.url}
              alt="Chiarezza e comprensione profonda: due mani su un tavolo al tramonto"
              className="arcana-frame w-full rounded-md shadow-card"
              loading="lazy"
            />
            <div>
              <h3 className="text-3xl uppercase text-foreground md:text-4xl">
                Ascolto profondo, <span className="text-gold">nessuna illusione</span>
              </h3>
              <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
                «Non posso garantirti risultati immediati, ma un cambiamento reale, una ritrovata
                energia e la voglia di fare: questo te lo posso garantire.»
              </p>
              <p className="mt-4 text-xl leading-relaxed text-muted-foreground">
                Ogni consulto parte dall'ascolto. Alessandro ti dirà sempre la verità e saprà esserti
                amico.
              </p>
              <Button asChild variant="gold" size="xl" className="mt-10">
                <a href={telHref}>
                  <Phone /> Prenota il tuo consulto
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const PILLARS = [
  { title: "Nome e cognome veri", text: "Alessandro Della Marca. Nessuno pseudonimo dietro cui nascondersi." },
  { title: "Lo stesso numero da 30 anni", text: "337 709263: chi ti conosce davvero non ha bisogno di cambiare numero." },
  { title: "Nessuna promessa impossibile", text: "Solo verità, rispetto e un percorso che resta sempre nelle tue mani." },
];

function Autentico() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <img src={sguardo.url} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionTitle kicker="Diffida dalle imitazioni" title="Il web è pieno di ciarlatani" />
          <p className="mx-auto mt-10 max-w-3xl text-center text-xl leading-relaxed text-muted-foreground md:text-2xl">
            Millantatori e truffatori cercano di rubare la scena a chi lavora con il cuore. Prima di
            fare scelte sbagliate, chiama Alessandro e mettilo alla prova.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="h-full rounded-md border border-primary/30 bg-midnight/70 p-8 backdrop-blur-sm">
                <span className="text-gold font-display text-4xl">0{i + 1}</span>
                <h3 className="mt-4 text-xl uppercase text-foreground">{p.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Carta() {
  return (
    <section id="carta" className="relative scroll-mt-16 bg-night py-28 md:py-36">
      <div className="starfield absolute inset-0 animate-twinkle opacity-50" />
      <div className="relative mx-auto max-w-5xl px-5">
        <Reveal>
          <SectionTitle kicker="Un dono per te" title="Pesca la tua carta di luce" />
          <p className="mx-auto mt-8 max-w-xl text-center text-xl text-muted-foreground">
            Chiudi gli occhi, respira, pensa a ciò che ti sta a cuore. Poi tocca la carta.
          </p>
        </Reveal>
        <Reveal delay={150} className="mt-16">
          <LightCard />
        </Reveal>
      </div>
    </section>
  );
}

const GALLERY = [
  { src: occhiDipinti.url, alt: "L'occhio del veggente: due occhi di fuoco sotto una stella" },
  { src: veggente.url, alt: "L'occhio del veggente" },
  { src: occhioOro.url, alt: "Occhio dorato da cui scende un raggio di luce" },
  { src: sigillo.url, alt: "Sigillo con luna e occhio, Alessandro Sensitivo" },
  { src: libro.url, alt: "Libro con pentacolo tra le candele" },
  { src: pendolo.url, alt: "Pendolo di lapislazzuli su una carta astrale" },
  { src: tetra.url, alt: "Pentacolo del Tetragrammaton dorato" },
  { src: sator.url, alt: "Antico teschio inciso con il quadrato del Sator" },
  { src: libroOro.url, alt: "Libro nero con pentacolo tra candele accese" },
];

function Galleria() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <SectionTitle kicker="Dal suo studio" title="Simboli e strumenti" />
        </Reveal>
        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} delay={i * 80} className="mb-6 break-inside-avoid">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="arcana-frame w-full rounded-md shadow-card transition-transform duration-700 hover:scale-[1.02]"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contatti() {
  const items = [
    { icon: Phone, label: "Telefono", value: CONTACT.phoneDisplay, href: telHref },
    { icon: MessageCircle, label: "WhatsApp", value: CONTACT.phoneDisplay, href: whatsappHref() },
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Globe, label: "Altro sito", value: CONTACT.websiteDisplay, href: CONTACT.website },
    { icon: MapPin, label: "Sede principale", value: "Grosseto · consulti in tutta Italia", href: undefined },
  ];
  return (
    <section id="contatti" className="relative scroll-mt-16 bg-night py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionTitle kicker="Mettiti in contatto" title="Alessandro ti risponde" />
          <p className="mx-auto mt-8 max-w-2xl text-center text-xl text-muted-foreground">
            Rispondo subito, oppure ti richiamo appena posso. Al telefono, su WhatsApp o online,
            ovunque tu sia.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-4">
              {items.map((it) => {
                const inner = (
                  <>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/40">
                      <it.icon className="h-5 w-5 text-primary" strokeWidth={1.4} />
                    </span>
                    <span>
                      <span className="block font-display text-xs uppercase tracking-[0.25em] text-muted-foreground">
                        {it.label}
                      </span>
                      <span className="block break-all text-xl text-foreground">{it.value}</span>
                    </span>
                  </>
                );
                return it.href ? (
                  <a
                    key={it.label}
                    href={it.href}
                    target={it.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 rounded-md border border-border bg-card/60 p-5 transition-colors hover:border-primary/60"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={it.label} className="flex items-center gap-5 rounded-md border border-border bg-card/60 p-5">
                    {inner}
                  </div>
                );
              })}
              <div className="flex gap-3 pt-4">
                <SocialLink href={CONTACT.facebook} label="Facebook">
                  <Facebook className="h-5 w-5" strokeWidth={1.4} />
                </SocialLink>
                <SocialLink href={CONTACT.youtube} label="YouTube">
                  <Youtube className="h-5 w-5" strokeWidth={1.4} />
                </SocialLink>
                <SocialLink href={CONTACT.tiktok} label="TikTok">
                  <span className="font-display text-xs">TT</span>
                </SocialLink>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="arcana-frame rounded-md bg-card p-8 shadow-card md:p-10">
              <h3 className="text-2xl uppercase text-foreground">Scrivimi</h3>
              <p className="mb-8 mt-2 text-lg text-muted-foreground">
                Lasciami due righe: ti rispondo personalmente.
              </p>
              <WriteToMe />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 text-primary transition-all hover:border-primary hover:shadow-glow"
    >
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-midnight pb-28 pt-14 text-center lg:pb-14">
      <p className="font-script text-4xl text-primary">Alessandro Della Marca</p>
      <p className="mt-3 font-display text-xs uppercase tracking-[0.35em] text-muted-foreground">
        Sensitivo · Chiaroveggente · Grosseto
      </p>
      <p className="mt-6 text-lg text-muted-foreground">
        Il primo passo: una chiamata —{" "}
        <a href={telHref} className="text-primary hover:underline">
          {CONTACT.phoneDisplay}
        </a>
      </p>
      <p className="mt-8 text-sm text-muted-foreground/70">
        © {new Date().getFullYear()} Alessandro Della Marca
      </p>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-midnight/90 p-3 backdrop-blur-md lg:hidden">
      <Button asChild variant="gold" size="lg">
        <a href={telHref}>
          <Phone /> Chiama
        </a>
      </Button>
      <Button asChild variant="veil" size="lg">
        <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
          <MessageCircle /> WhatsApp
        </a>
      </Button>
    </div>
  );
}
