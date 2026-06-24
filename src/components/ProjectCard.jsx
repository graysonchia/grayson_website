import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project, onOpen }) {
  const openProject = () => onOpen(project)
  const stopOpeningModal = (event) => event.stopPropagation()

  return (
    <motion.article
      role="button"
      tabIndex={0}
      onClick={openProject}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          openProject()
        }
      }}
      whileHover={{ scale: 1.02 }}
      className="card focus-ring group flex h-full cursor-pointer flex-col p-5 text-left transition hover:border-accent hover:shadow-[0_0_28px_rgba(99,102,241,0.18)]"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-lg bg-accent/15 px-3 py-2 font-mono text-sm font-bold text-accent-glow">
          {project.emoji}
        </span>
        <ArrowUpRight className="text-muted transition group-hover:text-accent-glow" size={20} />
      </div>
      <p className="mt-5 font-mono text-xs font-bold uppercase text-green">{project.category}</p>
      <h3 className="mt-2 font-display text-xl font-bold">{project.title}</h3>
      <p className="mt-1 font-semibold text-accent-glow">{project.tagline}</p>
      <p className="mt-4 flex-1 leading-7 text-muted">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.slice(0, 5).map((tag) => (
          <span key={tag} className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-semibold text-muted">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={(event) => {
            stopOpeningModal(event)
            openProject()
          }}
          className="focus-ring inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-white transition hover:bg-accent-glow"
        >
          View Details <ArrowUpRight size={16} />
        </button>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={stopOpeningModal}
            className="focus-ring inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-bold text-muted transition hover:border-accent/70 hover:text-text"
          >
            <Code2 size={16} /> GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            onClick={stopOpeningModal}
            className="focus-ring inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-bold text-muted transition hover:border-accent/70 hover:text-text"
          >
            <ExternalLink size={16} /> Demo
          </a>
        )}
      </div>
    </motion.article>
  )
}
