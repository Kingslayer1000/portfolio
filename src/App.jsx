import React from 'react'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Projects from './components/project/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <About />
      <Projects />
      <Nav />     
      <Experience />
      <Services />      
      <Contact />
      <Footer />
    </>
  )
}

export default App