import React from 'react';
import { CATEGORIES } from '../data/siteData';

export default function EditingCategories() {
  return (
    <section id="categories" className="py-28 px-6 md:px-12 bg-[#050505] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-neutral-500 block mb-3">
              SPECIALIZATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              EDITING CATEGORIES
            </h2>
          </div>
          <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 max-w-sm">
            NINE DEDICATED DISCIPLINES COVERING EVERY VISUAL FORMAT
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              className="bg-neutral-950 border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden flex flex-col group"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-black">
                <img
                  src={cat.thumbnail}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60" />

                <div className="absolute top-3 left-3 text-[10px] font-mono text-neutral-400 px-2 py-0.5 bg-black/60 backdrop-blur-sm border border-white/5">
                  CAT 0{idx + 1}
                </div>
              </div>

              <div className="p-5 flex items-center justify-between">
                <h3 className="text-base font-bold text-white tracking-wide">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
