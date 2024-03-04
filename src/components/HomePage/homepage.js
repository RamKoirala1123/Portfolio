import React from 'react'
import About from "../About/about";
import Navbar from "../Navbar/Navbar";
// import Singleproject from "./components/Projectttt/singleproject";
import Work from "../work/work";
import SideBar from "../Sidebar/sidebar";
import Contact, { ContactUs } from "../Contact/contact";
import Home from '../CustomAnimation/home';
import ParticlesComponent from '../CustomAnimation/particlebackground';
import Skills from '../Skills/skills';

const HomePage = () => {
  return (
    <>  
  
    <div className="home">
    <SideBar />
    <div className="mainbody">
      
      <Navbar />
      <div className="body">
        <Home/>
        <About />
        <Work />
        <Skills/>
        {/* <About/> */}
        <ContactUs/>
        <ParticlesComponent id="particles"/>
      </div>
    </div>
  </div>
  </>
  )
}

export default HomePage
