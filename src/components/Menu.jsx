import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { beverages, foodItems } from '../data/menu'

export default function Menu() {
  const [tab,        setTab]    = useState('beverages')
  const [activeCat,  setActive] = useState(beverages[0])
  const [imgLoaded,  setImgLoaded] = useState(false)
  const [headRef, headVis] = useScrollReveal()
  const [bodyRef, bodyVis] = useScrollReveal()

  const categories = tab === 'beverages' ? beverages : foodItems

  const handleTab = (t) => {
    setTab(t)
    setActive(t === 'beverages' ? beverages[0] : foodItems[0])
    setImgLoaded(false)
  }

  const handleCat = (cat) => {
    if (cat.id === activeCat.id) return
    setImgLoaded(false)
    setActive(cat)
  }

  useEffect(() => { setImgLoaded(false) }, [activeCat.id])

  return (
    <section id="menu" className="py-28 bg-coffee-950 relative overflow-hidden noise">
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage:'radial-gradient(circle, #dc9e50 1px, transparent 1px)', backgroundSize:'36px 36px' }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Header ── */}
        <div ref={headRef} className={`text-center mb-14 reveal ${headVis ? 'visible' : ''}`}>
          <p className="text-coffee-500 font-body text-sm tracking-[0.25em] uppercase mb-3">What We Serve</p>
          <h2 className="section-heading text-cream mb-4">
            Our <span className="gradient-text italic">Menu</span>
          </h2>
          <p className="text-coffee-400/60 font-body max-w-lg mx-auto">
            Crafted fresh, priced right — every item made with heart.
            Parcel charges ₹5 only.
          </p>
        </div>

        {/* ── Bev / Food toggle ── */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-coffee-900/80 rounded-full p-1.5 border border-coffee-800/60 shadow-inner">
            {[['beverages','☕  Beverages'],['food','🍽  Food']].map(([k, l]) => (
              <button
                key={k}
                onClick={() => handleTab(k)}
                className={`px-8 py-2.5 rounded-full font-body text-sm tracking-wider uppercase transition-all duration-300 ${
                  tab === k
                    ? 'bg-coffee-600 text-cream shadow-lg shadow-coffee-600/40'
                    : 'text-coffee-400 hover:text-cream'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* ── Main layout ── */}
        <div ref={bodyRef} className={`grid lg:grid-cols-[1fr_420px] gap-8 reveal delay-100 ${bodyVis ? 'visible' : ''}`}>

          {/* Left — Hero image + items */}
          <div className="flex flex-col gap-6">

            {/* Category hero image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[16/7] bg-coffee-900 shadow-2xl group">
              <img
                key={activeCat.id}
                src={activeCat.image}
                alt={activeCat.label}
                onLoad={() => setImgLoaded(true)}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
              {/* Shimmer while loading */}
              {!imgLoaded && <div className="absolute inset-0 shimmer" />}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />

              {/* Text on image */}
              <div className="absolute bottom-0 left-0 p-8">
                <div className="text-4xl mb-2">{activeCat.emoji}</div>
                <h3 className="font-display text-cream text-3xl md:text-4xl font-bold mb-1">{activeCat.label}</h3>
                <p className="text-coffee-300/80 font-body text-sm max-w-sm">{activeCat.desc}</p>
              </div>

              {/* Item count badge */}
              <div className="absolute top-5 right-5 glass rounded-full px-4 py-1.5 text-cream text-xs font-body tracking-wider">
                {activeCat.items.length} items
              </div>
            </div>

            {/* Items grid */}
            <div className="bg-coffee-900/50 rounded-2xl border border-coffee-800/30 p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-x-8">
                {activeCat.items.map((item, i) => (
                  <div
                    key={i}
                    className="menu-card hover:bg-coffee-800/30 rounded-lg px-3 -mx-3 transition-colors"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <div>
                      <div className="font-body text-coffee-100 font-medium leading-snug">{item.name}</div>
                      {item.note && (
                        <div className="text-coffee-500/70 text-xs mt-0.5">{item.note}</div>
                      )}
                    </div>
                    <div className="menu-price">{item.price}</div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-coffee-600/50 text-xs font-body text-right">
                * Parcel charges ₹5 extra
              </p>
            </div>
          </div>

          {/* Right — Category card grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 content-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCat(cat)}
                className={`cat-card relative h-28 group text-left outline-none
                  ring-2 transition-all duration-300
                  ${activeCat.id === cat.id
                    ? 'ring-coffee-500 shadow-lg shadow-coffee-500/30 scale-[1.02]'
                    : 'ring-transparent hover:ring-coffee-700/50'
                  }`}
              >
                <img src={cat.image} alt={cat.label} loading="lazy" />
                {/* Always-on dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-transparent z-10" />

                {/* Active glow */}
                {activeCat.id === cat.id && (
                  <div className="absolute inset-0 bg-coffee-500/20 z-10" />
                )}

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
                  <div className="text-lg leading-none mb-0.5">{cat.emoji}</div>
                  <div className="font-body text-cream text-xs font-semibold leading-tight">{cat.label}</div>
                </div>

                {/* Active indicator */}
                {activeCat.id === cat.id && (
                  <div className="absolute top-2 right-2 z-20 w-2 h-2 rounded-full bg-coffee-400 shadow-[0_0_6px_2px_rgba(220,158,80,0.6)]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
