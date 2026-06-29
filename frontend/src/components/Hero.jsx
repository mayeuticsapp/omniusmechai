import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import NeuralBackground from "@/components/NeuralBackground";
import { LOGO_URL } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.1, duration: 0.7, ease: "easeOut" },
  }),
};

const Hero = ({ t, onCtaClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden"
      data-testid="hero-section"
    >
      <NeuralBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 w-full">
        {/* Logo */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="flex justify-center mb-10"
        >
          <div className="relative animate-float">
            <div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,240,255,0.45), rgba(0,255,102,0.15) 60%, transparent 80%)",
              }}
            />
            <img
              src={LOGO_URL}
              alt="Omnius MechAI"
              className="relative h-32 md:h-40 w-auto object-contain"
              data-testid="hero-logo"
            />
          </div>
        </motion.div>

        {/* Kicker */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="text-center"
        >
          <span
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#00F0FF] border border-[#00F0FF]/30 rounded-full px-4 py-1.5 bg-[#00F0FF]/5"
            data-testid="hero-kicker"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
            {t.hero.kicker}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          className="mt-8 text-center font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter leading-[1.05] text-white max-w-5xl mx-auto"
          data-testid="hero-headline"
        >
          {t.hero.headline_pre}{" "}
          <span className="text-gradient font-medium">{t.hero.headline_grad}</span>{" "}
          {t.hero.headline_post}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
          className="mt-8 text-center text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto"
          data-testid="hero-subtitle"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <button
            onClick={onCtaClick}
            data-testid="hero-cta"
            className="group relative inline-flex items-center gap-3 bg-accent-gradient text-black font-semibold text-base md:text-lg rounded-full px-8 py-4 md:px-10 md:py-5 hover:scale-[1.03] active:scale-[0.98] transition-transform animate-pulse-glow"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
            <span>{t.hero.cta}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.2} />
          </button>
          <p className="text-xs text-zinc-500 tracking-wide" data-testid="hero-cta-sub">
            {t.hero.cta_sub}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={5}
          className="mt-20 grid grid-cols-3 max-w-2xl mx-auto gap-6"
        >
          {t.hero.stats.map((s, i) => (
            <div
              key={i}
              className="text-center"
              data-testid={`hero-stat-${i}`}
            >
              <div className="font-display text-3xl md:text-5xl font-light text-gradient tracking-tighter">
                {s.value}
              </div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-[0.2em] text-zinc-500">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
