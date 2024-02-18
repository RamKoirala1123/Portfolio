import About from "./components/About/about";
import { ThemeProvider } from "./components/DarkMode/themecontext";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from 'react-router-dom'
import Singleproject from "./components/Projectttt/singleproject";
import Work from "./components/work/work";
import SideBar from "./components/Sidebar/sidebar";


function App() {
  return (
  
    <ThemeProvider>
        <Router>
          <Navbar />  
          <div className="mainbody">
          <About /> 
          <Work/>
         
          </div>
        
        </Router>
    </ThemeProvider>
  );
}

export default App;
