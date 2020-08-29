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

.navbar {
background-color: ${({ theme }) => theme.secondary};
color: ${({ theme }) => theme.primary};
position: relative;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
padding: .5rem 1rem;
flex-basis: auto;
-webkit-box-flex: 1;
-ms-flex-positive: 1;
flex-grow: 1;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
transition: all .5s linear;

}

.nav {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
padding-left: 0;
margin-bottom: 0;
list-style: none;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
padding-inline-start: 40px;

li {
    a {
        padding: 2rem;
    }
}
}

.container {
width: 100%;
height: 500px;
display: flex;
align-items: center;
justify-content: center;
}

.theme-button {
display: flex;
align-items: center;
justify-content: center;
width: 300px;
height: 400px;
transition: all .5s linear;

}

.theme-button1{
color: ${({ theme }) =>
  theme.name === "Theme1" || "Default" ? theme.primary : ""};
border-right: 2px solid ${({ theme }) =>
  theme.name === "Theme1" || "Default" ? theme.primary : ""};
background-color: ${({ theme }) =>
  theme.name === "Theme1" || "Default" ? theme.secondary : ""};
}


.theme-button2 {
color: ${({ theme }) =>
  theme.name === "Theme2" || "Default" ? theme.primary : ""};
border-right: 2px solid ${({ theme }) =>
  theme.name === "Theme2" || "Default" ? theme.primary : ""};
background-color:  ${({ theme }) =>
  theme.name === "Theme2" || "Default" ? theme.secondary : ""};
}
  `;
