/** Contatti ufficiali di Alessandro Della Marca. Unica fonte per tutto il sito. */
export const CONTACT = {
  name: "Alessandro Della Marca",
  artName: "Alessandro Sensitivo",
  phoneE164: "+39337709263",
  phoneDisplay: "337 709263",
  email: "alessandrodellamarca79@gmail.com",
  facebook: "https://www.facebook.com/www.alessandrosensitivo.it",
  youtube: "https://www.youtube.com/@AlessandroSensitivo",
  tiktok: "https://www.tiktok.com/@alessandro.sensit",
  website: "https://www.primomago.it",
  websiteDisplay: "Primomago.it",
  base: "Grosseto",
} as const;

export const telHref = `tel:${CONTACT.phoneE164}`;

/** Link WhatsApp verso il numero di Alessandro, con testo precompilato opzionale. */
export function whatsappHref(text?: string): string {
  const base = `https://wa.me/${CONTACT.phoneE164.replace(/\D/g, "")}`;
  const trimmed = text?.trim();
  return trimmed ? `${base}?text=${encodeURIComponent(trimmed)}` : base;
}

/** Messaggio che arriva ad Alessandro dal modulo "Scrivimi". */
export function composeMessage(input: { name: string; topic: string; message: string }): string {
  const lines = [
    `Ciao Alessandro, sono ${input.name.trim() || "una persona che ti ha trovato sul sito"}.`,
    input.topic ? `Vorrei un consulto su: ${input.topic}.` : "",
    input.message.trim(),
  ];
  return lines.filter(Boolean).join("\n");
}
