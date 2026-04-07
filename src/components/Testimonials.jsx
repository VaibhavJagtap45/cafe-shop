import { useScrollReveal } from '../hooks/useScrollReveal'

const reviews = [
  {
    name:   'Priya S.',
    avatar: 'P',
    color:  'bg-pink-600',
    rating: 5,
    text:   'The cold coffee with ice cream is absolutely divine! The bamboo lantern ambiance is so cozy — feels like a totally different world inside.',
    tag:    'Cold Coffee lover',
  },
  {
    name:   'Rahul M.',
    avatar: 'R',
    color:  'bg-blue-600',
    rating: 5,
    text:   'Best momos in town hands down! Tried the fried paneer momos and they were perfect. Prices are super reasonable for the quality you get.',
    tag:    'Momo enthusiast',
  },
  {
    name:   'Sneha K.',
    avatar: 'S',
    color:  'bg-emerald-600',
    rating: 5,
    text:   'Perfect for study sessions! Great cappuccino, excellent vibe, and grilled sandwiches that keep you going. My permanent go-to café now.',
    tag:    'Regular visitor',
  },
  {
    name:   'Amit P.',
    avatar: 'A',
    color:  'bg-orange-600',
    rating: 5,
    text:   'Cheese Burst pizza at ₹140 is unreal value! Blue Lagoon mocktail paired with it — absolute perfection. Coming back every weekend.',
    tag:    'Pizza & mocktail fan',
  },
]

export default function Testimonials() {
  const [headRef, headVis] = useScrollReveal()
  const [cardRef, cardVis] = useScrollReveal()

  return (
    <section className="py-28 bg-espresso relative overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coffee-600 to-transparent" />

      {/* BG glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-coffee-800/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div ref={headRef} className={`text-center mb-14 reveal ${headVis ? 'visible' : ''}`}>
          <p className="text-coffee-400 font-body text-sm tracking-[0.25em] uppercase mb-3">What Guests Say</p>
          <h2 className="section-heading text-cream">
            Loved by <span className="gradient-text italic">Coffee</span> People
          </h2>
        </div>

        {/* Cards */}
        <div ref={cardRef} className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal ${cardVis ? 'visible' : ''}`}>
          {reviews.map((r, i) => (
            <div
              key={i}
              className="group bg-coffee-900/60 rounded-2xl p-6 border border-coffee-800/40
                         hover:border-coffee-600/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-coffee-950/60
                         transition-all duration-500"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Quote icon */}
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-coffee-700 fill-current mb-4">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
              </svg>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, s) => (
                  <svg key={s} viewBox="0 0 20 20" className="w-4 h-4 fill-coffee-400">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              <p className="text-coffee-300/80 font-body text-sm leading-relaxed mb-6 italic">"{r.text}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-coffee-800/40">
                <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-white font-display font-bold`}>
                  {r.avatar}
                </div>
                <div>
                  <div className="font-body font-semibold text-cream text-sm">{r.name}</div>
                  <div className="text-coffee-500 text-xs">{r.tag}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating bar */}
        <div className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 pt-10 border-t border-coffee-800/40 reveal ${cardVis ? 'visible' : ''}`}>
          <div className="text-center">
            <div className="font-display text-cream text-6xl font-bold gradient-text">4.8</div>
            <div className="flex gap-1 justify-center mt-2">
              {Array.from({length:5}).map((_,i)=>(
                <svg key={i} viewBox="0 0 20 20" className="w-5 h-5 fill-coffee-400">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <div className="text-coffee-500 text-xs mt-1 font-body">Average Rating</div>
          </div>
          <div className="w-px h-12 bg-coffee-800 hidden sm:block" />
          {[
            { label:'Happy Customers', val:'1,000+' },
            { label:'Menu Items',      val:'50+' },
            { label:'5-star Reviews',  val:'200+' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="font-display text-cream text-3xl font-bold">{s.val}</div>
              <div className="text-coffee-500 text-xs mt-1 font-body">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
