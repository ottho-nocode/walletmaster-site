# Site vitrine Wallet Master — design

Date : 2026-07-01
Statut : implémenté

## Objectif

Landing page marketing pour **Wallet Master** (app mobile d'éducation
budgétaire, « GPS financier »). Contenu issu du PDF `Site Wallet Master.pdf`.
Identité visuelle calquée sur l'app mobile (screenshots fournis).

## Direction visuelle

Dark navy + vert émeraude, reprise fidèle de l'app :

- Fond `#070b15`, cartes navy, coins très arrondis
- Accent `--green #12e07a` (actif / positif / CTA)
- Palette data : bleu (besoins), ambre (envies), vert (investissements)
- Logo = le « M » vert (`public/logo.png`)
- Motif récurrent : la **trajectoire / chemin GPS** (SVG dashed + points d'étape)
- Typo : Bricolage Grotesque (display) + Manrope (corps) + JetBrains Mono (chiffres)
- Ambiance : glows verts, grain léger, marquee partenaires, reveals au scroll

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind v4 + lucide-react
- 100 % statique (prerender), zéro backend
- Contact = liens `mailto:` / `tel:` (choix « simple »)
- Déployable Vercel (racine du projet = `site/`)

## Structure (one-page, ancres)

1. `Nav` — logo, liens ancres, CTA (scroll-aware + menu mobile)
2. `Hero` — accroche + mockup Parcours (trajectoire) + cartes flottantes + marquee
3. `Problem` — les projets + punchline « comment y parvenir »
4. `Solution` — objectif → trajectoire, métaphore GPS, mockup Simulateur
5. `HowItWorks` — Comprendre / Définir / Avancer (timeline)
6. `Ambition` — « copilote financier »
7. `AppShowcase` — 3 mockups (Accueil, Analyse, Synthèse)
8. `Principle` — « l'argent est un levier » + étapes Stabiliser/Sécuriser/Construire + 2 cartes
9. `Contact` — CTA + email / téléphone cliquables
10. `Footer`

## Composants clés

- `Reveal` — wrapper IntersectionObserver (fade-up), fallback `<noscript>`
- `PhoneMockup` — cadre téléphone réutilisable (next/image `fill`)

## Assets (`public/`)

Screenshots réels de l'app : `screen-parcours`, `screen-simulateur`,
`screen-accueil`, `screen-analyse`, `screen-synthese` (+ `finance`, `objectifs`
en réserve). `logo.png`.

## Commandes

```bash
npm run dev      # http://localhost:3000
npm run build    # build statique
```
