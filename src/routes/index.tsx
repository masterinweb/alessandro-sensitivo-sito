import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Facebook, Globe, Mail, MapPin, Phone, PhoneCall, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";
import { WriteToMe } from "@/components/site/WriteToMe";
import { JazzPlayer } from "@/components/site/JazzPlayer";
import { CookieBanner } from "@/components/site/CookieBanner";
import { MysticCanvas } from "@/components/site/MysticCanvas";
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
      <MysticCanvas />
      <Header />
      <Hero />
      <PrimoPasso />
      <FigureScorrimento />
      <Storia />
      <WarholConsulti />
      <Contatti />
      <Footer />
      <JazzPlayer />
      <CookieBanner />
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
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="gold-rule hidden w-12 sm:block" />
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-midnight/85 px-4 py-1.5 font-display text-xs uppercase tracking-[0.2em] text-gold shadow-glow backdrop-blur-md animate-shimmer sm:px-6 sm:py-2 sm:text-sm sm:tracking-[0.28em]">
              ✦ Percezioni Sensoriali ✦
            </span>
            <span className="gold-rule hidden w-12 sm:block" />
          </div>
        </Reveal>
        <Reveal delay={300}>
          <div className="mx-auto mt-10 max-w-xl rounded-xl border border-primary/50 bg-midnight/85 p-6 shadow-glow backdrop-blur-md md:p-8">
            <a href={telHref} aria-label="Chiama lo storico numero 337 70 92 63" className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-primary/15 text-primary shadow-glow transition-transform duration-300 hover:scale-110">
              <PhoneCall className="h-8 w-8" strokeWidth={1.6} />
            </a>
            <p className="mt-4 font-display text-xs uppercase tracking-[0.16em] sm:tracking-[0.3em] text-primary">
              Storico numero attivo da 52 anni
            </p>
            <div className="mt-5">
              <Button asChild variant="gold" size="lg" className="h-auto w-full max-w-full whitespace-normal px-4 py-4 text-center text-sm sm:w-auto sm:px-8 sm:text-base">
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
            <div className="grid min-w-0 items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
              <img
                src="/images/quadrato-sator.jpeg" alt="Il teschio del Sator — Vi propongo il primo passo: conoscermi" className="arcana-frame mx-auto w-full max-w-[220px] sm:max-w-xs md:max-w-sm rounded-md shadow-card"
                loading="lazy"
              />
              <div className="min-w-0 text-center lg:text-left">
                <p className="font-display text-xs uppercase tracking-[0.18em] sm:tracking-[0.35em] text-primary">Un contatto diretto e sincero</p>
                <h2 className="mt-4 text-3xl uppercase leading-tight text-foreground md:text-5xl">
                  Vi propongo il primo passo: <span className="text-gold animate-shimmer">conoscermi</span>
                </h2>
                <div className="gold-rule mx-auto my-6 w-24 lg:mx-0" />
                <p className="text-lg leading-relaxed sm:text-xl text-foreground/95 md:text-2xl md:leading-relaxed">
                  Starete bene sin da subito e sentirete immediatamente cosa significa e cosa si prova davvero nel parlare con un sensitivo.
                </p>
                <p className="mt-5 text-lg leading-relaxed sm:text-xl text-muted-foreground md:text-2xl md:leading-relaxed">
                  Basta una semplice telefonata per vivere questa esperienza: affronteremo insieme la tua domanda per darti fin dal primo momento una risposta chiara, rassicurante ed esaustiva.
                </p>
                <div className="mt-8">
                  <Button asChild variant="gold" size="lg" className="h-auto w-full max-w-full whitespace-normal px-4 py-4 text-center text-sm sm:w-auto sm:px-8 sm:text-base">
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
          <div className="arcana-frame mt-14 space-y-6 rounded-lg border border-primary/40 bg-midnight/80 p-6 text-lg leading-relaxed sm:text-xl text-foreground/90 shadow-card backdrop-blur-sm sm:p-8 md:p-12">
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
  return (
    <section id="consulenze" className="relative scroll-mt-24 bg-night py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <figure className="arcana-frame mx-auto overflow-hidden rounded-md shadow-card">
            <img
              src="/images/parolechiave.jpeg"
              onError={(e) => {
                const img = e.currentTarget;
                if (!img.dataset.step) {
                  img.dataset.step = "1";
                  img.src = "/images/parolechiave.jpg";
                } else if (img.dataset.step === "1") {
                  img.dataset.step = "2";
                  img.src = "/images/parolechiave.png";
                } else {
                  img.style.display = "none";
                }
              }}
              alt="Alessandro — Parole chiave del consulto"
              loading="lazy"
              className="mx-auto w-full object-contain"
            />
          </figure>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <Reveal>
            <img
              src={consultoBlu.url}
              alt="Ascolto e comprensione profonda"
              loading="lazy"
              className="arcana-frame aspect-[4/3] w-full rounded-md object-cover shadow-card"
            />
          </Reveal>
          <Reveal delay={120}>
            <img
              src={libroRosso.url}
              alt="Libro con candele accese"
              loading="lazy"
              className="arcana-frame aspect-[4/3] w-full rounded-md object-cover shadow-card"
            />
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
    { icon: MapPin, label: "Disponibilità", value: "Consulti in tutta Italia", href: undefined },
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
        <div className="mt-16 grid min-w-0 gap-10 lg:grid-cols-2 lg:gap-12">
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
                <Button asChild variant="gold" size="lg" className="h-auto w-full max-w-full whitespace-normal px-4 py-4 text-center text-sm sm:px-8 sm:text-base">
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
            <div className="arcana-frame rounded-md bg-card p-5 shadow-card sm:p-8 md:p-10">
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
      <p className="mt-3 font-display text-xs uppercase tracking-[0.18em] sm:tracking-[0.35em] text-muted-foreground">
        Sensitivo · Chiaroveggente · In tutta Italia
      </p>
      <p className="mt-6 text-lg text-muted-foreground">
        Il primo passo: una chiamata — <a href={telHref} className="text-primary hover:underline">337 70 92 63</a>
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <Link to="/privacy-policy" className="transition-colors hover:text-primary">Privacy Policy</Link>
        <Link to="/cookie-policy" className="transition-colors hover:text-primary">Cookie Policy</Link>
        <Link to="/note-legali" className="transition-colors hover:text-primary">Note Legali</Link>
      </div>
      <p className="mt-6 text-sm text-muted-foreground/70">© {new Date().getFullYear()} Alessandro Sensitivo · Cell. 337 70 92 63</p>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-primary/40 bg-midnight/95 px-3 py-2.5 backdrop-blur-md lg:hidden">
      <a
        href={telHref}
        className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 font-display text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground shadow-glow transition-opacity active:opacity-90 sm:text-sm"
      >
        <Phone className="h-4 w-4 shrink-0" />
        <span>Chiama ora · 337 70 92 63</span>
      </a>
    </div>
  );
}