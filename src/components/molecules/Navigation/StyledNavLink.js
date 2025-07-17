import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  position: relative;
  display: block;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
  padding: 15px 0;
  padding-right: 22px;

  &.active {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 4px;
    width: 18px;
    background-color: ${({ theme }) => theme.colors.easyGrey};
  }
`;
