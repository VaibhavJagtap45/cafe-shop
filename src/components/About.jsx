import { useScrollReveal } from '../hooks/useScrollReveal'

const CAFE_IMG   = 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=900&q=85&auto=format&fit=crop'
const COFFEE_IMG = 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=85&auto=format&fit=crop'

const features = [
  {
    icon: '🏮',
    title: 'Warm Ambiance',
    desc: 'Bamboo lanterns, neon art, and fabric ceilings — a vibe that wraps around you like a warm latte.',
  },
  {
    icon: '🌿',
    title: 'Fresh Every Day',
    desc: 'Every dish and drink prepared fresh — from artisan cold brews to loaded masala maggies.',
  },
  {
    icon: '💚',
    title: '100% Vegetarian',
    desc: 'A complete veg menu with bold flavours — no compromises, just pure deliciousness.',
  },
]

export default function About() {
  const [leftRef,  leftVis]  = useScrollReveal()
  const [rightRef, rightVis] = useScrollReveal()
  const [featRef,  featVis]  = useScrollReveal()

  return (
    <section id="about" className="py-28 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Top grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">

          {/* Images side */}
          <div ref={leftRef} className={`relative reveal-left ${leftVis ? 'visible' : ''}`}>
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl img-zoom aspect-[3/4] max-w-md">
              <img src={CAFE_IMG} alt="Brewé House interior" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl px-5 py-4">
                  <div className="font-display text-cream text-lg font-semibold">Brewé House</div>
                  <div className="text-coffee-300 text-sm">Your cozy corner in Pune</div>
                </div>
              </div>
            </div>

            {/* Floating secondary image */}
            <div className="absolute -bottom-6 -right-4 lg:-right-12 w-48 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-cream img-zoom">
              <img src={COFFEE_IMG} alt="Artisan coffee" className="w-full h-full object-cover" />
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -left-4 lg:-left-10 bg-coffee-700 text-cream rounded-2xl px-5 py-4 shadow-xl">
              <div className="font-display text-3xl font-bold">100%</div>
              <div className="text-coffee-200 text-xs tracking-widest uppercase">Vegetarian</div>
            </div>
          </div>

          {/* Text side */}
          <div ref={rightRef} className={`reveal-right ${rightVis ? 'visible' : ''}`}>
            <p className="text-coffee-500 font-body text-sm tracking-[0.25em] uppercase mb-4">Our Story</p>
            <h2 className="section-heading text-espresso mb-6">
              More Than Just<br />
              <span className="text-coffee-600 italic">A Cup of Coffee</span>
            </h2>
            <p className="text-coffee-800/70 text-lg leading-relaxed mb-5">
              Brewé House was born from a simple dream — to create a space where great food
              and exceptional coffee meet warmth and community. Nestled in Pune, we craft
              every beverage and dish with care, using fresh ingredients and genuine passion.
            </p>
            <p className="text-coffee-800/55 text-base leading-relaxed mb-10">
              From signature cold coffees to cheesy pizzas, crispy momos, and indulgent mocktails —
              there's something for everyone. Come as you are. Stay as long as you like.
            </p>

            <a href="#menu" className="btn-primary mb-10 w-fit">
              View Full Menu
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/></svg>
            </a>
          </div>
        </div>

        {/* Feature cards */}
        <div ref={featRef} className={`grid sm:grid-cols-3 gap-6 reveal ${featVis ? 'visible' : ''}`}>
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group bg-coffee-900 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-500
                         border border-coffee-800/50 hover:border-coffee-600/50 hover:shadow-2xl hover:shadow-coffee-900/40"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-5">{f.icon}</div>
              <h3 className="font-display text-cream text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-coffee-400/70 text-sm leading-relaxed">{f.desc}</p>
              <div className="mt-6 w-8 h-0.5 bg-coffee-600 group-hover:w-16 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
