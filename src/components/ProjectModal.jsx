import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Code2, ExternalLink, Maximize2, X } from 'lucide-react'

const sections = ['problem', 'dataset', 'outcome', 'learned']

export default function ProjectModal({ project, onClose }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const gallery = project?.gallery ?? []
  const hasGallery = gallery.length > 0
  const activeScreenshot = lightboxIndex === null ? null : gallery[lightboxIndex]

  useEffect(() => {
    setLightboxIndex(null)
  }, [project?.id])

  useEffect(() => {
    if (!project) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') {
        if (lightboxIndex !== null) {
          setLightboxIndex(null)
          return
        }

        onClose()
      }

      if (lightboxIndex !== null && gallery.length > 1 && event.key === 'ArrowLeft') {
        setLightboxIndex((index) => (index === 0 ? gallery.length - 1 : index - 1))
      }

      if (lightboxIndex !== null && gallery.length > 1 && event.key === 'ArrowRight') {
        setLightboxIndex((index) => (index === gallery.length - 1 ? 0 : index + 1))
      }
    }
    const originalOverflow = document.body.style.overflow

    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = originalOverflow
    }
  }, [gallery.length, lightboxIndex, project, onClose])

  const showPreviousScreenshot = () => {
    setLightboxIndex((index) => (index === 0 ? gallery.length - 1 : index - 1))
  }

  const showNextScreenshot = () => {
    setLightboxIndex((index) => (index === gallery.length - 1 ? 0 : index + 1))
  }

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-end bg-black/70 p-0 backdrop-blur-sm md:place-items-center md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.article
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            onMouseDown={(event) => event.stopPropagation()}
            className="max-h-[92vh] w-full overflow-y-auto rounded-t-xl border border-border bg-surface p-5 md:max-w-5xl md:rounded-xl md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-xs font-bold text-accent-glow">
                    {project.domain}
                  </span>
                  <span className="font-mono text-xs font-bold uppercase text-muted">{project.category}</span>
                </div>
                <h2 className="mt-2 font-display text-3xl font-bold">{project.title}</h2>
                <p className="mt-2 text-accent-glow">{project.tagline}</p>
              </div>
              <button type="button" onClick={onClose} aria-label="Close modal" className="focus-ring rounded-lg bg-surface-2 p-2">
                <X />
              </button>
            </div>

            <p className="mt-6 leading-8 text-muted">{project.summary}</p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {sections.map((section) => (
                <div key={section} className="rounded-xl border border-border bg-bg/40 p-5">
                  <h3 className="font-display text-lg font-bold capitalize">{section}</h3>
                  <p className="mt-3 leading-7 text-muted">{project[section]}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {[
                ['Methodology', project.methodology],
                ['Insights', project.insights],
                ['Skills', project.skills],
              ].map(([title, items]) => (
                <div key={title}>
                  <h3 className="font-display text-lg font-bold">{title}</h3>
                  <ul className="mt-3 space-y-3 text-sm leading-6 text-muted">
                    {(items ?? []).map((item) => (
                      <li key={item} className="border-l-2 border-accent/70 pl-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {(project.tools ?? []).map((tool) => (
                <span key={tool} className="rounded-full bg-surface-2 px-3 py-1 text-sm font-semibold text-muted">
                  {tool}
                </span>
              ))}
            </div>

            {hasGallery && (
              <section className="mt-10">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs font-bold uppercase text-accent-glow">Project Screenshots</p>
                    <h3 className="mt-2 font-display text-2xl font-bold">Dashboard Gallery</h3>
                  </div>
                  <p className="text-sm font-semibold text-muted">{gallery.length} screenshots</p>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  {gallery.map((item, index) => (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => setLightboxIndex(index)}
                      className="focus-ring group overflow-hidden rounded-xl border border-border bg-bg/40 text-left transition hover:border-accent/70 hover:shadow-[0_0_28px_rgba(99,102,241,0.18)]"
                    >
                      <span className="relative block aspect-[16/10] w-full bg-surface-2">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                        <span className="absolute right-3 top-3 inline-flex rounded-lg border border-white/10 bg-bg/80 p-2 text-text opacity-0 shadow-lg transition group-hover:opacity-100">
                          <Maximize2 size={16} />
                        </span>
                      </span>
                      <span className="block p-4">
                        <span className="font-display text-lg font-bold">{item.title}</span>
                        <span className="mt-2 block text-sm leading-6 text-muted">{item.description}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </section>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-bold text-white hover:bg-accent-glow"
                >
                  <Code2 size={18} /> View GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 font-bold text-text hover:border-accent"
                >
                  <ExternalLink size={18} /> View Demo
                </a>
              )}
            </div>
          </motion.article>

          <AnimatePresence>
            {activeScreenshot && (
              <motion.div
                className="fixed inset-0 z-[70] flex items-center justify-center bg-black/88 p-4 backdrop-blur-md md:p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onMouseDown={(event) => {
                  event.stopPropagation()
                  setLightboxIndex(null)
                }}
              >
                <motion.div
                  className="flex max-h-full w-full max-w-7xl flex-col"
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.96, opacity: 0 }}
                  onMouseDown={(event) => event.stopPropagation()}
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-mono text-xs font-bold text-accent-glow">
                        {lightboxIndex + 1} / {gallery.length}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-bold">{activeScreenshot.title}</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(null)}
                      aria-label="Close screenshot lightbox"
                      className="focus-ring rounded-lg border border-white/10 bg-surface p-2 text-text transition hover:border-accent/70"
                    >
                      <X />
                    </button>
                  </div>

                  <div className="relative min-h-0 overflow-hidden rounded-xl border border-white/10 bg-surface shadow-2xl">
                    <img
                      src={activeScreenshot.src}
                      alt={activeScreenshot.alt}
                      className="max-h-[74vh] w-full object-contain"
                    />

                    {gallery.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={showPreviousScreenshot}
                          aria-label="Previous screenshot"
                          className="focus-ring absolute left-3 top-1/2 rounded-full border border-white/10 bg-bg/85 p-3 text-text shadow-lg transition hover:border-accent/70"
                        >
                          <ChevronLeft />
                        </button>
                        <button
                          type="button"
                          onClick={showNextScreenshot}
                          aria-label="Next screenshot"
                          className="focus-ring absolute right-3 top-1/2 rounded-full border border-white/10 bg-bg/85 p-3 text-text shadow-lg transition hover:border-accent/70"
                        >
                          <ChevronRight />
                        </button>
                      </>
                    )}
                  </div>

                  <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{activeScreenshot.description}</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
