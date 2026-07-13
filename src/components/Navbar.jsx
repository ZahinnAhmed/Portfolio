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
    <nav className="fixed inset-y-0 left-0 z-50 w-56 bg-gray-900/40 backdrop-blur-lg border-r border-gray-800/50 p-6">
      <button
        onClick={toggleTheme}
        className="w-10 h-10 flex items-center justify-center rounded-full text-gray-100 hover:bg-white/10 transition mb-8"
      >
        <i className="ri-moon-line text-lg"></i>
      </button>

      <ul className="flex flex-col gap-1">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="block px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
