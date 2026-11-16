import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, SlidersHorizontal, ArrowUpRight, Film, CheckCircle2 } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';

export default function FeaturedProjects({ onSelectVideo }) {
  // Before / After grading comparison slider position (0 to 100%)
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  return (
    <section id="works" className="py-28 px-6 md:px-12 bg-[#09090d] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-400 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              HALL OF FAME
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white">
              FEATURED <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">PROJECTS</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-md">
            Handpicked showcase of signature commercial edits, high-retention cuts, and VFX compositing.
          </p>
        </div>

        {/* Featured Projects Grid Showcase */}
        <div className="space-y-16 mb-24">
          {FEATURED_PROJECTS.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-purple-500/40 transition-all duration-500 shadow-2xl ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Media Column (Col 7) */}
                <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div
                    onClick={() => onSelectVideo(project)}
                    className="relative group rounded-2xl overflow-hidden aspect-video bg-black cursor-pointer border border-white/10 shadow-2xl"
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                    {/* Center Play Button Badge */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-115 group-hover:bg-purple-600 group-hover:border-purple-400 group-hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] transition-all duration-300">
                        <Play className="w-7 h-7 text-white fill-white ml-0.5" />
                      </div>
                    </div>

                    {/* Metadata tags */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 text-[10px] font-mono">
                      <span className="px-3 py-1 rounded-full bg-purple-600/90 text-white font-semibold uppercase tracking-wider backdrop-blur-md">
                        {project.categoryLabel}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-black/70 text-zinc-300 border border-white/10">
                        {project.duration}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                      <span>WATCH IN 4K</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Details Column (Col 5) */}
                <div className={`lg:col-span-5 flex flex-col justify-between ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                      PROJECT 0{idx + 1} • {project.year}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed font-light mb-6">
                      {project.description}
                    </p>

                    {/* Software Badges */}
                    <div className="mb-8">
                      <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                        SOFTWARE & TOOLS USED:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.software.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 rounded-lg text-xs font-mono bg-zinc-900 border border-white/10 text-zinc-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Watch Video Button */}
                  <div>
                    <button
                      onClick={() => onSelectVideo(project)}
                      className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95 group"
                    >
                      <Play className="w-4 h-4 fill-black" />
                      <span>Watch Video</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Before / After Color Grading Comparison Module */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-purple-500/20 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-2">
              INTERACTIVE COLOR SCIENCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white mb-2">
              RAW LOG VS. CINEMATIC COLOR GRADE
            </h3>
            <p className="text-xs font-mono text-zinc-400">
              Drag or hover the slider horizontally to compare the uncorrected camera sensor feed with the final Kodak 2383 film print emulation.
            </p>
          </div>

          {/* Interactive Split Slider */}
          <div
            className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden select-none border border-white/10 shadow-2xl cursor-ew-resize group"
            onMouseMove={handleSliderMove}
            onTouchMove={handleTouchMove}
          >
            {/* Graded Layer (Base Background) */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=80"
                alt="Final Cinematic Color Grade"
                className="w-full h-full object-cover saturate-125 contrast-125"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/90 text-black font-mono font-bold text-xs uppercase tracking-wider backdrop-blur-md">
                GRADED: REC.709 / KODAK 2383
              </div>
            </div>

            {/* RAW Log Layer (Clipped to slider position) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="w-[1000px] sm:w-[1200px] h-full relative">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=80"
                  alt="Raw Camera Log Footage"
                  className="w-full h-full object-cover saturate-50 contrast-75 brightness-110 filter"
                  style={{ width: '100%', maxWidth: 'none' }}
                />
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 text-white font-mono text-xs uppercase tracking-wider border border-white/20 backdrop-blur-md">
                RAW: ARRI LOG-C / S-LOG3
              </div>
            </div>

            {/* Draggable Divider Line & Knob */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_15px_white]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.7)] border-2 border-purple-500">
                <SlidersHorizontal className="w-4 h-4 text-purple-900" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
