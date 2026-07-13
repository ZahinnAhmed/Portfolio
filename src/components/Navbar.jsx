import React from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/60">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center rounded-full text-foreground hover:bg-foreground/10 transition"
        >
          <i className="ri-moon-line text-lg"></i>
        </button>

        <ul className="flex items-center gap-1">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 border border-border text-foreground rounded-full px-5 py-2 text-sm font-medium hover:bg-foreground/10 transition"
        >
          <i className="ri-mail-line"></i> Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar
