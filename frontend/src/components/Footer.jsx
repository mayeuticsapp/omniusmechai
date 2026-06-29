import React from "react";
import { LOGO_URL } from "@/lib/content";

const Footer = ({ t }) => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative border-t border-white/5 py-12"
      data-testid="site-footer"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="Omnius MechAI"
            className="h-8 w-8 object-contain rounded-full"
          />
          <div>
            <div className="font-display text-sm text-white">
              Omnius <span className="text-gradient">MechAI</span>
            </div>
            <div className="text-xs text-zinc-500">{t.footer.tagline}</div>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-zinc-500">
          <a href="#" className="hover:text-white transition-colors" data-testid="footer-privacy">
            {t.footer.privacy}
          </a>
          <a href="#" className="hover:text-white transition-colors" data-testid="footer-cookie">
            {t.footer.cookie}
          </a>
          <span>© {year} Omnius MechAI · {t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
