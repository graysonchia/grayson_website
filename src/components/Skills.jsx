import { motion } from 'framer-motion'
import {
  Boxes,
  BrainCircuit,
  ChartNoAxesColumn,
  Code2,
  Database,
  PanelsTopLeft,
  Server,
  Sparkles,
  Wrench,
} from 'lucide-react'
import { skillGroups } from '../data/skills'

const icons = {
  Boxes,
  BrainCircuit,
  ChartNoAxesColumn,
  Code2,
  Database,
  PanelsTopLeft,
  Server,
  Sparkles,
  Wrench,
}

export default function Skills() {
  return (
    <section id="skills" className="bg-surface/35 py-24">
      <div className="section-shell">
        <p className="font-mono text-sm font-bold text-green">Capabilities</p>
        <h2 className="section-title mt-3">Technical Skills & Tools</h2>
        <p className="mt-4 max-w-3xl leading-8 text-muted">
          A practical mix of data analytics, software engineering, databases, dashboards, and UI/UX tools.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <SkillGroup key={group.title} group={group} groupIndex={groupIndex} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillGroup({ group, groupIndex }) {
  const Icon = icons[group.icon] ?? Code2

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: groupIndex * 0.05 }}
      className="card group p-5 transition hover:-translate-y-1 hover:border-accent hover:bg-surface"
    >
      <div className="flex items-center gap-3">
        <span className="rounded-lg bg-accent/15 p-2 text-accent-glow transition group-hover:bg-accent/20">
          <Icon size={22} />
        </span>
        <h3 className="font-display text-xl font-bold">{group.title}</h3>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border bg-surface-2/80 px-3 py-2 text-sm font-semibold text-muted transition hover:border-accent/70 hover:text-text"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
