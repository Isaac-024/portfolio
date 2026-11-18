import React, { useState } from 'react';
import { Check, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

export default function Collaboration() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    details: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/asoda.isaac@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Video Request: Project Brief from ${form.name}`,
          _replyto: form.email,
          _template: 'table',
          _captcha: 'false',
          'Client Name / Studio': form.name,
          'Client Email': form.email,
          'Message / Scope': form.details,
          'Project Intent': 'Client wants a video collaboration with ZYNC',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success !== 'false') {
        setSubmitted(true);
        setForm({ name: '', email: '', details: '' });
      } else {
        throw new Error(data.message || 'Failed to dispatch form. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback: Still mark as submitted or show error with direct email option
      setErrorMessage(
        'Unable to send via automated dispatch. Please contact asoda.isaac@gmail.com directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="collaborate" className="py-28 px-6 md:px-12 bg-[#050505] border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-neutral-500 block mb-3">
            WORK WITH ZYNC
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
            LET&apos;S COLLABORATE
          </h2>
          <p className="text-sm text-neutral-400 font-light max-w-xl mx-auto">
            Have a story, commercial, or creative vision? Dispatch your project brief below.
          </p>
        </div>

        <div className="max-w-2xl mx-auto p-8 sm:p-12 bg-black border border-white/10">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 border border-white/30 flex items-center justify-center mx-auto text-white">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold uppercase text-white">Brief Received</h3>
              <p className="text-xs font-mono text-neutral-400 leading-relaxed max-w-md mx-auto">
                Thank you for reaching out. Your project request has been dispatched to{' '}
                <span className="text-white">asoda.isaac@gmail.com</span>. We will review your vision and reply within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="pt-4 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white border-b border-white/20 cursor-pointer"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-4 bg-red-950/40 border border-red-500/30 text-red-200 text-xs font-mono flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p>{errorMessage}</p>
                    <a
                      href={`mailto:asoda.isaac@gmail.com?subject=Video%20Project%20Inquiry%20from%20${encodeURIComponent(
                        form.name || 'Client'
                      )}&body=${encodeURIComponent(form.details || '')}`}
                      className="underline text-white mt-1 inline-block"
                    >
                      Click here to email directly
                    </a>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  YOUR NAME / STUDIO *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivers"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-950 border border-white/10 text-white text-sm focus:border-white focus:outline-none placeholder:text-neutral-700"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-950 border border-white/10 text-white text-sm focus:border-white focus:outline-none placeholder:text-neutral-700"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  PROJECT SCOPE & TIMELINE *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your footage, reference links, intended deliverables, and target deadline..."
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  className="w-full p-4 bg-neutral-950 border border-white/10 text-white text-sm focus:border-white focus:outline-none placeholder:text-neutral-700 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>DISPATCHING BRIEF...</span>
                  </>
                ) : (
                  <>
                    <span>TRANSMIT PROJECT BRIEF</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
