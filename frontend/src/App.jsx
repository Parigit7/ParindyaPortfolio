import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-slate-950 transition-colors">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        {/* <Projects /> */}
        <Contact />
        
        <footer className="bg-gray-900 dark:bg-slate-950 text-white py-8 px-4 text-center">
          <p>© 2026 Modern Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
