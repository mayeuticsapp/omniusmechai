import React from "react";
import { motion } from "framer-motion";
import {
  Mic,
  Cog,
  ShieldCheck,
  Clock,
  Sparkles,
  BarChart3,
} from "lucide-react";

const ICON_MAP = { Mic, Cog, ShieldCheck, Clock, Sparkles, BarChart3 };

const FeatureCard = ({ item, index, span }) => {
  const Icon = ICON_MAP[item.icon] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className={`group relative overflow-hidden bg-[#121212] border border-white/5 rounded-2xl p-7 md:p-8 hover:border-[#00F0FF]/35 hover:-translate-y-1 transition-all duration-500 ${span || ""}`}
      data-testid={`feature-card-${index}`}
    >
      {/* Hover gradient veil */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx,50%) var(--my,0%), rgba(0,240,255,0.10), transparent 60%)",
        }}
      />

      <div className="relative">
        <div className="h-12 w-12 rounded-xl border border-[#00F0FF]/30 bg-[#00F0FF]/5 flex items-center justify-center text-[#00F0FF] group-hover:text-[#00FF66] group-hover:border-[#00FF66]/40 transition-colors">
          <Icon className="w-6 h-6" strokeWidth={1.5} />
        </div>

        <h3 className="mt-6 font-display text-lg md:text-xl font-medium text-white tracking-tight">
          {item.title}
        </h3>
        <p className="mt-3 text-sm md:text-base text-zinc-400 leading-relaxed">
          {item.desc}
        </p>
      </div>

      {/* Corner accent */}
      <div
        className="absolute -bottom-px -right-px h-16 w-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at bottom right, rgba(0,255,102,0.35), transparent 70%)",
        }}
      />
    </motion.div>
  );
};

const Features = ({ t }) => {
  // Clean equal 3x2 grid for premium feel
  const spans = ["", "", "", "", "", ""];

  return (
    <section
      id="features"
      className="relative py-24 md:py-32 border-t border-white/5"
      data-testid="features-section"
    >
      {/* Subtle ambient orbs */}
      <div
        className="aurora-orb"
        style={{
          width: 380,
          height: 380,
          background: "#00FF66",
          top: 80,
          left: -120,
          opacity: 0.08,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#00F0FF]">
            {t.features.kicker}
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-light text-white tracking-tight leading-[1.1]">
            {t.features.title}
          </h2>
          <p className="mt-5 text-base md:text-lg text-zinc-400 leading-relaxed">
            {t.features.subtitle}
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 auto-rows-fr">
          {t.features.items.map((it, i) => (
            <FeatureCard key={i} item={it} index={i} span={spans[i]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
