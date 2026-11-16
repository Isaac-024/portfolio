/**
 * =========================================================================
 * VIDEO EDITOR PORTFOLIO - CENTRAL DATA CONFIGURATION
 * =========================================================================
 * 
 * You can customize ALL your personal info, videos, links, thumbnails,
 * and categories right here in this single file.
 * 
 * DEFAULT VIDEO LINK REQUESTED:
 * "https://youtu.be/f_bKjZeJBBI?si=ITewSwgClbdJe98e"
 * (You can replace this with any YouTube link, Vimeo link, or local MP4 path)
 */

export const DEFAULT_VIDEO_URL = "https://youtu.be/f_bKjZeJBBI?si=ITewSwgClbdJe98e";

// =========================================================================
// 1. PERSONAL & BRAND INFORMATION (PLACEHOLDERS)
// =========================================================================
export const PERSONAL_INFO = {
  name: "[YOUR NAME]",
  brandName: "FRAMEFLOW",
  role: "Video Editor | Visual Storyteller | Creative Mind",
  tagline: "CRAFTING STORIES THROUGH EVERY FRAME.",
  experienceYears: "5+", // Update with your actual years of editing experience
  location: "[YOUR CITY / REMOTE WORLDWIDE]",
  statusText: "AVAILABLE FOR CREATIVE COLLABORATIONS",
  isAvailableForWork: true,
  
  // Profile picture: Replace with your creative portrait in public/assets/images/profile.jpg
  profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
  
  // Creative statement / About bio
  bio: [
    "I am a freelance video editor and visual storyteller dedicated to transforming raw footage into emotionally resonant, high-impact cinematic experiences.",
    "My creative philosophy is anchored in rhythm, emotional pacing, color psychology, and seamless visual continuity. Every cut has purpose, every frame breathes with narrative intent, and every transition elevates the story.",
    "From high-octane commercial edits to intimate documentary narratives and viral social content, I collaborate closely with directors, brands, and creators to engineer visuals that stop the scroll and leave lasting impressions."
  ],
  
  stats: [
    { label: "Completed Projects", value: "120+", highlight: "Commercial & Indie" },
    { label: "Total Views Generated", value: "45M+", highlight: "Across Platforms" },
    { label: "Editing Experience", value: "5+ Yrs", highlight: "Full-Time Craft" },
    { label: "Client Retention Rate", value: "98%", highlight: "Repeat Collaborators" },
  ]
};

// =========================================================================
// 2. INTRO OPENING EXPERIENCE CONFIGURATION
// =========================================================================
export const INTRO_CONFIG = {
  // Intro video: Can be YouTube link OR local file: "/assets/videos/intro.mp4"
  videoUrl: DEFAULT_VIDEO_URL,
  title: "CRAFTING STORIES THROUGH EVERY FRAME",
  subtitle: "24.000 FPS • PRORES 422 HQ • REEL 2026",
  autoPlayMuted: true,
  showSkipButton: true,
  timecodeDuration: "00:01:24:18", // Aesthetic timecode indicator
};

// =========================================================================
// 3. EDITING CATEGORIES
// =========================================================================
export const CATEGORIES = [
  { id: "all", name: "All Works", count: "12 Projects" },
  { id: "cinematic", name: "Cinematic Edits", count: "3 Projects", icon: "Film" },
  { id: "reels", name: "Instagram Reels & Shorts", count: "3 Projects", icon: "Smartphone" },
  { id: "promo", name: "Promotional Videos", count: "2 Projects", icon: "Sparkles" },
  { id: "motion", name: "Motion Graphics", count: "2 Projects", icon: "Layers" },
  { id: "vfx", name: "After Effects / VFX", count: "2 Projects", icon: "Wand2" },
];

