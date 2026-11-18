# 🎬 ZYNC — Video Editor Portfolio

A premium, cinematic creative portfolio website built from scratch with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## ⚡ Local Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev
```

Server runs at: **`http://localhost:5173/`**

---

## 🎞️ Opening Sequence

1. **Screen 1 — Loading Screen**:
   - Clean black background with the **ZYNC** wordmark (rendered exclusively in **Montserrat**).
   - Minimal animated "Loading..." indicator.
   - Automatically transitions to Screen 2.

2. **Screen 2 — Dive In Screen**:
   - Large, centered **ZYNC** logo.
   - One button: **`DIVE IN ↗`** with subtle border and hover animations.
   - Clicking transitions directly into the main portfolio.

---

## 🏛️ Main Portfolio Sections

- **Hero**: ZYNC branding, powerful creative tagline, and live stats ribbon.
- **About Me**: Editor bio, creative approach, and narrative pillars.
- **Featured Projects**: Curated showcase with software badges and full cinema modal player.
- **Editing Categories (9 Disciplines)**:
  - Cinematic Editing
  - Instagram Reels
  - Music Videos
  - Travel Videos
  - Promotional Videos
  - Wedding Films
  - Motion Graphics
  - VFX & After Effects
  - Commercial Advertisements
- **Software & Skills**: Adobe Premiere Pro, After Effects, DaVinci Resolve, Photoshop, Lightroom, and CapCut with animated level indicators.
- **Collaboration**: Interactive commission type selector and project brief dispatch form.
- **Contact & Footer**: Direct email, Instagram, YouTube, and WhatsApp connectivity with back-to-top navigation.

---

## 📁 How to Customize Your Content

All data is centralized in **`src/data/siteData.js`**:
- **Personal Information**: Replace placeholders marked with `[YOUR ...]` in `PERSONAL` and `CONTACT`.
- **Projects & Categories**: Update titles, thumbnails, and video URLs in `FEATURED_PROJECTS` and `CATEGORIES`.
