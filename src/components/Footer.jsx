import React from 'react';
import { ArrowUp, Mail, MessageCircle, Heart } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';
import { PERSONAL_INFO, CONTACT_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-white/5 py-12 px-6 md:px-12 text-zinc-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-lg text-white font-mono tracking-wider">
              {PERSONAL_INFO.brandName}
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-xs font-mono text-purple-400">
              {PERSONAL_INFO.name}
            </span>
          </div>
          <p className="text-xs text-zinc-500 font-mono max-w-sm">
            Cinematic Editing • Visual Storytelling • Color Grading • Motion Design
          </p>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center gap-4">
          <a
            href={CONTACT_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-purple-600 hover:text-white border border-white/5 flex items-center justify-center transition-all duration-300"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href={CONTACT_INFO.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-red-600 hover:text-white border border-white/5 flex items-center justify-center transition-all duration-300"
            aria-label="YouTube"
          >
            <YoutubeIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-emerald-600 hover:text-white border border-white/5 flex items-center justify-center transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-emerald-500 hover:text-white border border-white/5 flex items-center justify-center transition-all duration-300"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="text-xs font-mono text-zinc-500 text-center sm:text-right">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all active:scale-95 shadow-md"
            title="Scroll to Top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
