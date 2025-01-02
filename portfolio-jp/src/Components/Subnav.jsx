import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'
// import { Navbar } from './Navbar'


export const SubNav = () => {


    return (
        <div className="subnav">
            <div className="logo">
                <a href="#home"><img src={logo} alt="logo" /></a>
            </div>
            <div className="dropdown">
                <img src={menu} alt="" />
            </div>
        </div>
    )
}