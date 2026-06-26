import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react'
import ProjectPreview from './ProjectPreview'

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
      whileHover={{ y: -6 }}
      className="soft-card focus-ring group flex h-full cursor-pointer flex-col p-4 text-left transition duration-300 hover:border-accent/80 hover:shadow-[0_0_32px_rgba(99,102,241,0.2)]"
    >
      <ProjectPreview project={project} compact />
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-xs font-bold text-accent-glow">
          {project.domain}
        </span>
        <span className="font-mono text-xs font-bold uppercase text-muted">{project.category}</span>
      </div>
      <div className="mt-3 flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-bold leading-7">{project.title}</h3>
        <ArrowUpRight className="mt-1 shrink-0 text-muted transition group-hover:text-accent-glow" size={20} />
      </div>
      <p className="mt-1 font-semibold text-accent-glow">{project.tagline}</p>
      <p className="mt-4 flex-1 text-sm leading-7 text-muted">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {(project.tools?.length ? project.tools : project.tags).slice(0, 5).map((tag) => (
          <span key={tag} className="rounded-full border border-border bg-bg/45 px-3 py-1 text-xs font-semibold text-muted">
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
          View Case Study <ArrowUpRight size={16} />
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
