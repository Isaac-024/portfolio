import React, { useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { INTRO_VIDEO_URL } from '../data/siteData';
import { isYouTubeUrl, getYouTubeEmbedUrl } from '../utils/video';

/*
 * SCREEN 3 — INTRO VIDEO
 * Full-viewport cinematic video. object-fit: cover.
 * Audio unmuted from the start (browser permitting).
 * ONE button only: "SKIP INTRO" in bottom-right.
 * No overlays, controls, indicators, or decorations.
 * Auto-transitions to homepage when video ends.
 */
export default function IntroVideo({ onComplete }) {
  const videoRef = useRef(null);
  const hasTriedUnmute = useRef(false);

  // Try to play with audio; fall back gracefully
  const attemptPlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    const p = v.play();
    if (p && p.catch) {
      p.catch(() => {
        // Browser blocked unmuted autoplay — start muted, then unmute on next interaction
        v.muted = true;
        v.play().catch(() => {});
        if (!hasTriedUnmute.current) {
          hasTriedUnmute.current = true;
          const unmute = () => {
            v.muted = false;
            window.removeEventListener('click', unmute);
            window.removeEventListener('touchstart', unmute);
            window.removeEventListener('keydown', unmute);
          };
          window.addEventListener('click', unmute, { once: true });
          window.addEventListener('touchstart', unmute, { once: true });
          window.addEventListener('keydown', unmute, { once: true });
        }
      });
    }
  }, []);

  useEffect(() => {
    attemptPlay();
  }, [attemptPlay]);

  const isYT = isYouTubeUrl(INTRO_VIDEO_URL);
  const embedUrl = isYT
    ? getYouTubeEmbedUrl(INTRO_VIDEO_URL, { autoplay: true, mute: false, loop: false, controls: false })
    : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[80] bg-black flex items-center justify-center overflow-hidden select-none"
    >
      {/* Video — full viewport, object-fit cover */}
      {isYT ? (
        <iframe
          src={embedUrl}
          title="ZYNC Intro"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full object-cover border-0"
          style={{ width: '100vw', height: '100vh' }}
        />
      ) : (
        <video
          ref={videoRef}
          src={INTRO_VIDEO_URL}
          autoPlay
          playsInline
          onEnded={onComplete}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* SKIP INTRO — bottom right, clean & small */}
      <button
        onClick={onComplete}
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10 px-5 py-2 text-[11px] font-medium tracking-[0.2em] uppercase text-white/80 hover:text-white border border-white/20 hover:border-white/60 bg-black/30 hover:bg-black/60 backdrop-blur-sm transition-all duration-300 cursor-pointer active:scale-95"
      >
        SKIP INTRO
      </button>
    </motion.div>
  );
}
