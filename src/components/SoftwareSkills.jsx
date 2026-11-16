import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sliders, 
  Sparkles, 
  Cpu, 
  Clock, 
  Volume2, 
  Palette, 
  TrendingUp, 
  Check, 
  Wrench
} from 'lucide-react';
import { SOFTWARE_TOOLS, CRAFT_SPECIALTIES } from '../data/portfolioData';

const specialtyIcons = {
  Clock,
  Palette,
  Volume2,
  TrendingUp,
};

export default function SoftwareSkills() {
  return (
    <section id="skills" className="py-28 px-6 md:px-12 bg-[#070709] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              TOOLKIT & MASTERY
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white">
              SOFTWARE & <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">SKILLS</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-md">
            Industry-standard NLEs, advanced node-based grading systems, and motion design suites.
          </p>
        </div>

        {/* 6 Software Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {SOFTWARE_TOOLS.map((tool) => (
            <motion.div
              key={tool.name}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-purple-500/50 hover:bg-zinc-900 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Header with App Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg font-mono shadow-lg transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: `${tool.accentColor}18`,
                      borderColor: `${tool.accentColor}60`,
                      borderWidth: '1px',
                      color: tool.accentColor,
                    }}
                  >
                    {tool.iconCode}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono text-zinc-500 block">PROFICIENCY</span>
                    <span className="text-base font-mono font-bold text-white">
                      {tool.proficiency}%
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {tool.name}
                </h3>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block mb-3">
                  {tool.category}
                </span>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {tool.description}
                </p>

                {/* Animated Skill Level Bar */}
                <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden mb-6">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${tool.proficiency}%`,
                      backgroundColor: tool.accentColor,
                      boxShadow: `0 0 10px ${tool.accentColor}80`
                    }}
                  />
                </div>
              </div>

              {/* Signature Feature Pills */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {tool.features.map((feat) => (
                  <span
                    key={feat}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-white/5"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialized Craft Capabilities */}
        <div className="pt-12 border-t border-white/5">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 block mb-2">
              WHY MY EDITS STAND OUT
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white">
              CRAFT SPECIALIZATIONS
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CRAFT_SPECIALTIES.map((spec) => {
              const Icon = specialtyIcons[spec.icon] || Sparkles;

              return (
                <div
                  key={spec.title}
                  className="p-6 rounded-2xl bg-zinc-950/70 border border-white/5 hover:border-emerald-500/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {spec.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