// =========================================================================
// 4. GALLERY & CATEGORY PROJECTS
// =========================================================================
export const GALLERY_PROJECTS = [
  // Cinematic Edits
  {
    id: "cine-1",
    title: "Echoes of the North - Cinematic Travel Film",
    category: "cinematic",
    categoryLabel: "Cinematic Edits",
    duration: "02:45",
    aspectRatio: "16:9",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    videoUrl: DEFAULT_VIDEO_URL,
    description: "An evocative narrative piece blending high-speed aerials, custom sound design, and analog film grain color grading.",
    software: ["DaVinci Resolve", "Adobe Premiere Pro"],
    featured: true,
    year: "2026",
  },
  {
    id: "cine-2",
    title: "Midnight Drive - Cyberpunk Narrative Short",
    category: "cinematic",
    categoryLabel: "Cinematic Edits",
    duration: "03:12",
    aspectRatio: "16:9",
    thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    videoUrl: DEFAULT_VIDEO_URL,
    description: "Atmospheric neon-lit narrative exploring isolation in a futuristic cityscape. Heavy focus on rhythm and pacing.",
    software: ["Adobe Premiere Pro", "Adobe After Effects"],
    featured: false,
    year: "2026",
  },
  {
    id: "cine-3",
    title: "Wilderness Solitude - Documentary Teaser",
    category: "cinematic",
    categoryLabel: "Cinematic Edits",
    duration: "01:58",
    aspectRatio: "16:9",
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    videoUrl: DEFAULT_VIDEO_URL,
    description: "Organic pacing, natural ambient Foley design, and subtle Kodak 2383 print film emulation.",
    software: ["DaVinci Resolve", "Adobe Audition"],
    featured: false,
    year: "2025",
  },

  // Instagram Reels & Shorts
  {
    id: "reels-1",
    title: "Urban Velocity - High Retention Street Reel",
    category: "reels",
    categoryLabel: "Instagram Reels & Shorts",
    duration: "00:30",
    aspectRatio: "9:16",
    thumbnail: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80",
    videoUrl: DEFAULT_VIDEO_URL,
    description: "Fast-paced kinetic cuts, beat-synced whip pans, and retention-optimized visual hooks for maximum viral engagement.",
    software: ["Adobe Premiere Pro", "CapCut"],
    featured: true,
    year: "2026",
  },
  {
    id: "reels-2",
    title: "Tech Unboxing & Sound Design ASMR",
    category: "reels",
    categoryLabel: "Instagram Reels & Shorts",
    duration: "00:45",
    aspectRatio: "9:16",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    videoUrl: DEFAULT_VIDEO_URL,
    description: "Crisp macro cinematography, tactile sound synthesis, and dynamic typography tracking for creator audience.",
    software: ["CapCut", "Adobe Premiere Pro"],
    featured: false,
    year: "2026",
  },
  {
    id: "reels-3",
    title: "Gym Motivation & Athlete Speed Ramping",
    category: "reels",
    categoryLabel: "Instagram Reels & Shorts",
    duration: "00:25",
    aspectRatio: "9:16",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    videoUrl: DEFAULT_VIDEO_URL,
    description: "Aggressive time remapping, frame blending, and bass-heavy impact hits tailored for vertical engagement.",
    software: ["Adobe Premiere Pro", "Adobe After Effects"],
    featured: false,
    year: "2025",
  },

  // Promotional Videos
  {
    id: "promo-1",
    title: "Apex Chronograph - Luxury Watch Launch Film",
    category: "promo",
    categoryLabel: "Promotional Videos",
    duration: "01:15",
    aspectRatio: "16:9",
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    videoUrl: DEFAULT_VIDEO_URL,
    description: "Commercial spot emphasizing tactile material textures, precise speed curves, and high-end elegance.",
    software: ["DaVinci Resolve", "Adobe Premiere Pro", "Adobe Photoshop"],
    featured: true,
    year: "2026",
  },
  {
    id: "promo-2",
    title: "Hyperion Electric Supercar - Brand Reveal",
    category: "promo",
    categoryLabel: "Promotional Videos",
    duration: "01:30",
    aspectRatio: "16:9",
    thumbnail: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
    videoUrl: DEFAULT_VIDEO_URL,
    description: "High-octane commercial trailer mixing 3D automotive renders with live track footage and synth audio cues.",
    software: ["Adobe Premiere Pro", "Adobe After Effects"],
    featured: false,
    year: "2025",
  },

  // Motion Graphics
  {
    id: "motion-1",
    title: "NeoPulse Festival - Kinetic Identity & Titles",
    category: "motion",
    categoryLabel: "Motion Graphics",
    duration: "00:50",
    aspectRatio: "16:9",
    thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80",
    videoUrl: DEFAULT_VIDEO_URL,
    description: "Bold typographic motion system, chromatic aberration styling, and modular broadcast graphics package.",
    software: ["Adobe After Effects", "Adobe Illustrator"],
    featured: true,
    year: "2026",
  },
  {
    id: "motion-2",
    title: "Fintech App UI Animation & Explainer",
    category: "motion",
    categoryLabel: "Motion Graphics",
    duration: "01:10",
    aspectRatio: "16:9",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    videoUrl: DEFAULT_VIDEO_URL,
    description: "Smooth isometric UI choreography, vector transformations, and clean data visualizations.",
    software: ["Adobe After Effects", "Adobe Photoshop"],
    featured: false,
    year: "2025",
  },

  // After Effects / VFX
  {
    id: "vfx-1",
    title: "Orbital Anomaly - Sci-Fi Portal & Compositing",
    category: "vfx",
    categoryLabel: "After Effects / VFX",
    duration: "01:40",
    aspectRatio: "16:9",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    videoUrl: DEFAULT_VIDEO_URL,
    description: "3D camera tracking, rotoscoping, particle simulations, atmospheric haze, and multi-pass scene compositing.",
    software: ["Adobe After Effects", "DaVinci Resolve"],
    featured: true,
    year: "2026",
  },
  {
    id: "vfx-2",
    title: "Street Mirage - Invisible Rig Removal & Speed Ramp",
    category: "vfx",
    categoryLabel: "After Effects / VFX",
    duration: "00:48",
    aspectRatio: "16:9",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    videoUrl: DEFAULT_VIDEO_URL,
    description: "Complex wire and reflection cleanups, perspective matchmoving, and seamless illusion transitions.",
    software: ["Adobe After Effects", "Adobe Photoshop"],
    featured: false,
    year: "2025",
  },
];

