import { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Code2, Database, GraduationCap, Layers3, Sparkles, University } from 'lucide-react'

const stats = [
  [GraduationCap, 'ICT Software Engineering Student'],
  [University, 'APU Data Analytics Society Member'],
  [BarChart3, 'Data Analytics + Software Engineering Focus'],
  [Layers3, 'Project Showcase Portfolio'],
]

const quickFacts = [
  [GraduationCap, 'ICT Software Engineering at APU'],
  [BarChart3, 'Analytics, dashboards, ML workflows'],
  [Database, 'Databases, data pipelines, reporting'],
  [Code2, 'React, FastAPI, SQL, Python'],
]

export default function About() {
  const [profileFailed, setProfileFailed] = useState(false)

  return (
    <section id="about" className="section-band py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-mono text-sm font-bold text-green">Profile</p>
          <h2 className="section-title mt-3">About Me</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-muted">
            <p>
              As an ICT Software Engineering student, I use this portfolio to document the projects I have built
              across data analytics, software development, dashboards, databases, and application design.
            </p>
            <p>
              My projects combine technical development and analytics &mdash; from mobile apps and web systems to
              dashboards, data pipelines, database structures, and machine learning workflows. I focus on turning raw
              information into clear outputs that are easier to understand, explore, and use.
            </p>
            <p>
              Beyond analytics, I also work with full-stack development, UI/UX design, low-code systems, and database
              modelling, which helps me understand how data-driven applications are built from end to end.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="soft-card overflow-hidden p-5"
        >
          <div className="grid gap-5 sm:grid-cols-[0.82fr_1fr] lg:grid-cols-1 xl:grid-cols-[0.82fr_1fr]">
            <div className="relative overflow-hidden rounded-xl border border-accent/25 bg-bg/70">
              {!profileFailed ? (
                <img
                  src="/logos/yang.jpg"
                  alt="Grayson Chia profile"
                  className="aspect-[4/5] h-full w-full object-cover"
                  loading="lazy"
                  onError={() => setProfileFailed(true)}
                />
              ) : (
                <div className="grid aspect-[4/5] place-items-center bg-[linear-gradient(135deg,rgba(99,102,241,0.28),rgba(16,185,129,0.12),rgba(15,23,42,0.95))]">
                  <div className="text-center">
                    <p className="font-display text-6xl font-bold text-accent-glow">GC</p>
                    <p className="mt-2 font-mono text-xs font-bold uppercase text-muted">Profile photo</p>
                  </div>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/90 to-transparent p-4">
                <span className="inline-flex rounded-full border border-green/30 bg-green/10 px-3 py-1 text-xs font-bold text-green">
                  Project showcase portfolio
                </span>
              </div>
            </div>

            <div className="grid content-between gap-4">
              <div>
                <p className="font-mono text-xs font-bold uppercase text-green">Quick facts</p>
                <h3 className="mt-2 font-display text-2xl font-bold">Data-minded software builder</h3>
              </div>
              <div className="grid gap-3">
                {quickFacts.map(([Icon, text]) => (
                  <div key={text} className="flex items-center gap-3 rounded-lg border border-border bg-bg/45 p-3">
                    <Icon className="shrink-0 text-accent-glow" size={18} />
                    <span className="text-sm font-semibold text-muted">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {stats.slice(0, 2).map(([Icon, text]) => (
              <div key={text} className="glass-panel p-4">
                <Icon className="text-accent-glow" size={22} />
                <p className="mt-4 font-display text-base font-bold leading-7">{text}</p>
              </div>
            ))}
          </div>
          <div className="glass-panel mt-5 p-5">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-1 shrink-0 text-accent-glow" size={22} />
              <div>
                <h3 className="font-display text-lg font-bold">Practical builder mindset</h3>
                <p className="mt-2 leading-7 text-muted">
                  I like turning coursework and personal ideas into working systems with databases, APIs, analytics,
                  and dashboards.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
