'use client'

import { useState, useEffect } from 'react'

const navLinks = ['Home', 'About', 'Projects', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map(link => ({
        id: link.toLowerCase(),
        el: document.getElementById(link.toLowerCase())
      }))

      const current = sections.find(({ el }) => {
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 80 && rect.bottom >= 80
      })

      if (current) setActive(current.id.charAt(0).toUpperCase() + current.id.slice(1))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-14 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(5,5,15,0.92)' : 'rgba(5,5,15,0.6)',
        borderBottom: scrolled ? '0.5px solid rgba(79,195,247,0.15)' : '0.5px solid transparent',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Logo */}
      <div className="font-mono text-sm tracking-wider">
        <span className="text-accent-blue">K</span>
        <span className="text-accent-purple">.</span>
        <span className="text-accent-blue">dev</span>
      </div>

      {/* Links */}
      <ul className="flex gap-8 list-none">
        {navLinks.map(link => (
          <li key={link}>
            <button
              onClick={() => scrollTo(link)}
              className="text-xs tracking-widest uppercase transition-colors duration-200 bg-transparent border-none cursor-pointer font-sora"
              style={{
                color: active === link ? '#4FC3F7' : '#6b6b8a',
              }}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}