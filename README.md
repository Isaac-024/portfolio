# 🎬 Professional Video Editor Portfolio - Customization Guide

Welcome to your cinematic portfolio website! This project is built using **React**, **Vite**, **Tailwind CSS**, and **Framer Motion** for a high-end, responsive production studio look.

---

## 🚀 Quick Start (Running Locally)

To run the portfolio on your computer:

```bash
# 1. Install dependencies (if not already done)
npm install

# 2. Start the live development server
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to view the website.

---

## 🎛️ Central Customization File

All your content, personal details, video links, social channels, and projects can be changed in **one single file**:

📁 **`src/data/portfolioData.js`**

Below is how to customize each section:

---

### 1. Changing the Intro Video (Opening Reel)
In `src/data/portfolioData.js`:
```javascript
export const INTRO_CONFIG = {
  // Option A: YouTube link (Default)
  videoUrl: "https://youtu.be/f_bKjZeJBBI?si=ITewSwgClbdJe98e",

  // Option B: Local MP4 video file
  // Place your video in: public/assets/videos/intro.mp4
  // videoUrl: "/assets/videos/intro.mp4",
  
  title: "CRAFTING STORIES THROUGH EVERY FRAME",
  subtitle: "24.000 FPS • PRORES 422 HQ • REEL 2026",
  autoPlayMuted: true,
  showSkipButton: true,
};
```

---

### 2. Changing Project Videos & Links
All videos across the website currently default to:
`"https://youtu.be/f_bKjZeJBBI?si=ITewSwgClbdJe98e"`

To change any video or add your own:
1. Open `src/data/portfolioData.js`.
2. Locate `GALLERY_PROJECTS`.
3. Update the `videoUrl` field for any project with:
   - Any YouTube link (e.g. `https://youtu.be/YOUR_ID` or `https://www.youtube.com/watch?v=YOUR_ID`)
   - Any Vimeo link
   - Or a local MP4 file placed in `public/assets/videos/your-project.mp4`

Example:
```javascript
{
  id: "cine-1",
  title: "My Short Film - Director's Cut",
  category: "cinematic",
  categoryLabel: "Cinematic Edits",
  duration: "03:15",
  aspectRatio: "16:9", // or "9:16" for vertical Instagram reels!
  thumbnail: "/assets/thumbnails/my-project-thumb.jpg", // or web URL
  videoUrl: "https://youtu.be/YOUR_NEW_VIDEO_ID",
  description: "A high-octane edit featuring dynamic sound design and Kodak 2383 film look.",
  software: ["DaVinci Resolve", "Adobe Premiere Pro"],
  featured: true, // set to true to feature in the top showcase
  year: "2026",
}
```

---

### 3. Replacing the Profile Picture
1. Save your portrait image as:
   `public/assets/images/profile.jpg`
2. In `src/data/portfolioData.js`, update:
```javascript
export const PERSONAL_INFO = {
  name: "Your Name", // e.g. "Alex Rivers"
  brandName: "FRAMEFLOW", // e.g. "RIVERS CINEMATICS"
  profileImage: "/assets/images/profile.jpg", // or online URL
  ...
}
```

---

### 4. Updating Personal Info & Experience
In `src/data/portfolioData.js`, update:
- `name`: Your full name or editor moniker.
- `brandName`: Your studio or freelance brand.
- `role`: Your professional subtitle.
- `experienceYears`: e.g. `"6+"`.
- `location`: e.g. `"Los Angeles / Remote Worldwide"`.
- `bio`: 3 paragraphs highlighting your passion, storytelling philosophy, and client work.
- `stats`: Key figures (e.g. Completed projects, total views generated, retention rate).

---

### 5. Updating Social Media & Direct Contact Info
In `src/data/portfolioData.js`, locate `CONTACT_INFO`:
```javascript
export const CONTACT_INFO = {
  email: "yourname@gmail.com",
  whatsapp: "1234567890", // International number without '+' or spaces
  whatsappDisplay: "+1 (234) 567-890",
  instagram: "https://instagram.com/yourhandle",
  instagramHandle: "@yourhandle",
  youtube: "https://youtube.com/@yourchannel",
  youtubeHandle: "@yourchannel",
};
```

---

### 6. Adding, Removing, or Reordering Categories
In `src/data/portfolioData.js`, look for `CATEGORIES`:
- `Cinematic Edits`
- `Instagram Reels & Shorts` (Supports vertical 9:16 preview aspect ratio!)
- `Promotional Videos`
- `Motion Graphics`
- `After Effects / VFX`

You can add any new category by giving it a unique `id` and assigning projects that `category` ID in `GALLERY_PROJECTS`.

---

## 📂 Project Assets Directory Structure

```text
public/
└── assets/
    ├── videos/         <-- Drop local MP4 videos here (e.g. intro.mp4)
    ├── images/         <-- Drop your portrait / creative photos here (e.g. profile.jpg)
    └── thumbnails/     <-- Drop high-res video project thumbnails here
src/
├── components/         <-- Reusable UI components
│   ├── CustomCursor.jsx
│   ├── IntroVideoOverlay.jsx
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── AboutMe.jsx
│   ├── EditingCategories.jsx
│   ├── FeaturedProjects.jsx
│   ├── SoftwareSkills.jsx
│   ├── Collaboration.jsx
│   ├── ContactSection.jsx
│   ├── Footer.jsx
│   ├── VideoModal.jsx
│   └── SocialIcons.jsx
├── data/
│   └── portfolioData.js <-- All customizable data & links
├── utils/
│   └── videoUtils.js   <-- YouTube & video streaming parser
├── App.jsx
├── index.css
└── main.jsx
```

---

## 🛠️ Building for Production / Deploying

When ready to publish to Vercel, Netlify, or Firebase Hosting:

```bash
npm run build
```

This generates an ultra-fast production bundle inside the `dist/` folder ready for zero-config deployment.
