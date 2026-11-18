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
    thumbnail: 'https://www.ricardotakamura.com.br/wp-content/uploads/2020/04/Completo-scaled.jpg',
  },
  {
    id: 'reels',
    title: 'Instagram Reels',
    description: 'High-retention vertical content with beat-synced cuts, dynamic typography, and viral pacing.',
    thumbnail: 'https://img.magnific.com/free-photo/creative-reels-composition_23-2149711469.jpg?semt=ais_hybrid&w=740&q=80',
  },
  {
    id: 'music',
    title: 'Music Videos',
    description: 'Stylized visual storytelling synchronized to the artist\'s sonic identity and creative vision.',
    thumbnail: 'https://cdn.pixabay.com/video/2017/03/19/8437-209165711_tiny.jpg',
  },
  {
    id: 'travel',
    title: 'Travel Videos',
    description: 'Cinematic travel films with atmospheric pacing, aerial footage, and immersive sound design.',
    thumbnail: 'https://img.magnific.com/free-photo/wooden-bridge-koh-nangyuan-island-surat-thani-thailand_335224-1082.jpg?semt=ais_hybrid&w=740&q=80',
  },
  {
    id: 'promo',
    title: 'Promotional Videos',
    description: 'High-impact brand stories and product launches designed to convert viewers into customers.',
    thumbnail: 'https://img.magnific.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg?semt=ais_hybrid&w=740&q=80',
  },
  {
    id: 'wedding',
    title: 'Wedding Films',
    description: 'Elegant, emotionally resonant wedding cinematography that captures every precious moment.',
    thumbnail: 'https://cdn.pixabay.com/photo/2014/09/13/04/59/couple-443600_1280.jpg',
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

// ── Contact & Social ─────────────────────────────────────────
export const CONTACT = {
  email: '[your.email@example.com]',
  whatsapp: '[+1234567890]',
  instagram: 'https://instagram.com/[yourhandle]',
  instagramHandle: '@[yourhandle]',
  youtube: 'https://youtube.com/@[yourchannel]',
  youtubeHandle: '@[yourchannel]',
};
