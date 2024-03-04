import {React,useState} from 'react'
import "./sidebar.css"
import Bullet from '../UI/Bullet/bullet'
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  const [activeItem, setActiveItem] = useState('homepage');
  const scrollToComponent = (componentId) => {
    setActiveItem(componentId);
    const component = document.getElementById(componentId);
    if (component) {
      const headerOffset = 70;
      const elementPosition = component.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY  - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
};

  return (
    <div className='sidebar'>
        <div className="side-content">
            <div  className={activeItem === 'homepage' ? 'side-item active' : 'side-item'}  onClick={() => scrollToComponent('homepage')}> 
                Home
              </div>
            <div to="/about"  className={activeItem === 'about' ? 'side-item active' : 'side-item'} onClick={() => scrollToComponent('about')}>
                About
              </div>
            <div to="/project" className={activeItem === 'project' ? 'side-item active' : 'side-item'} onClick={() => scrollToComponent('project')}>
                Project
              </div>
          <div to="/project" className={activeItem === 'skills' ? 'side-item active' : 'side-item'} onClick={() => scrollToComponent('skills')}>
                Skills
              </div>
           
            <div to="/contact"  className={activeItem === 'contactus' ? 'side-item active' : 'side-item'} onClick={() => scrollToComponent('contactus')}>
                Contact Me
              </div>
          
        </div>
    </div>
  )
}

export default SideBar
// import React from 'react'
// import "./sidebar.css"
// import Bullet from '../UI/Bullet/bullet'
// import { NavLink } from 'react-router-dom';

// const SideBar = () => {
//   return (
//     <div className='sidebar'>
//         <div className="side-content">
          
//             <NavLink to="/" className="side-item">
//                 Home
//               </NavLink>
         
//             <NavLink to="/about" className="side-item">
//                 Skills
//               </NavLink>
            
//             <NavLink to="/project" className="side-item">
//                 Project
//               </NavLink>
//                <NavLink to="/contact" className="side-item">
//                 Contact Me
//               </NavLink>
          
              
              
              
          
//         </div>
//     </div>
//   )
// }

// export default SideBar
