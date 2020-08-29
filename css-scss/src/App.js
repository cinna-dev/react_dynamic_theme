import React, { useState, useContext } from "react";
import "./style/style.scss";
import { ThemeContext } from "./themeContext/ThemeContext";
import Navbar from "./components/Navbar";

const App = () => {
  const [theme, setTheme] = useState("");

  const themeHandler = theme => {
    setTheme(theme);
    const body = (document.getElementsByTagName("body")[0].className = theme);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Navbar />
      <div className="container">
        <div
          onMouseEnter={() => themeHandler("theme1")}
          onMouseLeave={() => themeHandler("")}
          className={`theme-button theme-button1 ${theme}`}
        >
          <span>Theme1</span>
        </div>
        <div
          onMouseEnter={() => themeHandler("theme2")}
          onMouseLeave={() => themeHandler("")}
          className={`theme-button theme-button2 ${theme}`}
        >
          Theme2
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
