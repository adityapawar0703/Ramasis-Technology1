# Ramasis Technology — Cybersecurity Website

A modern, fully responsive cybersecurity company website built with **Vite + React + Tailwind CSS + Framer Motion + GSAP**.

## Stack

- Vite 5 (React)
- Tailwind CSS 3
- Framer Motion (interactions)
- GSAP + ScrollTrigger (scroll animations)
- React Router DOM 6
- Lucide React + Phosphor Icons
- React Hook Form + Zod (form validation)

## Features

- Dark / Light theme toggle (defaults to dark, cyber-aesthetic)
- Sticky scroll-aware navbar (hides on scroll down, reveals on scroll up)
- Hero with layered animated background: 3D-style canvas globe + matrix particles + video
- Services section — 8 cards, each clickable to a dedicated detail page (`/services/:slug`)
- Animated stats counters (in-view)
- Deliverables, Case Studies, Blog cards (all clickable / hover-rich)
- Contact form with frontend validation and toast feedback
- SEO-friendly meta tags, mobile-first responsive design, lazy-loaded routes
- Glassmorphism and neon green/cyan accents

## Run locally (VS Code)

```bash
# 1. Install
npm install
# (or) yarn

# 2. Dev server
npm run dev

# 3. Build for production
npm run build
npm run preview
```

Open <http://localhost:5173>.

## Project Structure

```
src/
├── components/      # Reusable UI (Navbar, Footer, cards, backgrounds, etc.)
├── pages/           # Route pages (Home, About, Services, ServiceDetail, Resources, Contact)
├── context/         # ThemeContext (dark/light)
├── data/            # Static data (services, blog posts, case studies)
├── hooks/           # Custom hooks (useScrollDirection, useCounter)
├── App.jsx
├── main.jsx
└── index.css
```

## Customising service detail content

Open `src/data/services.js` and update the `details` field for each service. Each service has its own dedicated route at `/services/<slug>`.

## License

© Ramasis Technology. All rights reserved.
