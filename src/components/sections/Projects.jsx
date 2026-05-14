'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { projects } from '@/data/projects'

const colorMap = {
  blue: { border: 'rgba(79,195,247,0.2)', hover: 'rgba(79,195,247,0.4)', tag: 'rgba(79,195,247,0.08)', text: '#4FC3F7' },
  purple: { border: 'rgba(157,78,221,0.2)', hover: 'rgba(157,78,221,0.4)', tag: 'rgba(157,78,221,0.08)', text: '#9D4EDD' },
  cyan: { border: 'rgba(0,255,209,0.15)', hover: 'rgba(0,255,209,0.35)', tag: 'rgba(0,255,209,0.06)', text: '#00FFD1' },
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const c = colorMap[project.accent]

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl overflow-hidden cursor-pointer no-underline group"
      style={{
        background: 'rgba(10,10,26,0.8)',
        border: `0.5px solid ${c.border}`,
        textDecoration: 'none',
        transition: 'border-color 0.25s, transform 0.25s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = c.hover
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = c.border
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {/* Image */}
        <div
          className="relative w-full overflow-hidden"
          style={{ height: '200px' }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Hover overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ background: 'rgba(5,5,15,0.7)' }}
          >
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: c.text }}
            >
              Visit Site ↗
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <h3
            className="font-sora font-semibold mb-2"
            style={{ fontSize: '15px', color: '#e8e8f0' }}
          >
            {project.title}
          </h3>
          <p
            className="font-sora font-light mb-4"
            style={{ fontSize: '13px', color: '#6b6b8a', lineHeight: 1.7 }}
          >
            {project.description}
          </p>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map(tech => (
              <span
                key={tech}
                className="font-mono text-xs px-2 py-1 rounded"
                style={{
                  background: c.tag,
                  color: c.text,
                  border: `0.5px solid ${c.border}`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </a>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="projects"
      className="relative px-8 md:px-24 py-32"
      style={{ borderTop: '0.5px solid rgba(79,195,247,0.1)' }}
    >
      {/* Nebula accent */}
      <div
        className="absolute right-0 top-1/3 pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(157,78,221,0.06) 0%, transparent 70%)',
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
              {"projects"}
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
              width: '40px',
              height: '1px',
              background: 'linear-gradient(90deg, #4FC3F7, #9D4EDD)',
            }}
          />
        </motion.div>

        {/* Grid */}
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}