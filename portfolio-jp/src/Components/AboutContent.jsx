import { Canvas, useFrame, useThree } from "@react-three/fiber"
import React, { useRef } from "react"
import { motion } from "framer-motion";
import AboutModel from "../Models/AboutModel";
import '../Styles/mediaquery.css'

const AboutContent = () => {
    return(
        <>
      <section >
        <div className="wrapper">
      <div className="container">
            
            <h1>Introduction</h1>
            <p>
            I'm a former pastry chef, turned into a software developer.
            Precision, creativity, and attention to detail were key to making every dish perfect.
            Now I bring that same passion for detail and problem-solving to building software,
            where my main focus are both art and logic.
          </p>
            </div>
            </div>
            <div className="container skills">
            <div className="blur-bg">
            <h1>Skills</h1>
            </div>
            
    
            <div className="progress">
                <div className="progress-bar webgl" >
                <p>WebGL</p>
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar reactjs" >
                <p>ReactJS</p>
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar js" >
                <p>Javascript</p>
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar HC" >
                <p>Html + Css</p>
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar python" >
                <p>Python</p>
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar python" >
                <p>SQL</p>
                </div>
            </div>
            </div>
            <AboutModel/>
      </section>
        </>
    )
}

export default AboutContent