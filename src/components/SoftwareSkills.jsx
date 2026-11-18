import React from 'react';
import { SOFTWARE } from '../data/siteData';

export default function SoftwareSkills() {
  return (
    <section id="skills" className="py-28 px-6 md:px-12 bg-black border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-neutral-500 block mb-3">
              POST-PRODUCTION SUITE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              SOFTWARE & SKILLS
            </h2>
          </div>
          <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 max-w-sm">
            INDUSTRY-STANDARD TOOLS CALIBRATED FOR BROADCAST DELIVERABLES
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOFTWARE.map((item) => (
            <div
              key={item.name}
              className="p-6 bg-neutral-950 border border-white/10 hover:border-white/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center font-bold text-base font-mono border"
                    style={{
                      borderColor: `${item.color}40`,
                      color: item.color,
                      backgroundColor: `${item.color}10`,
                    }}
                  >
                    {item.short}
                  </div>
                  <span className="text-xs font-mono text-neutral-400 font-semibold">
                    {item.level}%
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neutral-200">
                  {item.name}
                </h3>
              </div>

              <div className="pt-6">
                <div className="w-full bg-neutral-900 h-1 overflow-hidden">
                  <div
                    className="h-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${item.level}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
