import React from 'react'
import { Section, Reveal } from './ui/section'

const roles = [
  { name: 'Girls Code Club', detail: 'Member', dates: '2024 – Present' },
  { name: 'Association for Computing Machinery (ACM)', detail: 'Member', dates: '2022 – 2023' },
]

const Leadership = () => {
  return (
    <Section id="involvement" eyebrow="Beyond Code" title="Involvement">
      <div className="flex flex-col gap-3">
        {roles.map((role) => (
          <Reveal key={role.name}>
            <div className="flex flex-wrap items-baseline justify-between gap-2 border border-border/60 rounded-2xl px-6 py-4 bg-card/60 backdrop-blur-md hover:border-blue-400/40 transition-colors">
              <span>
                <span className="font-semibold text-card-foreground">{role.name}</span>
                <span className="text-muted-foreground"> · {role.detail}</span>
              </span>
              <span className="text-sm text-muted-foreground tabular-nums">{role.dates}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default Leadership
