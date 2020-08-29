import React from "react";
import { useTheme } from "react-jss";
import { useStyles } from "./../style/style";
const Navbar = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <nav className={classes.navbar}>
      <a>Navbar</a>
      <ul className={classes.nav}>
        <li>
          <a>category1</a>
        </li>
        <li>
          <a>category2</a>
        </li>
        <li>
          <a>category3</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
