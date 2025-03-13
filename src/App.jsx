import { useState } from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import Hero from './sections/Hero'
import AboutMe from './sections/AboutMe'
import TechnicalProfiency from './sections/TechnicalProfiency'
import Footer from './sections/Footer'
import { Navbar2 } from './Components/Navbar2'


function App() {

  return (
    <>
    {/* <p className='underline'>Hello its me</p> */}
      {/* <Navbar2 /> */}
      {/* <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
  <div>
    <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
    <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
  </div>
</div> */}
      <Navbar/>
      {/* <Hero />
      <AboutMe/>
      <TechnicalProfiency/>
      <Footer/>
       */}

    </>
  )
}

export default App
