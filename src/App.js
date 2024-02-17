import About from "./components/About/about";
import { ThemeProvider } from "./components/DarkMode/themecontext";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from 'react-router-dom'
import Singleproject from "./components/Projectttt/singleproject";
import Work from "./components/work/work";


function App() {
  return (
  
    <ThemeProvider>
        <Router>
          <Navbar />  
          <div className="mainbody">
          <Work/>
          <About /> 
          </div>
        
        </Router>
    </ThemeProvider>
  );
}

export default App;
