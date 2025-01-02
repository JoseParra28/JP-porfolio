import EarthCanvas from "../Models/Earth"
import HeroModel from "../Models/HeroModels"
import StarsCanvas from "../Models/Stars"
import { Navbar } from "./Navbar"

export const HeroSection = () =>{
    return (
        <section id="hero">
            <div className="hero-content">
                <div>
                    <h1>Hi, I'm Jose</h1>
                    <h3>Full-Stack Developer</h3>
                    <a className="a-button" href="#contact"> Get is touch</a>
                </div>
                
            </div>
            <HeroModel/>
            
        </section>
    )
}