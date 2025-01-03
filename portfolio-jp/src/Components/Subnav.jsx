import { useState } from 'react'
import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import { navLinks, socialLinks } from '../js'


export const SubNav = () => {

    const [toggle, setToggle] = useState(false)
    const [active, setActive] = useState("")
    const [toggles, setToggles] = useState(false)

    return (
        <div className="subnav">
            <div className="logo">
                <a href="#home"><img  href="#home" onClick={() => {window.scrollTo(0, 0);}} src={logo} alt="logo" /></a>
            </div>
            <div className="dropdown">
            <img src={toggle ? close : menu} alt="menu icon" className="hamburger-menu" onClick={() => setToggle(!toggle)} />
            <div className={`${!toggle ? 'hidden' : 'active'}`} id="toggle">
            <nav className="nav">
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
            </div>
            </div>
        </div>
    )
}