import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import FeaturedProjects from './components/FeaturedProjects'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Process from './components/Process'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedProjects />
        <Projects />
        <Skills />
        <About />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