// =========================================================================
// 5. FEATURED PROJECTS SPOTLIGHT
// =========================================================================
export const FEATURED_PROJECTS = GALLERY_PROJECTS.filter(p => p.featured);

// =========================================================================
// 6. SOFTWARE & EDITING SKILLS
// =========================================================================
export const SOFTWARE_TOOLS = [
  {
    name: "Adobe Premiere Pro",
    category: "NLE & Core Assembly",
    proficiency: 98,
    accentColor: "#9999FF",
    iconCode: "Pr",
    description: "Multi-cam sync, precision J/L-cuts, proxy workflows, advanced timeline management, and broadcast deliverables.",
    features: ["Dynamic Trimming", "Audio Auto-Match", "Multi-Camera Sync", "XML/EDL Conform"]
  },
  {
    name: "Adobe After Effects",
    category: "VFX & Motion Design",
    proficiency: 95,
    accentColor: "#D291FF",
    iconCode: "Ae",
    description: "Complex rotoscoping, 3D camera tracking, kinetic typography, particle generation, and visual compositing.",
    features: ["3D Camera Tracker", "Mocha Pro Tracking", "Kinetic Typography", "Visual FX"]
  },
  {
    name: "DaVinci Resolve",
    category: "Color Grading & Finishing",
    proficiency: 92,
    accentColor: "#FF6666",
    iconCode: "Dr",
    description: "Node-based color grading, ACES color management, film print emulation (Cineon/Kodak), HDR mastering, and Fairlight audio.",
    features: ["Node-Based Grading", "Color Match & Tracking", "Film Halation/Grain", "Fairlight Audio"]
  },
  {
    name: "Adobe Photoshop",
    category: "Graphic Assets & Cleanup",
    proficiency: 90,
    accentColor: "#31A8FF",
    iconCode: "Ps",
    description: "Clean plates, frame painting, YouTube high-CTR thumbnail design, matte painting, and textural elements.",
    features: ["Thumbnail Creation", "Matte Painting", "Texture Synthesis", "Clean Plate Painting"]
  },
  {
    name: "Adobe Lightroom",
    category: "Color Science & Stills",
    proficiency: 88,
    accentColor: "#8EE5FF",
    iconCode: "Lr",
    description: "Look development, custom LUT creation, high-dynamic range stills grading, and photographic consistency.",
    features: ["Look Development", "Tone Curve Mastery", "Custom 3D LUTs", "Batch Processing"]
  },
  {
    name: "CapCut",
    category: "Fast Viral Social Workflows",
    proficiency: 95,
    accentColor: "#00E5FF",
    iconCode: "Cc",
    description: "Ultra-fast turnaround vertical content, trending audio synchronization, auto-captions, and platform-native formats.",
    features: ["Viral Pacing Hooks", "Dynamic Captions", "Smart Background Removal", "Rapid Turnaround"]
  },
];

