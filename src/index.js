import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './components/DarkMode/themecontext';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer} from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
        <ToastContainer />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

