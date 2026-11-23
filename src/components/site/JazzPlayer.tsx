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
  const [userStopped, setUserStopped] = useState(false);
  const userStoppedRef = useRef(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  const stopGenerator = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (ctxRef.current) {
      ctxRef.current.close().catch(() => {});
      ctxRef.current = null;
    }
    setPlaying(false);
  }, []);

  const triggerPianoKey = (
    ctx: AudioContext,
    dest: AudioNode,
    freq: number | undefined,
    when: number,
    duration: number,
    velocity: number,
  ) => {
    if (typeof freq !== "number" || !Number.isFinite(freq) || freq <= 0) return;

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
    g2.gain.setValueAtTime(0.2, when);
    g2.gain.exponentialRampToValueAtTime(0.01, when + duration * 0.6);

    const g3 = ctx.createGain();
    g3.gain.setValueAtTime(0.07, when);
    g3.gain.exponentialRampToValueAtTime(0.001, when + duration * 0.35);

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1600, when);
    filter.frequency.exponentialRampToValueAtTime(450, when + duration);

    const env = ctx.createGain();
    env.gain.setValueAtTime(0.0001, when);
    env.gain.linearRampToValueAtTime(velocity, when + 0.03);
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

  // Avvio 100% sincrono: indispensabile per Safari iOS e Chrome Android/Desktop
  const startSyncComposition = useCallback(() => {
    if (userStoppedRef.current) return;

    try {
      let ctx = ctxRef.current;
      if (!ctx) {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        ctx = new AudioCtx();
        ctxRef.current = ctx;

        // Sblocco buffer sincrono per iOS
        const silentBuf = ctx.createBuffer(1, 1, 22050);
        const silentSrc = ctx.createBufferSource();
        silentSrc.buffer = silentBuf;
        silentSrc.connect(ctx.destination);
        silentSrc.start(0);
      }

      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {});
      }

      if (ctx.state !== "running") {
        return;
      }

      if (timerRef.current !== null) {
        setPlaying(true);
        return;
      }

      const master = ctx.createGain();
      master.gain.setValueAtTime(0.45, ctx.currentTime);

      const delay = ctx.createDelay();
      delay.delayTime.setValueAtTime(0.28, ctx.currentTime);
      const feedback = ctx.createGain();
      feedback.gain.setValueAtTime(0.28, ctx.currentTime);
      const wetFilter = ctx.createBiquadFilter();
      wetFilter.type = "lowpass";
      wetFilter.frequency.setValueAtTime(1050, ctx.currentTime);

      delay.connect(wetFilter);
      wetFilter.connect(feedback);
      feedback.connect(delay);
      wetFilter.connect(master);
      master.connect(ctx.destination);

      const playToRoom = (freq: number | undefined, when: number, dur: number, vel: number) => {
        triggerPianoKey(ctx!, master, freq, when, dur, vel);
        triggerPianoKey(ctx!, delay, freq, when, dur, vel * 0.45);
      };

      const progression = PROGRESSIONS.at(Math.floor(Math.random() * PROGRESSIONS.length))!;
      const transpose = [0.8909, 0.94387, 1.0, 1.05946, 1.12246].at(Math.floor(Math.random() * 5)) ?? 1.0;
      const barDurationSec = 3.8 + Math.random() * 0.9;
      let barCount = 0;

      const composeNextBar = () => {
        if (!ctxRef.current || ctxRef.current.state !== "running") return;
        const now = ctxRef.current.currentTime + 0.04;
        const rawChord = progression.at(barCount % progression.length)!;
        const chord = rawChord.map((f) => f * transpose);
        barCount++;

        playToRoom(chord.at(0), now, barDurationSec * 0.95, 0.32);
        playToRoom(chord.at(1), now + 0.5, barDurationSec * 0.78, 0.2);
        playToRoom(chord.at(2), now + 1.0, barDurationSec * 0.7, 0.19);

        const melodySteps = 3 + Math.floor(Math.random() * 3);
        for (let s = 0; s < melodySteps; s++) {
          const noteIdx = 2 + Math.floor(Math.random() * (chord.length - 2));
          const octave = Math.random() > 0.72 ? 2 : 1;
          const baseFreq = chord.at(noteIdx);
          if (typeof baseFreq === "number") {
            const offset = 0.65 + s * ((barDurationSec - 1.0) / melodySteps) + (Math.random() - 0.5) * 0.12;
            const vel = 0.19 + Math.random() * 0.09;
            playToRoom(baseFreq * octave, now + Math.max(0.15, offset), 2.3 + Math.random() * 1.1, vel);
          }
        }
      };

      composeNextBar();
      timerRef.current = window.setInterval(composeNextBar, Math.round(barDurationSec * 1000));
      setPlaying(true);
    } catch {
      // Ritenta al gesto successivo
    }
  }, []);

  useEffect(() => {
    // Prova subito al caricamento
    startSyncComposition();

    // Se il browser blocca l'autoplay senza gesto, sblocca al primissimo tap/click/tasto
    const onGesture = () => {
      if (!userStoppedRef.current && timerRef.current === null) {
        startSyncComposition();
      }
    };

    const events = ["pointerdown", "touchend", "click", "keydown"];
    events.forEach((ev) => window.addEventListener(ev, onGesture, { capture: true, passive: true }));

    return () => {
      events.forEach((ev) => window.removeEventListener(ev, onGesture, { capture: true }));
      stopGenerator();
    };
  }, [startSyncComposition, stopGenerator]);

  const handleToggle = () => {
    if (playing) {
      userStoppedRef.current = true;
      setUserStopped(true);
      stopGenerator();
    } else {
      userStoppedRef.current = false;
      setUserStopped(false);
      startSyncComposition();
    }
  };

  return (
    <div className="fixed bottom-24 right-3 z-50 sm:right-4 lg:bottom-6">
      <button
        type="button"
        onClick={handleToggle}
        aria-label={playing ? "Spegni musica piano bar" : "Genera nuova musica piano bar"}
        className="flex items-center gap-2 rounded-full border border-primary/70 bg-midnight/95 px-3.5 py-2 font-display text-[11px] uppercase tracking-[0.16em] text-primary shadow-glow backdrop-blur-md transition-opacity hover:opacity-90 sm:text-xs"
      >
        {playing ? (
          <>
            <VolumeX className="h-4 w-4 text-primary" />
            <span>Spegni Musica</span>
          </>
        ) : (
          <>
            <Volume2 className="h-4 w-4 animate-pulse text-primary" />
            <span>{userStopped ? "Nuovo Brano" : "Attiva Piano Bar"}</span>
          </>
        )}
      </button>
    </div>
  );
}