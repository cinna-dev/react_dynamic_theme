import React, { useState } from "react";
import { ThemeProvider } from "react-jss";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

const themeDefault = {
  primary: "rgb(56, 56, 56)",
  secondary: "rgb(104, 104, 104)",
};
const theme1 = {
  primary: "rgb(60, 71, 104)",
  secondary: "rgb(84, 135, 218)",
};
const theme2 = {
  primary: "rgb(95, 49, 35)",
  secondary: "rgb(212, 112, 82)",
};

const App = () => {
  const [theme, setTheme] = useState(themeDefault);

  const themeHandler = theme => {
    setTheme(theme);
  };
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar />
        <Container
          callback={themeHandler}
          themes={{ themeDefault, theme1, theme2 }}
        />
      </>
    </ThemeProvider>
  );
};

export default App;
