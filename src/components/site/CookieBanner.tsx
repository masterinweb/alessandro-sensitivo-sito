import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "alessandro_cookie_consent_v1";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-16 z-50 mx-auto max-w-4xl px-4 lg:bottom-4">
      <div className="flex flex-col items-center justify-between gap-4 rounded-lg border border-primary/50 bg-midnight/95 p-4 text-sm text-foreground/90 shadow-glow backdrop-blur-md sm:flex-row sm:px-6">
        <p className="text-center sm:text-left">
          Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Leggi la{" "}
          <Link to="/privacy-policy" className="text-primary underline hover:opacity-85">Privacy Policy</Link> e la{" "}
          <Link to="/cookie-policy" className="text-primary underline hover:opacity-85">Cookie Policy</Link>.
        </p>
        <Button type="button" variant="gold" size="sm" onClick={accept} className="shrink-0">
          Ho capito
        </Button>
      </div>
    </div>
  );
}