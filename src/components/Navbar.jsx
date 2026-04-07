import { useState, useEffect } from 'react'

const links = [
  { label: 'Home',    href: '#home' },
  { label: 'About',  href: '#about' },
  { label: 'Menu',   href: '#menu' },
  { label: 'Gallery',href: '#gallery' },
  { label: 'Contact',href: '#contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [active,    setActive]    = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      // update active section
      const sections = ['home','about','menu','gallery','contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-0' : 'py-2'
    }`}>
      <div className={`transition-all duration-500 ${
        scrolled
          ? 'mx-0 bg-espresso/95 backdrop-blur-xl shadow-2xl shadow-black/30 border-b border-coffee-900/50'
          : 'mx-4 mt-4 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10'
      }`}>
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[68px]">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9">
              {/* Coffee bean icon */}
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <ellipse cx="20" cy="20" rx="16" ry="14" fill="#c46b2d"/>
                <path d="M20 7 Q20 20 20 33" stroke="#3a1c0f" strokeWidth="2.5" fill="none"/>
                <ellipse cx="20" cy="20" rx="16" ry="14" fill="none" stroke="#dc9e50" strokeWidth="1" opacity="0.4"/>
              </svg>
            </div>
            <div>
              <span className="font-display text-cream text-lg font-semibold tracking-wide leading-none">
                Brew<span className="text-coffee-400">é</span>
              </span>
              <span className="block font-body text-coffee-400/70 text-[9px] tracking-[0.3em] uppercase leading-none mt-0.5">House</span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setActive(l.href)}
                  className={`relative font-body text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-lg transition-all duration-300 ${
                    active === l.href
                      ? 'text-coffee-300 bg-coffee-800/50'
                      : 'text-cream/60 hover:text-cream hover:bg-white/5'
                  }`}
                >
                  {l.label}
                  {active === l.href && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-coffee-400" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://maps.app.goo.gl/QGk5QFwrZafMvuen9"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary py-2 px-5 text-xs"
            >
              Order Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-4 h-0.5 bg-cream/70 transition-all duration-300 ${menuOpen ? 'opacity-0 w-6' : ''}`} />
            <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="mx-4 mb-2 bg-espresso/98 backdrop-blur-xl rounded-2xl border border-coffee-800/50 shadow-2xl">
          <ul className="flex flex-col p-4 gap-1">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => { setActive(l.href); setMenuOpen(false) }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-body text-sm tracking-wider uppercase transition-all ${
                    active === l.href
                      ? 'bg-coffee-800/60 text-coffee-300'
                      : 'text-cream/70 hover:bg-coffee-900/50 hover:text-cream'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://maps.app.goo.gl/QGk5QFwrZafMvuen9"
                target="_blank" rel="noopener noreferrer"
                className="btn-primary w-full justify-center py-3 text-xs"
                onClick={() => setMenuOpen(false)}
              >
                Order Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
