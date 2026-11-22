import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, telHref } from "@/lib/contact";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Alessandro Sensitivo" },
      { name: "description", content: "Informativa sull'utilizzo dei cookie su questo sito web." },
    ],
  }),
  component: CookiePolicy,
});

function CookiePolicy() {
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
          <p className="font-display text-xs uppercase tracking-[0.3em] text-primary">Informativa Cookie</p>
          <h1 className="mt-2 text-3xl uppercase md:text-5xl">Cookie Policy</h1>
          <div className="gold-rule mt-4 w-24" />
        </div>
        <section className="space-y-3">
          <h2 className="text-xl uppercase text-primary">1. Cookie utilizzati</h2>
          <p>Questo sito utilizza esclusivamente <strong>cookie tecnici e memorizzazione locale (localStorage)</strong> strettamente necessari al funzionamento delle pagine e al salvataggio della preferenza sul banner informativo. Non vengono impiegati cookie di profilazione pubblicitaria.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl uppercase text-primary">2. Contatti del Titolare</h2>
          <p>Per qualsiasi informazione è possibile contattare <strong>Alessandro Sensitivo</strong> al cellulare <a href={telHref} className="text-primary hover:underline">337 70 92 63</a> o via email a <a href={`mailto:${CONTACT.email}`} className="text-primary hover:underline">{CONTACT.email}</a>.</p>
        </section>
      </main>
    </div>
  );
}