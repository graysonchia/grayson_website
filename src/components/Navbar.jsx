import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Projects', 'Skills', 'Education', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const current = links
        .map((link) => link.toLowerCase())
        .findLast((id) => {
          const section = document.getElementById(id)
          return section && section.offsetTop - 120 <= window.scrollY
        })
      if (current) setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLink = (label) => {
    const id = label.toLowerCase()
    return (
      <a
        key={label}
        href={`#${id}`}
        onClick={() => setOpen(false)}
        className={`focus-ring relative rounded-sm py-2 text-sm font-semibold transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-[#A5B4FC] after:shadow-[0_0_16px_rgba(129,140,248,0.95),0_0_28px_rgba(99,102,241,0.45)] after:transition-all after:duration-300 after:content-[''] hover:text-text hover:after:w-full ${
          active === id ? 'text-text after:w-full' : 'text-muted after:w-0'
        }`}
      >
        {label}
      </a>
    )
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur-md transition-all ${
        scrolled ? 'py-2 shadow-2xl shadow-black/20' : 'py-4'
      }`}
    >
      <nav className="section-shell flex items-center justify-between">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-sm">
          <span className="font-mono text-lg font-bold text-accent">&lt;GC /&gt;</span>
          <span className="font-display text-lg font-bold">Grayson Chia</span>
        </a>

        <div className="hidden items-center gap-5 lg:flex">{links.map(navLink)}</div>

        <a
          href="/resume.pdf"
          download="Grayson_Chia_Resume.pdf"
          className="focus-ring hidden items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-white transition hover:bg-accent-glow md:flex"
        >
          <Download size={16} /> Download CV
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring rounded-lg border border-border bg-surface-2 p-2 text-text lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="section-shell mt-3 grid gap-2 rounded-xl border border-border bg-surface p-4 lg:hidden">
          {links.map((label) => {
            const id = label.toLowerCase()
            return (
              <a
                key={label}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`focus-ring rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  active === id ? 'bg-accent/10 text-text' : 'text-muted hover:bg-surface-2/70 hover:text-text'
                }`}
              >
                {label}
              </a>
            )
          })}
          <a
            href="/resume.pdf"
            download="Grayson_Chia_Resume.pdf"
            className="focus-ring mt-2 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-bold text-white"
          >
            <Download size={16} /> Download CV
          </a>
        </div>
      )}
    </header>
  )
}
