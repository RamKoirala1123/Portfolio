import React from 'react'
import './MobileNav.css'
import DarkMode from '../DarkMode/DarkMode'
import { NavLink } from 'react-router-dom';
const MobileNav = ({ isOpen, toogleMenu }) => {

    return <>
        <div className={`mobile-menu ${isOpen ? "active" : ""} `}
            onClick={toogleMenu}
        >
            <div className="mobile-menu-content">
                <img src="./assets/image/darklogo.svg" alt="Logo" className='logo' />
                <ul>
                <li>
              <NavLink to="/"  className="nav-item">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about"  className="nav-item">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/project"  className="nav-item">
                Project
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-item">
                Contact Me
              </NavLink>
            </li>
                    <DarkMode />
                </ul>
            </div>
        </div>
    </>
}

export default MobileNav
