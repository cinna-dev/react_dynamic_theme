This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Dynamic Theme mit **Styled Components** in React

## Kann ein GlobaleStyle benutzen welches themes verarbeiten kann

```js
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
background-color: ${({ theme }) => theme.primary};
transition: all .5s linear;
}
```

## Erstelle Themes

```js
export const Default = {
  name: "Default",
  primary: "rgb(56, 56, 56)",
  secondary: "rgb(104, 104, 104)",
};
export const Theme1 = {
  name: "Theme1",
  primary: "rgb(60, 71, 104)",
  secondary: "rgb(84, 135, 218)",
};
```

## Provide die Themes mit hilfe des **ThemeProvider** von styled-components und add die GlobalStyles inside

```js
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/global";

const App = () => {
  return (
    <ThemeProvider theme={theme }>
      <GlobalStyles />
     {...}
    </ThemeProvider>
  );
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

`4000`
