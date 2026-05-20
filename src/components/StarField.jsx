'use client'

import { useEffect, useRef } from 'react'

export default function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animFrameId
    let stars = []

    const isMobile = () => window.innerWidth < 768

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      buildStars()
    }

    const buildStars = () => {
      // Halve star count on mobile to protect scroll performance
      const count = isMobile() ? 60 : 120
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 0.75 + 0.25,
        baseAlpha: Math.random() * 0.35 + 0.1,
        speed: 0.3 + Math.random() * 0.7,
        phase: Math.random() * Math.PI * 2,
      }))
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const time = t / 1000
      for (const s of stars) {
        const alpha = s.baseAlpha + Math.sin(time * s.speed + s.phase) * 0.15
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0, alpha)})`
        ctx.fill()
      }
      animFrameId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    animFrameId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animFrameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      {/* Canvas-based stars — single DOM node, GPU-composited, no layout thrash */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ display: 'block' }}
      />

      {/* Nebula gradients */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(157,78,221,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 10% 80%, rgba(79,195,247,0.05) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 50% 50%, rgba(0,255,209,0.03) 0%, transparent 60%)
          `
        }}
      />
    </>
  )
}