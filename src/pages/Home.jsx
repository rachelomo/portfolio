import Navbar from "../components/home/Navbar"
import Hero from "../components/home/Hero"
import useSmoothScroll from "../hooks/useSmoothScroll"
import About from "../sections/About/About"
import Skills from "../sections/Projects/Skills/Skills"
import Projects from "../sections/Projects/Projects"
import { useEffect } from "react"
import Lenis from "lenis"
import Experience from "../sections/Experience/Experience"
import Contact from "../sections/Contact/Contact"
const Home = () => {
   useSmoothScroll()
   useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    })
      function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  
  return (
    <main className="relative min-h-screen bg-dark overflow-hidden">
      <Navbar className="bg-dark overflow-hidden"/>
      <Hero/>
         <section id="about">
            <About />
          </section>
         <section id="skills">
            <Skills />
          </section>
         <section id="projects">
            <Projects />
          </section>
         <section id="experience">
            <Experience />
          </section>
         <section id="contact">
            <Contact />
          </section>
    

    </main>
  )
}

export default Home