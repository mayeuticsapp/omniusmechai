# Omnius MechAI — Landing Page

## Original problem statement
Landing page vetrina premium per "Omnius MechAI", assistente AI per officine di autoriparazione. Sito one-page con hero, sezione "Ascolta Omnius" con player audio demo, funzionalità in bento grid, CTA finale e footer minimalista.

## User choices (verbatim)
- **Form contatto**: "metti solo whatsapp come contatto niente altro" → nessun form, solo CTA WhatsApp
- **Audio**: placeholder silenziosi (l'utente caricherà file reali in seguito)
- **Lingua**: bilingue IT/EN con toggle
- **Prezzi**: nessun prezzo, sito vetrina puro
- **Animazioni**: "Premium con animazioni fluide"

## Architecture
- **Frontend**: React 19 + React Router + Tailwind + Framer Motion + lucide-react
- **Backend**: FastAPI default (non utilizzato — nessun form, nessuna persistenza)
- **DB**: MongoDB (non utilizzato in questa fase)
- Tema scuro premium (nero #0A0A0A) con accenti gradiente blu elettrico (#00F0FF) → verde neon (#00FF66)
- Font: Outfit (display) + Manrope (body)

## File structure
```
/app/frontend/src/
  App.js                     # Router → Landing
  index.css                  # Tailwind + global tokens, animations, gradient utilities
  lib/content.js             # Translations IT/EN + WhatsApp link helper + LOGO_URL
  pages/Landing.jsx          # Composes all sections, manages lang state
  components/
    Navbar.jsx               # Sticky pill nav + lang toggle + CTA
    Hero.jsx                 # Logo + headline + subtitle + CTA + stats
    NeuralBackground.jsx     # Animated SVG neural network + aurora orbs
    AudioCases.jsx           # 3 audio demo cards with play/pause + waveform
    Features.jsx             # 3x2 grid of feature cards with hover glow
    FinalCTA.jsx             # Big closing CTA → WhatsApp
    Footer.jsx               # Minimalist footer
```

## What's implemented (Dec 2025)
- Bilingual IT/EN toggle (default IT)
- Hero with animated logo + neural network background + pulse-glow CTA
- "Ascolta Omnius" section with 3 cases (silent placeholder audio, playable UI)
- 6 feature cards (Voice / Integration / EU AI Act / 24-7 / Learning / Analytics)
- Two WhatsApp CTAs (hero + final) opening wa.me link with pre-filled message
- Sticky pill navbar with smooth-scroll anchors
- Premium animations (Framer Motion stagger reveals, hover lift, gradient text)
- Full responsive (mobile-first, md, lg breakpoints)
- data-testid on every interactive element

## Configuration
- **WhatsApp number**: placeholder `+39 333 1234567` in `/app/frontend/src/lib/content.js` (`WHATSAPP_NUMBER`). To swap, edit that constant.
- **Logo**: hosted on Emergent CDN (URL in `LOGO_URL`)
- **Audio**: tiny silent WAV data URI in `AudioCases.jsx`. Replace by setting `SILENT_AUDIO` to your real MP3 URLs (or pass per case).

## Backlog (P1)
- Replace placeholder audio with real Omnius demo recordings (user will provide)
- Real WhatsApp number to be set in `content.js`
- Privacy/Cookie pages (currently footer links are placeholders `#`)
- Optional: add analytics events on CTA clicks (PostHog already loaded by template)

## Backlog (P2)
- Add a "Trusted by" workshops marquee
- Schema.org / SEO meta tags & OG image
- Smooth lazy-load images, preload hero logo
