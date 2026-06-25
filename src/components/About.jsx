import { motion } from 'framer-motion'
import { BarChart3, Briefcase, Code2, GraduationCap, MapPin, University } from 'lucide-react'

const stats = [
  [GraduationCap, 'APU - Diploma in ICT (Software Engineering)'],
  [MapPin, 'Kuala Lumpur, Malaysia'],
  [BarChart3, 'CGPA: 3.4 / 4.0'],
  [University, 'APU Data Analytics Society Member'],
  [Briefcase, 'Open to: Internships & Entry-Level Roles'],
  [Code2, 'github.com/graysonchia'],
]

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-mono text-sm font-bold text-green">Profile</p>
          <h2 className="section-title mt-3">About Me</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-muted">
            <p>
              As an ICT Software Engineering student at Asia Pacific University (APU), 
              I&apos;m focused on building practical solutions that connect software development, data analytics, and clear decision-making.
            </p>
            <p>
              I enjoy working on projects that combine technical development and analytics — from mobile apps and web systems to dashboards, databases, data pipelines, and machine learning workflows. 
              Through my academic and personal projects, 
              I have used tools such as Python, SQL, Power BI, FastAPI, React, PostgreSQL, and Jupyter to solve practical problems and present data in a clear, useful way.
            </p>
            <p>
              Beyond analytics, I also have experience in full-stack development, UI/UX design, low-code systems, and
              database modelling, which helps me understand how data-driven applications are built from end to end.
            </p>
            <p>
              I&apos;m currently looking for internship or entry-level opportunities where I can apply my skills in data
              analysis, dashboard reporting, software engineering, and problem-solving to contribute to real business
              decisions.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-6"
        >
          <h3 className="font-display text-xl font-bold">Quick Stats</h3>
          <div className="mt-6 grid gap-4">
            {stats.map(([Icon, text]) => (
              <div key={text} className="flex items-start gap-3 rounded-lg bg-surface-2/60 p-4 text-muted">
                <Icon className="mt-0.5 shrink-0 text-accent-glow" size={20} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
