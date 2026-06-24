import { BriefcaseBusiness, Download } from 'lucide-react'

export default function Resume() {
  return (
    <section id="resume" className="py-24">
      <div className="section-shell">
        <div className="card mx-auto max-w-3xl p-8 text-center">
          <p className="font-mono text-sm font-bold text-green">Recruiter-ready CV</p>
          <h2 className="section-title mt-3">Want the full picture?</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted">
            Download my CV to see my complete academic record, technical projects, and experience, formatted for recruiters.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="/resume.pdf" download="Grayson_Chia_Resume.pdf" className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-bold text-white hover:bg-accent-glow">
              <Download size={18} /> Download CV (PDF)
            </a>
            <a href="https://www.linkedin.com/in/grayson-chia-a85959274/" target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 font-bold text-text hover:border-accent">
              <BriefcaseBusiness size={18} /> View on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
