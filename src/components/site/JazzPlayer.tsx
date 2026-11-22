import { useCallback, useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const PROGRESSIONS: number[][][] = [
  [
    [130.81, 196.0, 246.94, 329.63, 392.0, 493.88],
    [110.0, 164.81, 220.0, 261.63, 329.63, 493.88],
    [146.83, 220.0, 261.63, 329.63, 392.0, 523.25],
    [98.0, 174.61, 220.0, 246.94, 329.63, 440.0],
  ],
  [
    [174.61, 220.0, 261.63, 329.63, 440.0, 523.25],
    [146.83, 220.0, 261.63, 349.23, 440.0, 523.25],
    [116.54, 174.61, 220.0, 293.66, 349.23, 440.0],
    [130.81, 196.0, 233.08, 293.66, 349.23, 466.16],
  ],
  [
    [164.81, 246.94, 293.66, 369.99, 493.88, 587.33],
    [110.0, 196.0, 246.94, 329.63, 392.0, 493.88],
    [146.83, 220.0, 261.63, 329.63, 392.0, 523.25],
    [196.0, 246.94, 293.66, 369.99, 440.0, 587.33],
  ],
  [
    [155.56, 233.08, 293.66, 392.0, 466.16, 587.33],
    [130.81, 196.0, 233.08, 293.66, 392.0, 466.16],
    [174.61, 261.63, 311.13, 392.0, 466.16, 523.25],
    [116.54, 207.65, 261.63, 293.66, 392.0, 523.25],
  ],
];

export function JazzPlayer() {
  const [playing, setPlaying] = useState(false);
  const userMutedRef = useRef(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  const stopGenerator = useCallback(async () => {
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

  const triggerPianoKey = (
    ctx: AudioContext,
    dest: AudioNode,
    freq: number,
    when: number,
    duration: number,
    velocity: number,
  ) => {
    const oscFund = ctx.createOscillator();
    const oscHarm2 = ctx.createOscillator();
    const oscHarm3 = ctx.createOscillator();

    oscFund.type = "sine";
    oscFund.frequency.setValueAtTime(freq, when);

    oscHarm2.type = "triangle";
    oscHarm2.frequency.setValueAtTime(freq * 2, when);

    oscHarm3.type = "sine";
    oscHarm3.frequency.setValueAtTime(freq * 3, when);

    const g2 = ctx.createGain();
    g2.gain.setValueAtTime(0.18, when);
    g2.gain.exponentialRampToValueAtTime(0.01, when + duration * 0.6);

    const g3 = ctx.createGain();
    g3.gain.setValueAtTime(0.06, when);
    g3.gain.exponentialRampToValueAtTime(0.001, when + duration * 0.35);

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1400, when);
    filter.frequency.exponentialRampToValueAtTime(420, when + duration);

    const env = ctx.createGain();
    env.gain.setValueAtTime(0.0001, when);
    env.gain.linearRampToValueAtTime(velocity, when + 0.035);
    env.gain.exponentialRampToValueAtTime(0.0001, when + duration);

    oscFund.connect(filter);
    oscHarm2.connect(g2);
    g2.connect(filter);
    oscHarm3.connect(g3);
    g3.connect(filter);

    filter.connect(env);
    env.connect(dest);

    oscFund.start(when);
    oscHarm2.start(when);
    oscHarm3.start(when);
    oscFund.stop(when + duration + 0.08);
    oscHarm2.stop(when + duration + 0.08);
    oscHarm3.stop(when + duration + 0.08);
  };

  const startNewComposition = useCallback(async () => {
    if (ctxRef.current || userMutedRef.current) return;

    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();

      const silentBuf = ctx.createBuffer(1, 1, 22050);
      const silentSrc = ctx.createBufferSource();
      silentSrc.buffer = silentBuf;
      silentSrc.connect(ctx.destination);
      silentSrc.start(0);

      if (ctx.state === "suspended") {
        await ctx.resume();
      }
      if (ctx.state !== "running") {
        await ctx.close().catch(() => {});
        return;
      }

      ctxRef.current = ctx;

      const master = ctx.createGain();
      master.gain.setValueAtTime(0.32, ctx.currentTime);

      const delay = ctx.createDelay();
      delay.delayTime.setValueAtTime(0.28, ctx.currentTime);
      const feedback = ctx.createGain();
      feedback.gain.setValueAtTime(0.26, ctx.currentTime);
      const wetFilter = ctx.createBiquadFilter();
      wetFilter.type = "lowpass";
      wetFilter.frequency.setValueAtTime(950, ctx.currentTime);

      delay.connect(wetFilter);
      wetFilter.connect(feedback);
      feedback.connect(delay);
      wetFilter.connect(master);
      master.connect(ctx.destination);

      const playToRoom = (freq: number, when: number, dur: number, vel: number) => {
        triggerPianoKey(ctx, master, freq, when, dur, vel);
        triggerPianoKey(ctx, delay, freq, when, dur, vel * 0.45);
      };

      const progression = PROGRESSIONS[Math.floor(Math.random() * PROGRESSIONS.length)];
      const transpose = [0.94387, 1.0, 1.05946][Math.floor(Math.random() * 3)];
      const barDurationSec = 4.2 + Math.random() * 0.8;

      let barCount = 0;

      const composeNextBar = () => {
        if (!ctxRef.current || ctxRef.current.state !== "running") return;
        const now = ctx.currentTime + 0.05;
        const chord = progression[barCount % progression.length].map((f) => f * transpose);
        barCount++;

        playToRoom(chord[0], now, barDurationSec * 0.95, 0.28);
        playToRoom(chord[1], now + 0.55, barDurationSec * 0.75, 0.17);
        playToRoom(chord[2], now + 1.1, barDurationSec * 0.65, 0.16);

        const melodySteps = 3 + Math.floor(Math.random() * 3);
        for (let s = 0; s < melodySteps; s++) {
          const noteIdx = 2 + Math.floor(Math.random() * (chord.length - 2));
          const octave = Math.random() > 0.78 ? 2 : 1;
          const offset = 0.75 + s * ((barDurationSec - 1.1) / melodySteps) + (Math.random() - 0.5) * 0.15;
          const vel = 0.15 + Math.random() * 0.08;
          playToRoom(chord[noteIdx] * octave, now + Math.max(0.2, offset), 2.4 + Math.random() * 1.2, vel);
        }
      };

      composeNextBar();
      timerRef.current = window.setInterval(composeNextBar, Math.round(barDurationSec * 1000));
      setPlaying(true);
    } catch {
      // Ritenta al prossimo gesto utente
    }
  }, []);

  useEffect(() => {
    startNewComposition();

    const unlockMobile = () => {
      if (!ctxRef.current && !userMutedRef.current) {
        startNewComposition();
      }
    };

    const events = ["touchstart", "touchend", "pointerdown", "pointerup", "click", "keydown"];
    events.forEach((ev) => window.addEventListener(ev, unlockMobile, { capture: true, passive: true }));

    return () => {
      events.forEach((ev) => window.removeEventListener(ev, unlockMobile, { capture: true }));
      stopGenerator();
    };
  }, [startNewComposition, stopGenerator]);

  const handleToggle = async () => {
    if (playing) {
      userMutedRef.current = true;
      await stopGenerator();
    } else {
      userMutedRef.current = false;
      await startNewComposition();
    }
  };

  return (
    <div className="fixed bottom-24 right-3 z-50 sm:right-4 lg:bottom-6">
      <button
        type="button"
        onClick={handleToggle}
        aria-label={playing ? "Spegni musica di sottofondo" : "Attiva musica piano bar"}
        className="flex items-center gap-2 rounded-full border border-primary/60 bg-midnight/95 px-3.5 py-2 font-display text-[11px] uppercase tracking-[0.16em] text-primary shadow-glow backdrop-blur-md transition-opacity hover:opacity-90 sm:text-xs"
      >
        {playing ? (
          <>
            <VolumeX className="h-4 w-4 text-primary" />
            <span>Spegni Musica</span>
          </>
        ) : (
          <>
            <Volume2 className="h-4 w-4 text-primary" />
            <span>Piano Bar</span>
          </>
        )}
      </button>
    </div>
  );
}