import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Film, 
  Smartphone, 
  Sparkles, 
  Layers, 
  Wand2, 
  Clock, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { CATEGORIES, GALLERY_PROJECTS } from '../data/portfolioData';

const iconMap = {
  Film,
  Smartphone,
  Sparkles,
  Layers,
  Wand2,
};

export default function EditingCategories({ onSelectVideo }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="categories" className="py-28 px-6 md:px-12 bg-[#070709] border-t border-white/5 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              CURATED ARCHIVE OF WORK
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white">
              MY EDITING <span className="text-glow-purple text-purple-400">CATEGORIES</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-md">
            Click on any video to stream the full cut in cinema theater mode.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon ? iconMap[cat.icon] : null;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-purple-600 text-white font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-105'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-zinc-500'}`}>
                  {cat.id === 'all' 
                    ? GALLERY_PROJECTS.length 
                    : GALLERY_PROJECTS.filter((p) => p.category === cat.id).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Video Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const isVertical = project.aspectRatio === '9:16';

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => onSelectVideo(project)}
                  className="group relative flex flex-col bg-zinc-900/70 rounded-2xl border border-white/10 hover:border-purple-500/60 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
                >
                  {/* Thumbnail Stage */}
                  <div className={`relative w-full overflow-hidden bg-black ${isVertical ? 'aspect-[4/5] sm:aspect-video' : 'aspect-video'}`}>
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono pointer-events-none">
                      <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-white font-medium uppercase">
                        {project.categoryLabel}
                      </span>
                      <div className="flex items-center gap-2">
                        {isVertical && (
                          <span className="px-2 py-0.5 rounded bg-purple-500/80 text-white font-semibold">
                            9:16 VERTICAL
                          </span>
                        )}
                        <span className="flex items-center gap-1 px-2 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-zinc-300">
                          <Clock className="w-3 h-3 text-purple-400" />
                          {project.duration}
                        </span>
                      </div>
                    </div>

                    {/* Centered Play Button Indicator */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-600 group-hover:border-purple-400 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all duration-300">
                        <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                      </div>
                    </div>

                    {/* Bottom Metadata bar on image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span>{project.year}</span>
                      <span className="text-emerald-400 font-semibold group-hover:text-glow-neon">
                        STREAM 4K →
                      </span>
                    </div>
                  </div>

                  {/* Card Content Footer */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Software tags */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/5">
                      {project.software.map((tool) => (
                        <span
                          key={tool}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-white/5"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
