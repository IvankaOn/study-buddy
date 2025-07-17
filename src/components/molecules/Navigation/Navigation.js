import styled from "styled-components";
import { StyledNavLink } from "./StyledNavLink";

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;
  font-weight: bold;
  gap: 20px;
  }
`;

const Navigation = () => (
  <NavWrapper>
    <StyledNavLink to="/">Dashboard</StyledNavLink>
    <StyledNavLink to="/add-user">Add User</StyledNavLink>
    <StyledNavLink to="/">Settings</StyledNavLink>
    <StyledNavLink to="/">Logout</StyledNavLink>
  </NavWrapper>
);

export default Navigation;
