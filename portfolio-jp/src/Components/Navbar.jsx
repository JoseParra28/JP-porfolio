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
                        <li><a href="https://www.twitter.com" target="_blank" rel="noopener"><i className="fab fa-twitter-square"
                    id="twitter"></i></a></li>
                    <li><a href="https://www.youtube.com" target="_blank" rel="noopener"><i className="fab fa-youtube-square"
                    id="youtube"></i></a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener"><i className="fab fa-instagram"
                    id="instagram"></i></a></li>
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener"><i className="fa-brands fa-facebook"
                    id="facebook"></i></a></li>
                    </ul> 
                    </div>
                   
                </div>
            
        </nav>
        </>
    )
}

