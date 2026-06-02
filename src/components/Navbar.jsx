'use client'

import { useState, useEffect } from 'react'

const navLinks = ['Home', 'About', 'Projects', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const detectActive = () => {
      // Check sections in reverse so the last one crossing the threshold wins
      const candidates = [...navLinks].reverse()
      for (const link of candidates) {
        const el = document.getElementById(link.toLowerCase())
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 100) {
          setActive(link)
          return
        }
      }
      setActive('Home')
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      detectActive()
    }

    // Initial call after paint
    requestAnimationFrame(() => setTimeout(detectActive, 120))
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-14 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(5,5,15,0.94)' : 'rgba(5,5,15,0.5)',
          borderBottom: scrolled ? '0.5px solid rgba(79,195,247,0.12)' : '0.5px solid transparent',
          backdropFilter: 'blur(14px)',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="font-mono text-sm tracking-wider bg-transparent border-none"
          style={{ letterSpacing: '0.08em' }}
        >
          <span style={{ color: '#4FC3F7' }}>K</span>
          <span style={{ color: '#9D4EDD' }}>.</span>
          <span style={{ color: '#4FC3F7' }}>dev</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {navLinks.map(link => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="relative font-mono text-xs tracking-widest uppercase bg-transparent border-none transition-colors duration-200"
                style={{ color: active === link ? '#4FC3F7' : '#6b6b8a' }}
              >
                {link}
                {/* Active underline */}
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'linear-gradient(90deg, #4FC3F7, #9D4EDD)',
                    opacity: active === link ? 1 : 0,
                    transition: 'opacity 0.2s',
                  }}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(p => !p)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 bg-transparent border-none"
          aria-label="Toggle menu"
        >
          {[
            menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
            null, // middle bar handled by opacity
            menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
          ].map((transform, i) => (
            <span
              key={i}
              className="block w-5 h-px transition-all duration-300 origin-center"
              style={{
                background: '#4FC3F7',
                transform: transform ?? 'none',
                opacity: i === 1 ? (menuOpen ? 0 : 1) : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className="fixed top-14 left-0 right-0 z-40 md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '260px' : '0px',
          background: 'rgba(5,5,15,0.97)',
          borderBottom: menuOpen ? '0.5px solid rgba(79,195,247,0.12)' : 'none',
          backdropFilter: 'blur(14px)',
        }}
      >
        <ul className="flex flex-col list-none px-8 py-6 gap-5 m-0">
          {navLinks.map(link => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="font-mono text-xs tracking-widest uppercase bg-transparent border-none transition-colors duration-200"
                style={{ color: active === link ? '#4FC3F7' : '#6b6b8a' }}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}