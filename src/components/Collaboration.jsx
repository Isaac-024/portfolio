import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Send, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Briefcase, 
  User, 
  Mail, 
  MessageSquare,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COLLABORATION_TYPES, PERSONAL_INFO } from '../data/portfolioData';

export default function Collaboration() {
  const [selectedType, setSelectedType] = useState('brands');
  const [showFormModal, setShowFormModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Brand Collaborations',
    budget: '$1,000 - $3,000',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetOptions = [
    '< $1,000',
    '$1,000 - $3,000',
    '$3,000 - $7,000',
    '$7,000+',
    'Flexible / Custom'
  ];

  const handleTypeCardClick = (type) => {
    setSelectedType(type.id);
    setFormData((prev) => ({ ...prev, projectType: type.title }));
    const formSection = document.getElementById('project-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Realistic delay simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#00ff87', '#ffffff']
      });
    }, 1000);
  };

  return (
    <section id="collaborate" className="py-28 px-6 md:px-12 bg-[#09090d] border-t border-white/5 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Main Section Header (Exact Required Headline & Subtitle) */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            PARTNERSHIPS & COMMISSIONS
          </motion.div>

          {/* Exact Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white leading-none mb-6">
            HAVE A STORY?
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent">
              LET'S MAKE IT UNFORGETTABLE.
            </span>
          </h2>

          {/* Exact Subtitle */}
          <p className="text-base sm:text-xl text-zinc-300 font-light max-w-2xl mx-auto mb-8">
            Have a project in mind? Let's collaborate and create something extraordinary.
          </p>

          <a
            href="#project-form"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(0,255,135,0.55)] active:scale-95"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 5 Collaboration Options Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {COLLABORATION_TYPES.map((type) => {
            const isSelected = selectedType === type.id;

            return (
              <div
                key={type.id}
                onClick={() => handleTypeCardClick(type)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-zinc-900 border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.25)] scale-[1.02]'
                    : 'bg-zinc-950/70 border-white/10 hover:border-white/30 hover:bg-zinc-900/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400">
                      TIER
                    </span>
                    {type.popular && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        POPULAR
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {type.title}
                  </h3>
                  <div className="text-xs text-purple-400 font-mono mb-3">
                    {type.tagline}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {type.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                  <span>{type.timeline}</span>
                  <span className="text-emerald-400 font-semibold group-hover:translate-x-1 transition-transform">
                    SELECT →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Interactive Collaboration Form (Exact Required Fields) */}
        <div id="project-form" className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-white/10 shadow-2xl relative">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold uppercase text-white mb-2">
              PROJECT INQUIRY FORM
            </h3>
            <p className="text-xs font-mono text-zinc-400">
              Fill in your project specs. I typically respond within 12 hours with availability and timeline quotes.
            </p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 px-6"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">
                INQUIRY DISPATCHED!
              </h4>
              <p className="text-sm text-zinc-300 max-w-md mx-auto mb-6">
                Thank you for reaching out. Your project brief has been received. I will review your concept and reach out shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white"
              >
                Send Another Brief
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / Studio Lead"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-zinc-900 border border-white/10 focus:border-purple-500 focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-zinc-900 border border-white/10 focus:border-purple-500 focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Project Type (Required) */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Project Type *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {COLLABORATION_TYPES.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: type.title })}
                      className={`px-3 py-2.5 rounded-xl text-xs font-mono text-left transition-all ${
                        formData.projectType === type.title
                          ? 'bg-purple-600 text-white font-semibold shadow-md'
                          : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
                      }`}
                    >
                      {type.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 3: Budget (Required) */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Estimated Budget *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {budgetOptions.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`px-2.5 py-2 rounded-xl text-xs font-mono text-center transition-all ${
                        formData.budget === b
                          ? 'bg-emerald-500 text-black font-bold shadow-md'
                          : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 4: Project Details (Required) */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Project Details & Vision *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about the storyline, footage status, reference links, deliverables, and estimated deadline..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full p-4 rounded-xl bg-zinc-900 border border-white/10 focus:border-purple-500 focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-white hover:bg-zinc-200 text-black font-extrabold text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] active:scale-98 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>DISPATCHING BRIEF...</span>
                  ) : (
                    <>
                      <span>SUBMIT PROJECT BRIEF</span>
                      <Send className="w-4 h-4 fill-black" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-zinc-500 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NDA Protected • Zero spam • Direct reply to your inbox</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
