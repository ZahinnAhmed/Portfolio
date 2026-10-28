import React from 'react'
import { Reveal, GlowButton } from './ui/section'

const stats = [
  { value: '~1,000', label: 'members served by the mentorship platform I build' },
  { value: '3', label: 'access roles behind OAuth 2.0 + JWT' },
  { value: '300+', label: 'records validated per semester in SQL' },
  { value: '65+', label: 'tickets scoped for a fintech startup team' },
]

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Spotlights */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgb(255_255_255/0.08),transparent)]"></div>
      <div aria-hidden className="pointer-events-none absolute -top-20 right-[-120px] h-[600px] w-[600px] rounded-full bg-[radial-gradient(closest-side,rgb(147_51_234/0.18),transparent)]"></div>
      <div aria-hidden className="pointer-events-none absolute top-40 left-1/4 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgb(59_130_246/0.12),transparent)]"></div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-40 sm:pt-48 pb-24 text-center">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgb(52_211_153)]"></span>
            Open to SWE internships · New York
          </p>

          <h1 className="mt-6 text-5xl leading-none sm:text-6xl lg:text-7xl lg:whitespace-nowrap font-semibold tracking-tight bg-[linear-gradient(180deg,#ffffff_20%,#cbacf9_100%)] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgb(203_172_249/0.25)]">
            Zahin Ahmed
          </h1>

          <p className="mt-5 text-xl sm:text-3xl font-semibold tracking-tight text-foreground">
            Full-stack engineer building <span className="text-brand">secure,</span>{' '}
            data&#8209;driven <span className="text-brand">software</span>
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            CS student at Queens College (CUNY). I build auth and access control, REST APIs, LLM
            integrations, and SQL that keeps data accurate.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <GlowButton href="#projects">
              Show my work <i className="ri-map-pin-line"></i>
            </GlowButton>
            <a
              href="mailto:zahinfaiza.ahmed@gmail.com"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.03] px-6 text-sm font-medium text-foreground hover:bg-white/[0.07] transition"
            >
              <i className="ri-mail-line"></i> Get in touch
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xl text-muted-foreground">
            <a href="https://github.com/ZahinnAhmed" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 hover:text-brand transition">
              <i className="ri-github-fill"></i>
            </a>
            <a href="https://linkedin.com/in/zahinahmed18" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 hover:text-brand transition">
              <i className="ri-linkedin-box-fill"></i>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
            {stats.map((s) => (
              <div key={s.label} className="card-surface rounded-2xl border border-white/[0.1] p-5">
                <dd className="text-3xl font-bold tracking-tight text-brand tabular-nums">{s.value}</dd>
                <dt className="mt-1.5 text-xs leading-snug text-subtle">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
