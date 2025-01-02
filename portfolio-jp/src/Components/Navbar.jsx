import {useEffect, useState} from "react"
import React from "react"
import { Link } from "react-router-dom"
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import logo from '../assets/logo.png'

import '../Styles/App.css'
// import { navLinks } from "../Constants"

const navLinks = [
  {
    id: "home",
    title: "Home",
    url: "#home",
  },
    {
      id: "about",
      title: "About",
      url: "#about",
    },
    {
      id: "work",
      title: "Work",
      url: "#work",

    },
    {
      id: "contact",
      title: "Contact",
      url: "#contact",
    },
  ];



export const Navbar = () => {

    
    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState(false)
    
    return (
        <>
        <nav className="nav">
        {/* <div className="drop-logo">
        <div className="navbar-logo">
            <img src={logo} alt="logo" />
            </div>
        <div className="dropdown">
                        <img src={toggle ? close : menu} alt="menu icon" className="hamburger-menu" onClick={() => setToggle(!toggle)} />
                        <div className={`${!toggle ? 'hidden' : 'active'}`} id="toggle"></div>
            </div>
        </div> */}
                
                <div className="nav-inks">
                    <ul>
                    {navLinks.map((nav) => (
                        <li key={nav.id} className={active ==  nav.title ? "active" : "unactive"} onClick={() => setActive(nav.title)}>
                            <a href={nav.url}>{nav.title}</a>
                        </li>
                    ))}
                    </ul>
                    <div className="social-media">
                    <ul className="social-media">
                        <li><a href="https://github.com/JoseParra28" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i></a></li>
                        <li><a href="mailto:Jmjp_18@hotmail.com" target="_blank" rel="noopener"><i class="fa-regular fa-envelope"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/jose-p-b50556247/" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i></a></li>
                   
                    </ul> 
                    </div>
                   
                </div>
            
        </nav>
        </>
    )
}