// Specialized craftsmanship areas
export const CRAFT_SPECIALTIES = [
  {
    title: "Cinematic Pacing & Rhythm",
    description: "Matching cut timing to emotional undertones, dialogue cadences, and music swells rather than simple visual beats.",
    icon: "Clock"
  },
  {
    title: "ACES & Film Emulation",
    description: "Accurate color management preserving highlight roll-off, organic skin tones, and rich analog grain textures.",
    icon: "Palette"
  },
  {
    title: "Spatial Sound Design & Foley",
    description: "Layering ambient drones, sub-bass impacts, risers, and micro-Foley to make visuals physically palpable.",
    icon: "Volume2"
  },
  {
    title: "High-Retention Hooks",
    description: "Structuring the critical first 3 seconds of short-form content to maximize average watch time and completion rate.",
    icon: "TrendingUp"
  }
];

// =========================================================================
// 7. COLLABORATION OPTIONS
// =========================================================================
export const COLLABORATION_TYPES = [
  {
    id: "brands",
    title: "Brand Collaborations",
    tagline: "Commercials, Product Ads & Brand Stories",
    description: "High-production commercials and social product campaigns that build brand authority and convert viewers into loyal customers.",
    idealFor: "E-Commerce Brands, Fashion, Tech Startups & Agencies",
    timeline: "1 - 3 Weeks",
    popular: true,
  },
  {
    id: "creators",
    title: "Content Creators",
    tagline: "YouTube Long-Form & Viral Short-Form Retainers",
    description: "Collaborative partnership optimizing retention, crafting high-CTR thumbnails, and maintaining a signature editing voice.",
    idealFor: "YouTubers (50k+), Streamers & Influencers",
    timeline: "24 - 72 Hour Turnaround",
    popular: false,
  },
  {
    id: "artists",
    title: "Music Artists",
    tagline: "Music Videos, Visualizers & Tour Teasers",
    description: "Stylized, boundary-pushing edits synched to the artist's sonic identity with heavy color grade and VFX flourishes.",
    idealFor: "Record Labels, Independent Artists & Producers",
    timeline: "1 - 2 Weeks",
    popular: false,
  },
  {
    id: "businesses",
    title: "Businesses",
    tagline: "Corporate Overviews, Testimonials & Training",
    description: "Polished, professional storytelling for corporate presentations, investor pitches, customer case studies, and internal communications.",
    idealFor: "B2B Companies, Enterprise & Educational Orgs",
    timeline: "1 - 2 Weeks",
    popular: false,
  },
  {
    id: "freelance",
    title: "Freelance Projects",
    tagline: "Custom Creative Commissions & Finishing",
    description: "Flexible per-project engagement for documentaries, short films, trailer cuts, color grading passes, or VFX cleanups.",
    idealFor: "Directors, Indie Filmmakers & Creative Studios",
    timeline: "Custom Scope",
    popular: false,
  },
];

// =========================================================================
// 8. SOCIAL & DIRECT CONTACT LINKS
// =========================================================================
export const CONTACT_INFO = {
  email: "editor.placeholder@gmail.com", // Replace with your actual email
  whatsapp: "+15550192834", // Replace with your international number without '+' or spaces, e.g. "1234567890"
  whatsappDisplay: "+1 (555) 019-2834",
  instagram: "https://instagram.com/yourhandle", // Replace with your IG profile
  instagramHandle: "@yourhandle",
  youtube: "https://youtube.com/@yourchannel", // Replace with your YouTube channel
  youtubeHandle: "@yourchannel",
  vimeo: "https://vimeo.com/yourhandle",
  discord: "editor#0001",
};

// =========================================================================
// 9. CREATIVE EDITING PIPELINE / WORKFLOW STAGES
// =========================================================================
export const WORKFLOW_STAGES = [
  {
    step: "01",
    phase: "Pre-Flight & Ingest",
    title: "Organization & Script Sync",
    detail: "4K/8K media verification, proxy generation, audio transcription sync, and scene tagging for rapid assembly."
  },
  {
    step: "02",
    phase: "Rough Cut & Rhythm",
    title: "The Assembly Edit",
    detail: "Building the narrative spine. Experimenting with pacing, comedic/dramatic timing, and finding the emotional core."
  },
  {
    step: "03",
    phase: "Sound & Motion",
    title: "Foley, Risers & Graphic FX",
    detail: "Custom sound design layer, atmospheric pads, dynamic graphics, kinetic titles, and seamless optical transitions."
  },
  {
    step: "04",
    phase: "The Master Finish",
    title: "Color Grading & Export",
    detail: "ACES color pipeline, Kodak/Fuji film print emulation, highlight roll-off control, and platform-optimized exports."
  }
];

