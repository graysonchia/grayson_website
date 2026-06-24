import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="section-shell">
        <p className="font-mono text-sm font-bold text-green">Academic foundation</p>
        <h2 className="section-title mt-3">Education</h2>
        <div className="mt-10 grid gap-5">
          {[
            {
              period: '2024 - Present',
              school: 'Asia Pacific University of Technology and Innovation',
              detail: 'Diploma in Information & Communication Technology (Software Engineering)',
              meta: 'Kuala Lumpur, Malaysia | CGPA: 3.4 / 4.0',
            },
            {
              period: '2019 - 2023',
              school: 'SMK St. Gabriel',
              detail: 'Higher School Certificate (SPM)',
              meta: 'Kuala Lumpur, Malaysia | Distinction in Mathematics and English',
            },
          ].map((education, index) => (
            <motion.div
              key={education.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="card p-6"
            >
              <div className="grid gap-5 md:grid-cols-[180px_1fr]">
                <p className="font-mono font-bold text-accent-glow">{education.period}</p>
                <div>
                  <h3 className="font-display text-2xl font-bold">{education.school}</h3>
                  <p className="mt-2 font-semibold text-accent-glow">{education.detail}</p>
                  <p className="mt-2 text-muted">{education.meta}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
