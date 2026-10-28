import React, { useState } from 'react'
import { Reveal, GlowButton } from './ui/section'

const EMAIL = 'zahinfaiza.ahmed@gmail.com'

const socials = [
  { label: 'GitHub', icon: 'ri-github-fill', href: 'https://github.com/ZahinnAhmed' },
  { label: 'LinkedIn', icon: 'ri-linkedin-box-fill', href: 'https://linkedin.com/in/zahinahmed18' },
  { label: 'Resume', icon: 'ri-file-text-line', href: '/resume.pdf' },
  { label: 'Phone', icon: 'ri-phone-line', href: 'tel:+19297576458' },
]

const Contact = () => {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <footer id="contact" className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-24 pb-10 scroll-mt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[820px] max-w-full -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(147_51_234/0.18),transparent)]"
      ></div>

      <Reveal className="relative text-center">
        <h2 className="mx-auto max-w-3xl text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          Ready to build something <span className="text-brand">reliable</span> together?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground leading-relaxed">
          I'm looking for software engineering internships, especially on teams building APIs and
          platforms where correctness and security matter.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <GlowButton href={`mailto:${EMAIL}`}>
            Let's get in touch <i className="ri-send-plane-line"></i>
          </GlowButton>
          <button
            onClick={copy}
            className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.03] px-5 text-sm text-foreground hover:bg-white/[0.07] transition"
          >
            <i className={copied ? 'ri-check-line text-brand' : 'ri-file-copy-line'}></i>
            {copied ? 'Copied!' : EMAIL}
          </button>
        </div>
      </Reveal>

      <div className="relative mt-24 flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-subtle">© {new Date().getFullYear()} Zahin Ahmed · New York</p>
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') || s.href.endsWith('.pdf') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={s.label}
              className="card-surface flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.12] text-lg text-muted-foreground hover:text-brand hover:border-brand/40 transition"
            >
              <i className={s.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Contact
