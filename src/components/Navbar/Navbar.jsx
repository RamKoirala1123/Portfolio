import React, { useState } from 'react'
import './Navbar.css'
import 'material-symbols';
import MobileNav from '../MobileNav/MobileNav';
import DarkMode from '../DarkMode/DarkMode';
import { useTheme } from '../DarkMode/themecontext';
import { NavLink } from 'react-router-dom';
import resume from '../resume/Ram_Koirala_Resume.pdf';
import { Link } from 'react-router-dom';
import CustomButton from '../Button/CustomButton';


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
            className='resume'
          >
            {/* My Resume */}
            <CustomButton name="My CV" />
            {/* {darkMode ? (
              <img src="./assets/image/darklogo.svg" alt="Logo" className='logo' />
            ) : (
              <img src="./assets/image/lightlogo.svg" alt="Logo" className='logo' />
            )} */}
          </Link>

          <ul>
            {/* <li>
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
            </li> */}
            <div className="svg-container">
              {/* Facebook */}
              <a href="https://www.facebook.com/ramkoirala1123" target="_blank"> 
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30" fill="var(--svg-fill-color)">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
              </a>
            </div>
            <div className="svg-container">
              {/* github */}
              <a href="https://github.com/RamKoirala1123" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30" fill="var(--svg-fill-color)">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
              </a>
            </div>
            <div className="svg-container">
              {/* linkedin */}
              <a href="https://www.linkedin.com/in/ramkoirala1123/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" fill="var(--svg-fill-color)">
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
              </a>
            </div>
            <DarkMode/>
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
