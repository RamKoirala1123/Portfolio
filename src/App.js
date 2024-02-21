import About from "./components/About/about";
import { ThemeProvider } from "./components/DarkMode/themecontext";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from 'react-router-dom'
import Singleproject from "./components/Projectttt/singleproject";
import Work from "./components/work/work";
import SideBar from "./components/Sidebar/sidebar";
import BackToTop from "./components/Utils/Backtotop/Backtotop";
import Idea from "./components/idea/idea";


function App() {
  return (

      <Router>
        <div className="home">
        <SideBar />
        <div className="mainbody"> 
           <Navbar />
           <div className="body">
           <About />
          <Work />
           </div>
        </div>
        </div>
        <BackToTop/>
      </Router>

  );
}

export default App;
