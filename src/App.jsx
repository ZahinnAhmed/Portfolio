import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Leadership from './components/Leadership'
import AuroraOverlay from './components/AuroraOverlay'

const App = () => {
  return (
    <div className="relative bg-background dark:bg-linear-to-b dark:from-neutral-900 dark:via-black dark:to-black text-foreground min-h-screen">
      <AuroraOverlay />

      <Navbar />

      <div className="relative z-10 pl-56">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Leadership />
      </div>
    </div>
  )
}

export default App
