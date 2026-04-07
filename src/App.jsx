import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import About         from './components/About'
import FeaturedDishes from './components/FeaturedDishes'
import Menu          from './components/Menu'
import Gallery       from './components/Gallery'
import Testimonials  from './components/Testimonials'
import Contact       from './components/Contact'
import Footer        from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedDishes />
        <Menu />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
