import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

export function JazzPlayer() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      if (ctxRef.current) ctxRef.current.close().catch(() => {});
    };
  }, []);

  const playPianoNote = (ctx: AudioContext, dest: AudioNode, freq: number, startTime: number, duration: number, velocity = 0.12) => {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const env = ctx.createGain();

    osc1.type = "sine";
    osc1.frequency.setValueAtTime(freq, startTime);

    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(freq * 2, startTime);

    const overtoneGain = ctx.createGain();
    overtoneGain.gain.setValueAtTime(0.06, startTime);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(900, startTime);
    filter.frequency.exponentialRampToValueAtTime(320, startTime + duration);

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

  const startPianoBar = () => {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioCtx();
    ctxRef.current = ctx;

    const master = ctx.createGain();
    master.gain.setValueAtTime(muted ? 0 : 0.11, ctx.currentTime);
    master.connect(ctx.destination);
    masterGainRef.current = master;

    // Giro armonico lento da Piano Bar (Cmaj7 -> Am9 -> Dm9 -> G13) con arpeggio morbido
    const measures = [
      [130.81, 196.0, 246.94, 329.63, 293.66, 246.94], // Cmaj7
      [110.0, 164.81, 220.0, 261.63, 329.63, 246.94],  // Am9
      [146.83, 220.0, 261.63, 329.63, 349.23, 329.63], // Dm9
      [98.0, 174.61, 220.0, 246.94, 329.63, 293.66],   // G13
    ];

    let bar = 0;
    const playMeasure = () => {
      if (!ctxRef.current || ctxRef.current.state === "closed") return;
      const now = ctx.currentTime;
      const notes = measures[bar % measures.length];
      bar++;

      notes.forEach((freq, i) => {
        const delay = i * 0.85;
        const vel = i === 0 ? 0.14 : 0.095;
        playPianoNote(ctx, master, freq, now + delay, 3.6, vel);
      });
    };

    playMeasure();
    timerRef.current = window.setInterval(playMeasure, 5200);
  };

  const togglePlay = async () => {
    if (playing) {
      if (timerRef.current) window.clearInterval(timerRef.current);
      if (ctxRef.current) {
        await ctxRef.current.close().catch(() => {});
        ctxRef.current = null;
      }
      setPlaying(false);
    } else {
      startPianoBar();
      setPlaying(true);
    }
  };

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    if (masterGainRef.current && ctxRef.current) {
      masterGainRef.current.gain.setValueAtTime(next ? 0 : 0.11, ctxRef.current.currentTime);
    }
  };

  return (
    <div className="fixed bottom-20 right-4 z-40 flex items-center gap-2 rounded-full border border-primary/50 bg-midnight/90 px-3.5 py-2 shadow-glow backdrop-blur-md lg:bottom-6">
      <button
        type="button"
        onClick={togglePlay}
        aria-label={playing ? "Ferma musica Piano Bar" : "Avvia musica Piano Bar"}
        className="flex items-center gap-2 font-display text-xs uppercase tracking-[0.2em] text-primary transition-opacity hover:opacity-85"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/50 bg-primary/10">
          {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 translate-x-0.5" />}
        </span>
        <span>{playing ? "Ferma Musica" : "Piano Bar"}</span>
      </button>
      {playing && (
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Riattiva audio" : "Silenzia audio"}
          className="ml-1 rounded-full p-1 text-muted-foreground transition-colors hover:text-primary"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      )}
    </div>
  );
}