import React from "react";
import { useStyles } from "../style/style";
import { useTheme } from "react-jss";

const ThemeButton = ({ title, callback, themeDefault, myTheme }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div
      onMouseEnter={() => callback(myTheme)}
      onMouseLeave={() => callback(themeDefault)}
      className={classes.themeButton}
    >
      <span>{title}</span>
    </div>
  );
};

export default ThemeButton;
