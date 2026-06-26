import { useState } from 'react'
import { motion } from 'framer-motion'

const educationItems = [
  {
    period: '2024 - Present',
    institution: 'Asia Pacific University of Technology and Innovation',
    qualification: 'Diploma in Information & Communication Technology (Software Engineering)',
    location: 'Kuala Lumpur, Malaysia',
    logo: '/logos/apu.png',
    logoAlt: 'Asia Pacific University logo',
    logoLightBackground: true,
  },
  {
    period: '2019 - 2023',
    institution: 'SMK St. Gabriel',
    qualification: 'Higher School Certificate (SPM)',
    location: 'Kuala Lumpur, Malaysia',
    logo: '/logos/stgab.png',
    logoAlt: 'SMK St. Gabriel logo',
    logoLightBackground: true,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-28">
      <div className="section-shell">
        <p className="font-mono text-sm font-bold text-green">Academic foundation</p>
        <h2 className="section-title mt-3">Education</h2>
        <div className="mt-10 grid gap-5">
          {educationItems.map((education, index) => (
            <motion.div
              key={education.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="soft-card p-6"
            >
              <div className="grid gap-6 md:grid-cols-[180px_1fr_160px] md:items-center">
                <div className="md:self-start">
                  <p className="font-mono font-bold text-accent-glow">{education.period}</p>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-2xl font-bold">{education.institution}</h3>
                  <p className="mt-2 font-semibold text-accent-glow">{education.qualification}</p>
                  <p className="mt-2 text-muted">{education.location}</p>
                </div>
                <EducationLogo education={education} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EducationLogo({ education }) {
  const [logoFailed, setLogoFailed] = useState(false)

  if (!education.logo || logoFailed) {
    return null
  }

  const logoFrameClass = education.logoLightBackground
    ? 'border-white/70 bg-white p-3'
    : 'border-border bg-bg/45 p-3 shadow-inner shadow-black/10'

  return (
    <div className={`flex h-24 w-28 items-center justify-center rounded-xl border md:ml-auto md:h-28 md:w-40 md:p-4 ${logoFrameClass}`}>
      <img
        src={education.logo}
        alt={education.logoAlt || `${education.institution} logo`}
        className="max-h-16 max-w-[96px] object-contain md:max-h-20 md:max-w-[136px]"
        loading="lazy"
        onError={() => setLogoFailed(true)}
      />
    </div>
  )
}
