import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Play, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ onOpenReel }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Me', href: '#about' },
    { name: 'My Works', href: '#categories' },
    { name: 'Editing Styles', href: '#skills' },
    { name: 'Collaborate', href: '#collaborate' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#070709]/85 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-purple-500/80 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all">
              <span className="font-bold text-base text-white tracking-wider font-mono">
                FF
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-widest text-white group-hover:text-purple-300 transition-colors">
                {PERSONAL_INFO.brandName}
              </span>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                CINEMATICS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-medium uppercase tracking-widest text-zinc-300 hover:text-white hover:text-glow-purple transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Showreel Button */}
            <button
              onClick={onOpenReel}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 hover:border-purple-500/50 text-xs font-mono text-zinc-300 hover:text-white transition-all shadow-sm"
              title="Watch Full Cinematic Showreel"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-rec" />
              <Play className="w-3 h-3 text-purple-400 fill-purple-400" />
              <span>SHOWREEL</span>
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#collaborate"
              onClick={(e) => handleNavClick(e, '#collaborate')}
              className="relative px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-white transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(0,255,135,0.5)] active:scale-95"
            >
              LET'S TALK
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#070709]/95 backdrop-blur-2xl pt-24 px-8 flex flex-col justify-between pb-12 lg:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl font-bold tracking-tight text-zinc-200 hover:text-purple-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReel();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 border border-purple-500/30 text-white font-medium"
              >
                <Play className="w-4 h-4 text-purple-400 fill-purple-400" />
                <span>Watch Intro Showreel</span>
              </button>

              <a
                href="#collaborate"
                onClick={(e) => handleNavClick(e, '#collaborate')}
                className="w-full py-3 rounded-xl bg-emerald-500 text-black font-bold text-center uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(16,185,129,0.4)]"
              >
                Let's Collaborate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

