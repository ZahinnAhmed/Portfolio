import React from 'react'

const roles = [
  { name: 'Girls Code Club Member', dates: '2024–Present' },
  { name: 'ACM Member', dates: '2022–2023' },
]

const Leadership = () => {
  return (
    <section
      id="contact"
      className="px-6 py-20 max-w-3xl mx-auto scroll-mt-24 border-t border-border/30"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-2">
        Beyond Code
      </p>
      <h2 className="text-3xl font-bold text-foreground mb-10 tracking-tight">
        Leadership &amp; Involvement
      </h2>

      <div className="flex flex-col gap-3 mb-20">
        {roles.map((role) => (
          <div
            key={role.name}
            className="flex flex-wrap items-baseline justify-between gap-2 border border-border/60 rounded-2xl px-6 py-4 bg-card/60 backdrop-blur-md hover:border-border transition-colors"
          >
            <span className="font-semibold text-card-foreground">{role.name}</span>
            <span className="text-sm text-muted-foreground">{role.dates}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-border/30 pt-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-2">
          Get In Touch
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
          Let's talk
        </h3>
        <p className="text-muted-foreground mt-2">
          Open to internships and collaboration opportunities.
        </p>
        <a
          href="mailto:zahinfaiza.ahmed@gmail.com"
          className="inline-flex items-center gap-2 mt-6 bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-400 transition"
        >
          <i className="ri-mail-line"></i> zahinfaiza.ahmed@gmail.com
        </a>

        <div className="flex items-center justify-center gap-4 mt-8 text-xl text-muted-foreground">
          <a
            href="https://github.com/ZahinnAhmed"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition"
          >
            <i className="ri-github-fill"></i>
          </a>
          <a
            href="https://linkedin.com/in/zahinahmed18"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition"
          >
            <i className="ri-linkedin-box-fill"></i>
          </a>
        </div>

        <p className="text-xs text-muted-foreground mt-16">
          Built by Zahin Ahmed with React &amp; Tailwind CSS.
        </p>
      </div>
    </section>
  )
}

export default Leadership
