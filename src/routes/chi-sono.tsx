import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { JazzPlayer } from "@/components/site/JazzPlayer";
import { telHref } from "@/lib/contact";
import ritratto from "@/assets/alessandro-ritratto.jpg.asset.json";

const TITLE = "Chi sono — Alessandro · Sensitivo e Chiaroveggente";
const DESCRIPTION =
  "La storia reale di Alessandro: lontano dal mondo finto dello spettacolo, oggi segue persone in tutta Italia dalla sede di Grosseto con lo stesso numero storico attivo da 52 anni.";

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

function ChiSonoPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-midnight/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link to="/" className="font-script text-3xl text-primary">
            Alessandro
          </Link>
          <Button asChild variant="veil" size="sm">
            <Link to="/">
              <ArrowLeft /> Torna alla Home
            </Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 pb-28 pt-28 md:pt-36">
        <Reveal>
          <div className="text-center">
            <p className="font-display text-xs uppercase tracking-[0.35em] text-primary">
              Alessandro · Sensitivo e Chiaroveggente
            </p>
            <h1 className="mt-4 text-3xl uppercase leading-tight text-foreground sm:text-4xl md:text-6xl">
              Chi <span className="text-gold animate-shimmer">sono</span>
            </h1>
            <div className="gold-rule mx-auto mt-6 w-24" />
          </div>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <img
              src="/images/alessandro-ritratto-2.jpg"
              onError={(e) => {
                e.currentTarget.src = ritratto.url;
              }}
              alt="Alessandro — Sensitivo e Chiaroveggente"
              className="arcana-frame mx-auto aspect-[4/5] w-full max-w-md rounded-md object-cover shadow-card"
            />
          </Reveal>

          <Reveal delay={150}>
            <div className="arcana-frame space-y-10 rounded-lg border border-primary/40 bg-midnight/80 p-6 shadow-card backdrop-blur-sm sm:p-8 md:p-12">
              <div>
                <p className="font-display text-xs uppercase tracking-[0.35em] text-primary">
                  La scelta
                </p>
                <h2 className="mt-2 text-2xl uppercase text-foreground md:text-3xl">
                  Lontano dal mondo finto
                </h2>
                <p className="mt-4 text-xl leading-relaxed text-foreground/90">
                  Assaporata la finzione dello spettacolo, decide di lasciarlo per dedicarsi davvero
                  ai suoi cari. E per lui sono cari tutti: amici, clienti, chiunque bussi alla sua
                  porta.
                </p>
              </div>

              <div className="gold-rule w-20" />

              <div>
                <p className="font-display text-xs uppercase tracking-[0.35em] text-primary">
                  Oggi
                </p>
                <h2 className="mt-2 text-2xl uppercase text-foreground md:text-3xl">
                  Ascolto autentico in tutta Italia
                </h2>
                <p className="mt-4 text-xl leading-relaxed text-foreground/90">
                  Dalla sede di Grosseto segue persone in tutta Italia con serietà, riservatezza e
                  lo stesso numero storico attivo da 52 anni.
                </p>
              </div>

              <div className="pt-4">
                <Button asChild variant="gold" size="xl" className="w-full sm:w-auto">
                  <a href={telHref}>
                    <Phone /> Chiama ora 337 70 92 63
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <JazzPlayer />
    </div>
  );
}