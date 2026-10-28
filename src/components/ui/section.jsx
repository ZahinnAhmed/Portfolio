import React from 'react'
import { motion, useReducedMotion } from 'motion/react'

// Fades content up as it scrolls into view. Skipped for users who prefer reduced motion.
export const Reveal = ({ children, delay = 0, className, id }) => {
  const reduce = useReducedMotion()
  if (reduce) return <div id={id} className={className}>{children}</div>
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// "My <purple>work experience</purple>" style heading.
export const Heading = ({ pre, highlight, className = '' }) => (
  <h2 className={`text-center text-4xl sm:text-5xl font-bold tracking-tight text-foreground ${className}`}>
    {pre} <span className="text-brand">{highlight}</span>
  </h2>
)

export const Section = ({ id, pre, highlight, children }) => (
  <section id={id} className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24 scroll-mt-24">
    <Reveal className="mb-14">
      <Heading pre={pre} highlight={highlight} />
    </Reveal>
    {children}
  </section>
)

// Rounded navy card with a soft purple glow sitting on its top edge.
export const Card = ({ children, className = '', glow = 'left-1/3' }) => (
  <div
    className={`card-surface group relative rounded-3xl border border-white/[0.1] p-6 sm:p-8 transition-all duration-300 hover:border-brand/30 hover:-translate-y-0.5 ${className}`}
  >
    <span
      aria-hidden
      className={`pointer-events-none absolute -top-3 ${glow} h-6 w-24 rounded-full bg-brand/40 blur-xl opacity-70 transition-opacity group-hover:opacity-100`}
    ></span>
    {children}
  </div>
)

export const Tag = ({ children }) => (
  <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-brand/20 bg-brand/[0.07] text-brand">
    {children}
  </span>
)

// Renders text with **double-asterisk** spans emphasized, so key metrics stand out.
export const Emph = ({ text }) =>
  text.split('**').map((part, i) =>
    i % 2 ? (
      <strong key={i} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    ),
  )

export const Bullets = ({ items }) => (
  <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
    {items.map((b, i) => (
      <li key={i} className="relative pl-5">
        <span aria-hidden className="absolute left-0 top-[0.55em] h-1.5 w-1.5 rounded-full bg-brand/70"></span>
        <Emph text={b} />
      </li>
    ))}
  </ul>
)

// Big gradient icon tile used in place of company logos / illustrations.
export const IconTile = ({ icon, className = '' }) => (
  <span
    className={`flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgb(203_172_249/0.25),rgb(99_102_241/0.12))] shadow-[0_0_40px_-10px_rgb(203_172_249/0.5)] ${className}`}
  >
    <i className={`${icon} text-3xl sm:text-4xl text-brand`}></i>
  </span>
)

// Shiny pill button with a spinning gradient border.
export const GlowButton = ({ href, children, ...props }) => (
  <a
    href={href}
    {...props}
    className="relative inline-flex h-12 overflow-hidden rounded-xl p-px focus:outline-none"
  >
    <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
    <span className="relative inline-flex h-full w-full items-center justify-center gap-2 rounded-xl bg-background px-7 text-sm font-medium text-foreground backdrop-blur-3xl transition hover:bg-[#0a0d2c]">
      {children}
    </span>
  </a>
)
