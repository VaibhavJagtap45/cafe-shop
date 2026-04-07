import { useScrollReveal } from '../hooks/useScrollReveal'

const dishes = [
  {
    name:  'Cold Coffee with Ice Cream',
    price: '₹80',
    tag:   'Bestseller',
    tagColor: 'bg-coffee-600',
    desc:  'Creamy cold brew topped with a generous scoop of vanilla ice cream, drizzled with chocolate.',
    img:   'https://images.unsplash.com/photo-1572490122747-3a3a3c8a77eb?w=700&q=85&auto=format&fit=crop',
  },
  {
    name:  'Cheese Burst Pizza',
    price: '₹140',
    tag:   'Fan Favourite',
    tagColor: 'bg-red-600',
    desc:  'A molten cheese-stuffed crust with fresh toppings baked to golden perfection.',
    img:   'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&q=85&auto=format&fit=crop',
  },
  {
    name:  'Paneer Cheese Burger',
    price: '₹90',
    tag:   'Must Try',
    tagColor: 'bg-emerald-700',
    desc:  'Crispy spiced paneer patty, melted cheese, fresh lettuce and our signature sauce.',
    img:   'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&q=85&auto=format&fit=crop',
  },
  {
    name:  'Fried Paneer Momos',
    price: '₹80',
    tag:   'Crispy & Spicy',
    tagColor: 'bg-orange-700',
    desc:  'Golden fried dumplings stuffed with spiced paneer, served with tangy dipping sauce.',
    img:   'https://images.unsplash.com/photo-1496116218417-1a781b1e416c?w=700&q=85&auto=format&fit=crop',
  },
]

export default function FeaturedDishes() {
  const [headRef, headVis] = useScrollReveal()
  const [gridRef, gridVis] = useScrollReveal()

  return (
    <section className="py-28 bg-coffee-50 relative overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coffee-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div ref={headRef} className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal ${headVis ? 'visible' : ''}`}>
          <div>
            <p className="text-coffee-500 font-body text-sm tracking-[0.25em] uppercase mb-3">Chef's Pick</p>
            <h2 className="section-heading text-espresso">
              Featured <span className="text-coffee-600 italic">Dishes</span>
            </h2>
          </div>
          <a href="#menu" className="btn-primary shrink-0 self-start md:self-auto">
            View Full Menu
            <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/></svg>
          </a>
        </div>

        {/* Cards grid */}
        <div ref={gridRef} className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal ${gridVis ? 'visible' : ''}`}>
          {dishes.map((d, i) => (
            <div
              key={d.name}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2
                         transition-all duration-500 border border-coffee-100/80"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Tag */}
                <span className={`absolute top-3 left-3 ${d.tagColor} text-white text-xs font-body font-bold tracking-wider px-3 py-1 rounded-full`}>
                  {d.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="font-display text-espresso text-lg font-semibold mb-2 leading-snug">{d.name}</h3>
                <p className="text-coffee-700/60 text-sm leading-relaxed mb-4">{d.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-coffee-600 text-2xl font-bold">{d.price}</span>
                  <a
                    href="https://maps.app.goo.gl/QGk5QFwrZafMvuen9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-coffee-100 flex items-center justify-center
                               group-hover:bg-coffee-700 group-hover:text-cream transition-all duration-300 text-coffee-700"
                  >
                    <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
