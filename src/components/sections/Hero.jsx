'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const skills = [
  { label: 'Next.js',      color: 'blue'   },
  { label: 'React',        color: 'blue'   },
  { label: 'JavaScript',   color: 'blue'   },
  { label: 'UI Design',    color: 'purple' },
  { label: 'Figma',        color: 'purple' },
  { label: 'Tailwind CSS', color: 'purple' },
  { label: 'Database',     color: 'purple' },
  { label: 'Vercel',       color: 'cyan'   },
  { label: 'Git',          color: 'cyan'   },
  { label: 'REST API',     color: 'cyan'   },
]

const colorMap = {
  blue:   { border: 'rgba(79,195,247,0.35)',  color: '#4FC3F7' },
  purple: { border: 'rgba(157,78,221,0.35)', color: '#9D4EDD' },
  cyan:   { border: 'rgba(0,255,209,0.3)',   color: '#00FFD1' },
}

export default function Hero() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 lg:px-24 py-24"
    >
      {/* "About" anchor placed near the bottom of the hero */}
      <div id="about" style={{ position: 'absolute', top: '85%' }} />

      {/* Glow blobs */}
      <div className="absolute right-0 top-1/4 pointer-events-none" style={{
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(157,78,221,0.08) 0%, transparent 70%)',
      }} />
      <div className="absolute left-0 bottom-1/4 pointer-events-none" style={{
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79,195,247,0.05) 0%, transparent 70%)',
      }} />

      {/* Ring spin animation */}
      <style>{`
        @keyframes ring-spin { to { transform: rotate(360deg); } }
        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50%       { transform: translateY(6px); opacity: 1; }
        }
      `}</style>

      <div className="relative z-10 w-full flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

        {/* ── LEFT COL: Photo + intro ── */}
        <div className="flex flex-col items-center lg:items-start gap-7 lg:w-5/12">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              position: 'relative',
              width: 'clamp(130px, 16vw, 220px)',
              height: 'clamp(130px, 16vw, 220px)',
              flexShrink: 0,
            }}
          >
            {/* Conic gradient spinning ring */}
            <div style={{
              position: 'absolute', inset: '-3px', borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #4FC3F7, #9D4EDD, #00FFD1, #4FC3F7)',
              zIndex: 0,
              animation: 'ring-spin 6s linear infinite',
            }} />
            <div style={{
              position: 'absolute', inset: '2px', borderRadius: '50%',
              background: '#05050f', zIndex: 1,
            }} />
            <div style={{
              position: 'absolute', inset: '5px', borderRadius: '50%',
              overflow: 'hidden', zIndex: 2,
            }}>
              <Image
                src="/images/Konou.png"
                alt="Muhammad Faiz Ghiffari"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 130px, 16vw"
                priority
              />
            </div>
          </motion.div>

          {/* Intro text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-4 justify-center lg:justify-start"
            >
              <div style={{ width: '24px', height: '1px', background: '#00FFD1', flexShrink: 0 }} />
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#00FFD1' }}>
                Information Technology · Telkom University
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sora font-bold mb-3"
              style={{ fontSize: 'clamp(26px, 4.5vw, 50px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
            >
              Hi, I&apos;m{' '}
              <span style={{
                background: 'linear-gradient(90deg, #4FC3F7, #9D4EDD)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Konou
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-sora font-light mb-8"
              style={{ fontSize: 'clamp(13px, 1.6vw, 15px)', color: '#6b6b8a', lineHeight: 1.75 }}
            >
              I build web products that solve real problems —
              from campus tools to systems running actual businesses.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-3 flex-wrap justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="font-sora font-semibold text-sm px-6 py-3 rounded-lg"
                style={{
                  background: '#4FC3F7', color: '#05050f',
                  border: 'none', transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#38b2e0'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#4FC3F7'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                View Projects
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="font-sora font-semibold text-sm px-6 py-3 rounded-lg"
                style={{
                  background: 'transparent',
                  color: '#4FC3F7',
                  border: '1px solid rgba(79,195,247,0.35)',
                  transition: 'border-color 0.2s, color 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#4FC3F7'
                  e.currentTarget.style.color = '#e8e8f0'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(79,195,247,0.35)'
                  e.currentTarget.style.color = '#4FC3F7'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Get In Touch
              </button>
            </motion.div>
          </div>
        </div>

        {/* ── RIGHT COL: Bio + skills ── */}
        <div ref={ref} className="lg:w-7/12 w-full">

          {/* Divider line visible only on lg */}
          <div
            className="hidden lg:block absolute"
            style={{
              left: '42%', top: '15%', bottom: '15%',
              width: '1px',
              background: 'linear-gradient(to bottom, transparent, rgba(79,195,247,0.15), transparent)',
            }}
          />

          {/* About label */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0 }}
            className="mb-6"
          >
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#00FFD1' }}>
              about
            </span>
            <h2
              className="font-sora font-semibold mt-2 mb-2"
              style={{ fontSize: '26px', letterSpacing: '-0.01em' }}
            >
              Who I Am
            </h2>
            <div style={{
              width: '40px', height: '1px',
              background: 'linear-gradient(90deg, #4FC3F7, #9D4EDD)',
            }} />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <p className="font-sora font-light mb-3" style={{ fontSize: '14px', color: '#6b6b8a', lineHeight: 1.85 }}>
              First-year IT student at Telkom University, Bandung — focused on
              frontend development and building things that actually ship. I care
              about clean interfaces, purposeful UX, and writing code that doesn&apos;t
              embarrass me six months later.
            </p>
            <p className="font-sora font-light" style={{ fontSize: '14px', color: '#6b6b8a', lineHeight: 1.85 }}>
              Outside of class, I run D&apos;sum De Luna — a dimsum business I started
              and built the ordering system for myself. Currently looking for
              internships where I can work on real problems, not just tickets.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: '#6b6b8a' }}>
              Tech I work with
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map(({ label, color }) => (
                <span
                  key={label}
                  className="font-mono text-xs px-3 py-1 rounded-full"
                  style={{
                    border: `1px solid ${colorMap[color].border}`,
                    color: colorMap[color].color,
                    transition: 'border-color 0.2s',
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        onClick={() => scrollTo('projects')}
        className="absolute bottom-10 left-1/2 flex flex-col items-center gap-2"
        style={{ transform: 'translateX(-50%)', cursor: 'pointer' }}
      >
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#6b6b8a', opacity: 0.6 }}>
          scroll
        </span>
        <div
          style={{
            width: '1px', height: '36px',
            background: 'linear-gradient(to bottom, rgba(79,195,247,0.6), transparent)',
            animation: 'scroll-bounce 1.8s ease-in-out infinite',
          }}
        />
      </motion.div>
    </section>
  )
}