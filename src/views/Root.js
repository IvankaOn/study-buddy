import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "assets/styles/globalStyle";
import { theme } from "assets/styles/theme";
import styled, { ThemeProvider } from "styled-components";
import Navigation from "components/molecules/Navigation/Navigation";
import SideBar from "components/atoms/SideBar/SideBar";
import Logo from "components/atoms/Logo/Logo";
import SearchBar from "components/atoms/SearchBar/SearchBar";
import MainContainer from "components/atoms/MainContainer/MainContainer";
import NewsFeed from "components/atoms/NewsFeed/NewsFeed";
import Dashboard from "./Dashboard";
import AddUser from "./AddUser";
import UserProvider from "providers/UsersProvider";

const GlobalContainer = styled.div`
  display: flex;
`;

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalContainer>
          <SideBar>
            <Logo>
              Study<br></br> Buddy
            </Logo>
            <Navigation />
          </SideBar>
          <MainContainer>
            <UserProvider>
              <SearchBar />
              <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="/add-user" element={<AddUser />} />
              </Routes>
            </UserProvider>
          </MainContainer>
          <NewsFeed>University news feed</NewsFeed>
        </GlobalContainer>
      </ThemeProvider>
    </Router>
  );
};

Root.prototype = {};

export default Root;
