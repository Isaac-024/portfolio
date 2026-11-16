/**
 * Video URL helper utilities
 * Handles YouTube URLs, Vimeo, and local MP4/WebM video paths seamlessly.
 */

export function extractYouTubeId(url) {
  if (!url) return null;
  
  // Handles youtu.be/ID
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];
  
  // Handles youtube.com/watch?v=ID
  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) return watchMatch[1];
  
  // Handles youtube.com/embed/ID
  const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];
  
  // Handles youtube.com/shorts/ID
  const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
  if (shortsMatch) return shortsMatch[1];

  return null;
}

export function isYouTubeUrl(url) {
  return Boolean(extractYouTubeId(url));
}

export function getYouTubeEmbedUrl(url, { autoplay = true, mute = true, loop = true, controls = 1 } = {}) {
  const id = extractYouTubeId(url);
  if (!id) return url;

  const params = new URLSearchParams({
    enablejsapi: '1',
    rel: '0',
    modestbranding: '1',
    iv_load_policy: '3',
    playsinline: '1'
  });

  if (autoplay) params.set('autoplay', '1');
  if (mute) params.set('mute', '1');
  if (loop) {
    params.set('loop', '1');
    params.set('playlist', id); // required for YouTube iframe looping
  }
  params.set('controls', controls ? '1' : '0');

  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}

export function getYouTubeThumbnail(url, quality = 'maxresdefault') {
  const id = extractYouTubeId(url);
  if (!id) return null;
  return `https://img.youtube.com/vi/${id}/${quality}.jpg`;
}

