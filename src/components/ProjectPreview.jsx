import { useState } from 'react'
import { ImageIcon } from 'lucide-react'

export default function ProjectPreview({ project, className = '', compact = false }) {
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = Boolean(project.image) && !imageFailed

  return (
    <div className={`group/preview overflow-hidden rounded-lg border border-border bg-bg/50 ${className}`}>
      <div className="relative aspect-[16/10] w-full">
        {showImage ? (
          <img
            src={project.image}
            alt={project.imageAlt || `${project.title} project preview`}
            className="h-full w-full object-cover transition duration-500 group-hover/preview:scale-105"
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col justify-between bg-[linear-gradient(135deg,rgba(99,102,241,0.28),rgba(16,185,129,0.12)_45%,rgba(15,23,42,0.92))] p-4 transition duration-500 group-hover/preview:scale-[1.02]">
            <div className="flex items-start justify-between gap-3">
              <span className="rounded-lg bg-bg/55 px-3 py-2 font-mono text-sm font-bold text-accent-glow shadow-lg shadow-black/10">
                {project.emoji}
              </span>
              <span className="rounded-full border border-white/10 bg-bg/40 px-3 py-1 text-xs font-bold text-muted">
                {project.domain || project.category?.split(' - ')[0]}
              </span>
            </div>
            <div>
              <div className="mb-4 grid grid-cols-3 gap-2 opacity-80">
                {[38, 62, 48].map((height) => (
                  <span key={height} className="flex items-end rounded-md bg-bg/35 p-1">
                    <span className="w-full rounded-sm bg-accent-glow/70" style={{ height: `${height}%` }} />
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <ImageIcon size={compact ? 14 : 16} />
                <span>Preview placeholder</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
