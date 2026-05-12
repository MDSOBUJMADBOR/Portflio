import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import StatsBar from "@/components/stats-bar"
import About from "@/components/about"
import TechStack from "@/components/tech-stack"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ExperiencePage from "@/components/experience"


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
   
      <Hero />
      <StatsBar />
      <About />
      <TechStack />
      <Skills />
      <ExperiencePage />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
