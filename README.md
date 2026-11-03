# Harbourline Landscapes — demo proposal site

Proposal/demo site for lead **Ariki Meroiti** (Australian Small Business Network,
2026-11-02 — needs 3–4 websites built). Built by Tiyan Digital under the
Stitch-first lead workflow v2.

**Framing:** "This is the quality standard all 3–4 of your sites get."
**Demo business:** Harbourline Landscapes — premium residential landscaping,
Sydney. Fictional placeholder (name, projects, contact details).

## Pages
- `index.html` — Home (spec-sheet hero, services index, process, work preview)
- `services.html` — 5 services, editorial detail sections
- `about.html` — approach + principles
- `work.html` — project grid
- `contact.html` — quote form (demo: validates client-side, shows success state)
- `privacy.html`, `terms.html` — legal pages (plain language, AU)

## Design
See `DESIGN.md` for tokens, type scale, motion rules and known gaps.

## Image credits (Unsplash License — https://unsplash.com/license)
All images local in `images/`:
- planting.jpg, garden-detail.jpg, garden-sun.jpg, garden-path.jpg,
  hero-garden.jpg, craft-hands.jpg — garden/plant photography
- project-dusk.jpg, project-modern.jpg, project-courtyard.jpg,
  project-family.jpg, project-villa.jpg, detail-stone.jpg — architecture/exteriors
Source: images.unsplash.com (verified 200 OK at build time, Nov 2026).

## Deploy
Static site — no build step. Vercel: Framework Preset "Other", root = repo root.
