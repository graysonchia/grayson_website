import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Projects', 'Skills', 'Education', 'Contact']
const profilePhoto = '/logos/yang.jpg'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [photoOpen, setPhotoOpen] = useState(false)
  const [photoFailed, setPhotoFailed] = useState(false)

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

  useEffect(() => {
    if (!photoOpen) return undefined

    const onKey = (event) => event.key === 'Escape' && setPhotoOpen(false)
    const originalOverflow = document.body.style.overflow

    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = originalOverflow
    }
  }, [photoOpen])

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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur-md transition-all ${
          scrolled ? 'py-2 shadow-2xl shadow-black/20' : 'py-4'
        }`}
      >
        <nav className="section-shell flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="View profile photo"
              onClick={() => setPhotoOpen(true)}
              className="focus-ring group flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-accent/60 bg-accent/10 text-accent-glow transition hover:scale-105 hover:border-accent-glow hover:shadow-[0_0_18px_rgba(129,140,248,0.35)] md:h-10 md:w-10"
            >
              {photoFailed ? (
                <span className="font-mono text-xs font-bold">&lt;GC /&gt;</span>
              ) : (
                <img
                  src={profilePhoto}
                  alt="Grayson Chia profile"
                  className="h-full w-full object-cover"
                  onError={() => setPhotoFailed(true)}
                />
              )}
            </button>
            <a href="#home" className="focus-ring rounded-sm font-display text-lg font-bold">
              Grayson Chia
            </a>
          </div>

          <div className="hidden items-center gap-5 lg:flex">{links.map(navLink)}</div>

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
          </div>
        )}
      </header>

      <AnimatePresence>
        {photoOpen && (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-black/75 p-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setPhotoOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              onMouseDown={(event) => event.stopPropagation()}
              className="relative"
            >
              <button
                type="button"
                aria-label="Close profile photo"
                onClick={() => setPhotoOpen(false)}
                className="focus-ring absolute -right-3 -top-3 rounded-full border border-border bg-surface-2 p-2 text-text shadow-xl transition hover:border-accent"
              >
                <X size={18} />
              </button>
              <div className="overflow-hidden rounded-2xl border border-accent/35 bg-surface shadow-2xl shadow-black/40">
                {photoFailed ? (
                  <div className="grid aspect-square w-[min(85vw,420px)] place-items-center bg-accent/10 font-mono text-3xl font-bold text-accent-glow">
                    &lt;GC /&gt;
                  </div>
                ) : (
                  <img
                    src={profilePhoto}
                    alt="Grayson Chia profile"
                    className="max-h-[78vh] w-[min(85vw,420px)] object-cover"
                    onError={() => setPhotoFailed(true)}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
