import About from "./components/About/about";
import { ThemeProvider } from "./components/DarkMode/themecontext";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
// import Singleproject from "./components/Projectttt/singleproject";
import Work from "./components/work/work";
import SideBar from "./components/Sidebar/sidebar";
import BackToTop from "./components/Utils/Backtotop/Backtotop";
import Idea from "./components/idea/idea";
import Contact from "./components/Contact/contact";
import Project from "./components/Project/project";
import HomePage from "./components/HomePage/homepage";
import { Cursor } from "custom-pointer-react";


function App() {
  return (

    <Router>
      <Routes>
          <Route path="/project/:id" element={<Project/>}/>
          <Route path="/" element={<HomePage/>}/>
                    </Routes>
      {/* <Project/> */}
      {/* <div className="home">
        <SideBar />
        <div className="mainbody">
          <Navbar />
          <div className="body">
            <About />
            <Work />
            <Contact/>
          </div>
        </div>
      </div> */}
      <BackToTop />
    </Router>

  );
}

export default App;
