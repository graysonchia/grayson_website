import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Mail, MoveRight } from 'lucide-react'

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

  return (
    <section id="home" className="section-shell grid min-h-screen items-center gap-12 pt-32 lg:grid-cols-[1.15fr_0.85fr]">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="font-mono text-sm font-bold text-green">
          [ Data Analytics &middot; Software Engineering &middot; Dashboard Projects ]
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-[clamp(3rem,10vw,4.5rem)] font-bold leading-[0.98] tracking-normal">
          Turning messy data <span className="text-accent-glow">into clear decisions.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          I&apos;m Grayson, an ICT Software Engineering student who builds data-driven applications, dashboards,
          and analytics workflows using software, databases, and real-world problem solving.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-bold text-white transition hover:bg-accent-glow"
          >
            View My Projects <MoveRight size={18} />
          </a>
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
          {['10+ Projects Built', 'Data + Software Focus', 'Dashboard Projects'].map((stat) => (
            <div key={stat} className="rounded-lg bg-surface-2/70 p-3 text-sm font-bold text-text">
              {stat}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
