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
    <nav className="fixed top-6 inset-x-6 z-50 items-center flex justify-between">
      <button
        onClick={toggleTheme}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-card/70 backdrop-blur-md border border-border text-foreground hover:bg-card transition"
      >
        <i className="ri-moon-line text-lg"></i>
      </button>

      <ul className="flex items-center gap-1 bg-card/70 backdrop-blur-md border border-border rounded-full px-2 py-2">
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
        className="hidden md:inline-flex items-center gap-2 bg-card/70 backdrop-blur-md border border-border text-foreground rounded-full px-5 py-3 text-sm font-medium hover:bg-card transition"
      >
        <i className="ri-mail-line"></i> Contact
      </a>
    </nav>
  )
}

export default Navbar
