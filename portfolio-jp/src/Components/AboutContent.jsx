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
            I'm a skilled software developer with experience in TypeScript and
            JavaScript, and expertise in frameworks like React, Node.js, and
            Three.js. I'm a quick learner and collaborate closely with clients to
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let's work together to bring your ideas to life!
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