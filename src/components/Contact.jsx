import { useState } from 'react'
import { BriefcaseBusiness, Code2, Mail, Send } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.get('name')}`)
    const body = encodeURIComponent(`${form.get('message')}\n\nFrom: ${form.get('name')} <${form.get('email')}>`)
    window.location.href = `mailto:chiajunyang1610@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="bg-surface/35 py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-sm font-bold text-green">Open to roles</p>
          <h2 className="section-title mt-3">Let&apos;s talk data.</h2>
          <div className="mt-6 space-y-5 leading-8 text-muted">
            <p>
              I&apos;m currently open to internship and entry-level opportunities in data analytics, software
              engineering, and full-stack development.
            </p>
            <p>
              I enjoy working on projects that connect data, systems, and user experience, from building dashboards
              and analytics pipelines to developing web and mobile applications. If you&apos;re looking for someone who
              can analyse problems, work with data, and build practical solutions around it, let&apos;s connect.
            </p>
          </div>
          <div className="mt-8 grid gap-4 text-muted">
            <div className="flex items-center gap-3">
              <Mail className="text-accent-glow" /> chiajunyang1610@gmail.com
            </div>
            <a
              href="https://github.com/graysonchia"
              target="_blank"
              rel="noreferrer"
              className="focus-ring flex items-center gap-3 rounded-sm hover:text-text"
            >
              <Code2 className="text-accent-glow" /> github.com/graysonchia
            </a>
            <a
              href="https://www.linkedin.com/in/grayson-chia-a85959274/"
              target="_blank"
              rel="noreferrer"
              className="focus-ring flex items-center gap-3 rounded-sm hover:text-text"
            >
              <BriefcaseBusiness className="text-accent-glow" /> linkedin.com/in/grayson-chia-a85959274
            </a>
          </div>
        </div>

        <form onSubmit={submit} className="card grid gap-4 p-6">
          <label className="grid gap-2 font-semibold">
            Name
            <input required name="name" className="focus-ring rounded-lg border border-border bg-bg px-4 py-3 text-text outline-none" />
          </label>
          <label className="grid gap-2 font-semibold">
            Email
            <input required type="email" name="email" className="focus-ring rounded-lg border border-border bg-bg px-4 py-3 text-text outline-none" />
          </label>
          <label className="grid gap-2 font-semibold">
            Message
            <textarea required name="message" rows="6" className="focus-ring resize-none rounded-lg border border-border bg-bg px-4 py-3 text-text outline-none" />
          </label>
          <button type="submit" className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-bold text-white hover:bg-accent-glow">
            <Send size={18} /> Send Message
          </button>
          {sent && <p className="font-semibold text-green">Thanks! I&apos;ll get back to you within 24-48 hours.</p>}
        </form>
      </div>
    </section>
  )
}
