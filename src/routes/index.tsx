import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Facebook, Globe, Mail, MapPin, Phone, PhoneCall, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";
import { WriteToMe } from "@/components/site/WriteToMe";
import { JazzPlayer } from "@/components/site/JazzPlayer";
import { CONTACT, telHref } from "@/lib/contact";

import consultoBlu from "@/assets/consulto-tramonto.jpeg.asset.json";
import libroRosso from "@/assets/libro-candele.jpeg.asset.json";
import sigilloLuna from "@/assets/sigillo-luna.jpeg.asset.json";
import ritratto from "@/assets/alessandro-ritratto.jpg.asset.json";

const TITLE = "Alessandro — Sensitivo e Chiaroveggente";
const DESCRIPTION = "Alessandro, Sensitivo e Chiaroveggente. Storico numero a sei cifre 337 70 92 63 attivo da 52 anni. Se hai bisogno, chiama subito.";

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
  }),
  component: Index,
});

const NAV = [
  { href: "/chi-sono", label: "Chi sono", isRoute: true },
  { href: "#primo-passo", label: "Il primo passo" },
  { href: "#chi-sono", label: "Chi sono" },
  { href: "#consulenze", label: "Consulti" },
  { href: "#contatti", label: "Contatti" },
];

function Index() {
  return (
    <div className="relative overflow-x-hidden bg-background">
      <Header />
      <Hero />
      <PrimoPasso />
      <FigureScorrimento />
      <Storia />
      <WarholConsulti />
      <Contatti />
      <Footer />
      <JazzPlayer />
      <MobileBar />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-midnight/85 backdrop-blur-md">
      <div className="border-b border-primary/25 bg-primary/10 px-4 py-1.5 text-center">
        <a href={telHref} className="inline-flex flex-wrap items-center justify-center gap-1.5 font-display text-[11px] uppercase tracking-[0.15em] text-primary transition-opacity hover:opacity-85 sm:gap-2 sm:text-xs sm:tracking-[0.22em]">
          <PhoneCall className="h-3.5 w-3.5 animate-pulse" />
          <span>Se hai bisogno, chiama subito!</span>
          <span className="font-semibold underline underline-offset-4">337 70 92 63</span>
        </a>
      </div>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href="#" className="font-script text-3xl text-primary">Alessandro</a>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) =>
            n.isRoute ? (
              <Link key={n.href} to={n.href} className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary">{n.label}</Link>
            ) : (
              <a key={n.href} href={n.href} className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary">{n.label}</a>
            ),
          )}
        </nav>
        <Button asChild variant="veil" size="sm" className="hidden sm:inline-flex">
          <a href={telHref}><Phone /> 337 70 92 63</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[95svh] items-center justify-center pt-36 sm:pt-28">
      <img
        src="/images/alessandro-teschio.jpg"
        onError={(e) => { e.currentTarget.src = ritratto.url; }}
        alt="Alessandro Sensitivo e Chiaroveggente"
        className="absolute inset-0 h-full w-full object-cover object-top grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/75 via-midnight/60 to-background" />
      <div className="relative mx-auto max-w-4xl px-5 pb-16 pt-10 text-center">
        <Reveal>
          <p className="font-script text-5xl text-primary md:text-7xl">Alessandro</p>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="mt-3 text-3xl uppercase leading-tight text-foreground sm:text-4xl md:text-7xl">
            Sensitivo e <span className="text-gold animate-shimmer">Chiaroveggente</span>
          </h1>
        </Reveal>
        <Reveal delay={300}>
          <div className="mx-auto mt-10 max-w-xl rounded-xl border border-primary/50 bg-midnight/85 p-6 shadow-glow backdrop-blur-md md:p-8">
            <a href={telHref} aria-label="Chiama lo storico numero 337 70 92 63" className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-primary/15 text-primary shadow-glow transition-transform duration-300 hover:scale-110">
              <PhoneCall className="h-8 w-8" strokeWidth={1.6} />
            </a>
            <p className="mt-4 font-display text-xs uppercase tracking-[0.3em] text-primary">
              Storico numero attivo da 52 anni
            </p>
            <div className="mt-5">
              <Button asChild variant="gold" size="xl" className="w-full sm:w-auto">
                <a href={telHref}><Phone /> Chiama ora 337 70 92 63</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PrimoPasso() {
  return (
    <section id="primo-passo" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="starfield absolute inset-0 animate-twinkle opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="arcana-frame relative overflow-hidden rounded-lg border border-primary/50 bg-midnight/85 p-5 shadow-glow backdrop-blur-md sm:p-8 md:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <img
                src="/images/quadrato-sator.jpeg" alt="Il teschio del Sator — Vi propongo il primo passo: conoscermi"
                className="arcana-frame mx-auto w-full max-w-sm rounded-md shadow-card"
                loading="lazy"
              />
              <div className="text-center lg:text-left">
                <p className="font-display text-xs uppercase tracking-[0.35em] text-primary">Un contatto diretto e sincero</p>
                <h2 className="mt-4 text-3xl uppercase leading-tight text-foreground md:text-5xl">
                  Vi propongo il primo passo: <span className="text-gold animate-shimmer">conoscermi</span>
                </h2>
                <div className="gold-rule mx-auto my-6 w-24 lg:mx-0" />
                <p className="text-xl leading-relaxed text-foreground/95 md:text-2xl md:leading-relaxed">
                  Starete bene sin da subito e sentirete immediatamente cosa significa e cosa si prova davvero nel parlare con un sensitivo.
                </p>
                <p className="mt-5 text-xl leading-relaxed text-muted-foreground md:text-2xl md:leading-relaxed">
                  Basta una semplice telefonata per vivere questa esperienza: affronteremo insieme la tua domanda per darti fin dal primo momento una risposta chiara, rassicurante ed esaustiva.
                </p>
                <div className="mt-8">
                  <Button asChild variant="gold" size="xl">
                    <a href={telHref}><Phone /> Telefona ora · 337 70 92 63</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FigureScorrimento() {
  return (
    <section className="relative bg-night py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <figure className="arcana-frame overflow-hidden rounded-md shadow-card">
              <img src={ritratto.url} alt="Alessandro" loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
            </figure>
          </Reveal>
          <Reveal delay={150}>
            <figure className="arcana-frame overflow-hidden rounded-md shadow-card">
              <img src={sigilloLuna.url} alt="Luna e occhio" loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
function Storia() {
  return (
    <section id="chi-sono" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl uppercase text-foreground sm:text-4xl md:text-5xl">
              Chi <span className="text-gold">sono</span>
            </h2>
            <div className="gold-rule mx-auto mt-6 w-24" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="arcana-frame mt-14 space-y-6 rounded-lg border border-primary/40 bg-midnight/80 p-6 text-xl leading-relaxed text-foreground/90 shadow-card backdrop-blur-sm sm:p-8 md:p-12">
            <p>
              Mi chiamo <strong className="font-semibold text-primary">Alessandro</strong> e da{" "}
              <strong className="font-semibold text-foreground">52 anni</strong> esercito
              l&apos;attività di sensitivo e chiaroveggente con serietà, riservatezza e rispetto
              per chi si rivolge a me.
            </p>
            <p>
              Oltre mezzo secolo di esperienza sul campo significa aver ascoltato migliaia di
              storie, affrontato ogni tipo di situazione e affinato un metodo basato sulla
              chiarezza, senza illusioni né false promesse. Il mio obiettivo è offrire un punto di
              vista lucido e sincero per aiutarti a fare ordine nei momenti di dubbio o
              difficoltà.
            </p>
            <p>
              Il mio recapito telefonico — lo storico{" "}
              <a href={telHref} className="font-semibold text-primary hover:underline">
                337 70 92 63
              </a>{" "}
              a sei cifre — è rimasto invariato in tutti questi 52 anni: una scelta di trasparenza
              e continuità che testimonia la mia presenza costante e la fiducia costruita nel
              tempo con chi mi consulta.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WarholConsulti() {
  const tiles = [
    { h: "CHIAROVEGGENZA", v: "VERITÀ", bg: "bg-emerald-950/80 border-emerald-400/50", accent: "text-emerald-300" },
    { h: "AMORE", v: "ASCOLTO", bg: "bg-amber-950/70 border-primary/60", accent: "text-primary" },
    { h: "LAVORO", v: "FUTURO", bg: "bg-indigo-950/80 border-indigo-400/50", accent: "text-indigo-200" },
    { h: "CHIAREZZA", v: "FIDUCIA", bg: "bg-rose-950/70 border-rose-400/50", accent: "text-rose-200" },
  ];

  return (
    <section id="consulenze" className="relative scroll-mt-24 bg-night py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="mb-14 flex flex-col items-center text-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full border border-emerald-400/50 bg-emerald-950/50 shadow-[0_0_45px_rgba(16,185,129,0.3)]">
              <svg viewBox="0 0 64 64" className="h-16 w-16" aria-label="Stella Verde">
                <polygon points="32,4 39,23 59,23 43,35 49,55 32,43 15,55 21,35 5,23 25,23" fill="#10B981" stroke="#6EE7B7" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tiles.map((tile) => (
              <div key={tile.h} className={`relative flex h-64 items-center justify-center overflow-hidden rounded-md border p-6 shadow-card transition-transform duration-500 hover:scale-[1.02] ${tile.bg}`}>
                <span aria-hidden className="pointer-events-none select-none font-display text-2xl font-bold uppercase tracking-[0.2em] text-foreground/15 sm:text-4xl sm:tracking-[0.25em] [writing-mode:vertical-rl]">
                  {tile.v}
                </span>
                <span className={`absolute inset-x-3 text-center font-display text-lg font-semibold uppercase tracking-[0.16em] sm:text-xl sm:tracking-[0.2em] drop-shadow ${tile.accent}`}>
                  {tile.h}
                </span>
                <span aria-hidden className="pointer-events-none absolute bottom-3 right-4 font-display text-xs uppercase tracking-[0.35em] text-foreground/45">
                  {tile.v}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <Reveal>
            <img src={consultoBlu.url} alt="Ascolto e comprensione profonda" loading="lazy" className="arcana-frame aspect-[4/3] w-full rounded-md object-cover shadow-card" />
          </Reveal>
          <Reveal delay={120}>
            <img src={libroRosso.url} alt="Libro con candele accese" loading="lazy" className="arcana-frame aspect-[4/3] w-full rounded-md object-cover shadow-card" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contatti() {
  const items = [
    { icon: Phone, label: "Telefono · Storico numero da 52 anni", value: "337 70 92 63", href: telHref },
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Globe, label: "Altro sito", value: CONTACT.websiteDisplay, href: CONTACT.website },
    { icon: MapPin, label: "Sede principale", value: "Grosseto · consulti in tutta Italia", href: undefined },
  ];
  return (
    <section id="contatti" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionTitle kicker="Mettiti in contatto" title="Alessandro ti risponde" />
          <p className="mx-auto mt-8 max-w-2xl text-center text-xl text-muted-foreground">
            Rispondo subito, oppure ti richiamo appena posso al telefono.
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
                      <span className="block font-display text-xs uppercase tracking-[0.25em] text-muted-foreground">{it.label}</span>
                      <span className="block break-all text-xl text-foreground">{it.value}</span>
                    </span>
                  </>
                );
                return it.href ? (
                  <a key={it.label} href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-5 rounded-md border border-border bg-card/60 p-5 transition-colors hover:border-primary/60">
                    {inner}
                  </a>
                ) : (
                  <div key={it.label} className="flex items-center gap-5 rounded-md border border-border bg-card/60 p-5">
                    {inner}
                  </div>
                );
              })}

              <div className="pt-4">
                <Button asChild variant="gold" size="xl" className="w-full">
                  <a href={telHref}><Phone /> Chiama Alessandro · 337 70 92 63</a>
                </Button>
              </div>

              <div className="flex gap-3 pt-4">
                <SocialLink href={CONTACT.facebook} label="Facebook"><Facebook className="h-5 w-5" strokeWidth={1.4} /></SocialLink>
                <SocialLink href={CONTACT.youtube} label="YouTube"><Youtube className="h-5 w-5" strokeWidth={1.4} /></SocialLink>
                <SocialLink href={CONTACT.tiktok} label="TikTok"><span className="font-display text-xs">TT</span></SocialLink>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="arcana-frame rounded-md bg-card p-8 shadow-card md:p-10">
              <h3 className="text-2xl uppercase text-foreground">Scrivimi</h3>
              <p className="mb-8 mt-2 text-lg text-muted-foreground">Lasciami due righe: ti rispondo personalmente.</p>
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
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 text-primary transition-all hover:border-primary hover:shadow-glow">
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-midnight pb-28 pt-14 text-center lg:pb-14">
      <p className="font-script text-4xl text-primary">Alessandro</p>
      <p className="mt-3 font-display text-xs uppercase tracking-[0.35em] text-muted-foreground">
        Sensitivo · Chiaroveggente · Grosseto
      </p>
      <p className="mt-6 text-lg text-muted-foreground">
        Il primo passo: una chiamata — <a href={telHref} className="text-primary hover:underline">337 70 92 63</a>
      </p>
      <p className="mt-8 text-sm text-muted-foreground/70">© {new Date().getFullYear()} Alessandro</p>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-midnight/95 p-3 backdrop-blur-md lg:hidden">
      <Button asChild variant="gold" size="lg" className="w-full">
        <a href={telHref}><Phone /> Chiama ora 337 70 92 63</a>
      </Button>
    </div>
  );
}