import React, { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AudioCases from "@/components/AudioCases";
import Features from "@/components/Features";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { content, WHATSAPP_LINK } from "@/lib/content";

export default function Landing() {
  const [lang, setLang] = useState("it");
  const t = content[lang];

  const openWhatsApp = useCallback(() => {
    window.open(WHATSAPP_LINK(lang), "_blank", "noopener,noreferrer");
  }, [lang]);

  return (
    <div
      className="min-h-screen bg-[#0A0A0A] text-white antialiased overflow-x-hidden"
      data-testid="landing-root"
    >
      <Navbar lang={lang} setLang={setLang} t={t} onCtaClick={openWhatsApp} />
      <main>
        <Hero t={t} onCtaClick={openWhatsApp} />
        <AudioCases t={t} />
        <Features t={t} />
        <FinalCTA t={t} onCtaClick={openWhatsApp} />
      </main>
      <Footer t={t} />
    </div>
  );
}
