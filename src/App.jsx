import { useState } from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import Hero from './sections/Hero'
import AboutMe from './sections/AboutMe'
import TechnicalProfiency from './sections/TechnicalProfiency'
import MyProject from './sections/MyProject'
import ContactMe from './sections/ContactMe'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <TechnicalProfiency />
      <AboutMe />
      <MyProject/>
      <ContactMe/>

      {/* 
      <Footer/> */}
    </>
  )
}

export default App
