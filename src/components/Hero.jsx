import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Play, Sparkles, Film, Eye, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero({ onOpenReel }) {
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 overflow-hidden bg-[#070709]"
    >
      {/* Background Visual Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-purple-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px]" />
        
        {/* Film Grain & Scanlines */}
        <div className="absolute inset-0 film-grain" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#070709]/70 to-[#070709]" />
      </div>

      {/* Top Production Monitor HUD */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-zinc-500 border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-zinc-400 uppercase tracking-wider text-[11px]">
            {PERSONAL_INFO.statusText}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-6 text-[11px] text-zinc-400">
          <span>MASTER: 3840 x 2160 (4K)</span>
          <span>•</span>
          <span>FPS: 23.976 / 24.000</span>
          <span>•</span>
          <span>AUDIO: 48kHz 24-bit</span>
        </div>
      </div>

      {/* Hero Content Centerpiece */}
      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto text-center py-12 md:py-16">
        {/* Micro-badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-xs font-mono tracking-widest uppercase text-zinc-300">
            CINEMATIC POST-PRODUCTION & EDITING
          </span>
        </motion.div>

        {/* Main Headline (Exact Required Text) */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-white leading-[1.05] mb-6"
        >
          CRAFTING STORIES
          <br />
          <span className="bg-gradient-to-r from-white via-zinc-200 to-purple-400 bg-clip-text text-transparent">
            THROUGH EVERY FRAME.
          </span>
        </motion.h1>

        {/* Subtitle (Exact Required Text) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl text-zinc-300 font-light tracking-wide max-w-2xl mx-auto mb-10"
        >
          Video Editor <span className="text-purple-400 mx-2">|</span> Visual Storyteller <span className="text-emerald-400 mx-2">|</span> Creative Mind
        </motion.p>

        {/* Action Buttons (Exact Required Two Buttons) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Button 1: EXPLORE MY WORK */}
          <button
            onClick={() => scrollToSection('#categories')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] active:scale-95 flex items-center justify-center gap-3 group"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>

          {/* Button 2: LET'S COLLABORATE */}
          <button
            onClick={() => scrollToSection('#collaborate')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent hover:bg-purple-600/10 border-2 border-purple-500/60 hover:border-purple-400 text-white font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_35px_rgba(168,85,247,0.4)] active:scale-95 flex items-center justify-center gap-3"
          >
            <span>LET'S COLLABORATE</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </button>
        </motion.div>
      </div>

      {/* Stats Ticker Banner */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              className="flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-white font-mono tracking-tight flex items-baseline gap-1">
                {stat.value}
                <span className="text-xs text-purple-400 font-sans font-normal">●</span>
              </div>
              <div className="text-xs font-semibold text-zinc-300 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-zinc-500">
                {stat.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

