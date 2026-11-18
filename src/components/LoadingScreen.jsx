import React from 'react';
import { motion } from 'framer-motion';

/*
 * SCREEN 1 — LOADING SCREEN
 * Full black background, centered ZYNC logo in Montserrat,
 * simple "Loading..." indicator with pulsing dots. Nothing else.
 */
export default function LoadingScreen({ onReady }) {
  React.useEffect(() => {
    // Simulate asset loading; replace with real asset preloading if needed
    const timer = setTimeout(() => onReady(), 2000);
    return () => clearTimeout(timer);
  }, [onReady]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center select-none"
    >
      {/* ZYNC Logo — Montserrat only */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-brand text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-[0.3em] text-white mb-8 ml-[0.3em]"
      >
        ZYNC
      </motion.h1>

      {/* Simple loading indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex items-center gap-2"
      >
        <span className="text-xs tracking-[0.2em] text-neutral-500 font-light">
          Loading
        </span>
        <span className="flex gap-1">
          <span className="w-1 h-1 rounded-full bg-neutral-500 animate-pulse-dot" />
          <span className="w-1 h-1 rounded-full bg-neutral-500 animate-pulse-dot [animation-delay:200ms]" />
          <span className="w-1 h-1 rounded-full bg-neutral-500 animate-pulse-dot [animation-delay:400ms]" />
        </span>
      </motion.div>
    </motion.div>
  );
}
