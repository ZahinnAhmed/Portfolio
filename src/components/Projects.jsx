import React, { useEffect, useState } from 'react'
import { Section, Card, Reveal, Tag, Bullets, IconTile } from './ui/section'
import smartsortHistory from '../assets/smartsort-history.jpg'
import smartsortIdentify from '../assets/smartsort-identify.jpg'
import smartsortMap from '../assets/smartsort-map.jpg'
import hobbygenieChat from '../assets/hobbygenie-chat.jpg'
import cashechoVoice from '../assets/cashecho-voice.jpg'
import cashechoAlert from '../assets/cashecho-alert.jpg'
import cashechoForecast from '../assets/cashecho-forecast.jpg'

const projects = [
  {
    name: 'CashEcho',
    tagline: 'Voice bookkeeping and cash-flow forecasting for small businesses',
    context: 'Hack Knight 2026 · 48-hour hackathon',
    date: 'Oct 2026',
    live: 'https://www.cashecho.us',
    icon: 'ri-mic-line',
    wide: true,
    stack: ['Backend', 'Product', 'Voice input', 'Monte Carlo forecasting', 'Multilingual'],
    screenshots: [
      { src: cashechoVoice, alt: 'CashEcho voice ledger: say a sale or expense to log it' },
      { src: cashechoAlert, alt: 'CashEcho debt wall alert warning of a cash shortfall before a loan payment' },
      { src: cashechoForecast, alt: 'CashEcho 90-day cash forecast chart with likely range and payments due' },
    ],
    bullets: [
      'Led **backend and product** on a 3-person team building an app that logs transactions by voice and shows a **"debt wall"** of upcoming loan payments vs. projected cash',
      'Shipped a **90-day cash forecast** that simulates **2,000 possible futures** from recent activity to flag the weeks a business could run short on a loan payment, and suggests the smallest fix',
      'Made bookkeeping accessible: **voice logging in multiple languages** (including Urdu and Bengali), receipt/PDF import, and a printable lender summary',
      'Wrote the plan and tickets after a **mid-hackathon pivot**, keeping the team shipping inside the 48-hour window',
    ],
  },
  {
    name: 'HobbyGenie',
    tagline: 'AI hobby finder that plans around your calendar',
    date: 'Aug 2026',
    live: 'https://hobby-genie.onrender.com',
    context: 'Team of 4 · I built the backend',
    icon: 'ri-chat-smile-3-line',
    stack: ['Node.js', 'Express', 'Gemini API', 'Google OAuth 2.0', 'Google Calendar API', 'React', 'Render'],
    screenshots: [{ src: hobbygenieChat, alt: 'HobbyGenie chat interface' }],
    bullets: [
      'Built the **Express backend** for an LLM chatbot that recommends local hobbies, integrating the **Google Gemini API** and wiring it into the React chat UI',
      'Implemented **Google OAuth 2.0** end to end (authorization-code flow, CSRF state check, automatic token refresh), keeping tokens **server-side only** behind HttpOnly cookies',
      'Turned Google Calendar **free/busy data** into open time windows and fed them to the model, so suggestions fit when the user is actually free',
      'Made the AI calls resilient with **retry and backoff on rate limits**, a fallback when search grounding is unavailable, and a retry on empty responses',
      '**Deployed it live** on Render as one service serving both the API and the React app',
    ],
  },
  {
    name: 'SmartSort',
    tagline: 'AI-powered waste classification',
    date: 'Oct 2025',
    icon: 'ri-recycle-line',
    stack: ['React', 'Tailwind', 'Flask', 'PyTorch', 'MobileNetV2', 'Firebase'],
    screenshots: [
      { src: smartsortIdentify, alt: 'SmartSort identify trash type screen' },
      { src: smartsortHistory, alt: 'SmartSort trash history and points screen' },
      { src: smartsortMap, alt: 'SmartSort NYC recycling drop-off map' },
    ],
    bullets: [
      'Enabled users to sort waste from a single photo, returning a disposal category and estimated carbon footprint per item, by building a React/Tailwind frontend against a **Flask REST API** serving a **PyTorch image classifier** trained on a **15,000-image dataset**',
      'Kept inference fast enough to feel real-time on mobile by choosing **MobileNetV2** over heavier architectures, trading marginal accuracy for latency on resource-constrained devices',
      'Designed for model failure modes: built **error fallbacks for failed or low-confidence predictions** and loading feedback during inference for a responsive mobile capture-to-result flow',
    ],
  },
]

const Projects = () => {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!selected) return
    const onKey = (e) => e.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])

  return (
    <Section id="projects" pre="A small selection of" highlight="recent projects">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.06} className={p.wide ? 'md:col-span-2' : ''}>
            <Card className="h-full flex flex-col" glow={i % 2 ? 'right-1/4' : 'left-1/3'}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <IconTile icon={p.icon} className="!h-14 !w-14 [&>i]:!text-2xl" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{p.name}</h3>
                    <p className="text-sm text-muted-foreground">{p.tagline}</p>
                  </div>
                </div>
                <span className="text-xs text-subtle whitespace-nowrap pt-1">{p.date}</span>
              </div>

              {(p.context || p.live) && (
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 border border-brand/25 px-3 py-1 text-xs font-medium text-brand hover:bg-brand/15 transition"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand"></span>
                      Live · {p.live.replace(/^https?:\/\/(www\.)?/, '')}
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
                  )}
                  {p.context && <span className="text-xs text-subtle">{p.context}</span>}
                </div>
              )}

              {p.screenshots && (
                <div className={`mt-6 grid gap-3 ${p.screenshots.length > 1 ? 'grid-cols-3' : 'grid-cols-1'}`}>
                  {p.screenshots.map((shot) => (
                    <button
                      key={shot.src}
                      onClick={() => setSelected(shot)}
                      aria-label={`Enlarge: ${shot.alt}`}
                      className="overflow-hidden rounded-xl border border-white/[0.1] bg-[#13162d] cursor-zoom-in"
                    >
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        loading="lazy"
                        className="w-full aspect-[16/10] object-cover object-top opacity-90 transition duration-500 hover:opacity-100 hover:scale-[1.03]"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="mt-6 flex-1">
                <Bullets items={p.bullets} />
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected.alt}
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-100 bg-black/85 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
        >
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-w-5xl w-full max-h-[85vh] object-contain rounded-xl border border-border"
          />
        </div>
      )}
    </Section>
  )
}

export default Projects
