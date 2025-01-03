import {useEffect, useState} from "react"
import React from "react"
import { Link } from "react-router-dom"
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import logo from '../assets/logo.png'
import '../Styles/App.css'
import { SubNav } from "./Subnav"
import { navLinks, socialLinks } from "../js"


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
                      {socialLinks.map((social) => (
                        <li key={social.id} >
                          <a href={social.url} target={social.target}> <i className={social.iconId}></i> </a>
                        </li>
                      ))}
                    </ul> 
                    </div>                 
                </div>
        </nav>
        </>
    )
}

