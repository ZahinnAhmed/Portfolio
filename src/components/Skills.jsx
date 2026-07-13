import React from 'react'

const categories = [
  { label: 'Languages', items: ['Python', 'Java', 'JavaScript', 'C++', 'SQL'] },
  { label: 'Frontend', items: ['React', 'Tailwind CSS', 'HTML/CSS', 'Responsive UI'] },
  {
    label: 'Backend',
    items: ['Node.js', 'Flask', 'REST APIs', 'OAuth 2.0', 'JWT', 'Google Calendar & Meet APIs'],
  },
  { label: 'Databases', items: ['MongoDB', 'MySQL', 'Firebase', 'Oracle'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Linux', 'Excel', 'Trello'] },
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 py-20 max-w-3xl mx-auto scroll-mt-24 border-t border-border/30"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-2">
        Toolkit
      </p>
      <h2 className="text-3xl font-bold text-foreground mb-10 tracking-tight">Skills</h2>

      <div className="flex flex-col gap-6">
        {categories.map((cat) => (
          <div key={cat.label}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1.5 rounded-full border border-border/60 bg-card/40 backdrop-blur-md text-foreground hover:border-blue-400/50 hover:text-blue-300 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
