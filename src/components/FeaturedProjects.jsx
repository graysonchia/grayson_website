import { motion } from 'framer-motion'
import { ArrowUpRight, Code2 } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectPreview from './ProjectPreview'

const featuredIds = ['transitpulse', 'habitflow', 'pricewatch']

export default function FeaturedProjects({ onOpenProject }) {
  const featuredProjects = featuredIds
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean)

  return (
    <section id="featured-projects" className="section-band bg-surface/25 py-28">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-mono text-sm font-bold text-green">Selected work</p>
          <h2 className="section-title mt-3">Featured Projects</h2>
          <p className="mt-4 max-w-3xl leading-8 text-muted">
            A closer look at the projects that best show my data engineering, analytics, and application-building work.
          </p>
        </motion.div>

        <div className="mt-12 space-y-8">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="soft-card grid gap-7 overflow-hidden p-5 transition hover:-translate-y-1 hover:border-accent/70 hover:shadow-[0_0_36px_rgba(99,102,241,0.2)] md:grid-cols-[1.08fr_0.92fr] md:items-center md:p-6 lg:p-7"
            >
              <ProjectPreview project={project} className={index % 2 === 1 ? 'md:order-2' : ''} />
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-xs font-bold text-accent-glow">
                    {project.domain}
                  </span>
                  <span className="font-mono text-xs font-bold uppercase text-muted">{project.category}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">{project.title}</h3>
                <p className="mt-2 font-semibold text-accent-glow">{project.tagline}</p>
                <p className="mt-4 leading-8 text-muted">{project.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tools.slice(0, 5).map((tool) => (
                    <span key={tool} className="rounded-full border border-border bg-surface-2/80 px-3 py-1 text-xs font-semibold text-muted">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-bold text-muted transition hover:border-accent/70 hover:text-text"
                    >
                      <Code2 size={16} /> GitHub
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => onOpenProject(project)}
                    className="focus-ring inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-white transition hover:bg-accent-glow"
                  >
                    View Case Study <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
