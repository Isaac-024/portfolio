import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND } from '../data/siteData';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Categories', href: '#categories' },
  { label: 'Skills', href: '#skills' },
  { label: 'Collaborate', href: '#collaborate' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#hero" onClick={e => go(e, '#hero')} className="font-brand text-lg font-extrabold tracking-[0.25em] text-white hover:opacity-80 transition-opacity">
            ZYNC
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} onClick={e => go(e, l.href)}
                className="text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-400 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-px after:bg-white after:transition-all after:duration-300">
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#collaborate" onClick={e => go(e, '#collaborate')}
            className="hidden sm:inline-block px-5 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300">
            Let&apos;s Talk
          </a>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-white" aria-label="Toggle menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl pt-24 px-8 flex flex-col gap-6 lg:hidden">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} onClick={e => go(e, l.href)}
              className="text-2xl font-semibold text-white hover:text-neutral-400 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#collaborate" onClick={e => go(e, '#collaborate')}
            className="mt-6 py-3 border border-white/20 text-center text-sm font-medium uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all">
            Let&apos;s Talk
          </a>
        </div>
      )}
    </>
  );
}
