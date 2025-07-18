import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

html {
box-sizing: border-box;
}

*, *::after, *::before {
box-sizing: border-box;
}
body {
font-family: 'Montserrat', sans-serif;
  background-color: ${({ theme }) => theme.colors.lightGrey};

}
a, button {
font-family: 'Montserrat', sans-serif;
}
`;
