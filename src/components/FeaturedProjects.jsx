import React from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/siteData';

export default function FeaturedProjects({ onSelectProject }) {
  return (
    <section id="projects" className="py-28 px-6 md:px-12 bg-black border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-neutral-500 block mb-3">
              SELECTED WORKS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              FEATURED PROJECTS
            </h2>
          </div>
          <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 max-w-sm">
            CLICK ANY PROJECT TO LAUNCH THE CINEMA PLAYER
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {FEATURED_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col bg-neutral-950 border border-white/10 hover:border-white/40 transition-all duration-500 overflow-hidden"
            >
              <div className="aspect-video relative overflow-hidden bg-black">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-black/60 border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:text-black text-white transition-all duration-300">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/80 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-neutral-300">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-2">
                    <span>PROJECT 0{idx + 1}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.software.map(tool => (
                      <span key={tool} className="text-[10px] font-mono px-2 py-0.5 bg-neutral-900 border border-white/5 text-neutral-400">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    WATCH <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
