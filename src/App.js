import React, { useState, useEffect } from 'react';
import './App.css';
import './css/switcher.css';

function App() {
  // state definition
  const [colorTheme, setColorTheme] = useState('theme-white');

  // effect (side effect)
  useEffect(() => {
    // Check for selected (stored) theme in local Storage
    const currentThemeColor = localStorage.getItem('theme-color');
    // if found set selected theme value in stat
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    };
  }, []);

  // set theme
  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme-color', theme)
  }

  return (
    <div className={`App ${colorTheme}`}>
      <div className='theme-options'>
        <div id="theme-white"
          onClick={() => handleClick("theme-white")}
          className={`${colorTheme === 'theme-white' 
            ? 'active' : ''}`}  
        />
        <div id="theme-blue"
          onClick={() => handleClick("theme-blue")}
          className={`${colorTheme === 'theme-blue' 
            ? 'active' : ''}`}  
        />
        <div id="theme-orange"
          onClick={() => handleClick("theme-orange")}
          className={`${colorTheme === 'theme-orange' 
            ? 'active' : ''}`}  
        />
        <div id="theme-purple"
          onClick={() => handleClick("theme-purple")}
          className={`${colorTheme === 'theme-purple' 
            ? 'active' : ''}`}  
        />
        <div id="theme-green"
          onClick={() => handleClick("theme-green")}
          className={`${colorTheme === 'theme-green' 
            ? 'active' : ''}`}  
        />
        <div id="theme-black"
          onClick={() => handleClick("theme-black")}
          className={`${colorTheme === 'theme-black' 
            ? 'active' : ''}`}  
        />
      </div>
      <div className="content-box">
        <h3>Multiple Themes Switcher/ React</h3>
        <h5>(ReactJS, SCSS/CSS, Local Storage)</h5>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <p>-- Carlos Botero-Vargas</p>
      </div>
    </div>
  );
}

export default App;
