import React, { useState } from 'react'
import smartsortHistory from '../assets/smartsort-history.png'
import smartsortIdentify from '../assets/smartsort-identify.png'
import smartsortMap from '../assets/smartsort-map.png'

const screenshots = [
  { src: smartsortHistory, alt: 'SmartSort trash history and points screen' },
  { src: smartsortIdentify, alt: 'SmartSort identify trash type screen' },
  { src: smartsortMap, alt: 'SmartSort NYC recycling drop-off map' },
]

const stack = ['React', 'Flask', 'PyTorch', 'Firebase']

const bullets = [
  'Enabled users to sort waste from a single phone photo, returning a disposal category (recyclable, compost, landfill) and an estimated carbon footprint per item, by building a React and Tailwind frontend against a Flask REST API serving a PyTorch image classifier trained on a 15,000-image dataset',
  'Kept inference fast enough to feel real-time on mobile by selecting MobileNetV2 over heavier architectures, trading marginal accuracy for latency on resource-constrained devices',
  'Drove repeat engagement through a leaderboard gamifying sustainable disposal habits, with authentication and persistence handled in Firebase',
  'Improved reliability by debugging and optimizing the image upload, inference, and response pipeline between frontend and backend',
]

const Projects = () => {
  const [selected, setSelected] = useState(null)

  return (
    <section
      id="projects"
      className="px-6 py-20 max-w-3xl mx-auto scroll-mt-24 border-t border-border/30"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-2">
        Portfolio
      </p>
      <h2 className="text-3xl font-bold text-foreground mb-10 tracking-tight">Projects</h2>

      <div className="border border-border/60 rounded-2xl p-6 bg-card/60 backdrop-blur-md hover:border-border transition-colors">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-xl font-semibold text-card-foreground">
            SmartSort — AI-Powered Waste Classification App
          </h3>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {stack.map((t) => (
            <span
              key={t}
              className="text-xs font-medium px-3 py-1 rounded-full bg-blue-400/10 border border-blue-400/20 text-blue-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
          {screenshots.map((shot) => (
            <button
              key={shot.src}
              onClick={() => setSelected(shot)}
              className="overflow-hidden rounded-xl border border-border/60 hover:border-blue-400/50 transition-colors cursor-zoom-in"
            >
              <img
                src={shot.src}
                alt={shot.alt}
                className="w-full h-40 object-cover object-top transition-transform duration-300 hover:scale-110"
              />
            </button>
          ))}
        </div>

        <ul className="mt-5 list-disc list-outside pl-5 space-y-2 text-sm text-card-foreground marker:text-blue-400">
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-100 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
        >
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-w-4xl w-full max-h-[85vh] object-contain rounded-xl border border-border/60"
          />
        </div>
      )}
    </section>
  )
}

export default Projects
