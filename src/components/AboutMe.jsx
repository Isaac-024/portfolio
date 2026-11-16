import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Film, 
  Palette, 
  Layers, 
  Sparkles, 
  Download, 
  CheckCircle2, 
  ArrowRight,
  Sliders,
  Scissors
} from 'lucide-react';
import { PERSONAL_INFO, WORKFLOW_STAGES } from '../data/portfolioData';

export default function AboutMe() {
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  const pillars = [
    {
      icon: Film,
      title: "Narrative Rhythm & Pacing",
      description: "Cutting not just to the beat, but to the emotional subtext. Understanding when to let a moment breathe and when to accelerate momentum."
    },
    {
      icon: Palette,
      title: "Color Science & Film Looks",
      description: "Custom LUT calibration, skin tone fidelity, highlight roll-off control, and organic 35mm/16mm Kodak print film emulation."
    },
    {
      icon: Scissors,
      title: "Seamless Invisible Transitions",
      description: "Match cuts, whip pans, speed ramping, and spatial masking that guide the viewer's eye without breaking immersion."
    },
    {
      icon: Layers,
      title: "VFX & Motion Graphics",
      description: "Clean camera tracking, object rotoscoping, screen replacements, particle depth, and elegant kinetic typography."
    }
  ];

  return (
    <section id="about" className="relative py-28 px-6 md:px-12 bg-[#09090d] border-t border-white/5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              THE STORYTELLER BEHIND THE TIMELINE
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white">
              ABOUT <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">ME</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-md">
            Dedicated freelance video editor with an obsession for frames, rhythm, and visual aesthetics.
          </p>
        </div>

        {/* Main Grid: Portrait + Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Creative Portrait Container (Col 5) */}
          <div className="lg:col-span-5 relative group">
            {/* Ambient Card Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-emerald-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-700" />
            
            <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl">
              {/* Profile Image with subtle zoom on hover */}
              <div className="aspect-[4/5] relative overflow-hidden bg-zinc-950">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={`${PERSONAL_INFO.name} - Video Editor Portrait`}
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Cinema Slate HUD Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none" />
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-[10px] font-mono text-white/70">
                  <span className="px-2 py-0.5 rounded bg-black/60 border border-white/10 backdrop-blur-md">
                    CREATIVE DIR.
                  </span>
                  <span className="text-emerald-400 font-semibold">● ACTIVE</span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">
                    {PERSONAL_INFO.role}
                  </div>
                  <div className="text-xl font-bold text-white tracking-wide">
                    {PERSONAL_INFO.name}
                  </div>
                  <div className="text-xs text-zinc-400 font-mono mt-0.5">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>

              {/* Bottom Card Meta Bar */}
              <div className="p-4 bg-zinc-950 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>COLOR PROFILE: ACEScc</span>
                <span className="text-purple-400 font-semibold">PRO EDIT WORKFLOW</span>
              </div>
            </div>
          </div>

          {/* Bio & Passion Details (Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              {PERSONAL_INFO.bio.map((paragraph, i) => (
                <p key={i} className="tracking-wide">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-purple-500/40 hover:bg-zinc-900 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                      <IconComponent className="w-4 h-4 text-purple-400" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#collaborate"
                className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] active:scale-95 flex items-center gap-2"
              >
                <span>LET'S WORK TOGETHER</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#categories"
                className="px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-all"
              >
                VIEW PORTFOLIO
              </a>
            </div>
          </div>
        </div>

        {/* 4-Stage Creative Workflow Pipeline */}
        <div className="pt-12 border-t border-white/5">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-2">
              PRECISION PIPELINE
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white">
              MY CREATIVE APPROACH
            </h3>
            <p className="text-xs text-zinc-400 mt-2">
              From raw camera ingest to pixel-perfect broadcast finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {WORKFLOW_STAGES.map((stage, idx) => (
              <div
                key={stage.step}
                onClick={() => setActiveWorkflow(idx)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  activeWorkflow === idx
                    ? 'bg-zinc-900 border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.2)]'
                    : 'bg-zinc-950/60 border-white/5 hover:border-white/20 hover:bg-zinc-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-extrabold text-purple-400">
                    {stage.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-zinc-400">
                    PHASE {idx + 1}
                  </span>
                </div>
                <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
                  {stage.phase}
                </h4>
                <div className="text-base font-bold text-white mb-2">
                  {stage.title}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {stage.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
