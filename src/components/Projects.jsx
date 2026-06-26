import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects({ onOpenProject }) {
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)
  const [initialLimit, setInitialLimit] = useState(getProjectLimit)

  const filters = ['All', ...new Set(projects.map((project) => project.domain).filter(Boolean))]
  const normalizedQuery = query.trim().toLowerCase()

  useEffect(() => {
    const updateLimit = () => setInitialLimit(getProjectLimit())

    updateLimit()
    window.addEventListener('resize', updateLimit)

    return () => window.removeEventListener('resize', updateLimit)
  }, [])

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === 'All' || project.domain === activeFilter
    const searchableText = [
      project.title,
      project.tagline,
      project.domain,
      project.category,
      project.summary,
      ...(project.tags ?? []),
      ...(project.tools ?? []),
    ]
      .join(' ')
      .toLowerCase()

    return matchesFilter && (!normalizedQuery || searchableText.includes(normalizedQuery))
  })

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, initialLimit)
  const canToggleProjects = filteredProjects.length > initialLimit
  const projectCountText = showAll
    ? `Showing all ${filteredProjects.length} projects`
    : `Showing ${visibleProjects.length} of ${filteredProjects.length} projects`

  const updateQuery = (value) => {
    setQuery(value)
    setShowAll(false)
  }

  const updateFilter = (value) => {
    setActiveFilter(value)
    setShowAll(false)
  }

  return (
    <section id="projects" className="py-28">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-mono text-sm font-bold text-green">Real data. Real systems. Real insights.</p>
          <h2 className="section-title mt-3">Project Library</h2>
        </motion.div>

        <div className="mt-8 flex flex-col gap-4">
          <label className="focus-within:border-accent focus-within:shadow-[0_0_22px_rgba(99,102,241,0.18)] flex w-full max-w-3xl items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 transition">
            <Search className="shrink-0 text-muted" size={18} />
            <span className="sr-only">Search projects</span>
            <input
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
              placeholder="Search by title, domain, category, tags, or tools..."
              className="w-full bg-transparent text-sm text-text outline-none placeholder:text-muted"
            />
          </label>

          <label className="focus-within:border-accent flex items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-bold text-text transition md:hidden">
            <span className="text-muted">Domain</span>
            <select
              value={activeFilter}
              onChange={(event) => updateFilter(event.target.value)}
              className="max-w-[65%] bg-transparent text-right text-text outline-none"
            >
              {filters.map((filter) => (
                <option key={filter} value={filter} className="bg-surface text-text">
                  {filter}
                </option>
              ))}
            </select>
          </label>

          <div className="hidden max-w-5xl flex-wrap gap-2 md:flex">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => updateFilter(filter)}
                className={`focus-ring rounded-full border px-3 py-1.5 text-xs font-bold transition ${
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
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <ProjectCard project={project} onOpen={onOpenProject} />
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="card mt-10 p-8 text-center">
            <p className="font-display text-xl font-bold">No matching projects found.</p>
            <p className="mt-2 text-muted">Try a different search term or choose the All filter.</p>
          </div>
        )}

        {filteredProjects.length > 0 && (
          <div className="mt-10 flex flex-col items-center gap-4 pb-4 text-center">
            <p className="text-sm font-semibold text-muted">{projectCountText}</p>
            {canToggleProjects && (
              <button
                type="button"
                onClick={() => setShowAll((value) => !value)}
                className="focus-ring rounded-lg border border-accent/70 px-5 py-2.5 text-sm font-bold text-text transition hover:border-accent-glow hover:bg-accent/10"
              >
                {showAll ? 'Show Less' : 'Show More Projects'}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

function getProjectLimit() {
  if (typeof window === 'undefined') return 6
  if (window.matchMedia('(min-width: 1024px)').matches) return 6
  if (window.matchMedia('(min-width: 768px)').matches) return 4
  return 3
}
