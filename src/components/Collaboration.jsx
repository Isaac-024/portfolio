import React, { useState } from 'react';
import { Check, ArrowRight, Loader2, AlertCircle, ExternalLink } from 'lucide-react';

export default function Collaboration() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    details: '',
  });

  // RFC-compliant mailto link with cleanly encoded parameters
  const generateMailto = () => {
    const clientName = form.name.trim() || 'Prospective Client';
    const clientEmail = form.email.trim() || 'Not specified';
    const clientScope = form.details.trim() || 'Not specified';

    const subject = `New Video Request: Project Brief from ${clientName}`;
    const bodyLines = [
      `Client Name / Studio: ${clientName}`,
      `Client Email: ${clientEmail}`,
      `Project Intent: Client wants a video collaboration with ZYNC`,
      '',
      `Project Scope & Timeline:`,
      clientScope,
    ];

    const subjectEncoded = encodeURIComponent(subject);
    const bodyEncoded = encodeURIComponent(bodyLines.join('\r\n'));

    return `mailto:asoda.isaac@gmail.com?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent duplicate submissions

    setIsSubmitting(true);
    setErrorMessage('');

    const clientName = form.name.trim();
    const clientEmail = form.email.trim();
    const clientDetails = form.details.trim();

    const payload = {
      _subject: `New Video Request: Project Brief from ${clientName || 'Client'}`,
      _replyto: clientEmail,
      _template: 'table',
      _captcha: 'false',
      'Client Name / Studio': clientName,
      'Client Email': clientEmail,
      'Message': clientDetails,
      'Project Intent': 'Client wants a video collaboration with ZYNC',
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/asoda.isaac@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      // Succeeded or accepted by FormSubmit (including first-time activation on owner's backend)
      if (
        (response.ok && data && (data.success === 'true' || data.success === true)) ||
        (data && data.message && (data.message.toLowerCase().includes('activation') || data.message.toLowerCase().includes('activate')))
      ) {
        setSubmitted(true);
        setForm({ name: '', email: '', details: '' });
        return;
      }

      // If FormSubmit returned an explicit failure message
      const failReason =
        data && data.message ? data.message : `HTTP ${response.status}: Failed to dispatch brief.`;
      throw new Error(failReason);
    } catch (err) {
      console.error('FormSubmit dispatch error:', err);
      setErrorMessage(
        err.message || 'Unable to connect to dispatch server. Please check your connection or use the direct mail link.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage('');
    setForm({ name: '', email: '', details: '' });
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
          {/* STATE 1: CONFIRMED SUCCESS DISPATCH (Privacy-safe: no email revealed) */}
          {submitted && (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center mx-auto text-emerald-400">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold uppercase text-white tracking-wide">Brief Received</h3>
              <p className="text-xs font-mono text-neutral-300 leading-relaxed max-w-md mx-auto">
                Thank you for reaching out. Your project inquiry has been successfully dispatched. We will review your vision and reply within 24 hours.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="pt-4 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white border-b border-white/20 cursor-pointer transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          )}

          {/* STATE 2: INTERACTIVE FORM INPUT */}
          {!submitted && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-4 bg-red-950/40 border border-red-500/30 text-red-200 text-xs font-mono flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div className="space-y-1.5 flex-1">
                    <p className="font-semibold">{errorMessage}</p>
                    <p className="text-neutral-400 text-[11px]">
                      You can send your brief directly via email with one click:
                    </p>
                    <a
                      href={generateMailto()}
                      className="inline-flex items-center gap-1.5 text-white underline hover:text-neutral-300 transition-colors pt-0.5"
                    >
                      <span>Open in Mail Client</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

              {/* Field 1: YOUR NAME / STUDIO */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  YOUR NAME / STUDIO *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Alex Rivers"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-neutral-950 border border-white/10 text-white text-sm focus:border-white focus:outline-none placeholder:text-neutral-700 disabled:opacity-50 transition-colors"
                />
              </div>

              {/* Field 2: EMAIL ADDRESS */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@domain.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-neutral-950 border border-white/10 text-white text-sm focus:border-white focus:outline-none placeholder:text-neutral-700 disabled:opacity-50 transition-colors"
                />
              </div>

              {/* Field 3: PROJECT SCOPE & TIMELINE */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  PROJECT SCOPE & TIMELINE *
                </label>
                <textarea
                  name="details"
                  rows={4}
                  required
                  placeholder="Describe your footage, reference links, intended deliverables, and target deadline..."
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  disabled={isSubmitting}
                  className="w-full p-4 bg-neutral-950 border border-white/10 text-white text-sm focus:border-white focus:outline-none placeholder:text-neutral-700 resize-none disabled:opacity-50 transition-colors"
                />
              </div>

              {/* Submit Button with Loading State */}
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
