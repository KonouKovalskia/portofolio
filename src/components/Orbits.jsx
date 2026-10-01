'use client'

import { useEffect, useRef } from 'react'
import { projects } from '@/data/projects'

// Inner orbit first. `size` is the semi-major axis as a share of the long side.
const ORBITS = [
  { size: 0.26, period: 48, start: 0.7 },
  { size: 0.44, period: 84, start: 3.6 },
]

export default function Orbits() {
  const svgRef = useRef(null)

  useEffect(() => {
    const svg = svgRef.current
    const rings = svg.querySelectorAll('[data-ring]')
    const bodies = svg.querySelectorAll('[data-body]')
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches
    const angles = ORBITS.map(o => o.start)
    const pointer = { x: 0, y: 0 }
    const tilt = { now: null, squash: 0.32 }
    let paused = false
    let last = performance.now()
    let raf

    const onMove = e => {
      pointer.x = e.clientX / innerWidth - 0.5
      pointer.y = e.clientY / innerHeight - 0.5
    }
    const pause = () => { paused = true }
    const resume = () => { paused = false }

    const frame = now => {
      const dt = Math.min((now - last) / 1000, 0.1)
      last = now
      const w = svg.clientWidth
      const h = svg.clientHeight
      const portrait = h > w
      const cx = w / 2
      const cy = h / 2
      const long = portrait ? h : w

      // The orbital plane leans toward the pointer; upright on tall screens.
      const targetTilt = (portrait ? -72 : -14) + pointer.x * 18
      const targetSquash = 0.3 + pointer.y * 0.22
      tilt.now = tilt.now === null ? targetTilt : tilt.now + (targetTilt - tilt.now) * 0.05
      tilt.squash += (targetSquash - tilt.squash) * 0.05
      const phi = (tilt.now * Math.PI) / 180

      ORBITS.forEach((o, i) => {
        if (!paused && !still) angles[i] += (dt * 2 * Math.PI) / o.period
        const a = o.size * long
        const b = a * tilt.squash
        rings[i].setAttribute('cx', cx)
        rings[i].setAttribute('cy', cy)
        rings[i].setAttribute('rx', a)
        rings[i].setAttribute('ry', b)
        rings[i].setAttribute('transform', `rotate(${tilt.now} ${cx} ${cy})`)

        const x = a * Math.cos(angles[i])
        const y = b * Math.sin(angles[i])
        const X = cx + x * Math.cos(phi) - y * Math.sin(phi)
        const Y = cy + x * Math.sin(phi) + y * Math.cos(phi)
        // Near side (sin > 0) is bigger and brighter than the far side.
        const near = (Math.sin(angles[i]) + 1) / 2
        bodies[i].setAttribute('transform', `translate(${X} ${Y}) scale(${0.75 + near * 0.35})`)
        bodies[i].style.opacity = paused ? 1 : 0.45 + near * 0.55
      })
      raf = requestAnimationFrame(frame)
    }

    addEventListener('pointermove', onMove, { passive: true })
    bodies.forEach(b => {
      b.addEventListener('pointerenter', pause)
      b.addEventListener('pointerleave', resume)
      b.addEventListener('focus', pause)
      b.addEventListener('blur', resume)
    })
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <svg ref={svgRef} className="orbits" aria-label="Projects">
      {ORBITS.map((_, i) => <ellipse key={i} data-ring className="ring" />)}
      {projects.slice(0, ORBITS.length).map(p => (
        <a key={p.slug} href={`#${p.slug}`} data-body className="body">
          <circle r="16" className="hit" />
          <circle r="7" />
          <text x="16" y="5">{p.title}</text>
        </a>
      ))}
    </svg>
  )
}
