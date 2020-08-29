This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Dynamic Theme mit css / scss

## spezielle css classes für die themes

```scss
.navbar {
  background-color: map-get(map-get($theme, "default"), "secondary");
  color: map-get(map-get($theme, "default"), "primary");
  transition: all 0.5s linear;
}

.navbar.theme1 {
  background-color: map-get(map-get($theme, "theme1"), "secondary");
  color: map-get(map-get($theme, "theme1"), "primary");
}

.navbar.theme2 {
  background-color: map-get(map-get($theme, "theme2"), "secondary");
  color: map-get(map-get($theme, "theme2"), "primary");
}
```

## theme state in app.js passed down the dom tree via ein state container wie z.B Redux oder useContext etc...

```javaScript
const ThemeContext = React.createContext(null);

const App = () => {
  return (
    <ThemeContext.Provider value={theme}>
     {...}
    </ThemeContext.Provider>
  );
};
```

## state theme class passed in die componenten

```javaScript
const Navbar = props => {
  console.log();
  const theme = useContext(ThemeContext);
  return (
    <nav className={`navbar ${theme}`}>
```

## proplematisch sind jedoch die DOM Elemente die nicht als Componenten vertreten sind wie z.B Body , html etc...

## Diese müssen außerhalb des virtuellen DOMs manipuliert werden

zum Beispeiel:

```javaScript
 const themeHandler = theme => {
    setTheme(theme);
    const body = (document.getElementsByTagName("body")[0].className = theme);
  };
```

## Installation

```Bash
npm install
```

### Run app

```Bash
npm start
```

### Port

`3000`
