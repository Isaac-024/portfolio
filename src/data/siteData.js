/*
 * ZYNC — Central Portfolio Configuration
 * ========================================
 * All personal info, videos, links, thumbnails, projects, skills
 * and social links are configured in this single file.
 *
 * PLACEHOLDER RULE: No invented personal details. All identifiers
 * below are clearly marked with [YOUR ...] for you to replace.
 */

// ── Intro Video ──────────────────────────────────────────────
// Place your 30-second intro as public/assets/videos/intro.mp4
// Or paste a YouTube/Vimeo URL here.
export const INTRO_VIDEO_URL = '/assets/videos/intro.mp4';

// ── Brand ────────────────────────────────────────────────────
export const BRAND = {
  name: 'ZYNC',
  tagline: 'EVERY FRAME TELLS A STORY.',
  subtitle: 'Video Editor  •  Visual Storyteller  •  Creative Director',
};

// ── Personal Info (all placeholders) ─────────────────────────
export const PERSONAL = {
  name: 'Isaac',
  location: 'Hyderabad / India',
  experience: '5+',
  profileImage: '/assets/images/profile.jpg', // replace with your portrait
  bio: [
    'A freelance video editor and visual storyteller dedicated to crafting cinematic experiences that move audiences.',
    'Specializing in narrative pacing, color grading, sound design, and motion graphics — every project is a collaboration built on rhythm, emotion, and precision.',
    'From viral social content to long-form documentaries and commercial campaigns, I bring a cinematic eye to every frame.',
  ],
  stats: [
    { value: '50+', label: 'Projects Delivered' },
    { value: '100k+', label: 'Total Views' },
    { value: '5+', label: 'Years of Experience' },
    { value: '99%', label: 'Client Satisfaction' },
  ],
};

// ── Editing Categories ───────────────────────────────────────
export const CATEGORIES = [
  {
    id: 'cinematic',
    title: 'Cinematic Editing',
    description: 'Narrative-driven films with professional color grading, sound design, and seamless transitions.',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'reels',
    title: 'Instagram Reels',
    description: 'High-retention vertical content with beat-synced cuts, dynamic typography, and viral pacing.',
    thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'music',
    title: 'Music Videos',
    description: 'Stylized visual storytelling synchronized to the artist\'s sonic identity and creative vision.',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'travel',
    title: 'Travel Videos',
    description: 'Cinematic travel films with atmospheric pacing, aerial footage, and immersive sound design.',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'promo',
    title: 'Promotional Videos',
    description: 'High-impact brand stories and product launches designed to convert viewers into customers.',
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'wedding',
    title: 'Wedding Films',
    description: 'Elegant, emotionally resonant wedding cinematography that captures every precious moment.',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'motion',
    title: 'Motion Graphics',
    description: 'Kinetic typography, animated infographics, logo reveals, and dynamic broadcast graphics.',
    thumbnail: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'vfx',
    title: 'VFX & After Effects',
    description: 'Visual effects compositing, 3D tracking, rotoscoping, particle simulations, and clean-up work.',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'commercial',
    title: 'Commercial Advertisements',
    description: 'Television and digital ad production with polished pacing, voiceover sync, and brand compliance.',
    thumbnail: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
  },
];

// ── Featured Projects ────────────────────────────────────────
export const FEATURED_PROJECTS = [
  {
    id: 'fp-1',
    title: 'Unknown Arrival',
    category: 'Cinematic Editing',
    description: 'A cinematic sci-fi journey through stunning 3D visuals with Blender and immersive storytelling.',
    thumbnail: '/assets/images/image_1.webp',
    videoUrl: 'https://youtu.be/rf60eUmfuqo?si=erq0IR-YhQ7xQYTS',
    software: ['Premiere Pro', 'Blender'],
    year: '2025',
  },
  {
    id: 'fp-2',
    title: 'Ishanya26',
    category: 'Collab Video',
    description: 'A glimpse of the unforgettable moments at ISHANYA',
    thumbnail: '/assets/images/image_2.png',
    videoUrl: 'https://youtu.be/dGrNjICkR3A?si=hYz8G3c1sOhIRUEq',
    software: ['Premiere Pro'],
    year: '2026',
  },
  {
    id: 'fp-3',
    title: 'Hi Nanna',
    category: 'Movie edit',
    description: 'A short, aesthetic fan edit of the movie Hi Nanna scene montages set to the song "Until I Found You."',
    thumbnail: '/assets/images/image_3.png',
    videoUrl: 'https://youtu.be/lO8VDYMDz-U?si=lfIDVWYIZlcIoXd1',
    software: ['Premiere Pro'],
    year: '2025',
  },
  {
    id: 'fp-4',
    title: 'AMV - Bleach TYBW',
    category: 'Short Film',
    description: 'An intense AMV capturing the raw power, action, and intensity of Bleach: Thousand-Year Blood War',
    thumbnail: '/assets/images/image_4.jpg',
    videoUrl: 'https://youtu.be/dYrdD4jlUHU?si=43Xerxr8sYQ9jBXg',
    software: ['Premiere Pro'],
    year: '2025',
  },
];

// ── Software & Skills ────────────────────────────────────────
export const SOFTWARE = [
  { name: 'Premiere Pro', short: 'Pr', level: 90, color: '#9999FF' },
  { name: 'Blender', short: 'Bl', level: 80, color: '#EA7600' },
  { name: 'Canva', short: 'Ca', level: 90, color: '#00C4CC' },
  { name: 'CapCut', short: 'Cc', level: 95, color: '#00E5FF' },
];

// ── Collaboration Types ──────────────────────────────────────
export const COLLAB_TYPES = [
  'Brand Collaborations',
  'Content Creators',
  'Music Artists',
  'Businesses',
  'Freelance Projects',
];

// ── Contact & Social ─────────────────────────────────────────
export const CONTACT = {
  email: '[your.email@example.com]',
  whatsapp: '[+1234567890]',
  instagram: 'https://instagram.com/[yourhandle]',
  instagramHandle: '@[yourhandle]',
  youtube: 'https://youtube.com/@[yourchannel]',
  youtubeHandle: '@[yourchannel]',
};
