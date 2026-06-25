import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BriefcaseBusiness, Code2, Download, Mail, MoveRight, X } from 'lucide-react'

const terminalBlocks = [
  [
    '$ analyzing transit_data.csv...',
    '> 847,291 GTFS records processed',
    '> 23 anomalous routes detected',
    '> Model accuracy: 94.3%',
  ],
  [
    '$ loading pricewatch_pipeline...',
    '> 12,500 product prices tracked',
    '> 156 price anomalies flagged',
    '> Forecast RMSE: 4.2%',
  ],
  [
    '$ running habitflow_clustering...',
    '> 500 user sessions analyzed',
    '> 4 behavioral clusters identified',
    '> Churn risk users: 18.4%',
  ],
]

export default function Hero() {
  const [block, setBlock] = useState(0)
  const [lineCount, setLineCount] = useState(1)
  const [resumeOpen, setResumeOpen] = useState(false)

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setLineCount((count) => (count >= terminalBlocks[block].length ? count : count + 1))
    }, 520)
    return () => clearInterval(lineTimer)
  }, [block])

  useEffect(() => {
    const blockTimer = setInterval(() => {
      setLineCount(1)
      setBlock((index) => (index + 1) % terminalBlocks.length)
    }, 5000)
    return () => clearInterval(blockTimer)
  }, [])

  useEffect(() => {
    if (!resumeOpen) return undefined

    const onKey = (event) => event.key === 'Escape' && setResumeOpen(false)
    const originalOverflow = document.body.style.overflow

    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = originalOverflow
    }
  }, [resumeOpen])

  return (
    <>
      <section id="home" className="section-shell grid min-h-screen items-center gap-12 pt-32 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="font-mono text-sm font-bold text-green">[ Aspiring Data Analyst - Kuala Lumpur, MY ]</p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(3rem,10vw,4.5rem)] font-bold leading-[0.98] tracking-normal">
            Turning messy data <span className="text-accent-glow">into clear decisions.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            I&apos;m Grayson, an ICT Software Engineering student at APU who builds data-driven applications,
            dashboards, and analytics workflows that turn raw information into clear, practical insights.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-bold text-white transition hover:bg-accent-glow"
            >
              View My Projects <MoveRight size={18} />
            </a>
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-accent/70 px-6 py-3 font-bold text-text transition hover:border-accent-glow hover:bg-accent/10"
            >
              <Download size={18} /> CV
            </button>
          </div>
          <div className="mt-8 flex gap-4 text-muted">
            <a
              className="focus-ring rounded-sm hover:text-text"
              href="https://github.com/graysonchia"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Code2 />
            </a>
            <a
              className="focus-ring rounded-sm hover:text-text"
              href="https://www.linkedin.com/in/grayson-chia-a85959274/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness />
            </a>
            <span className="rounded-sm text-muted" aria-label="Email">
              <Mail />
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="card p-5"
        >
          <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-green" />
            </div>
            <span className="font-mono text-xs font-bold text-green">* LIVE</span>
          </div>
          <div className="min-h-48 font-mono text-sm leading-8 text-slate-200 sm:text-base">
            <AnimatePresence mode="wait">
              <motion.div key={block} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {terminalBlocks[block].slice(0, lineCount).map((line) => (
                  <p key={line} className={line.startsWith('$') ? 'text-accent-glow' : 'text-muted'}>
                    {line}
                  </p>
                ))}
                <span className="inline-block h-5 w-2 translate-y-1 bg-green" />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5 text-center">
            {['10+ Projects Built', '3.4 CGPA', 'Data + Software Focus'].map((stat) => (
              <div key={stat} className="rounded-lg bg-surface-2/70 p-3 text-sm font-bold text-text">
                {stat}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {resumeOpen && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-black/75 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setResumeOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="resume-preview-title"
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              onMouseDown={(event) => event.stopPropagation()}
              className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/45"
            >
              <div className="flex items-start justify-between gap-4 border-b border-border p-4 sm:p-5">
                <div>
                  <p className="font-mono text-xs font-bold text-green">CV Preview</p>
                  <h2 id="resume-preview-title" className="mt-1 font-display text-xl font-bold text-text">
                    Review before downloading?
                  </h2>
                </div>
                <button
                  type="button"
                  aria-label="Close CV preview"
                  onClick={() => setResumeOpen(false)}
                  className="focus-ring rounded-lg border border-border bg-surface-2 p-2 text-text transition hover:border-accent"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="min-h-0 flex-1 bg-surface-2/50 p-3 sm:p-5">
                <iframe
                  title="Grayson Chia CV preview"
                  src="/resume.pdf#toolbar=0&navpanes=0"
                  className="h-[58vh] w-full rounded-lg border border-border bg-white"
                />
              </div>

              <div className="flex flex-col gap-3 border-t border-border p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <p className="text-sm leading-6 text-muted">Please confirm if you want to download the CV as a PDF.</p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setResumeOpen(false)}
                    className="focus-ring rounded-lg border border-border px-5 py-3 text-sm font-bold text-text transition hover:border-accent"
                  >
                    Cancel
                  </button>
                  <a
                    href="/resume.pdf"
                    download="Grayson_Chia_Resume.pdf"
                    onClick={() => setResumeOpen(false)}
                    className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-accent-glow"
                  >
                    <Download size={16} /> Download PDF
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
