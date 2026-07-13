import React from 'react'

const AuroraOverlay = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          '--aurora': 'repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)',
          '--dark-gradient': 'repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)',
          '--blue-300': '#93c5fd',
          '--blue-400': '#60a5fa',
          '--blue-500': '#3b82f6',
          '--indigo-300': '#a5b4fc',
          '--violet-200': '#ddd6fe',
          '--black': '#000',
          '--transparent': 'transparent',
        }}
      >
        <div
          className={`after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--dark-gradient),var(--aurora)] bg-size-[300%,200%] bg-position-[50%_50%,50%_50%] opacity-20 blur-[60px] filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)] after:bg-size-[200%,100%] after:bg-fixed after:mix-blend-difference after:content-[""]`}
        />
      </div>
    </div>
  )
}

export default AuroraOverlay
