import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Award, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CONTACT, telHref, whatsappHref } from "@/lib/contact";
import ritratto from "@/assets/alessandro-ritratto.jpg.asset.json";

const TITLE = "Chi sono — Alessandro Della Marca | Sensitivo e Chiaroveggente";
const DESCRIPTION =
  "Mi chiamo Alessandro e da 52 anni esercito l'attività di sensitivo e chiaroveggente con serietà, riservatezza e rispetto. Lo storico numero 337 70 92 63 invariato da oltre mezzo secolo.";

export const Route = createFileRoute("/chi-sono")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/chi-sono" },
    ],
    links: [{ rel: "canonical", href: "/chi-sono" }],
  }),
  component: ChiSonoPage,
});

const HIGHLIGHTS = [
  {
    icon: Award,
    label: "52 anni di attività",
    text: "Oltre mezzo secolo di ascolto quotidiano, esperienza sul campo e migliaia di storie affrontate con dedizione.",
  },
  {
    icon: Phone,
    label: "337 70 92 63",
    text: "Lo storico recapito a sei cifre rimasto invariato in tutti questi 52 anni: una scelta di trasparenza e continuità.",
  },
  {
    icon: ShieldCheck,
    label: "Chiarezza e rispetto",
    text: "Un metodo sincero, senza illusioni né false promesse, per aiutarti a fare ordine nei momenti di dubbio.",
  },
];

function ChiSonoPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-midnight/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link to="/" className="font-script text-3xl text-primary">
            Alessandro Sensitivo
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            <Link to="/" className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/chi-sono" className="font-display text-xs uppercase tracking-[0.25em] text-primary">
              Chi sono
            </Link>
            <a href="/#consulti" className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary">
              Consulti
            </a>
            <a href="/#carta" className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary">
              La tua carta
            </a>
            <a href="/#contatti" className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary">
              Contatti
            </a>
          </nav>
          <Button asChild variant="veil" size="sm" className="hidden sm:inline-flex">
            <a href={telHref}>
              <Phone /> 337 70 92 63
            </a>
          </Button>
        </div>
      </header>

      <main className="relative pb-28 pt-28 md:pb-36 md:pt-36">
        <div className="starfield absolute inset-0 animate-twinkle opacity-40" />
        <div className="relative mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="mb-10">
              <Link to="/" className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary">
                <ArrowLeft className="h-4 w-4" /> Torna alla Home
              </Link>
            </div>
            <SectionTitle kicker="Alessandro Della Marca" title="Chi sono" />
          </Reveal>

          <div className="mt-16 grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal delay={100}>
              <figure className="arcana-frame overflow-hidden rounded-md shadow-card">
                <img src={ritratto.url} alt="Alessandro Della Marca — Sensitivo e Chiaroveggente" className="w-full object-cover" />
                <figcaption className="border-t border-primary/30 bg-midnight/90 px-5 py-4 text-center">
                  <span className="font-script text-3xl text-primary">Alessandro</span>
                  <span className="mt-1 block font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    52 anni di esperienza
                  </span>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={200}>
              <div className="arcana-frame rounded-md bg-card/80 p-5 shadow-card backdrop-blur-sm sm:p-8 md:p-12">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-midnight/70 px-4 py-1.5">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="font-display text-xs uppercase tracking-[0.25em] text-primary">
                    Dal 1974 al fianco delle persone
                  </span>
                </div>

                <div className="space-y-6 text-xl leading-relaxed text-foreground/90 md:text-2xl md:leading-relaxed">
                  <p>
                    Mi chiamo <strong className="font-semibold text-primary">Alessandro</strong> e da{" "}
                    <strong className="font-semibold text-primary">52 anni</strong> esercito
                    l&apos;attività di sensitivo e chiaroveggente con serietà, riservatezza e
                    rispetto per chi si rivolge a me.
                  </p>
                  <p className="text-muted-foreground">
                    Oltre mezzo secolo di esperienza sul campo significa aver ascoltato migliaia di
                    storie, affrontato ogni tipo di situazione e affinato un metodo basato sulla
                    chiarezza, senza illusioni né false promesse. Il mio obiettivo è offrire un
                    punto di vista lucido e sincero per aiutarti a fare ordine nei momenti di dubbio
                    o difficoltà.
                  </p>
                  <p className="border-l-2 border-primary/60 pl-6 text-foreground">
                    Il mio recapito telefonico — lo storico{" "}
                    <a href={telHref} className="font-semibold text-primary hover:underline">
                      337 70 92 63
                    </a>{" "}
                    a sei cifre — è rimasto invariato in tutti questi 52 anni: una scelta di
                    trasparenza e continuità che testimonia la mia presenza costante e la fiducia
                    costruita nel tempo con chi mi consulta.
                  </p>
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button asChild variant="gold" size="xl">
                    <a href={telHref}>
                      <Phone /> Chiama il 337 70 92 63
                    </a>
                  </Button>
                  <Button asChild variant="veil" size="xl">
                    <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                      <MessageCircle /> Scrivi su WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {HIGHLIGHTS.map((item, i) => (
              <Reveal key={item.label} delay={i * 100}>
                <div className="h-full rounded-md border border-primary/30 bg-midnight/70 p-8 backdrop-blur-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-primary/40">
                    <item.icon className="h-5 w-5 text-primary" strokeWidth={1.4} />
                  </div>
                  <h2 className="font-display text-lg uppercase text-foreground">{item.label}</h2>
                  <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-border bg-midnight pb-28 pt-14 text-center lg:pb-14">
        <p className="font-script text-4xl text-primary">Alessandro Della Marca</p>
        <p className="mt-3 font-display text-xs uppercase tracking-[0.35em] text-muted-foreground">
          Sensitivo · Chiaroveggente · Grosseto
        </p>
        <p className="mt-6 text-lg text-muted-foreground">
          Lo storico numero a sei cifre —{" "}
          <a href={telHref} className="text-primary hover:underline">
            337 70 92 63
          </a>
        </p>
        <p className="mt-8 text-sm text-muted-foreground/70">
          © {new Date().getFullYear()} {CONTACT.name}
        </p>
      </footer>

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
    </div>
  );
}