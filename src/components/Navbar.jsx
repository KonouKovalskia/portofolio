'use client'

import { useState, useEffect } from 'react'

const navLinks = ['Home', 'About', 'Projects', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const detectActive = () => {
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

  useEffect(() => {
    // Run once on mount to set correct active section on hard refresh / deep link
    detectActive()

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      detectActive()
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
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

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 list-none">
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

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px transition-all duration-300 origin-center"
            style={{
              background: '#4FC3F7',
              transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: '#4FC3F7',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300 origin-center"
            style={{
              background: '#4FC3F7',
              transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className="fixed top-14 left-0 right-0 z-40 md:hidden transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: menuOpen ? '240px' : '0px',
          background: 'rgba(5,5,15,0.97)',
          borderBottom: menuOpen ? '0.5px solid rgba(79,195,247,0.15)' : 'none',
          backdropFilter: 'blur(12px)',
        }}
      >
        <ul className="flex flex-col list-none px-8 py-6 gap-5">
          {navLinks.map(link => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-xs tracking-widest uppercase bg-transparent border-none cursor-pointer font-sora transition-colors duration-200"
                style={{
                  color: active === link ? '#4FC3F7' : '#6b6b8a',
                }}
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