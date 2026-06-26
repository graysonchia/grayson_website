import { useEffect, useState } from 'react'
import { Activity, BarChart3 } from 'lucide-react'

export default function ProjectPreview({ project, className = '', compact = false }) {
  const [mediaFailed, setMediaFailed] = useState(false)
  const showVideo = Boolean(project.previewVideo) && !mediaFailed
  const showImage = Boolean(project.image) && !mediaFailed && !showVideo
  const initials = project.emoji || getProjectInitials(project.title)

  useEffect(() => {
    setMediaFailed(false)
  }, [project.image, project.previewVideo])

  return (
    <div className={`group/preview overflow-hidden rounded-lg border border-border bg-bg/50 ${className}`}>
      <div className="relative aspect-video w-full">
        {showVideo ? (
          <video
            src={project.previewVideo}
            className="h-full w-full object-cover transition duration-500 group-hover/preview:scale-105"
            muted
            loop
            playsInline
            autoPlay
            onError={() => setMediaFailed(true)}
          />
        ) : showImage ? (
          <img
            src={project.image}
            alt={project.imageAlt || `${project.title} project preview`}
            className="h-full w-full object-cover transition duration-500 group-hover/preview:scale-105"
            loading="lazy"
            onError={() => setMediaFailed(true)}
          />
        ) : (
          <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[linear-gradient(135deg,rgba(99,102,241,0.32),rgba(16,185,129,0.12)_42%,rgba(15,23,42,0.96))] p-4 transition duration-500 group-hover/preview:scale-[1.02]">
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
            <div className="relative flex items-start justify-between gap-3">
              <span className="rounded-xl border border-white/10 bg-bg/65 px-3 py-2 font-display text-xl font-bold text-accent-glow shadow-lg shadow-black/10">
                {initials}
              </span>
              <span className="rounded-full border border-white/10 bg-bg/45 px-3 py-1 text-xs font-bold text-slate-200">
                {project.domain || project.category?.split(' - ')[0]}
              </span>
            </div>

            <div className="relative">
              <div className="mb-4 grid grid-cols-[1.1fr_0.9fr] gap-3">
                <div className="rounded-lg border border-white/10 bg-bg/45 p-3">
                  <div className="mb-3 flex items-center gap-2 text-xs font-bold text-muted">
                    <Activity size={compact ? 13 : 15} />
                    Signal trend
                  </div>
                  <svg viewBox="0 0 220 72" className="h-16 w-full overflow-visible" aria-hidden="true">
                    <path
                      d="M4 56 C34 44 42 23 70 30 C99 38 107 18 134 22 C165 27 171 55 216 18"
                      fill="none"
                      stroke="rgba(129,140,248,0.95)"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 62 C40 58 58 50 82 52 C116 55 132 38 154 42 C182 46 198 33 216 30"
                      fill="none"
                      stroke="rgba(16,185,129,0.78)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="grid grid-cols-3 items-end gap-2 rounded-lg border border-white/10 bg-bg/45 p-3">
                  {[68, 42, 84].map((height) => (
                    <span key={height} className="flex h-20 items-end rounded-md bg-white/5 p-1">
                      <span className="w-full rounded-sm bg-accent-glow/80" style={{ height: `${height}%` }} />
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 text-xs font-semibold text-slate-200">
                <span className="inline-flex items-center gap-2">
                  <BarChart3 size={compact ? 14 : 16} />
                  Designed analytics preview
                </span>
                <span className="text-muted">{project.category?.split(' - ')[0] || 'Project'}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function getProjectInitials(title) {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}
