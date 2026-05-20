'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const skills = [
  { label: 'Next.js', color: 'blue' },
  { label: 'React', color: 'blue' },
  { label: 'Python', color: 'blue' },
  { label: 'JavaScript', color: 'blue' },
  { label: 'UI Design', color: 'purple' },
  { label: 'Database', color: 'purple' },
  { label: 'Figma', color: 'purple' },
  { label: 'Tailwind CSS', color: 'purple' },
  { label: 'Vercel', color: 'cyan' },
  { label: 'Git', color: 'cyan' },
  { label: 'REST API', color: 'cyan' },
]

const colorMap = {
  blue:   { border: 'rgba(79,195,247,0.35)',  color: '#4FC3F7' },
  purple: { border: 'rgba(157,78,221,0.35)', color: '#9D4EDD' },
  cyan:   { border: 'rgba(0,255,209,0.3)',   color: '#00FFD1' },
}

const stats = [
  { value: '3', label: 'Projects Shipped' },
  { value: '2025', label: 'Started Building' },
  { value: '1', label: 'Real Business' },
]

export default function Hero() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-24 py-24"
    >
      {/*
        "About" anchor placed near the bottom of the hero so the navbar
        only marks it active once the user has actually scrolled past the
        hero content — not at 60% which fired way too early.
      */}
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

      <div className="relative z-10 w-full flex flex-col md:flex-row gap-12 md:gap-24 items-center">

        {/* ── LEFT COL: Photo + intro ── */}
        <div className="flex flex-col items-center md:items-start gap-8 md:w-1/2">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              position: 'relative',
              width: 'clamp(160px, 22vw, 300px)',
              height: 'clamp(160px, 22vw, 300px)',
              flexShrink: 0,
            }}
          >
            <div style={{
              position: 'absolute', inset: '-3px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #4FC3F7, #9D4EDD)', zIndex: 0,
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
                alt="Konou"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 160px, 22vw"
                priority
              />
            </div>
          </motion.div>

          {/* Tag */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-4 justify-center md:justify-start"
            >
              <div style={{ width: '24px', height: '1px', background: '#00FFD1', flexShrink: 0 }} />
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#00FFD1' }}>
                Muhammad Faiz Ghiffari – Informatika · Telkom University
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sora font-bold mb-3"
              style={{ fontSize: 'clamp(28px, 5vw, 52px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
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
              style={{ fontSize: 'clamp(13px, 1.8vw, 16px)', color: '#6b6b8a', lineHeight: 1.7 }}
            >
              Building real products — from campus tools to business systems.
              Based in Bandung, Indonesia.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button
                onClick={() => scrollTo('projects')}
                className="font-sora font-semibold text-sm px-6 py-3 rounded-md cursor-pointer"
                style={{
                  background: '#4FC3F7', color: '#05050f',
                  border: 'none', transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#38b2e0'}
                onMouseLeave={e => e.currentTarget.style.background = '#4FC3F7'}
              >
                View Projects
              </button>
            </motion.div>
          </div>
        </div>

        {/* ── RIGHT COL: Bio + stats + skills ── */}
        <div ref={ref} className="md:w-1/2 w-full">

          {/* About label */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0 }}
            className="mb-6"
          >
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#00FFD1' }}>
              {"about"}
            </span>
            <h2
              className="font-sora font-semibold mt-2 mb-2"
              style={{ fontSize: '28px', letterSpacing: '-0.01em' }}
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
              Informatika student at Telkom University with a focus on building
              things that actually work in the real world — not just coursework.
              I care about clean interfaces, real use cases, and shipping things
              people can actually use.
            </p>
            <p className="font-sora font-light" style={{ fontSize: '14px', color: '#6b6b8a', lineHeight: 1.85 }}>
              Outside of code, I run a dimsum business called D&apos;sum De Luna —
              and yes, I built the ordering system for it myself.
            </p>
          </motion.div>

          {/* Stats — flex-wrap prevents overflow on narrow screens */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-6 mb-8"
          >
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="font-sora font-bold mb-1" style={{ fontSize: '26px', color: '#4FC3F7' }}>
                  {value}
                </div>
                <div className="font-mono text-xs tracking-wider uppercase" style={{ color: '#6b6b8a' }}>
                  {label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
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
                    border: `0.5px solid ${colorMap[color].border}`,
                    color: colorMap[color].color,
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}