import React from "react";
import UsersList from "components/organisms/UsersList/UsersList";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/globalStyle";
import { theme } from "assets/styles/theme";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* width: ${() => `${window.innerWidth / 2}px`}; */
  height: 100vh;
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <UsersList />
    </Wrapper>
  </ThemeProvider>
);

Root.prototype = {};

export default Root;
