import { motion } from 'framer-motion'
import { BarChart3, Database, Gauge, GraduationCap, LayoutDashboard } from 'lucide-react'

const stats = [
  [Gauge, '10+', 'Projects Built'],
  [Database, '500K+', 'Transit Records Processed'],
  [BarChart3, '395K+', 'Habit Check-ins Seeded'],
  [LayoutDashboard, '12+', 'Charts / Dashboards Created'],
  [GraduationCap, '3.4', 'CGPA'],
]

export default function ImpactStats() {
  return (
    <section className="py-16">
      <div className="section-shell">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map(([Icon, value, label], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.06 }}
              className="card p-5"
            >
              <Icon className="text-accent-glow" size={22} />
              <p className="mt-5 font-display text-3xl font-bold">{value}</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-muted">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
