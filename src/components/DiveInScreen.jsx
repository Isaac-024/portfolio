import React from 'react';
import { motion } from 'framer-motion';

/*
 * SCREEN 2 — DIVE IN SCREEN
 * Full black background. Large ZYNC logo. One button: "DIVE IN ↗".
 * Nothing else — no nav, social icons, extra text.
 */
export default function DiveInScreen({ onDiveIn }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[90] bg-black flex flex-col items-center justify-center select-none"
    >
      {/* Large ZYNC logo — Montserrat */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="font-brand text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-extrabold tracking-[0.3em] text-white mb-12 ml-[0.3em]"
      >
        ZYNC
      </motion.h1>

      {/* DIVE IN button */}
      <motion.button
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={onDiveIn}
        className="group relative px-10 py-3.5 border border-white/25 hover:border-white text-white text-xs font-medium tracking-[0.25em] uppercase transition-all duration-500 hover:bg-white hover:text-black active:scale-95 cursor-pointer"
      >
        <span className="flex items-center gap-3">
          <span>DIVE IN</span>
          <span className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
        </span>
      </motion.button>
    </motion.div>
  );
}
