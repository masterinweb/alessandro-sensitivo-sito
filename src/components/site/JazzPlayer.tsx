import { useCallback, useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function JazzPlayer() {
  const [playing, setPlaying] = useState(false);
  const [stoppedByUser, setStoppedByUser] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  const stopPiano = useCallback(async () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (ctxRef.current) {
      await ctxRef.current.close().catch(() => {});
      ctxRef.current = null;
    }
    setPlaying(false);
  }, []);

  const playPianoNote = (ctx: AudioContext, dest: AudioNode, freq: number, startTime: number, duration: number, velocity = 0.11) => {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const env = ctx.createGain();

    osc1.type = "sine";
    osc1.frequency.setValueAtTime(freq, startTime);
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(freq * 2, startTime);

    const overtoneGain = ctx.createGain();
    overtoneGain.gain.setValueAtTime(0.05, startTime);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(850, startTime);
    filter.frequency.exponentialRampToValueAtTime(300, startTime + duration);

    env.gain.setValueAtTime(0.0001, startTime);
    env.gain.linearRampToValueAtTime(velocity, startTime + 0.06);
    env.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc1.connect(filter);
    osc2.connect(overtoneGain);
    overtoneGain.connect(filter);
    filter.connect(env);
    env.connect(dest);

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration + 0.05);
    osc2.stop(startTime + duration + 0.05);
  };

  const startPianoBar = useCallback(async () => {
    if (ctxRef.current || stoppedByUser) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      if (ctx.state === "suspended") {
        await ctx.resume();
      }
      if (ctx.state !== "running") {
        await ctx.close().catch(() => {});
        return;
      }

      ctxRef.current = ctx;
      const master = ctx.createGain();
      master.gain.setValueAtTime(0.1, ctx.currentTime);
      master.connect(ctx.destination);

      const measures = [
        [130.81, 196.0, 246.94, 329.63, 293.66, 246.94],
        [110.0, 164.81, 220.0, 261.63, 329.63, 246.94],
        [146.83, 220.0, 261.63, 329.63, 349.23, 329.63],
        [98.0, 174.61, 220.0, 246.94, 329.63, 293.66],
      ];

      let bar = 0;
      const playMeasure = () => {
        if (!ctxRef.current || ctxRef.current.state !== "running") return;
        const now = ctx.currentTime;
        const notes = measures[bar % measures.length];
        bar++;
        notes.forEach((freq, i) => {
          playPianoNote(ctx, master, freq, now + i * 0.85, 3.6, i === 0 ? 0.13 : 0.09);
        });
      };

      playMeasure();
      timerRef.current = window.setInterval(playMeasure, 5200);
      setPlaying(true);
    } catch {
      // Attende la prima interazione utente se bloccato dal browser
    }
  }, [stoppedByUser]);

  useEffect(() => {
    startPianoBar();

    const unlockOnFirstTouch = () => {
      if (!ctxRef.current && !stoppedByUser) {
        startPianoBar();
      }
    };

    window.addEventListener("pointerdown", unlockOnFirstTouch, { passive: true });
    window.addEventListener("touchstart", unlockOnFirstTouch, { passive: true });
    window.addEventListener("keydown", unlockOnFirstTouch, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", unlockOnFirstTouch);
      window.removeEventListener("touchstart", unlockOnFirstTouch);
      window.removeEventListener("keydown", unlockOnFirstTouch);
      stopPiano();
    };
  }, [startPianoBar, stopPiano, stoppedByUser]);

  const handleToggle = async () => {
    if (playing) {
      setStoppedByUser(true);
      await stopPiano();
    } else {
      setStoppedByUser(false);
      setTimeout(() => {
        startPianoBar();
      }, 50);
    }
  };

  return (
    <div className="fixed bottom-20 right-3 z-40 sm:right-4 lg:bottom-6">
      <button
        type="button"
        onClick={handleToggle}
        aria-label={playing ? "Spegni musica di sottofondo" : "Riattiva musica di sottofondo"}
        className="flex items-center gap-2 rounded-full border border-primary/50 bg-midnight/95 px-3 py-2 font-display text-[11px] uppercase tracking-[0.18em] text-primary shadow-glow backdrop-blur-md transition-opacity hover:opacity-85 sm:px-3.5 sm:text-xs"
      >
        {playing ? <Volume2 className="h-4 w-4 text-primary" /> : <VolumeX className="h-4 w-4 text-muted-foreground" />}
        <span>{playing ? "Spegni Musica" : "Audio Spento"}</span>
      </button>
    </div>
  );
}