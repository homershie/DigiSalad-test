# DigiSalad Landing Page

A Vue 3 + Vite landing page built as a front-end coding test for DigiSalad (沙拉互動).
The goal is to faithfully reproduce the provided Figma design with animations, transitions, and responsive layout.

## Tech Stack

- **Vue 3** (Composition API + `<script setup>`)
- **TypeScript**
- **Vite**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **GSAP + ScrollTrigger** — all animations including scroll-triggered reveals
- **VueUse** — scroll detection for sticky navbar

## Project Structure

```
src/
├── assets/styles/
│   └── main.css                # Tailwind v4 entry + brand design tokens
├── composables/
│   ├── useMenu.ts              # Global side menu open/close state
│   ├── useScrollNav.ts         # Scroll detection → navbar style toggle
│   └── useGsapReveal.ts        # Reusable GSAP ScrollTrigger reveal animation
├── components/
│   ├── layout/
│   │   ├── AppNavbar.vue       # Sticky navbar (transparent → solid on scroll)
│   │   └── SideMenu.vue        # Full-page overlay side menu
│   └── sections/
│       ├── HeroSection.vue     # Video background + headline
│       ├── AboutSection.vue    # About DigiSalad + illustration
│       ├── AwardsSection.vue   # Partner logos
│       ├── IngredientsSection.vue  # Our Ingredients (teal bg + icon grid)
│       ├── TestimonialSection.vue  # Quote section (dark bg)
│       ├── BrandsSection.vue   # Brand experience logo grid
│       └── AppShowcaseSection.vue  # Mobile app feature (dark bg)
├── App.vue
└── main.ts
```

## Design Reference

Design assets are located in `/public/`:
- `01. Homepage.png` — Full homepage layout
- `02. Side Menu.png` — Side menu overlay
- `03. Scroll Down.png` — Scrolled navbar state
- `Guide for Developer.png` — Implementation instructions

## Getting Started

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Lint & Format

```sh
npm run lint
npm run format
```
