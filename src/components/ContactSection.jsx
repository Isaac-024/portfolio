import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MessageCircle, 
  Copy, 
  Check, 
  ExternalLink,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';
import { CONTACT_INFO, PERSONAL_INFO } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const contactChannels = [
    {
      name: "Instagram",
      handle: CONTACT_INFO.instagramHandle,
      url: CONTACT_INFO.instagram,
      description: "Behind-the-scenes timelines, color grading reels & short-form breakdowns.",
      icon: InstagramIcon,
      accent: "#E1306C",
      actionText: "Follow on Instagram",
    },
    {
      name: "YouTube",
      handle: CONTACT_INFO.youtubeHandle,
      url: CONTACT_INFO.youtube,
      description: "Full resolution 4K director's cuts, video editing tutorials & project breakdowns.",
      icon: YoutubeIcon,
      accent: "#FF0000",
      actionText: "Subscribe on YouTube",
    },
    {
      name: "Email",
      handle: CONTACT_INFO.email,
      url: `mailto:${CONTACT_INFO.email}`,
      description: "Official business inquiries, client briefs, and long-term retainer proposals.",
      icon: Mail,
      accent: "#A855F7",
      actionText: "Send an Email",
      isEmail: true,
    },
    {
      name: "WhatsApp",
      handle: CONTACT_INFO.whatsappDisplay,
      url: `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi!%20I'm%20interested%20in%20collaborating%20on%20a%20video%20project.`,
      description: "Direct instant messaging for time-sensitive edits and quick project kickoffs.",
      icon: MessageCircle,
      accent: "#25D366",
      actionText: "Chat on WhatsApp",
    },
  ];

  return (
    <section id="contact" className="py-28 px-6 md:px-12 bg-[#070709] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Exact Required Text Banner */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            LIVE STUDIO STATUS: OPEN
          </motion.div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-6">
            AVAILABLE FOR CREATIVE <span className="text-glow-neon text-emerald-400">COLLABORATIONS.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-xl mx-auto">
            Ready to bring cinematic brilliance to your next project? Reach out directly via your preferred channel below.
          </p>
        </div>

        {/* 4 Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactChannels.map((channel) => {
            const Icon = channel.icon;

            return (
              <div
                key={channel.name}
                className="p-6 rounded-2xl bg-zinc-950/70 border border-white/10 hover:border-purple-500/40 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${channel.accent}15`,
                        borderColor: `${channel.accent}40`,
                        borderWidth: '1px',
                        color: channel.accent,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {channel.isEmail && (
                      <button
                        onClick={handleCopyEmail}
                        className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-white/5"
                        title="Copy Email to Clipboard"
                      >
                        {copiedEmail ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {channel.name}
                  </h3>
                  <div className="text-xs font-mono text-purple-400 mb-3 truncate">
                    {channel.handle}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {channel.description}
                  </p>
                </div>

                <a
                  href={channel.url}
                  target={channel.isEmail ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-zinc-900 group-hover:bg-purple-600 group-hover:text-white text-zinc-300 font-mono text-xs flex items-center justify-center gap-2 transition-all duration-300 border border-white/5 group-hover:border-purple-400"
                >
                  <span>{channel.actionText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
