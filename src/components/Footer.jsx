import React from 'react';
import { ArrowUp } from 'lucide-react';
import { BRAND, PERSONAL } from '../data/siteData';

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-16 px-6 md:px-12 bg-black border-t border-white/5 text-neutral-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="font-brand text-2xl font-extrabold tracking-[0.25em] text-white block mb-1">
            ZYNC
          </span>
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            {PERSONAL.name} &bull; VIDEO EDITOR &amp; VISUAL STORYTELLER
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <span className="text-xs font-mono text-neutral-500">
            &copy; {new Date().getFullYear()} {BRAND.name}. ALL RIGHTS RESERVED.
          </span>

          <button
            onClick={toTop}
            className="flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-white text-xs font-mono text-white uppercase tracking-wider transition-all cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
