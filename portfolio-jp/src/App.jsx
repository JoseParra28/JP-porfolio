import { useState } from 'react'
import './Styles/App.css'
import { HeroSection } from './Components/HeroSection'
import AboutContent from './Components/AboutContent'
import { Card } from './Components/Card'
import Contact from './Components/Contact'
import { SubNav } from './Components/Subnav'
import { Footer } from './Components/Footer'


function App() {



  return (
    <>
    <SubNav/>
     <HeroSection/>
    <AboutContent/>
    <Card/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
