import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Code2, ExternalLink, X } from 'lucide-react'

const sections = ['problem', 'dataset', 'outcome', 'learned']

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined

    const onKey = (event) => event.key === 'Escape' && onClose()
    const originalOverflow = document.body.style.overflow

    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = originalOverflow
    }
  }, [project, onClose])

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
        </motion.div>
      )}
    </AnimatePresence>
  )
}
