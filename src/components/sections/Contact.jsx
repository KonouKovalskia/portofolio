'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'faizghiffari@gmail.com'
const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '6281217181818'

const links = [
  {
    label: 'Email',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    accent: 'blue',
    note: 'Fastest response',
  },
  {
    label: 'WhatsApp',
    value: `+${CONTACT_PHONE}`,
    href: `https://wa.me/${CONTACT_PHONE}`,
    accent: 'cyan',
    note: 'For quick chats',
  },
  {
    label: 'GitHub',
    value: 'KonouKovalskia',
    href: 'https://github.com/KonouKovalskia',
    accent: 'purple',
    note: 'See my code',
  },
  {
    label: 'LinkedIn',
    value: 'muhammad-faiz-ghiffari',
    href: 'https://www.linkedin.com/in/muhammad-faiz-ghiffari-729b6524b/',
    accent: 'blue',
    note: 'Professional profile',
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
      className="relative px-6 md:px-24 py-32 pb-16"
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
              contact
            </span>
          </div>
          <h2
            className="font-sora font-semibold mb-2"
            style={{ fontSize: '32px', letterSpacing: '-0.01em' }}
          >
            Let&apos;s Work Together
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
            I&apos;m actively looking for an internship in frontend or fullstack development
            — preferably somewhere that ships real products. I&apos;m also open to
            freelance projects and collaborations.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {links.map(({ label, value, href, accent, note }, i) => {
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
                  minHeight: '130px',
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
                {/* Top row: label + arrow */}
                <div className="flex items-start justify-between mb-3">
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
                    ↗
                  </span>
                </div>

                {/* Note */}
                <div
                  className="font-mono text-xs mb-3"
                  style={{ color: c.text, opacity: 0.45 }}
                >
                  {note}
                </div>

                {/* Value */}
                <div
                  className="font-sora text-sm"
                  style={{
                    color: '#9b9bb8',
                    lineHeight: 1.5,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                  title={value}
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