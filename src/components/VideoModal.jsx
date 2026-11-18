import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { isYouTubeUrl, getYouTubeEmbedUrl } from '../utils/video';

export default function VideoModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isYT = isYouTubeUrl(project.videoUrl);
  const embedUrl = isYT
    ? getYouTubeEmbedUrl(project.videoUrl, { autoplay: true, mute: false, loop: false, controls: true })
    : null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 select-none">
      <div className="fixed inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose} />

      <div
        className="relative z-10 w-full max-w-5xl bg-neutral-950 border border-white/20 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 bg-neutral-900 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider truncate">
              {project.title}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-800 text-neutral-400">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="aspect-video w-full bg-black flex items-center justify-center">
          {project.videoUrl ? (
            isYT ? (
              <iframe
                src={embedUrl}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={project.videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
            )
          ) : (
            <div className="text-center p-8 space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                AWAITING PROJECT VIDEO
              </div>
              <p className="text-xs font-mono text-neutral-500 max-w-md">
                Configure this project&apos;s <code className="text-white">videoUrl</code> in <code className="text-white">src/data/siteData.js</code> to stream directly here.
              </p>
            </div>
          )}
        </div>

        <div className="p-4 bg-neutral-900/60 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-neutral-400">
          <p className="line-clamp-2 max-w-xl">{project.description}</p>
          {project.software && (
            <div className="flex gap-1.5 font-mono text-[10px]">
              {project.software.map(s => (
                <span key={s} className="px-2 py-0.5 bg-neutral-800 text-neutral-300">
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
