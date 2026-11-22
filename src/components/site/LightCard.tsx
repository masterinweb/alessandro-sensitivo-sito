import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MESSAGES = [
  { arcano: "La Stella", text: "La luce che cerchi fuori è già accesa dentro di te. Proteggila, non nasconderla." },
  { arcano: "Il Sole", text: "Oggi dona un sorriso a chi non se lo aspetta: la luce data torna sempre moltiplicata." },
  { arcano: "La Luna", text: "Non temere ciò che non vedi ancora. Le risposte maturano nel silenzio." },
  { arcano: "L'Eremita", text: "Fermati e ascolta. La tua lanterna illumina un passo alla volta, ed è abbastanza." },
  { arcano: "La Temperanza", text: "Equilibrio: non spegnere te stesso per far brillare gli altri, né il contrario." },
  { arcano: "Il Mondo", text: "Ogni persona che incontri è un essere di luce. Riconoscilo, e ti riconoscerà." },
  { arcano: "La Forza", text: "La vera forza è dolce. Chi ti ferisce ha solo paura del tuo lume." },
  { arcano: "Il Mago", text: "Hai già tutti gli strumenti. Sta a te usarli nel modo giusto." },
  { arcano: "La Ruota", text: "Quello che oggi pesa domani girerà. Resta fedele a ciò che sei." },
  { arcano: "Il Giudizio", text: "È tempo di rinascere. Lascia andare ciò che ti toglie energia." },
] as const;

export function LightCard() {
  const [index, setIndex] = useState<number | null>(null);
  const card = index === null ? null : MESSAGES[index];

  const draw = () => {
    let next = Math.floor(Math.random() * MESSAGES.length);
    if (next === index) next = (next + 1) % MESSAGES.length;
    setIndex(next);
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <button
        type="button"
        onClick={draw}
        aria-label="Pesca una carta"
        className="group [perspective:1200px]"
      >
        <div
          className={cn(
            "relative h-[26rem] w-64 transition-transform duration-1000 [transform-style:preserve-3d] md:h-[30rem] md:w-72",
            card && "[transform:rotateY(180deg)]",
          )}
        >
          {/* Dorso */}
          <div className="arcana-frame absolute inset-0 flex flex-col items-center justify-center gap-6 rounded-md bg-night shadow-card [backface-visibility:hidden]">
            <div className="starfield absolute inset-0 animate-twinkle rounded-md opacity-70" />
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-primary/40 shadow-glow animate-float">
              <div className="h-20 w-20 rounded-full border border-primary/60" />
              <Sparkles className="absolute h-8 w-8 text-primary" />
            </div>
            <p className="relative font-display text-xs uppercase tracking-[0.35em] text-primary">
              Tocca la carta
            </p>
          </div>
          {/* Fronte */}
          <div className="arcana-frame absolute inset-0 flex flex-col items-center justify-between rounded-md bg-card p-8 text-center shadow-card [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <span className="font-display text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Arcano di luce
            </span>
            <div>
              <h3 className="text-gold text-2xl uppercase md:text-3xl">{card?.arcano}</h3>
              <div className="gold-rule mx-auto my-5 w-16" />
              <p className="text-xl leading-relaxed text-foreground">{card?.text}</p>
            </div>
            <span className="text-primary">✦ ✦ ✦</span>
          </div>
        </div>
      </button>
      {card && (
        <Button variant="veil" size="lg" onClick={draw}>
          Pesca un'altra carta
        </Button>
      )}
    </div>
  );
}
