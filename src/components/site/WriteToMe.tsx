import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT } from "@/lib/contact";

export function WriteToMe() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Richiesta consulto dal sito — ${name || "Visitatore"}`);
    const body = encodeURIComponent(`Nome: ${name}\nTelefono: ${phone}\n\nMessaggio:\n${message}`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1.5 block font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">Il tuo nome</label>
        <Input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Come ti chiami?" className="border-border bg-background/70" />
      </div>
      <div>
        <label className="mb-1.5 block font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">Il tuo numero di telefono</label>
        <Input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Per essere richiamato" className="border-border bg-background/70" />
      </div>
      <div>
        <label className="mb-1.5 block font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">La tua domanda</label>
        <Textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Scrivi qui liberamente..." className="border-border bg-background/70" />
      </div>
      <Button type="submit" variant="gold" size="lg" className="w-full">
        <Send /> Invia messaggio ad Alessandro
      </Button>
      {sent && (
        <p className="flex items-center gap-2 pt-2 text-sm text-primary">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          Si sta aprendo la tua app email per inviare il messaggio direttamente ad Alessandro.
        </p>
      )}
    </form>
  );
}