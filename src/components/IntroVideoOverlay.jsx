import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, FastForward, Play, Maximize, Film } from 'lucide-react';
import { INTRO_CONFIG } from '../data/portfolioData';
import { isYouTubeUrl, getYouTubeEmbedUrl } from '../utils/videoUtils';

export default function IntroVideoOverlay({ isOpen, onComplete }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [timecode, setTimecode] = useState('00:00:00:00');
  const [countdown, setCountdown] = useState(8);

  const isYT = isYouTubeUrl(INTRO_CONFIG.videoUrl);
  const embedUrl = isYT
    ? getYouTubeEmbedUrl(INTRO_CONFIG.videoUrl, {
        autoplay: true,
        mute: isMuted,
        loop: true,
        controls: 0,
      })
    : null;

  // Realistic cinema loading countdown
  useEffect(() => {
    if (!isOpen) return;

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 10;
      if (progress >= 100) {
        progress = 100;
        setLoadingProgress(100);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        clearInterval(interval);
      } else {
        setLoadingProgress(progress);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [isOpen]);

  // Rolling timecode counter effect
  useEffect(() => {
    if (!isOpen || isLoading) return;

    let frames = 0;
    let seconds = 0;
    let minutes = 0;

    const timecodeInterval = setInterval(() => {
      frames += 1;
      if (frames >= 24) {
        frames = 0;
        seconds += 1;
        setCountdown((prev) => Math.max(0, prev - 1));
      }
      if (seconds >= 60) {
        seconds = 0;
        minutes += 1;
      }

      const fStr = String(frames).padStart(2, '0');
      const sStr = String(seconds).padStart(2, '0');
      const mStr = String(minutes).padStart(2, '0');
      setTimecode(`00:${mStr}:${sStr}:${fStr}`);
    }, 1000 / 24);

    return () => clearInterval(timecodeInterval);
  }, [isOpen, isLoading]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 bg-[#050507] text-white flex flex-col justify-between overflow-hidden select-none"
      >
        {/* Cinema Anamorphic Letterbox Bars */}
        <div className="absolute top-0 left-0 right-0 h-10 md:h-14 bg-black/90 border-b border-white/5 z-20 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-semibold">
              REC • 24.000 FPS
            </span>
            <span className="hidden sm:inline text-xs font-mono text-zinc-500">|</span>
            <span className="hidden sm:inline text-xs font-mono text-zinc-400">
              PRORES 422 HQ • 3840x2160
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-emerald-400 tracking-wider font-semibold">
              TC {timecode}
            </span>
          </div>
        </div>

        {/* Center Main Stage (Video Player or Loading State) */}
        <div className="relative flex-1 w-full h-full flex items-center justify-center overflow-hidden bg-black">
          {isLoading ? (
            /* Stylish Cinematic Loading Animation */
            <div className="relative z-30 flex flex-col items-center justify-center max-w-md w-full px-6 text-center">
              {/* Animated Reel Icon */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 rounded-full border-2 border-purple-500/40 border-t-purple-400 border-r-emerald-400 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(168,85,247,0.3)]"
              >
                <Film className="w-7 h-7 text-white/90" />
              </motion.div>

              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2">
                LOADING CINEMATIC EXPERIENCE
              </h2>
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">
                CALIBRATING SOUND DESIGN & COLOR SCIENCE
              </p>

              {/* Progress bar */}
              <div className="w-full bg-zinc-800/80 rounded-full h-1.5 overflow-hidden border border-white/10 mb-3">
                <motion.div
                  className="bg-gradient-to-r from-purple-500 via-purple-400 to-emerald-400 h-full rounded-full"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>

              <div className="flex justify-between w-full text-[11px] font-mono text-zinc-500">
                <span>BUFFERING 4K SHOWREEL</span>
                <span>{loadingProgress}%</span>
              </div>
            </div>
          ) : (
            /* Video Container */
            <div className="relative w-full h-full flex items-center justify-center pointer-events-auto">
              {isYT ? (
                <div className="w-full h-full relative pointer-events-none">
                  {/* YouTube Iframe scaled to fill screen with proper 16:9 cover */}
                  <iframe
                    src={embedUrl}
                    title="Cinematic Intro Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-1/2 left-1/2 w-[180vw] h-[180vh] md:w-[130vw] md:h-[130vh] -translate-x-1/2 -translate-y-1/2 object-cover"
                  />
                  {/* Subtle vignette and film grain */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/60" />
                  <div className="absolute inset-0 pointer-events-none film-grain" />
                </div>
              ) : (
                /* Native MP4 video fallback */
                <video
                  src={INTRO_CONFIG.videoUrl}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}

              {/* Subtle title watermark overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-20 left-8 md:left-14 pointer-events-none z-20 max-w-lg hidden sm:block"
              >
                <span className="text-[11px] font-mono uppercase tracking-widest text-purple-400 font-semibold mb-1 block">
                  SHOWREEL PREVIEW
                </span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white drop-shadow-lg">
                  CRAFTING STORIES THROUGH EVERY FRAME
                </h3>
                <p className="text-xs text-zinc-300 font-mono mt-1">
                  Video Editor • Visual Storyteller • Creative Mind
                </p>
              </motion.div>
            </div>
          )}
        </div>

        {/* Cinema Anamorphic Bottom Bar with Skip Button & Controls */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-black/90 border-t border-white/5 z-20 flex items-center justify-between px-6 md:px-12">
          {/* Audio Visualizer & Sound Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/80 hover:bg-zinc-700 border border-white/10 text-xs font-mono text-zinc-300 transition-colors"
              title={isMuted ? "Unmute Audio" : "Mute Audio"}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="hidden sm:inline">MUTED</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline text-emerald-400 font-semibold">AUDIO ON</span>
                </>
              )}
            </button>

            {/* Bouncing Audio Bars */}
            <div className="hidden md:flex items-center gap-0.5 h-4">
              {[40, 75, 55, 90, 60, 80, 45, 95].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: isMuted ? 4 : [4, h * 0.16, 4] }}
                  transition={{
                    duration: 0.6 + i * 0.1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className={`w-0.5 rounded-full ${
                    isMuted ? 'bg-zinc-700' : 'bg-purple-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Skip Intro CTA Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={onComplete}
              className="group relative flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 hover:bg-purple-600 border border-white/20 hover:border-purple-400 text-white font-medium text-xs md:text-sm tracking-wide transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] active:scale-95"
            >
              <span className="tracking-widest uppercase font-semibold">
                Skip Intro
              </span>
              <FastForward className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

