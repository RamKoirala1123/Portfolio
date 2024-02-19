import React from 'react'
import "./sidebar.css"
import Bullet from '../UI/Bullet/bullet'
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="side-content">
              <NavLink to="/" className="side-item">
                Home
              </NavLink>
              <NavLink to="#about" className="side-item">
                Skills
              </NavLink>
              <NavLink to="#project" className="side-item">
                Project
              </NavLink>
              <NavLink to="#contact" className="side-item">
                Contact Me
              </NavLink>
        </div>
    </div>
  )
}

export default SideBar
