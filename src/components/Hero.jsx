import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { BRAND, PERSONAL } from '../data/siteData';

export default function Hero() {
  const scroll = id => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 bg-black overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Top status bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] tracking-[0.15em] uppercase text-neutral-500 border-b border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for Projects</span>
        </div>
        <span className="hidden sm:block">Video Editor &bull; Visual Storyteller</span>
      </div>

      {/* Center content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center my-auto py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 border border-white/10 text-[11px] tracking-[0.2em] uppercase text-neutral-400 mb-8">
          CREATIVE PORTFOLIO
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight text-white leading-[1.05] mb-6">
          {BRAND.tagline.split('.')[0]}
          <br />
          <span className="text-neutral-400">{BRAND.tagline.includes('.') ? BRAND.tagline.split('.').slice(1).join('.').trim() + '.' : ''}</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
          className="text-lg sm:text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-10">
          {BRAND.subtitle}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => scroll('#projects')}
            className="group w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-all active:scale-95 flex items-center justify-center gap-3">
            <span>EXPLORE MY WORK</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>
          <button onClick={() => scroll('#collaborate')}
            className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-white text-white font-semibold text-sm uppercase tracking-wider transition-all active:scale-95">
            LET&apos;S COLLABORATE
          </button>
        </motion.div>
      </div>

      {/* Bottom stats */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/5">
        {PERSONAL.stats.map(s => (
          <div key={s.label} className="text-center sm:text-left">
            <div className="text-3xl font-bold text-white">{s.value}</div>
            <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
