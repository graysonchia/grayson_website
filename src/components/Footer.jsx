import { BriefcaseBusiness, Code2, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>© 2026 Grayson Chia.</p>
        <div className="flex gap-4">
          <a
            className="focus-ring rounded-sm hover:text-text"
            href="https://github.com/graysonchia"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Code2 size={18} />
          </a>
          <a
            className="focus-ring rounded-sm hover:text-text"
            href="https://www.linkedin.com/in/grayson-chia-a85959274/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness size={18} />
          </a>
          <span className="rounded-sm text-muted" aria-label="Email">
            <Mail size={18} />
          </span>
        </div>
      </div>
    </footer>
  )
}
