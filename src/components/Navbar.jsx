import React, { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

// Tracks which section is on screen so the nav can highlight it.
const useActiveSection = () => {
  const [active, setActive] = useState('')
  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])
  return active
}

const Navbar = () => {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-5 inset-x-0 z-50 flex flex-col items-center px-4">
      <nav className="flex items-center gap-1 rounded-full border border-white/[0.12] bg-[#0b0e2a]/75 backdrop-blur-xl px-2 py-1.5 shadow-[0_8px_32px_rgb(0,0,0,0.4)]">
        <a href="#home" className="px-3 text-sm font-semibold text-foreground">
          ZA<span className="text-brand">.</span>
        </a>
        <ul className="hidden md:flex items-center">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`block px-4 py-1.5 rounded-full text-sm transition-colors ${
                  active === link.href ? 'text-brand bg-white/[0.06]' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="ml-1 hidden sm:inline-flex items-center gap-1 rounded-full bg-brand px-4 py-1.5 text-sm font-medium text-[#000319] hover:bg-[#d9c2fb] transition"
        >
          Resume <i className="ri-arrow-right-up-line"></i>
        </a>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-foreground hover:bg-white/10 transition"
        >
          <i className={`${open ? 'ri-close-line' : 'ri-menu-line'} text-lg`}></i>
        </button>
      </nav>

      {open && (
        <div className="md:hidden mt-2 w-full max-w-xs rounded-2xl border border-white/[0.12] bg-[#0b0e2a]/95 backdrop-blur-xl p-2">
          {[...links, { label: 'Resume', href: '/resume.pdf' }].map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
