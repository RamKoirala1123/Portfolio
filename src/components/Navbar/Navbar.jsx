import React, { useState } from 'react'
import './Navbar.css'
import 'material-symbols';
import MobileNav from '../MobileNav/MobileNav';
import DarkMode from '../DarkMode/DarkMode';
import { useTheme } from '../DarkMode/themecontext';
import { NavLink } from 'react-router-dom';
import resume from '../resume/resume.pdf';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const { darkMode } = useTheme();
  const [openMenu, setOpenMenu] = useState(false);
  const toogleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <MobileNav isOpen={openMenu} toogleMenu={toogleMenu} />
      <nav className="navbar">
        <div className="nav-content">
          <Link
            to={resume}
            download="Ram_Koirala_Resume"
            target="_blank"
            rel="noreferrer"
          >
            {/* {darkMode ? (
              <img src="./assets/image/darklogo.svg" alt="Logo" className='logo' />
            ) : (
              <img src="./assets/image/lightlogo.svg" alt="Logo" className='logo' />
            )} */}
          </Link>

          <ul>
            <li>
              <NavLink to="/" className="nav-item">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-item">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" className="nav-item">
                Project
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-item">
                Contact Me
              </NavLink>
            </li>
            {/* <button className="contact-btn">
              Hire me
            </button> */}
            <DarkMode />
          </ul>

          <button class="menu-btn" onClick={toogleMenu}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}>
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar
