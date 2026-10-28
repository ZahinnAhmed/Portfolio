import React from 'react'
import { Section, Reveal, Card } from './ui/section'

const categories = [
  { label: 'Languages', items: ['Python', 'SQL', 'JavaScript', 'Java', 'C++'] },
  {
    label: 'APIs & Integration',
    items: ['REST APIs', 'JSON', 'OAuth 2.0', 'JWT', 'Role-based access', 'Google Calendar & Meet APIs'],
  },
  {
    label: 'AI / ML',
    items: ['Google Gemini API', 'LLM apps: prompting, retrieval, summarization', 'PyTorch model integration'],
  },
  { label: 'Backend & Frontend', items: ['Node.js', 'Flask', 'React', 'Tailwind CSS', 'HTML/CSS'] },
  { label: 'Databases', items: ['Oracle', 'MySQL', 'MongoDB', 'Firebase'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Linux', 'Excel', 'Trello', 'Figma'] },
]

const involvement = [
  { name: 'Girls Code Club', role: 'Member', dates: '2024 – Now' },
  { name: 'ACM', role: 'Member', dates: '2022 – 2023' },
]

const Skills = () => {
  return (
    <Section id="skills" pre="My" highlight="tech stack">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <Reveal key={cat.label} delay={(i % 3) * 0.06} className="h-full">
            <Card className="h-full !p-6" glow={i % 2 ? 'right-1/4' : 'left-1/4'}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-brand">
                {cat.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/[0.1] bg-white/[0.03] px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal id="involvement" className="mt-14 scroll-mt-24">
        <p className="text-center text-sm uppercase tracking-[0.25em] text-subtle mb-5">Involvement</p>
        <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {involvement.map((r) => (
            <li
              key={r.name}
              className="card-surface flex items-baseline justify-between gap-3 rounded-2xl border border-white/[0.1] px-5 py-4"
            >
              <span className="text-foreground font-medium">
                {r.name} <span className="text-subtle font-normal">· {r.role}</span>
              </span>
              <span className="text-xs text-subtle">{r.dates}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}

export default Skills
