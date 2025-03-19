import { useState } from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import Hero from './sections/Hero'
import AboutMe from './sections/AboutMe'
import TechnicalProfiency from './sections/TechnicalProfiency'
import Footer from './sections/Footer'


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <TechnicalProfiency />
      <AboutMe />

      {/* 
      <Footer/> */}
    </>
  )
}

export default App
