import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";

const FinalCTA = ({ t, onCtaClick }) => {
  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 overflow-hidden border-t border-white/5"
      data-testid="final-cta-section"
    >
      {/* Glow backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,240,255,0.10) 0%, rgba(0,255,102,0.06) 30%, transparent 60%)",
        }}
      />
      <div
        className="aurora-orb"
        style={{
          width: 520,
          height: 520,
          background: "#00F0FF",
          top: -120,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.15,
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 md:px-12 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs uppercase tracking-[0.3em] text-[#00F0FF]"
        >
          {t.finalCta.kicker}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter leading-[1.05] text-white"
          data-testid="final-cta-title"
        >
          {t.finalCta.title_pre}{" "}
          <span className="text-gradient font-medium">{t.finalCta.title_grad}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto"
        >
          {t.finalCta.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <button
            onClick={onCtaClick}
            data-testid="final-cta-button"
            className="group inline-flex items-center gap-3 bg-accent-gradient text-black font-semibold text-base md:text-lg rounded-full px-9 py-5 md:px-12 md:py-6 hover:scale-[1.04] active:scale-[0.98] transition-transform animate-pulse-glow"
          >
            <MessageCircle className="w-6 h-6" strokeWidth={2.2} />
            <span>{t.finalCta.cta}</span>
            <ArrowUpRight
              className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              strokeWidth={2.2}
            />
          </button>
          <p className="text-xs text-zinc-500 tracking-wide">
            {t.finalCta.cta_sub}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
