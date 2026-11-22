import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, telHref } from "@/lib/contact";

export const Route = createFileRoute("/note-legali")({
  head: () => ({
    meta: [
      { title: "Note Legali — Alessandro Sensitivo" },
      { name: "description", content: "Note legali, condizioni d'uso e recapiti ufficiali di Alessandro Sensitivo." },
    ],
  }),
  component: NoteLegali,
});

function NoteLegali() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-midnight/90 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5">
          <Link to="/" className="font-script text-3xl text-primary">Alessandro</Link>
          <Button asChild variant="veil" size="sm">
            <Link to="/"><ArrowLeft /> Torna alla Home</Link>
          </Button>
        </div>
      </header>
      <main className="mx-auto max-w-4xl space-y-8 px-5 py-16 text-lg leading-relaxed text-foreground/90">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">Informazioni Legali</p>
          <h1 className="mt-2 text-3xl uppercase md:text-5xl">Note Legali</h1>
          <div className="gold-rule mt-4 w-24" />
        </div>
        <section className="space-y-3">
          <h2 className="text-xl uppercase text-primary">1. Contatti Ufficiali</h2>
          <p>Il presente sito web è gestito da <strong>Alessandro Sensitivo</strong>, operativo in tutta Italia.</p>
          <ul className="list-disc space-y-1 pl-6 text-foreground/85">
            <li><strong>Cellulare ufficiale:</strong> <a href={telHref} className="text-primary hover:underline">337 70 92 63</a></li>
            <li><strong>Email ufficiale:</strong> <a href={`mailto:${CONTACT.email}`} className="text-primary hover:underline">{CONTACT.email}</a></li>
          </ul>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl uppercase text-primary">2. Natura dei consulti</h2>
          <p>I consulti offerti da Alessandro Sensitivo hanno carattere di ascolto e orientamento personale e non sostituiscono pareri medici, psicologici, legali o finanziari. Servizio riservato ai maggiorenni.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl uppercase text-primary">3. Proprietà intellettuale</h2>
          <p>Testi, immagini e contenuti di questo sito appartengono ad Alessandro Sensitivo; ne è vietata la riproduzione non autorizzata.</p>
        </section>
      </main>
    </div>
  );
}