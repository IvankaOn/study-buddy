import styled from "styled-components";

const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  forn-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  text-align: end;
  padding: 13px 15px;
  margin: 20px 0;
`;

export default Logo;
