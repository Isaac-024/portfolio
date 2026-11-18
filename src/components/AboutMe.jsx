import React from 'react';
import { motion } from 'framer-motion';
import { Film, Palette, Scissors, Sparkles } from 'lucide-react';
import { PERSONAL } from '../data/siteData';

export default function AboutMe() {
  const pillars = [
    {
      icon: Film,
      title: 'Cinematic Storytelling',
      desc: 'Pacing that serves emotional resonance, visual rhythm, and narrative tension rather than simple cuts.'
    },
    {
      icon: Palette,
      title: 'Color Science & Tone',
      desc: 'Custom look development, skin tone preservation, highlight roll-off, and analog film print emulation.'
    },
    {
      icon: Scissors,
      title: 'Dynamic Rhythm & Flow',
      desc: 'Seamless match cuts, speed ramping, and invisible spatial transitions that keep viewers immersed.'
    },
    {
      icon: Sparkles,
      title: 'Sound Architecture',
      desc: 'Layered sound design, atmospheric textures, sub-bass impacts, and micro-Foley that elevate the visual.'
    }
  ];

  return (
    <section id="about" className="py-28 px-6 md:px-12 bg-[#050505] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-neutral-500 block mb-3">
              ABOUT THE EDITOR
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              VISUAL ARTIST &bull; STORYTELLER
            </h2>
          </div>
          <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 max-w-sm">
            {PERSONAL.location} &bull; FULL-TIME FREELANCE
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] bg-neutral-900 border border-white/10 overflow-hidden relative group">
              <img
                src={PERSONAL.profileImage || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"}
                alt={PERSONAL.name}
                className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                  LEAD EDITOR
                </span>
                <span className="text-xl font-bold text-white tracking-wide">
                  {PERSONAL.name}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              {PERSONAL.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="p-5 bg-neutral-950 border border-white/5 hover:border-white/20 transition-all">
                    <Icon className="w-5 h-5 text-white mb-3" />
                    <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
