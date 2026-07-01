# CLAUDE.md — site vitrine Wallet Master

Landing page marketing pour l'app **Wallet Master** (« GPS financier », éducation
budgétaire). Sous-projet du repo `walletmaster-backoffice` (racine = `site/`).

## Stack

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind v4** (`@theme` dans `app/globals.css`)
- **lucide-react** pour les icônes
- 100 % statique (prerender), pas de backend. Contact = `mailto:` / `tel:`.
- Déploiement Vercel (root directory du projet Vercel = `site/`)

## Commandes

```bash
npm run dev      # http://localhost:3000
npm run build    # build statique dans .next/
npm run start    # preview du build
```

## Architecture

- Page unique `app/page.tsx` qui compose les sections de `app/components/`.
- Une section = un composant (server component sauf `Nav` et `Reveal` qui sont `"use client"`).
- Ordre des sections : Nav → Hero → Problem → Solution → HowItWorks → Ambition
  → AppShowcase → Principle → Contact → Footer.
- `Reveal` = animation fade-up au scroll (IntersectionObserver) ; fallback
  `<noscript>` dans `layout.tsx` pour révéler le contenu sans JS.
- `PhoneMockup` = cadre téléphone réutilisable (`next/image` en `fill`).

## Design system (calqué sur l'app mobile)

- Tokens dans `app/globals.css` (`--green #12e07a`, navy `#070b15`, etc.).
- Classes utilitaires maison : `.card`, `.card-glow`, `.chip`, `.btn`,
  `.eyebrow`, `.text-gradient-green`, `.glow-blob`, `.reveal`.
- Fonts : Bricolage Grotesque (display), Manrope (corps), JetBrains Mono (chiffres).
- Motif signature : trajectoire GPS (SVG `stroke-dasharray` + points d'étape).

## Contenu

Texte issu de `~/Downloads/Site Wallet Master.pdf`. Screenshots réels de l'app
dans `public/screen-*.png`. Coordonnées : mailwalletmaster@gmail.com / 07 82 46 90 47.

Voir `docs/plans/2026-07-01-site-vitrine-wallet-master-design.md` pour le design complet.
