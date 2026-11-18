import React, { useState } from 'react';
import { Mail, MessageCircle, Copy, Check, ArrowUpRight } from 'lucide-react';
import { CONTACT } from '../data/siteData';

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const channels = [
    {
      title: 'Email',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      icon: Mail,
      isCopy: true,
    },
    {
      title: 'Instagram',
      value: CONTACT.instagramHandle,
      href: CONTACT.instagram,
      icon: InstagramIcon,
    },
    {
      title: 'YouTube',
      value: CONTACT.youtubeHandle,
      href: CONTACT.youtube,
      icon: YoutubeIcon,
    },
    {
      title: 'WhatsApp',
      value: CONTACT.whatsapp,
      href: `https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, '')}`,
      icon: MessageCircle,
    },
  ];

  return (
    <section id="contact" className="py-28 px-6 md:px-12 bg-black border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-neutral-500 block mb-3">
            DIRECT COMMUNICATION
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
            CONTACT
          </h2>
          <p className="text-sm text-neutral-400 font-light max-w-md mx-auto">
            Available for remote and on-location editing commissions worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((ch) => {
            const Icon = ch.icon;
            return (
              <div
                key={ch.title}
                className="p-6 bg-neutral-950 border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 border border-white/20 flex items-center justify-center text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                    {ch.isCopy && (
                      <button
                        onClick={copyEmail}
                        className="text-neutral-500 hover:text-white p-1 text-xs"
                        title="Copy to clipboard"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{ch.title}</h3>
                  <div className="text-xs font-mono text-neutral-400 truncate">{ch.value}</div>
                </div>

                <a
                  href={ch.href}
                  target={ch.isCopy ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="mt-6 pt-4 border-t border-white/5 text-xs font-mono text-white flex items-center justify-between group"
                >
                  <span>CONNECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
