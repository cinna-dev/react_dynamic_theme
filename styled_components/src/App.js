import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "styled-components";
import { Theme1, Theme2, Default } from "./theme/theme";
import { GlobalStyles } from "./theme/global";

const App = () => {
  const [theme, setTheme] = useState(Default);

  const themeHandler = theme => {
    setTheme(theme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Navbar />
        <div className="container">
          <div
            onMouseEnter={() => themeHandler(Theme1)}
            onMouseLeave={() => themeHandler(Default)}
            className="theme-button theme-button1"
          >
            <span>Theme1</span>
          </div>
          <div
            onMouseEnter={() => themeHandler(Theme2)}
            onMouseLeave={() => themeHandler(Default)}
            className="theme-button theme-button2"
          >
            <span>Theme2</span>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
