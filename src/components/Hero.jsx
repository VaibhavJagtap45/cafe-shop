import { useScrollReveal } from '../hooks/useScrollReveal'

const HERO_IMG = 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=90&auto=format&fit=crop'

export default function Hero() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Brewé House café interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/50 to-espresso/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/60 via-transparent to-transparent" />
      </div>

      {/* Floating coffee beans */}
      {[
        { top:'18%', right:'16%', size:'w-10', delay:'0s',   opacity:'opacity-25' },
        { top:'65%', left:'9%',   size:'w-7',  delay:'1.8s', opacity:'opacity-15' },
        { top:'40%', left:'5%',   size:'w-5',  delay:'3.2s', opacity:'opacity-10' },
        { top:'28%', right:'6%',  size:'w-6',  delay:'2.5s', opacity:'opacity-15' },
      ].map((b, i) => (
        <div key={i} className={`absolute animate-float ${b.opacity}`} style={{ top:b.top, left:b.left, right:b.right, animationDelay:b.delay }}>
          <svg viewBox="0 0 60 80" className={`${b.size} text-coffee-400 fill-current`}>
            <ellipse cx="30" cy="40" rx="20" ry="28"/>
            <path d="M30 14 Q30 40 30 66" stroke="#1a0a00" strokeWidth="3" fill="none"/>
          </svg>
        </div>
      ))}

      {/* Content */}
      <div ref={ref} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Pill badge */}
        <div className={`inline-flex items-center gap-2.5 glass rounded-full px-5 py-2.5 mb-8 reveal ${visible ? 'visible' : ''}`}>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-coffee-200 text-xs font-body tracking-[0.2em] uppercase">Open Now · Pune, Maharashtra</span>
        </div>

        {/* Headline */}
        <h1 className={`font-display leading-none mb-6 reveal delay-100 ${visible ? 'visible' : ''}`}>
          <span className="block text-cream text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight">
            Brew<span className="gradient-text">é</span>
          </span>
          <span className="block text-coffee-200/80 text-3xl sm:text-4xl font-light italic tracking-widest mt-3">
            — House —
          </span>
        </h1>

        {/* Tagline */}
        <p className={`font-body text-coffee-200/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed reveal delay-200 ${visible ? 'visible' : ''}`}>
          Where every sip tells a story. Artisan coffee, warm vibes, and flavours
          crafted with love — your perfect escape.
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 reveal delay-300 ${visible ? 'visible' : ''}`}>
          <a href="#menu" className="btn-primary text-base px-10 py-4">
            <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"/></svg>
            Explore Menu
          </a>
          <a href="#about" className="btn-outline text-base px-10 py-4">Our Story</a>
        </div>

        {/* Stats bar */}
        <div className={`inline-grid grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden shadow-xl reveal delay-400 ${visible ? 'visible' : ''}`}>
          {[
            { num: '50+',  label: 'Menu Items' },
            { num: '₹15',  label: 'Starts From' },
            { num: '100%', label: 'Vegetarian' },
          ].map((s, i) => (
            <div key={i} className="glass px-8 py-4 text-center">
              <div className="font-display text-coffee-400 text-2xl font-bold">{s.num}</div>
              <div className="text-coffee-300/60 text-xs tracking-widest uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-coffee-400/50 text-xs tracking-widest uppercase font-body">Scroll</span>
        <div className="w-5 h-8 border border-coffee-400/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-coffee-400 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 fill-cream">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z"/>
        </svg>
      </div>
    </section>
  )
}
