import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, telHref } from "@/lib/contact";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Alessandro Sensitivo" },
      { name: "description", content: "Informativa sul trattamento dei dati personali ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR)." },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
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
          <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">Informativa GDPR</p>
          <h1 className="mt-2 text-3xl uppercase md:text-5xl">Privacy Policy</h1>
          <div className="gold-rule mt-4 w-24" />
        </div>
        <section className="space-y-3">
          <h2 className="text-xl uppercase text-primary">1. Titolare del Trattamento</h2>
          <p>Il Titolare del trattamento dei dati personali raccolti tramite questo sito web è <strong>Alessandro Sensitivo</strong>, operativo in tutta Italia.</p>
          <ul className="list-disc space-y-1 pl-6 text-foreground/85">
            <li><strong>Cellulare:</strong> <a href={telHref} className="text-primary hover:underline">337 70 92 63</a></li>
            <li><strong>Email:</strong> <a href={`mailto:${CONTACT.email}`} className="text-primary hover:underline">{CONTACT.email}</a></li>
          </ul>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl uppercase text-primary">2. Tipologia di dati e finalità</h2>
          <p>Il sito tratta esclusivamente dati comuni forniti volontariamente dall&apos;utente tramite telefono, email o modulo di contatto, unicamente per rispondere alle richieste di consulto (art. 6 par. 1 lett. b GDPR). I dati non vengono ceduti a terzi né usati per profilazione.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl uppercase text-primary">3. Diritti dell&apos;interessato</h2>
          <p>In qualsiasi momento è possibile richiedere accesso, rettifica o cancellazione dei dati scrivendo a <a href={`mailto:${CONTACT.email}`} className="text-primary hover:underline">{CONTACT.email}</a> o chiamando il <a href={telHref} className="text-primary hover:underline">337 70 92 63</a>.</p>
        </section>
      </main>
    </div>
  );
}