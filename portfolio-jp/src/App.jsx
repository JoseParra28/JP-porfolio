import { useState } from 'react'
import './Styles/App.css'
import { Navbar } from './Components/Navbar'
import { HeroSection } from './Components/HeroSection'
import HeroModel from './Models/HeroModels'
import AboutContent from './Components/AboutContent'
import { Card } from './Components/Card'

import Contact from './Components/Contact'
import EarthCanvas from './Models/Earth'
import { SubNav } from './Components/Subnav'


function App() {


  
  return (
    <>
    <SubNav/>
     <HeroSection/>
    <AboutContent/>
    <Card/>
    <Contact/>
    </>
  )
}

export default App
