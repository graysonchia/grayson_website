import { useState } from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, ChartNoAxesColumn, Code2, Database, PanelsTopLeft, Wrench } from 'lucide-react'
import { skillGroups } from '../data/skills'

const tabs = [
  {
    title: 'Analytics',
    icon: ChartNoAxesColumn,
    groups: ['Data Analytics & BI', 'Machine Learning & Libraries'],
  },
  {
    title: 'Software',
    icon: Code2,
    groups: ['Programming Languages', 'Frontend & Mobile'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'Supabase', 'SQLAlchemy ORM', 'Alembic Migrations', 'Redis', 'SQL Optimization'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    groups: ['Tools & Platforms'],
  },
  {
    title: 'Design',
    icon: PanelsTopLeft,
    skills: ['UI/UX Design', 'Figma', 'ERD Design', 'Data Modeling', 'Low-Code Development', 'Dashboard Reporting'],
  },
]

const groupMap = new Map(skillGroups.map((group) => [group.title, group.skills]))

export default function Skills() {
  const [activeTab, setActiveTab] = useState(tabs[0].title)
  const active = tabs.find((tab) => tab.title === activeTab) ?? tabs[0]
  const activeSkills = active.skills ?? active.groups.flatMap((group) => groupMap.get(group) ?? [])
  const Icon = active.icon ?? BrainCircuit

  return (
    <section id="skills" className="section-band bg-surface/35 py-28">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-mono text-sm font-bold text-green">Capabilities</p>
          <h2 className="section-title mt-3">Technical Skills & Tools</h2>
          <p className="mt-4 max-w-3xl leading-8 text-muted">
            A practical mix of data analytics, software engineering, databases, dashboards, and UI/UX tools.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="soft-card mt-10 overflow-hidden p-4 sm:p-5"
        >
          <div className="flex gap-2 overflow-x-auto pb-2">
            {tabs.map(({ title, icon: TabIcon }) => (
              <button
                key={title}
                type="button"
                onClick={() => setActiveTab(title)}
                className={`focus-ring inline-flex shrink-0 items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-bold transition ${
                  activeTab === title
                    ? 'border-accent bg-accent text-white shadow-[0_0_18px_rgba(99,102,241,0.28)]'
                    : 'border-border bg-bg/45 text-muted hover:border-accent/70 hover:text-text'
                }`}
              >
                <TabIcon size={16} /> {title}
              </button>
            ))}
          </div>

          <div className="mt-5 grid gap-6 rounded-xl border border-border bg-bg/35 p-5 lg:grid-cols-[260px_1fr]">
            <div>
              <span className="inline-flex rounded-xl bg-accent/15 p-3 text-accent-glow">
                <Icon size={26} />
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold">{active.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Tools I use across portfolio projects, coursework, dashboards, and software builds.
              </p>
            </div>

            <div className="flex flex-wrap content-start gap-2.5">
              {activeSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-surface/80 px-3 py-1.5 text-sm font-semibold text-muted transition hover:border-accent/70 hover:text-text"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
