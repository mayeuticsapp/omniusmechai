import React from "react";
import { motion } from "framer-motion";
import { LOGO_URL } from "@/lib/content";

const Navbar = ({ lang, setLang, t, onCtaClick }) => {
  const navLink =
    "text-sm text-zinc-400 hover:text-white transition-colors tracking-wide";

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      data-testid="site-navbar"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 mt-4">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/60 backdrop-blur-xl px-4 md:px-6 py-2.5">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2.5 group"
            data-testid="nav-logo"
          >
            <img
              src={LOGO_URL}
              alt="Omnius MechAI"
              className="h-8 w-8 object-contain rounded-full"
            />
            <span className="font-display font-medium tracking-tight text-white text-base hidden sm:inline">
              Omnius <span className="text-gradient">MechAI</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo("listen")} className={navLink} data-testid="nav-listen">
              {t.nav.listen}
            </button>
            <button onClick={() => scrollTo("features")} className={navLink} data-testid="nav-features">
              {t.nav.features}
            </button>
            <button onClick={() => scrollTo("contact")} className={navLink} data-testid="nav-contact">
              {t.nav.contact}
            </button>
          </nav>

          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div
              className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 text-xs"
              data-testid="lang-toggle"
            >
              {["it", "en"].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  data-testid={`lang-${l}`}
                  className={`px-3 py-1 rounded-full font-medium uppercase tracking-wider transition-all ${
                    lang === l
                      ? "bg-accent-gradient text-black"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <button
              onClick={onCtaClick}
              className="hidden sm:inline-flex bg-accent-gradient text-black font-semibold text-sm rounded-full px-5 py-2 hover:scale-105 transition-transform"
              data-testid="nav-cta"
            >
              {t.nav.cta}
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
