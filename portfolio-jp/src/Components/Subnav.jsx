import { useState } from 'react'
import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
// import { Navbar } from './Navbar'


export const SubNav = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <div className="subnav">
            <div className="logo">
                <a href="#home"><img src={logo} alt="logo" /></a>
            </div>
            <div className="dropdown">
            <img src={toggle ? close : menu} alt="menu icon" className="hamburger-menu" onClick={() => setToggle(!toggle)} />
            <div className={`${!toggle ? 'hidden' : 'active'}`} id="toggle"></div>
                {/* <img src={menu} alt="" /> */}
            </div>
        </div>
    )
}