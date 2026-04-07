import { useScrollReveal } from '../hooks/useScrollReveal'

const MAP_BG = 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=900&q=80&auto=format&fit=crop'

export default function Contact() {
  const [headRef, headVis] = useScrollReveal()
  const [bodyRef, bodyVis] = useScrollReveal()

  return (
    <section id="contact" className="py-28 bg-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coffee-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div ref={headRef} className={`text-center mb-16 reveal ${headVis ? 'visible' : ''}`}>
          <p className="text-coffee-500 font-body text-sm tracking-[0.25em] uppercase mb-3">Find Us</p>
          <h2 className="section-heading text-espresso mb-4">
            Visit <span className="text-coffee-600 italic">Brewé House</span>
          </h2>
          <p className="text-coffee-700/60 font-body max-w-xl mx-auto">
            Come for the coffee, stay for the vibes. We'd love to see you.
          </p>
        </div>

        <div ref={bodyRef} className={`grid lg:grid-cols-2 gap-10 items-stretch reveal ${bodyVis ? 'visible' : ''}`}>

          {/* Info side */}
          <div className="flex flex-col gap-5">

            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                  </svg>
                ),
                title: 'Location',
                content: (
                  <>
                    <p className="text-coffee-700/70 text-sm leading-relaxed mb-3">
                      Tunji Road, Pune<br />Maharashtra, India
                    </p>
                    <a
                      href="https://maps.app.goo.gl/QGk5QFwrZafMvuen9"
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-coffee-600 hover:text-coffee-700 text-sm font-semibold font-body transition-colors"
                    >
                      Get Directions
                      <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"/></svg>
                    </a>
                  </>
                ),
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                ),
                title: 'Opening Hours',
                content: (
                  <div className="space-y-2 text-sm font-body">
                    {[
                      ['Mon – Fri', '9:00 AM – 10:00 PM'],
                      ['Sat – Sun', '8:00 AM – 11:00 PM'],
                    ].map(([day, time]) => (
                      <div key={day} className="flex justify-between gap-6">
                        <span className="text-coffee-500">{day}</span>
                        <span className="text-coffee-800 font-semibold">{time}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-coffee-100">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-green-700 text-xs font-semibold">Open Right Now</span>
                    </div>
                  </div>
                ),
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                  </svg>
                ),
                title: 'Order Online',
                content: (
                  <>
                    <p className="text-coffee-700/70 text-sm mb-4">Available on Zomato for pickup & home delivery.</p>
                    <div className="flex gap-3 flex-wrap">
                      <a
                        href="https://maps.app.goo.gl/QGk5QFwrZafMvuen9"
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-50 text-red-600 border border-red-200
                                   rounded-full px-4 py-2 text-sm font-body font-semibold hover:bg-red-600 hover:text-white
                                   hover:border-red-600 transition-all"
                      >
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        Order on Zomato
                      </a>
                      <span className="inline-flex items-center gap-1.5 bg-coffee-50 text-coffee-600 border border-coffee-200
                                       rounded-full px-4 py-2 text-xs font-body">
                        Parcel +₹5
                      </span>
                    </div>
                  </>
                ),
              },
            ].map((card) => (
              <div key={card.title} className="group bg-white rounded-2xl p-6 flex gap-5 shadow-sm border border-coffee-100
                                              hover:shadow-lg hover:border-coffee-200 transition-all duration-300">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-coffee-100 text-coffee-700 flex items-center justify-center
                                group-hover:bg-coffee-700 group-hover:text-cream transition-all duration-300">
                  {card.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-espresso font-semibold mb-2 text-lg">{card.title}</h4>
                  {card.content}
                </div>
              </div>
            ))}
          </div>

          {/* Map visual */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[400px] img-zoom">
            <img src={MAP_BG} alt="Café ambiance" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-8">
              <div className="glass rounded-3xl p-8 text-center w-full max-w-sm">
                <div className="w-14 h-14 rounded-full bg-coffee-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-cream fill-current">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="font-display text-cream text-xl font-semibold mb-1">Brewé House</h3>
                <p className="text-coffee-300/70 text-sm font-body mb-6">Tunji Road, Pune, Maharashtra</p>
                <a
                  href="https://maps.app.goo.gl/QGk5QFwrZafMvuen9"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick stats footer */}
        <div className={`mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 reveal ${bodyVis ? 'visible' : ''}`}>
          {[
            { icon:'⭐', val:'4.8/5',  label:'Google Rating' },
            { icon:'🧾', val:'₹5',     label:'Parcel Charge' },
            { icon:'🚀', val:'Fast',   label:'Delivery' },
            { icon:'🌿', val:'100%',   label:'Veg Menu' },
          ].map(s => (
            <div key={s.label} className="bg-coffee-900 rounded-2xl p-5 text-center border border-coffee-800/40
                                         hover:border-coffee-700/60 hover:-translate-y-0.5 transition-all">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="font-display text-coffee-400 text-xl font-bold">{s.val}</div>
              <div className="text-coffee-500/70 text-xs font-body mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
