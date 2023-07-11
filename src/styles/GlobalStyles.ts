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

  --width: 40rem;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 30000rem;
    background-color: #828282;
		border: 1px solid #d9bfff33;
  }
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
