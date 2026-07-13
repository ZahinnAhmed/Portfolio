import React from 'react'

const Hero = () => {
  return (
    <div id="home" className="px-6 pt-16 pb-28 max-w-3xl scroll-mt-24">
      <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-blue-300 bg-blue-400/10 border border-blue-400/20 rounded-full px-3 py-1 mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
        Open to internships
      </span>

      <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
        Hi, I'm Zahin Ahmed
      </h1>
      <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl">
        Computer Science student and full-stack developer building React,
        Node, and MongoDB applications end to end.
      </p>

      <div className="flex flex-wrap gap-3 mt-8 text-sm md:text-base">
        <a
          href="mailto:zahinfaiza.ahmed@gmail.com"
          className="flex items-center gap-2 bg-card/70 backdrop-blur-md border border-border text-foreground px-4 py-2 rounded-full hover:bg-card transition"
        >
          <i className="ri-mail-line"></i> Email
        </a>
        <a
          href="https://github.com/ZahinnAhmed"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-card/70 backdrop-blur-md border border-border text-foreground px-4 py-2 rounded-full hover:bg-card transition"
        >
          <i className="ri-github-fill"></i> GitHub
        </a>
        <a
          href="https://linkedin.com/in/zahinahmed18"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-card/70 backdrop-blur-md border border-border text-foreground px-4 py-2 rounded-full hover:bg-card transition"
        >
          <i className="ri-linkedin-box-fill"></i> LinkedIn
        </a>
        <span className="flex items-center gap-2 text-muted-foreground px-4 py-2">
          <i className="ri-phone-line"></i> 929-757-6458
        </span>
      </div>
    </div>
  )
}

export default Hero
