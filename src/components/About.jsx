import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="px-6 py-20 max-w-3xl mx-auto scroll-mt-24 border-t border-border/30"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-2">Bio</p>
      <h2 className="text-3xl font-bold text-foreground mb-6 tracking-tight">About</h2>
      <p className="text-muted-foreground leading-relaxed">
        Computer Science student and full stack developer shipping production
        web applications with React, Node, and MongoDB. Experience building
        authentication and role-based access control, REST APIs, matching
        algorithms, and ML-backed services end to end, with a foundation in
        data structures, algorithms, and object-oriented design.
      </p>

      <div className="mt-10 border border-border/60 rounded-2xl p-6 bg-card/60 backdrop-blur-md hover:border-border transition-colors">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-xl font-semibold text-card-foreground">
            Bachelor of Science in Computer Science
          </h3>
          <span className="text-sm text-muted-foreground">
            Expected December 2027
          </span>
        </div>
        <p className="text-muted-foreground italic mt-1">
          Queens College, City University of New York (CUNY), Flushing, NY
        </p>
        <p className="mt-3 text-sm text-card-foreground">
          <span className="font-semibold">Concentration:</span> Software
          Development
        </p>
        <p className="mt-1 text-sm text-card-foreground">
          <span className="font-semibold">Relevant Coursework:</span> Data
          Structures, Algorithms, Object-Oriented Programming, Computing in
          Python, Linear Algebra, AI/ML
        </p>
      </div>
    </section>
  )
}

export default About
