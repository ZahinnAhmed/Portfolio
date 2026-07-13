import React from 'react'

const jobs = [
  {
    role: 'Software Engineering Intern',
    place: 'Ummah Professionals, Remote',
    dates: 'Jun 2026–Present',
    bullets: [
      "Building the organization's first mentorship platform, set to replace a fully manual coordination process for a community of approximately 1,000 members, by developing React, Node, and MongoDB features across frontend and backend as one of 4 developers",
      'Eliminated hand-pairing of mentors and mentees, previously requiring staff to read every participant resume, by co-designing a weighted matching algorithm scoring compatibility across 5 dimensions (interest tags, major, university, state, availability), with per-category caps preventing any single signal from dominating',
      "Established the platform's first structured access model, scoping dashboard views and API permissions across 3 roles (mentor, mentee, admin), by implementing Google OAuth 2.0, JWT sessions, and role-based access control",
      'Removed manual back-and-forth from session booking by building an interactive availability calendar in JavaScript backed by MongoDB, and integrating the Google Calendar and Meet APIs for automated link generation and reminders',
    ],
  },
  {
    role: 'College Assistant, Financial Aid Office',
    place: 'Queens College, CUNY, Flushing, NY',
    dates: 'Jan 2025–Present',
    bullets: [
      'Delivered report-ready datasets to office staff each cycle by writing SQL queries against CUNYfirst (Oracle-backed student information system) to deduplicate records and join and filter across tables',
      'Replaced manual data compilation by connecting query output directly to Excel, giving staff clean, ready-to-use data without hand assembly',
      'Caught input errors before they reached downstream reporting by validating 300+ records per semester',
    ],
  },
  {
    role: 'Product Development Intern',
    place: 'Key Path (early-stage startup), Remote',
    dates: 'Mar 2026–Jun 2026',
    bullets: [
      'Enabled a 5-engineer team (2 frontend, 3 backend) to work from a prioritized backlog by scoping and writing 65+ development tickets in Trello, translating stakeholder requirements into technical feature specs with the product lead',
      'Surfaced blockers and coordinated frontend/backend handoffs by tracking delivery in daily stand-ups across the full stack',
    ],
  },
]

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-6 py-20 max-w-3xl mx-auto scroll-mt-24 border-t border-border/30"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-2">
        Work History
      </p>
      <h2 className="text-3xl font-bold text-foreground mb-10 tracking-tight">Experience</h2>

      <div className="flex flex-col gap-6">
        {jobs.map((job) => (
          <div
            key={job.role}
            className="border border-border/60 rounded-2xl p-6 bg-card/60 backdrop-blur-md hover:border-border transition-colors"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold text-card-foreground">
                {job.role}
              </h3>
              <span className="text-sm text-muted-foreground">{job.dates}</span>
            </div>
            <p className="text-muted-foreground italic mt-1">{job.place}</p>

            <ul className="mt-4 list-disc list-outside pl-5 space-y-2 text-sm text-card-foreground marker:text-blue-400">
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
