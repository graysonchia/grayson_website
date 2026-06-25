import { motion } from 'framer-motion'
import { AppWindow, ChartNoAxesColumn, Database, FileSearch, ServerCog, SlidersHorizontal } from 'lucide-react'

const steps = [
  [FileSearch, 'Frame the Problem', 'Define the objective, user need, and key questions.'],
  [Database, 'Prepare the Data', 'Collect, structure, and organise the data source.'],
  [SlidersHorizontal, 'Clean & Model', 'Clean messy data and apply analytics or ML techniques.'],
  [ServerCog, 'Build the System', 'Create the backend, database, dashboard, or app flow.'],
  [ChartNoAxesColumn, 'Visualise Insights', 'Turn findings into charts, dashboards, and clear patterns.'],
  [AppWindow, 'Present the Solution', 'Deliver the final interface, report, or working application.'],
]

export default function Process() {
  return (
    <section id="process" className="bg-surface/25 py-24">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-mono text-sm font-bold text-green">How I build</p>
          <h2 className="section-title mt-3">Project Process</h2>
          <p className="mt-4 max-w-3xl leading-8 text-muted">
            My projects usually move from problem framing to data preparation, modelling, and a finished interface that makes the insight easy to use.
          </p>
        </motion.div>

        <div className="relative mt-12 grid gap-4 md:grid-cols-6 md:gap-4">
          <div className="absolute left-5 top-5 hidden h-px w-[calc(100%-2.5rem)] bg-accent/35 md:block" />

          {steps.map(([Icon, label, description], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group relative flex gap-4 md:block"
            >
              {index < steps.length - 1 && (
                <div className="absolute left-5 top-11 h-[calc(100%+1rem)] w-px bg-accent/35 md:hidden" />
              )}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/50 bg-bg text-accent-glow shadow-[0_0_22px_rgba(99,102,241,0.18)] transition group-hover:border-accent-glow group-hover:bg-accent/15">
                <Icon size={20} />
              </div>
              <div className="card flex-1 p-4 transition group-hover:-translate-y-1 group-hover:border-accent/70 md:mt-5 md:min-h-36">
                <p className="font-mono text-xs font-bold text-green">Step {index + 1}</p>
                <h3 className="mt-2 text-sm font-bold leading-6 text-text">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
