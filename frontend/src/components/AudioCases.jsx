import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Phone, CalendarCheck2, Database } from "lucide-react";

// Silent ~3s WAV data URI (placeholder so the player works without errors)
const SILENT_AUDIO =
  "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=";

const ICONS = [Phone, CalendarCheck2, Database];

const AudioCase = ({ index, caseData, t, isActive, onPlay }) => {
  const audioRef = useRef(null);
  const Icon = ICONS[index % ICONS.length];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isActive) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isActive]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-[#121212] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-[#00F0FF]/40 transition-all duration-500 hover:-translate-y-1"
      data-testid={`audio-case-${index}`}
    >
      {/* Glow ring on hover */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, rgba(0,240,255,0.18), rgba(0,255,102,0.10))",
          filter: "blur(8px)",
          zIndex: -1,
        }}
      />

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl border border-[#00F0FF]/30 bg-[#00F0FF]/5 flex items-center justify-center text-[#00F0FF] group-hover:text-[#00FF66] transition-colors">
            <Icon className="w-5 h-5" strokeWidth={1.5} />
          </div>
          <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            {caseData.tag}
          </span>
        </div>
        <span className="text-xs text-zinc-500 font-mono">{caseData.duration}</span>
      </div>

      <h3 className="mt-6 font-display text-xl md:text-2xl font-medium text-white tracking-tight">
        {caseData.title}
      </h3>
      <p className="mt-3 text-sm md:text-base text-zinc-400 leading-relaxed">
        {caseData.desc}
      </p>

      {/* Waveform + Play */}
      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={onPlay}
          aria-label={isActive ? t.audio.pause : t.audio.play}
          data-testid={`audio-play-${index}`}
          className="relative h-12 w-12 shrink-0 rounded-full bg-accent-gradient text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-transform glow-shadow"
        >
          {isActive ? (
            <Pause className="w-5 h-5" strokeWidth={2.5} />
          ) : (
            <Play className="w-5 h-5 ml-0.5" strokeWidth={2.5} />
          )}
        </button>
        <div className="flex-1 flex items-center h-12 overflow-hidden">
          {Array.from({ length: 36 }).map((_, i) => (
            <span
              key={i}
              className={`wave-bar ${isActive ? "playing" : ""}`}
              style={{
                animationDelay: `${(i * 60) % 800}ms`,
                height: `${10 + ((i * 7) % 28)}px`,
                opacity: isActive ? 0.9 : 0.45,
              }}
            />
          ))}
        </div>
      </div>

      <audio ref={audioRef} src={SILENT_AUDIO} preload="none" />
    </motion.div>
  );
};

const AudioCases = ({ t }) => {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section
      id="listen"
      className="relative py-24 md:py-32"
      data-testid="audio-section"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#00F0FF]">
            {t.audio.kicker}
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-light text-white tracking-tight leading-[1.1]">
            {t.audio.title}
          </h2>
          <p className="mt-5 text-base md:text-lg text-zinc-400 leading-relaxed">
            {t.audio.subtitle}
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {t.audio.cases.map((c, i) => (
            <AudioCase
              key={i}
              index={i}
              caseData={c}
              t={t}
              isActive={activeIdx === i}
              onPlay={() => setActiveIdx(activeIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudioCases;
