import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ImpactStats from './components/ImpactStats'
import About from './components/About'
import FeaturedProjects from './components/FeaturedProjects'
import Projects from './components/Projects'
import Process from './components/Process'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="overflow-hidden text-text">
      <Navbar />
      <main>
        <Hero />
        <ImpactStats />
        <About />
        <FeaturedProjects onOpenProject={setSelectedProject} />
        <Projects onOpenProject={setSelectedProject} />
        <Process />
        <Skills />
        <Education />
        <Contact />
      </main>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <Footer />
    </div>
  )
}

export default App
