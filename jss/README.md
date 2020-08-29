This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Dynamic Theme mit **JSS** in React

## Erstelle ein useStyles mit styles für alle Componenten

```js
export const useStyles = createUseStyles(theme => ({
  themeButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.primary,
    width: "300px",
    height: "400px",
    transition: "all 0.5s linear",
    color: theme.primary,
    borderRight: `2px solid ${theme.primary}`,
    backgroundColor: theme.secondary,
  },
}));
```

## JSS Kann auch globale css elemente manipulieren

```js
 "@global": {
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
    body: { backgroundColor: theme.primary, transition: "all 0.5s linear" },
  },
```

## Erstelle Themes

```js
const themeDefault = {
  primary: "rgb(56, 56, 56)",
  secondary: "rgb(104, 104, 104)",
};
const theme1 = {
  primary: "rgb(60, 71, 104)",
  secondary: "rgb(84, 135, 218)",
};
```

## Provide die Themes mit hilfe des **ThemeProvider** von _react-jss_ und pass dem theme

```js
import { ThemeProvider } from "react-jss";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
     {...}
    </ThemeProvider>
  );
};
```

## import **useTheme** von _react-jss_ und deine useStyles

useTheme holt die theme provided im Dom tree und wird in die useStyles gepassed.
return sind themed classes.

```js
import { useStyles } from "../style/style";
import { useTheme } from "react-jss";

const Container = ({ themes, callback }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  console.log(themes);
  return (
    <div className={classes.container}>
    ...
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

`5000`
