import styled from "styled-components";

const Button = styled.button`
  padding: 8px 25px;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark};
  margin: 15px 0;
  cursor: pointer;
  &:hover {
    transition: 0.3;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.easyGrey};
  }
`;

export default Button;
