'use client'

import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) return null

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className="fixed z-50 w-9 h-9 flex items-center justify-center font-mono text-sm transition-all duration-200 cursor-pointer"
      style={{
        // More clearance on mobile so it doesn't sit on top of footer content
        bottom: 'max(24px, env(safe-area-inset-bottom, 24px))',
        right: '24px',
        background: 'rgba(5,5,15,0.9)',
        border: '0.5px solid rgba(79,195,247,0.4)',
        borderRadius: '8px',
        color: '#4FC3F7',
      }}
    >
      ↑
    </button>
  )
}