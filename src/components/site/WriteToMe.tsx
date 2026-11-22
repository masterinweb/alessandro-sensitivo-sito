import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { composeMessage, whatsappHref } from "@/lib/contact";
import { cn } from "@/lib/utils";

const TOPICS = ["Amore", "Lavoro", "Famiglia", "Protezione", "Altro"] as const;

export function WriteToMe() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState<string>("Amore");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(whatsappHref(composeMessage({ name, topic, message })), "_blank", "noopener");
  };

  const field =
    "w-full rounded-sm border border-input bg-midnight/60 px-4 py-3 text-lg text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="nome" className="mb-2 block font-display text-xs uppercase tracking-[0.25em] text-primary">
          Il tuo nome
        </label>
        <input id="nome" value={name} onChange={(e) => setName(e.target.value)} placeholder="Come ti chiami?" className={field} />
      </div>
      <div>
        <span className="mb-2 block font-display text-xs uppercase tracking-[0.25em] text-primary">
          Di cosa vuoi parlare
        </span>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTopic(t)}
              aria-pressed={topic === t}
              className={cn(
                "rounded-full border px-4 py-1.5 text-base transition-colors",
                topic === t
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground",
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="messaggio" className="mb-2 block font-display text-xs uppercase tracking-[0.25em] text-primary">
          Il tuo messaggio
        </label>
        <textarea
          id="messaggio"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Raccontami in poche parole cosa senti…"
          className={cn(field, "resize-none")}
        />
      </div>
      <Button type="submit" variant="gold" size="xl" className="w-full">
        <MessageCircle /> Invia su WhatsApp
      </Button>
      <p className="text-center text-base text-muted-foreground">
        Il messaggio si apre in WhatsApp, pronto da inviare ad Alessandro.
      </p>
    </form>
  );
}
