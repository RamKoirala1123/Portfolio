import React, { createContext, useContext, useState, useEffect, } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('selectedTheme') === 'dark'
    );

    useEffect(() => {
        document.querySelector("body").setAttribute('data-theme', darkMode ? 'dark' : 'light');
        localStorage.setItem('selectedTheme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const toggleDarkMode = (e) => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('selectedTheme', newDarkMode ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
