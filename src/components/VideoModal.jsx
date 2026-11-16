import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Sparkles, ExternalLink, Film, Clock } from 'lucide-react';
import { isYouTubeUrl, getYouTubeEmbedUrl } from '../utils/videoUtils';

export default function VideoModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isYT = isYouTubeUrl(project.videoUrl);
  const embedUrl = isYT
    ? getYouTubeEmbedUrl(project.videoUrl, {
        autoplay: true,
        mute: false,
        loop: false,
        controls: 1,
      })
    : null;

  const isVertical = project.aspectRatio === '9:16';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/95 backdrop-blur-2xl"
        />

        {/* Ambient Video Glow Behind Modal */}
        <div className="absolute w-[600px] h-[400px] bg-purple-600/20 rounded-full blur-[160px] pointer-events-none" />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className={`relative z-10 w-full bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9)] flex flex-col ${
            isVertical ? 'max-w-xl' : 'max-w-5xl'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="p-4 sm:p-5 bg-zinc-900/90 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-rec" />
              <div className="text-xs font-mono text-white font-bold truncate max-w-xs sm:max-w-md">
                {project.title}
              </div>
              <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 uppercase">
                {project.categoryLabel}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player Stage */}
          <div className={`relative w-full bg-black flex items-center justify-center ${isVertical ? 'aspect-[9/16] max-h-[70vh]' : 'aspect-video'}`}>
            {isYT ? (
              <iframe
                src={embedUrl}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={project.videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            )}
          </div>

          {/* Footer Metadata */}
          <div className="p-5 sm:p-6 bg-zinc-950 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs text-zinc-400 font-light mb-2 max-w-xl">
                {project.description}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono text-zinc-500">TOOLS:</span>
                {project.software.map((tool) => (
                  <span
                    key={tool}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-white/5 text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-2 transition-all whitespace-nowrap"
              >
                <span>OPEN ON YOUTUBE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
