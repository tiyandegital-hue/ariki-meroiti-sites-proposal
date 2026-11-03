# DESIGN.md — Harbourline Landscapes (demo proposal for Ariki Meroiti)

---
tokens:
  canvas: "#FAF6EF"
  ink: "#1B1611"
  muted: "#6F6355"
  line: "rgba(27,22,17,.14)"
  surface: "#FFFFFF"
  accent: "#2E4A3B"
  accent-ink: "#FFFFFF"
  display: "Fraunces, Georgia, serif"
  body: "Inter, system-ui, sans-serif"
  mono: "'IBM Plex Mono', ui-monospace, monospace"
  radius: "3px"
  measure: "1140px"
---

## Overview
Demo proposal site for lead Ariki Meroiti (Australian Small Business Network, 2026-11-02):
"looking for a website developer… 3–4 sites that need building." He compares ~66
commenters and his "vibe coder" phrasing signals price sensitivity — so this demo
must prove craft, not cheapness. Framing: **"this is the quality standard all
3–4 of your sites get."**

Niche: premium residential landscaping, Sydney. Chosen because (a) the niche's
best sites win on finished-work photography + trust signals (research:
webcitz, colorlib, smartservice, richieashbeck, plumbelecmarketing), and
(b) it gives the strongest visual showcase of design quality.

Mood (three words): **Confident. Warm. Precise.**

## Colors
- 1 background (warm paper #FAF6EF), 1 foreground (near-black #1B1611),
  2 greys (muted #6F6355, hairline rgba ink 14%), **1 accent** (deep eucalyptus
  #2E4A3B). One-voltage rule: the accent does ALL CTA work; nothing else is green.
- No gradients, no glow orbs, no blobs. Near-blacks and off-whites only.
- Contrast (WCAG AA, computed): ink on canvas 15.9:1; muted on canvas 5.4:1;
  accent-ink on accent 9.8:1; accent on canvas 7.4:1. All pass.

## Typography
- Display: Fraunces (72–96px desktop via clamp, 40–52 mobile; lh 0.95–1.05;
  tracking −0.02em). Serif = craft/heritage.
- Body: Inter 16–18px, lh 1.65, measure ≤ 70ch.
- Mono labels: IBM Plex Mono, 11–12px, uppercase, +0.22em tracking, 55% opacity —
  the "architect's spec sheet" voice (N°01 — COURTYARD, MOSMAN).
- Max 2 families + 1 mono. Headlines 3–9 words, hand-broken to 2–3 lines.

## Layout
- 12-col grid, 1140px measure, 24px gutters; section rhythm 112px desktop / 64px mobile.
- Signature idea (home): spec-sheet hero — left column giant serif headline,
  right column photograph with mono annotations pinned over it; hairline rules
  everywhere; oversized section numerals.
- Services: numbered editorial rows (01–05) divided by hairlines.
- Work: restrained bento — varied cell sizes, mono project captions.
- Depth = hairlines + surface steps, zero drop shadows. Radius 3px (architectural).

## Components
- Nav: wordmark left, 5 links, one accent CTA ("Get a quote"); sticky with
  hairline bottom border; visible active state; mobile: details/summary menu.
- Buttons: accent fill, 3px radius, 2–3 word verb-first labels; hover darkens
  8%; :active scale .97; focus-visible ring.
- Forms: real <label>s, autocomplete attrs, inline consent checkbox with plain-
  language data note, specific error text via required + JS check.
- Footer: nav, legal links (Privacy, Terms), ABN placeholder, and the honesty
  strip: "Demo concept by Tiyan Digital — business name, imagery and details
  are placeholders."

## Shapes / Elevation & Depth
- Radius ceiling 3px. No shadows (one rationed 0 1px 0 rgba for button press only).
- Images: 4:3 / 16:10 / 1:1 crops via aspect-ratio; 110% oversize with
  object-position to avoid text collision.

## Motion
- One idiom: overflow-hidden masked rise (opacity 0→1, translateY 26px→0,
  0.8s, cubic-bezier(0.16,1,0.3,1)), staggered 0.1s via IntersectionObserver.
- Entrance order: nav → eyebrow → H1 → sub → CTA. Done by ~1.5s.
- `prefers-reduced-motion`: all reveals off. No-JS: content visible (`.js` gate).
- Nothing else animates. No parallax, no scroll-scrubbed copy.

## Do's and Don'ts
- DO: one idea per screen, hairlines, mono spec labels, real Unsplash photos
  (credits in README), verb-first CTAs, honest placeholder marking.
- DON'T: gradients, emoji icons, centered-everything, 3 identical cards,
  lorem ipsum, fake testimonials/reviews/stats, invented prices ("Fixed quote
  after site visit" instead), dead links, placeholder-only form labels.

## Known Gaps
- Business is fictional (placeholder for the demo) — real business would supply
  its own photos, ABN, licence numbers, service area and reviews.
- No screenshots were possible in this build environment; verification was
  static (link map, markup parse, contrast math, overflow audit). A visual
  look-and-fix pass on real desktop + phone screens is recommended before
  showing the lead.
- Fonts load from Google Fonts CDN (disclosed in Privacy). No cookies,
  no analytics, no trackers on this demo.
