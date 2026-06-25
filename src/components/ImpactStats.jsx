import { motion } from 'framer-motion'
import { BarChart3, BriefcaseBusiness, Code2, Database } from 'lucide-react'

const buildAreas = [
  {
    icon: BarChart3,
    label: 'Analytics',
    title: 'Data Analytics Projects',
    description: 'Dashboards, EDA, reporting, forecasting, and insights from structured datasets.',
  },
  {
    icon: Code2,
    label: 'Applications',
    title: 'Full-Stack Applications',
    description: 'Web, mobile, backend, database, authentication, and application workflows.',
  },
  {
    icon: Database,
    label: 'Systems',
    title: 'Database & System Design',
    description: 'PostgreSQL, MySQL, Supabase, ERD design, data modelling, and SQL optimization.',
  },
  {
    icon: BriefcaseBusiness,
    label: 'Business',
    title: 'Business-Focused Insights',
    description: 'Projects built around real-world domains like healthcare, finance, transit, e-commerce, and oil & gas.',
  },
]

export default function ImpactStats() {
  return (
    <section className="py-16">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-mono text-sm font-bold text-green">Strength snapshot</p>
          <h2 className="section-title mt-3">What I Build</h2>
          <p className="mt-4 max-w-3xl leading-8 text-muted">
            A mix of analytics, software engineering, databases, and real-world problem solving.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {buildAreas.map(({ icon: Icon, label, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.06 }}
              className="card group p-5 transition hover:-translate-y-1 hover:border-accent hover:bg-surface"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-lg bg-accent/15 p-2 text-accent-glow transition group-hover:bg-accent/20">
                  <Icon size={22} />
                </span>
                <span className="rounded-full border border-border bg-surface-2/80 px-3 py-1 text-xs font-bold text-muted">
                  {label}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold leading-7">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
