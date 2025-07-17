import styled from "styled-components";
import { Input } from "../Input/Input";

const SearchBarStyled = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.easyGrey};
  padding: 19px 0;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 35px;
`;

const SearchTitle = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-right: 45px;
  & span {
    display: block;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const SearchBar = () => (
  <SearchBarStyled>
    <SearchWrapper>
      <SearchTitle>
        Logged as: <span>Teacher</span>
      </SearchTitle>
      <Input style={{ padding: "14px 45px", maxWidth: "50%", color: "#C0C7D6" }} type="search"></Input>
    </SearchWrapper>
  </SearchBarStyled>
);

export default SearchBar;
