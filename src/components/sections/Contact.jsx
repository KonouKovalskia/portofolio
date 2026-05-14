'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const links = [
  {
    label: 'Email',
    value: 'muh.faizghiffari@email.com',
    href: 'mailto:muh.faizghiffari@email.com',
    accent: 'blue',
    icon: '↗',
  },
  {
    label: 'WhatsApp',
    value: '+62 81217181818',
    href: 'https://wa.me/6281217181818',
    accent: 'cyan',
    icon: '↗',
  },
  {
    label: 'GitHub',
    value: 'github.com/KonouKovalskia',
    href: 'https://github.com/KonouKovalskia',
    accent: 'purple',
    icon: '↗',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/muhammad-faiz-ghiffari',
    href: 'https://www.linkedin.com/in/muhammad-faiz-ghiffari-729b6524b/',
    accent: 'blue',
    icon: '↗',
  },
]

const colorMap = {
  blue:   { border: 'rgba(79,195,247,0.15)',  hover: 'rgba(79,195,247,0.35)',  text: '#4FC3F7', bg: 'rgba(79,195,247,0.04)'  },
  purple: { border: 'rgba(157,78,221,0.15)',  hover: 'rgba(157,78,221,0.35)', text: '#9D4EDD', bg: 'rgba(157,78,221,0.04)' },
  cyan:   { border: 'rgba(0,255,209,0.12)',   hover: 'rgba(0,255,209,0.3)',   text: '#00FFD1', bg: 'rgba(0,255,209,0.03)'  },
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="contact"
      className="relative px-8 md:px-24 py-32 pb-16"
      style={{ borderTop: '0.5px solid rgba(79,195,247,0.1)' }}
    >
      {/* Nebula accent */}
      <div
        className="absolute left-1/2 bottom-0 pointer-events-none"
        style={{
          width: '700px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,195,247,0.04) 0%, transparent 70%)',
          transform: 'translateX(-50%)',
        }}
      />

      <div className="relative z-10">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: '#00FFD1' }}
            >
              {"contact"}
            </span>
          </div>
          <h2
            className="font-sora font-semibold mb-2"
            style={{ fontSize: '32px', letterSpacing: '-0.01em' }}
          >
            Get In Touch
          </h2>
          <div
            className="mb-6"
            style={{
              width: '40px',
              height: '1px',
              background: 'linear-gradient(90deg, #4FC3F7, #9D4EDD)',
            }}
          />
          <p
            className="font-sora font-light"
            style={{ fontSize: '15px', color: '#6b6b8a', lineHeight: 1.7, maxWidth: '480px' }}
          >
            Open to internships, collaborations, or just a chat.
            Pick your preferred channel below.
          </p>
        </motion.div>

        {/* Contact cards — full width 4-col on desktop, 2-col on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {links.map(({ label, value, href, accent, icon }, i) => {
            const c = colorMap[accent]
            return (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="group flex flex-col justify-between rounded-xl p-5 no-underline"
                style={{
                  background: c.bg,
                  border: `0.5px solid ${c.border}`,
                  textDecoration: 'none',
                  minHeight: '120px',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = c.hover
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = c.border
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {/* Top row: label + icon */}
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="font-mono text-xs tracking-widest uppercase"
                    style={{ color: c.text }}
                  >
                    {label}
                  </span>
                  <span
                    className="font-mono text-sm transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: c.text, opacity: 0.7 }}
                  >
                    {icon}
                  </span>
                </div>

                {/* Value */}
                <div
                  className="font-sora text-sm"
                  style={{
                    color: '#9b9bb8',
                    wordBreak: 'break-all',
                    lineHeight: 1.5,
                  }}
                >
                  {value}
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Footer */}
        <div
          className="pt-8 flex items-center justify-between flex-wrap gap-4"
          style={{ borderTop: '0.5px solid rgba(79,195,247,0.1)' }}
        >
          <div
            className="font-mono text-xs tracking-wider"
            style={{ color: '#6b6b8a' }}
          >
            © 2026 Muhammad Faiz Ghiffari · Built with Next.js · Deployed on Vercel
          </div>
          <div
            className="font-mono text-xs"
            style={{ color: '#6b6b8a' }}
          >
            <span style={{ color: '#4FC3F7' }}>✦</span> Made in Indonesia
          </div>
        </div>

      </div>
    </section>
  )
}