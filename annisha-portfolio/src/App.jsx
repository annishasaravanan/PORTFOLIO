import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Internship from './components/Internship'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-[#030712] min-h-screen text-slate-200 selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Internship />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Annisha Saravanan. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
