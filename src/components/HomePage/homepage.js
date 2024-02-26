import React from 'react'
import About from "../About/about";
import Navbar from "../Navbar/Navbar";
// import Singleproject from "./components/Projectttt/singleproject";
import Work from "../work/work";
import SideBar from "../Sidebar/sidebar";
import Contact from "../Contact/contact";

const HomePage = () => {
  return (
    
    <div className="home">
    <SideBar />
    <div className="mainbody">
      <Navbar />
      <div className="body">
        <About />
        <Work />
        <Contact/>
      </div>
    </div>
  </div>
  )
}

export default HomePage
