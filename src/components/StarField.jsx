'use client'

import { useEffect, useRef } from 'react'

export default function StarField() {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const stars = []

    for (let i = 0; i < 120; i++) {
      const star = document.createElement('div')
      const size = Math.random() * 1.5 + 0.5
      star.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: white;
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.4 + 0.1};
        animation: twinkle ${2 + Math.random() * 3}s ${Math.random() * 3}s infinite alternate;
      `
      container.appendChild(star)
      stars.push(star)
    }

    // Cleanup: remove all injected star nodes on unmount
    return () => {
      stars.forEach(star => star.remove())
    }
  }, [])

  return (
    <>
      <style>{`
        @keyframes twinkle {
          from { opacity: 0.1; }
          to { opacity: 0.6; }
        }
      `}</style>

      {/* Stars */}
      <div
        ref={ref}
        className="fixed inset-0 pointer-events-none z-0"
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