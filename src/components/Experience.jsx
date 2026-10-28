import React, { useState } from 'react'
import { Section, Reveal, Card, IconTile, Tag, Bullets } from './ui/section'

const jobs = [
  {
    role: 'Software Engineering Intern',
    place: 'Ummah Professionals',
    dates: 'Jun 2026 – Present · Remote',
    icon: 'ri-team-line',
    summary:
      "Building the organization's first mentorship platform for ~1,000 members as one of 4 developers, across React, Node.js, and MongoDB.",
    highlights: ['5-factor matching algorithm', 'Gemini chatbot backend', '3-role RBAC', '20+ user interviews'],
    bullets: [
      "Replacing a fully manual coordination process for a community of **~1,000 members** by developing frontend and backend features as **one of 4 developers**",
      'Automated hand-pairing of mentors and mentees by co-designing a **weighted matching algorithm** scoring compatibility across **5 dimensions** (interest tags, major, university, state, availability), with per-category caps so no single signal dominates',
      'Built the backend for **Ask Ummah**, an LLM-powered site chatbot, integrating the **Google Gemini API** to retrieve resources and return 1–2 line summaries',
      'Integrated **Google OAuth 2.0 + JWT with role-based access across 3 roles**, plus the Google Calendar and Meet APIs for automated session links and reminders',
      'Took on an informal product lead role in week one: ran stand-ups and conducted **20+ user interviews**',
    ],
  },
  {
    role: 'Product Development Intern',
    place: 'Key Path · early-stage fintech startup',
    dates: 'Mar 2026 – Jun 2026 · Remote',
    icon: 'ri-line-chart-line',
    summary:
      'Coordinated a pre-launch AI insights feature and kept a 5-engineer team working from a prioritized backlog.',
    highlights: ['Fintech', '65+ tickets scoped', 'AI insights feature'],
    bullets: [
      'Coordinated the build of a pre-launch **AI insights feature**, translating stakeholder requirements into technical specs and flagging coverage gaps before development',
      'Enabled a **5-engineer team** (2 frontend, 3 backend) to work from a prioritized backlog by scoping **65+ development tickets** in Trello with the product lead',
      'Surfaced blockers and coordinated frontend/backend handoffs by tracking delivery in daily stand-ups',
    ],
  },
  {
    role: 'College Assistant, Financial Aid',
    place: 'Queens College, CUNY',
    dates: 'Jan 2025 – Present · Flushing, NY',
    icon: 'ri-database-2-line',
    summary:
      'Write SQL against an Oracle-backed student information system to deliver clean, report-ready financial aid data.',
    highlights: ['SQL / Oracle', '300+ records validated per semester'],
    bullets: [
      'Delivered report-ready datasets each cycle by writing **SQL queries against CUNYfirst** (Oracle-backed) to deduplicate records and join and filter across tables',
      'Automated manual data compilation by connecting query output directly to Excel for staff use',
      'Caught input errors before they reached downstream reporting by **validating 300+ records per semester**',
    ],
  },
  {
    role: 'Full Stack Web Development Fellow',
    place: 'CUNY Tech Prep',
    dates: 'Fall 2026 – Spring 2027 · New York',
    icon: 'ri-graduation-cap-line',
    summary:
      'Selected for a competitive, year-long industry training program in full-stack web development.',
    highlights: ['Competitive admission', 'Year-long program'],
    bullets: [],
  },
]

const JobCard = ({ job, index }) => {
  const [open, setOpen] = useState(false)
  return (
    <Card className="h-full" glow={index % 2 ? 'right-1/4' : 'left-1/3'}>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <IconTile icon={job.icon} />
        <div className="min-w-0 flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">{job.role}</h3>
          <p className="mt-1 text-sm font-medium text-brand">{job.place}</p>
          <p className="mt-0.5 text-xs text-subtle">{job.dates}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{job.summary}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {job.highlights.map((h) => (
              <Tag key={h}>{h}</Tag>
            ))}
          </div>

          {job.bullets.length > 0 && (
            <>
              {open && (
                <div className="mt-5 border-t border-white/[0.08] pt-5">
                  <Bullets items={job.bullets} />
                </div>
              )}
              <button
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-brand transition"
              >
                {open ? 'Show less' : 'Show details'}
                <i className={open ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}></i>
              </button>
            </>
          )}
        </div>
      </div>
    </Card>
  )
}

const Experience = () => {
  return (
    <Section id="experience" pre="My" highlight="work experience">
      <div className="grid gap-6 lg:grid-cols-2 items-start">
        {jobs.map((job, i) => (
          <Reveal key={job.role} delay={(i % 2) * 0.08} className="h-full">
            <JobCard job={job} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default Experience
