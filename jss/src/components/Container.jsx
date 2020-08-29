import React from "react";
import ThemeButton from "./ThemeButton";
import { useStyles } from "../style/style";
import { useTheme } from "react-jss";

const Container = ({ themes, callback }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  console.log(themes);
  return (
    <div className={classes.container}>
      <ThemeButton
        callback={callback}
        themeDefault={themes.themeDefault}
        myTheme={themes.theme1}
        title="theme1"
      />
      <ThemeButton
        callback={callback}
        themeDefault={themes.themeDefault}
        myTheme={themes.theme2}
        title="theme2"
      />
    </div>
  );
};

export default Container;
