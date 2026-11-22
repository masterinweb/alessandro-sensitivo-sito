import { describe, expect, it } from "vitest";
import { composeMessage, telHref, whatsappHref } from "./contact";

describe("contatti di Alessandro", () => {
  it("la chiamata va al numero 337 709263", () => {
    expect(telHref).toBe("tel:+39337709263");
  });

  it("WhatsApp apre la chat con il numero 337 709263", () => {
    expect(whatsappHref()).toBe("https://wa.me/39337709263");
  });

  it("il modulo invia il messaggio composto su WhatsApp", () => {
    const text = composeMessage({ name: "Giulia", topic: "Amore", message: "Ho un dubbio" });
    expect(whatsappHref(text)).toBe(
      "https://wa.me/39337709263?text=" +
        encodeURIComponent("Ciao Alessandro, sono Giulia.\nVorrei un consulto su: Amore.\nHo un dubbio"),
    );
  });
});
