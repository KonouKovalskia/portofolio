'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { projects } from '@/data/projects'

const colorMap = {
  blue:   { border: 'rgba(79,195,247,0.18)',  hover: 'rgba(79,195,247,0.45)',  tag: 'rgba(79,195,247,0.07)',  text: '#4FC3F7',  glow: 'rgba(79,195,247,0.12)'  },
  purple: { border: 'rgba(157,78,221,0.18)',  hover: 'rgba(157,78,221,0.45)', tag: 'rgba(157,78,221,0.07)', text: '#9D4EDD',  glow: 'rgba(157,78,221,0.12)' },
  cyan:   { border: 'rgba(0,255,209,0.14)',   hover: 'rgba(0,255,209,0.4)',   tag: 'rgba(0,255,209,0.05)',  text: '#00FFD1',  glow: 'rgba(0,255,209,0.09)'  },
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)
  const c = colorMap[project.accent]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl overflow-hidden no-underline group"
        style={{
          background: 'rgba(8,8,20,0.85)',
          border: `1px solid ${hovered ? c.hover : c.border}`,
          textDecoration: 'none',
          transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          boxShadow: hovered ? `0 20px 60px ${c.glow}` : '0 0 0 transparent',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image with shimmer overlay */}
        <div className="relative w-full overflow-hidden" style={{ height: '210px' }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
            }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Dark gradient at bottom always visible */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(8,8,20,0.9) 0%, rgba(8,8,20,0.1) 60%, transparent 100%)',
            }}
          />

          {/* Accent tint on hover */}
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(ellipse at center, ${c.glow} 0%, transparent 70%)`,
              opacity: hovered ? 1 : 0,
            }}
          />

          {/* "Visit Site" pill */}
          <div
            className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300"
            style={{
              background: hovered ? c.text : 'rgba(8,8,20,0.7)',
              border: `1px solid ${hovered ? 'transparent' : c.border}`,
              opacity: hovered ? 1 : 0.6,
              transform: hovered ? 'translateY(0) scale(1)' : 'translateY(4px) scale(0.95)',
            }}
          >
            <span
              className="font-mono text-xs tracking-wider uppercase"
              style={{ color: hovered ? '#05050f' : c.text }}
            >
              Visit Site
            </span>
            <span style={{ color: hovered ? '#05050f' : c.text, fontSize: '10px' }}>↗</span>
          </div>
        </div>

        {/* Card body */}
        <div className="p-5 pt-4">
          {/* Number + title row */}
          <div className="flex items-start justify-between mb-2 gap-3">
            <h3
              className="font-sora font-semibold"
              style={{ fontSize: '16px', color: '#e8e8f0', lineHeight: 1.3, flex: 1 }}
            >
              {project.title}
            </h3>
            <span
              className="font-mono text-xs shrink-0 mt-0.5"
              style={{ color: c.text, opacity: 0.5 }}
            >
              0{project.id}
            </span>
          </div>

          <p
            className="font-sora font-light mb-4"
            style={{ fontSize: '13px', color: '#6b6b8a', lineHeight: 1.75 }}
          >
            {project.description}
          </p>

          {/* Divider */}
          <div style={{ height: '1px', background: `${c.border}`, marginBottom: '14px' }} />

          {/* Stack tags */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map(tech => (
              <span
                key={tech}
                className="font-mono text-xs px-2.5 py-1 rounded-full"
                style={{
                  background: c.tag,
                  color: c.text,
                  border: `1px solid ${c.border}`,
                  letterSpacing: '0.02em',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="projects"
      className="relative px-6 md:px-24 py-32"
      style={{ borderTop: '0.5px solid rgba(79,195,247,0.1)' }}
    >
      {/* Nebula accent */}
      <div
        className="absolute right-0 top-1/3 pointer-events-none"
        style={{
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(157,78,221,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute left-0 bottom-0 pointer-events-none"
        style={{
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,195,247,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: '#00FFD1' }}
            >
              projects
            </span>
          </div>
          <h2
            className="font-sora font-semibold mb-2"
            style={{ fontSize: '32px', letterSpacing: '-0.01em' }}
          >
            What I&apos;ve Built
          </h2>
          <div
            style={{
              width: '40px', height: '1px',
              background: 'linear-gradient(90deg, #4FC3F7, #9D4EDD)',
              marginBottom: '16px',
            }}
          />
          <p
            className="font-sora font-light"
            style={{ fontSize: '14px', color: '#6b6b8a', lineHeight: 1.7, maxWidth: '440px' }}
          >
            Three live products — each built to solve a real problem, not just
            to have something to show.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))' }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}