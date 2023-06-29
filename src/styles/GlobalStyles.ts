import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
  --color-primary-black: #1B1B1B;
  --color-primary-white: #f2f3f4;

  --color-purple-primary: #9400d3;
  --color-purple-light: #d9bfff;
  --color-purple-dark: #3b0094;

  --color-gradient-purple: linear-gradient(135deg, var(--color-purple-light), var(--color-purple-primary));

  --color-yellow-primary: #d3b900;

  --width: 35rem;
}

::selection{
  background-color: var(--color-purple-light);
  color: var(--color-purple-dark);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	-webkit-tap-highlight-color: transparent;
}

body {
  font-family: 'Comfortaa', cursive;
  font-size: 1.6rem;
  font-weight: 400;
  background-color: var(--color-primary-black);
  color: var(--color-primary-white);
  overflow-x: hidden;
}

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
  border: none;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

`;

export default GlobalStyles;
