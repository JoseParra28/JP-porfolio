import { useState } from 'react'
import './Styles/App.css'
import { Navbar } from './Components/Navbar'
import { HeroSection } from './Components/HeroSection'
import HeroModel from './Models/HeroModels'
import AboutContent from './Components/AboutContent'
import { Card } from './Components/Card'
import { MyModel } from './Models/MyModel'
import Contact from './Components/Contact'
import EarthCanvas from './Models/Earth'
import { SubNav } from './Components/Subnav'
import BookCanvas from './Models/ContactModel'
import Hero from './Models/Hero'


function App() {

  return (
    <>
    <SubNav/>
    {/* <Hero/> */}
    {/* <HeroModel/> */}
    {/* <Navbar/> */}
     <HeroSection/>
    {/* <AboutContent/> */}
    {/* <Card/> */}
    {/* <Contact/> */}
    {/* <BookCanvas/> */}
    {/* <EarthCanvas/> */}
    {/* <StarsCanvas/> */}
    {/* <MyModel/> */}
    </>
  )
}

export default App
