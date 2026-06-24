import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', ...new Set(projects.map((project) => project.category).filter(Boolean))]
  const normalizedQuery = query.trim().toLowerCase()

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter
    const searchableText = [
      project.title,
      project.tagline,
      project.category,
      project.summary,
      ...(project.tags ?? []),
      ...(project.tools ?? []),
    ]
      .join(' ')
      .toLowerCase()

    return matchesFilter && (!normalizedQuery || searchableText.includes(normalizedQuery))
  })

  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-mono text-sm font-bold text-green">Real data. Real systems. Real insights.</p>
          <h2 className="section-title mt-3">Featured Projects</h2>
        </motion.div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
          <label className="focus-within:border-accent focus-within:shadow-[0_0_22px_rgba(99,102,241,0.18)] flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 transition">
            <Search className="shrink-0 text-muted" size={18} />
            <span className="sr-only">Search projects</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title, category, tags, or tools..."
              className="w-full bg-transparent text-sm text-text outline-none placeholder:text-muted"
            />
          </label>

          <div className="flex flex-wrap gap-2 lg:max-w-xl lg:justify-end">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`focus-ring rounded-full border px-4 py-2 text-xs font-bold transition ${
                  activeFilter === filter
                    ? 'border-accent bg-accent text-white shadow-[0_0_16px_rgba(99,102,241,0.32)]'
                    : 'border-border bg-surface text-muted hover:border-accent/70 hover:text-text'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <ProjectCard project={project} onOpen={setSelected} />
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="card mt-10 p-8 text-center">
            <p className="font-display text-xl font-bold">No matching projects found.</p>
            <p className="mt-2 text-muted">Try a different search term or choose the All filter.</p>
          </div>
        )}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
