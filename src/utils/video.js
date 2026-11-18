export function extractYouTubeId(url) {
  if (!url) return null;
  const m = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/)
    || url.match(/[?&]v=([a-zA-Z0-9_-]{11})/)
    || url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/)
    || url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}

export function isYouTubeUrl(url) {
  return Boolean(extractYouTubeId(url));
}

export function getYouTubeEmbedUrl(url, opts = {}) {
  const id = extractYouTubeId(url);
  if (!id) return url;
  const p = new URLSearchParams({
    enablejsapi: '1', rel: '0', modestbranding: '1',
    iv_load_policy: '3', playsinline: '1',
  });
  if (opts.autoplay) p.set('autoplay', '1');
  if (opts.mute) p.set('mute', '1');
  if (opts.loop) { p.set('loop', '1'); p.set('playlist', id); }
  p.set('controls', opts.controls ? '1' : '0');
  return `https://www.youtube.com/embed/${id}?${p}`;
}
