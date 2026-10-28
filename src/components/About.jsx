import React from 'react'
import { Section, Reveal, Heading } from './ui/section'

const approach = [
  {
    phase: 'Secure access',
    icon: 'ri-shield-keyhole-line',
    body: 'Google OAuth 2.0, JWT sessions, and role-based access control that scopes both dashboard views and API permissions.',
  },
  {
    phase: 'Data integrity',
    icon: 'ri-database-2-line',
    body: 'SQL against an Oracle-backed system to deduplicate, join, and validate records before they reach downstream reporting.',
  },
  {
    phase: 'Engineering + product',
    icon: 'ri-git-merge-line',
    body: 'Scoped 65+ tickets for a 5-engineer fintech team, ran stand-ups, and conducted 20+ user interviews before building.',
  },
]

// Little "+" marks on each corner, as in the reference design.
const Corners = () =>
  ['-top-3 -left-3', '-top-3 -right-3', '-bottom-3 -left-3', '-bottom-3 -right-3'].map((pos) => (
    <i key={pos} aria-hidden className={`ri-add-line absolute ${pos} text-xl text-white/40`}></i>
  ))

const About = () => {
  return (
    <Section id="about" pre="About" highlight="me">
      <Reveal>
        <div className="mx-auto max-w-3xl space-y-5 text-center text-lg leading-relaxed text-muted-foreground">
          <p>
            I ship production web apps end to end with React, Node.js, and MongoDB. Most of my work
            deals with what matters when software touches people's accounts and data: getting{' '}
            <span className="text-foreground">permissions</span> right, keeping{' '}
            <span className="text-foreground">records accurate</span>, and building{' '}
            <span className="text-foreground">APIs</span> other parts of the system can rely on.
          </p>
          <p>
            I've written SQL against a university financial aid system where the numbers have to be
            right the first time, and helped an early-stage fintech startup turn stakeholder
            requirements into a shippable backlog.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-24 mb-14">
        <Heading pre="My" highlight="approach" />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {approach.map((a, i) => (
          <Reveal key={a.phase} delay={i * 0.08}>
            <div className="group relative h-full border border-white/[0.15] px-7 py-10 text-center transition-colors hover:bg-white/[0.02]">
              <Corners />
              <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/[0.08] px-4 py-1 text-xs font-medium text-brand">
                Pillar {i + 1}
              </span>
              <i className={`${a.icon} mt-6 block text-4xl text-foreground transition-colors group-hover:text-brand`}></i>
              <h3 className="mt-4 text-2xl font-bold text-foreground">{a.phase}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default About
