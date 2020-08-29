import React, { useContext } from "react";
import { ThemeContext } from "../themeContext/ThemeContext";

const Navbar = props => {
  console.log();
  const theme = useContext(ThemeContext);
  return (
    <nav className={`navbar ${theme}`}>
      <a>Navbar</a>
      <ul className="nav">
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
