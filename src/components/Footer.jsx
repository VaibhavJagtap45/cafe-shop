const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];
const menuHighlights = [
  "Cold Coffee",
  "Iced Latte",
  "Mocktails",
  "Pizza",
  "Momos",
  "Pasta",
  "Burgers",
  "Maggie",
  "Fries",
];

export default function Footer() {
  return (
    <footer className="bg-espresso border-t border-coffee-900/60 relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #dc9e50 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid md:grid-cols-[2fr_1fr_2fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-3 mb-5">
              <svg viewBox="0 0 40 40" className="w-10 h-10">
                <ellipse cx="20" cy="20" rx="16" ry="14" fill="#c46b2d" />
                <path
                  d="M20 7 Q20 20 20 33"
                  stroke="#3a1c0f"
                  strokeWidth="2.5"
                  fill="none"
                />
              </svg>
              <div>
                <span className="font-display text-cream text-xl font-semibold">
                  Brew<span className="text-coffee-400">é</span>
                </span>
                <span className="block font-body text-coffee-500/70 text-[9px] tracking-[0.3em] uppercase leading-none mt-0.5">
                  House
                </span>
              </div>
            </a>
            <p className="text-coffee-500/70 font-body text-sm leading-relaxed mb-6 max-w-xs">
              Your cozy corner in Pune for artisan coffee, delicious food, and
              warm company. The coffee's always on.
            </p>
            {/* Social / delivery */}
            <div className="flex gap-3">
              <a
                href="https://maps.app.goo.gl/QGk5QFwrZafMvuen9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-900/30 text-red-400 border border-red-800/40
                           rounded-full px-4 py-2 text-xs font-body hover:bg-red-600 hover:text-white
                           hover:border-red-600 transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                Zomato
              </a>
              <a
                href="https://maps.app.goo.gl/QGk5QFwrZafMvuen9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-coffee-900/50 text-coffee-400 border border-coffee-800/40
                           rounded-full px-4 py-2 text-xs font-body hover:bg-coffee-600 hover:text-cream transition-all"
              >
                📍 Maps
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h5 className="font-display text-cream font-semibold mb-5 text-sm tracking-widest uppercase">
              Navigate
            </h5>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-coffee-500/70 hover:text-coffee-300 font-body text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-coffee-500 group-hover:w-3 transition-all" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu + info */}
          <div>
            <h5 className="font-display text-cream font-semibold mb-5 text-sm tracking-widest uppercase">
              Menu Highlights
            </h5>
            <div className="flex flex-wrap gap-2 mb-8">
              {menuHighlights.map((m) => (
                <a
                  key={m}
                  href="#menu"
                  className="text-xs font-body text-coffee-500/70 hover:text-coffee-300 border border-coffee-800/40
                             hover:border-coffee-600/60 rounded-full px-3 py-1.5 transition-all hover:bg-coffee-900/50"
                >
                  {m}
                </a>
              ))}
            </div>
            <div className="pt-6 border-t border-coffee-800/40">
              <div className="font-body text-coffee-500/60 text-xs leading-relaxed">
                <div className="flex items-center gap-2 mb-1">
                  <span>📍</span> Pune, Maharashtra
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span>🕐</span> Mon–Fri 9AM–10PM · Sat–Sun 8AM–11PM
                </div>
                <div className="flex items-center gap-2">
                  <span>🛵</span> Parcel charges ₹5 only
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-coffee-900/60 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-coffee-700/60 text-xs font-body text-center sm:text-left">
            © {new Date().getFullYear()} Albos Technology · All rights reserved
            · Pune, Maharashtra
          </p>
          <div className="flex items-center gap-2 text-coffee-700/60 text-xs font-body">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Open today — come say hello!
          </div>
        </div>
      </div>
    </footer>
  );
}
