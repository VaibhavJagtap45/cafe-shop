import { useScrollReveal } from '../hooks/useScrollReveal'

const photos = [
  { src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=85&auto=format&fit=crop', label:'Iced Cold Coffee',     span:'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=85&auto=format&fit=crop', label:'Fresh Pizza',          span:'' },
  { src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85&auto=format&fit=crop', label:'Paneer Burger',        span:'' },
  { src: 'https://images.unsplash.com/photo-1496116218417-1a781b1e416c?w=800&q=85&auto=format&fit=crop', label:'Steamed Momos',        span:'col-span-2' },
  { src: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=800&q=85&auto=format&fit=crop', label:'Creamy Pasta',          span:'' },
  { src: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=85&auto=format&fit=crop', label:'Mocktail',             span:'' },
  { src: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?w=800&q=85&auto=format&fit=crop', label:'Grilled Sandwich',     span:'' },
  { src: 'https://images.unsplash.com/photo-1576107232684-1279f0b1ae24?w=800&q=85&auto=format&fit=crop', label:'Cheese Fries',         span:'' },
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=85&auto=format&fit=crop', label:'Hot Cappuccino',       span:'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=85&auto=format&fit=crop', label:'Masala Maggie',        span:'col-span-2' },
]

export default function Gallery() {
  const [headRef, headVis] = useScrollReveal()
  const [gridRef, gridVis] = useScrollReveal()

  return (
    <section id="gallery" className="py-28 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div ref={headRef} className={`text-center mb-14 reveal ${headVis ? 'visible' : ''}`}>
          <p className="text-coffee-500 font-body text-sm tracking-[0.25em] uppercase mb-3">Visual Feast</p>
          <h2 className="section-heading text-espresso mb-4">
            A Glimpse of <span className="text-coffee-600 italic">Brewé House</span>
          </h2>
          <p className="text-coffee-700/60 font-body max-w-xl mx-auto">
            Every corner, every dish, every sip — crafted to delight all senses.
          </p>
        </div>

        {/* Masonry grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-3 reveal ${gridVis ? 'visible' : ''}`}
        >
          {photos.map((p, i) => (
            <div
              key={i}
              className={`cat-card group cursor-default ${p.span}`}
              style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
            >
              <img src={p.src} alt={p.label} loading="lazy" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent z-10
                              opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-2 group-hover:translate-y-0
                              opacity-0 group-hover:opacity-100 transition-all duration-400">
                <div className="font-display text-cream font-semibold text-sm">{p.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom ambiance row */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon:'🏮', title:'Bamboo Lanterns', sub:'Handcrafted warm glow' },
            { icon:'✨', title:'Neon Sign Art',   sub:'Instagrammable corner' },
            { icon:'🪴', title:'Indoor Greens',   sub:'Refreshing plant vibes' },
            { icon:'🎵', title:'Chill Playlist',  sub:'Music to match your mood' },
          ].map((a, i) => (
            <div
              key={a.title}
              className={`group bg-coffee-900 rounded-2xl p-5 text-center hover:-translate-y-1 transition-all duration-300
                          border border-coffee-800/40 hover:border-coffee-700/60 reveal ${gridVis ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{a.icon}</div>
              <div className="font-display text-cream font-semibold text-sm mb-1">{a.title}</div>
              <div className="text-coffee-500/70 text-xs font-body">{a.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
