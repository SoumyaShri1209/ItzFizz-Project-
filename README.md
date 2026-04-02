# Itzfizz Digital — Scroll-Driven Hero Section

Internship assignment submission for **Itzfizz Digital Web Development Internship (6 months)**.

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + Bootstrap 5 |
| Animations | GSAP + ScrollTrigger |
| Language | JavaScript (no TypeScript) |
| Deploy | GitHub Pages / Vercel |

---

## 📁 Project Structure

```
itzfizz-hero/
├── src/
│   ├── app/
│   │   ├── layout.js        # Root layout, imports Bootstrap CDN
│   │   ├── page.js          # Home page — assembles all sections
│   │   └── globals.css      # CSS variables, fonts, base styles
│   └── components/
│       ├── CustomCursor.js  # Smooth dot + ring cursor
│       ├── Navbar.js        # Fixed top navigation
│       ├── HeroSection.js   # Scroll-driven hero (core feature)
│       ├── AboutSection.js  # Services section with scroll reveals
│       └── Footer.js        # Simple footer
├── next.config.js           # Static export config
├── tailwind.config.js
└── package.json
```

---

## ⚙️ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Build & Export (Static)

```bash
npm run build
```
This generates a static `out/` folder ready for GitHub Pages.

---

## 🌐 Deploy to GitHub Pages

1. Push your project to a GitHub repository
2. Install the `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add to `package.json` scripts:
   ```json
   "deploy": "gh-pages -d out"
   ```
4. Build and deploy:
   ```bash
   npm run build && npm run deploy
   ```
5. In your repo Settings → Pages → Source → `gh-pages` branch

### OR Deploy to Vercel (Easiest)
```bash
npx vercel
```
Vercel auto-detects Next.js. No configuration needed.

---

## ✨ Features

- **Scroll-Driven Animation** — Car image moves smoothly with scroll progress via GSAP ScrollTrigger `scrub`
- **Load Animations** — Headline letters stagger in, stats fade up with delay
- **Custom Cursor** — Dot + lagged ring, pure JS with requestAnimationFrame
- **Noise Texture** — Subtle grain overlay for premium feel
- **Responsive** — Bootstrap grid + Tailwind utilities for all screen sizes
- **Performance** — All animations use `transform` (no layout reflows), `will-change: transform` on the car

---

## 📐 Animation Architecture

```
Page Load
  ├── Navbar slides down (GSAP, delay 0.3s)
  ├── Car slides in from right (GSAP, delay 0.6s)
  ├── Headline letters stagger up (GSAP, delay 0.5s, stagger 0.04s)
  └── Stats fade up (GSAP, delay 1.2s, stagger 0.12s)

On Scroll (scrub: 1.2)
  ├── Hero panel PINNED by ScrollTrigger for 300vh scroll distance
  ├── Car translates X → -42vw (moves left across screen)
  └── Headline letters drift slightly upward (-30px)
```
