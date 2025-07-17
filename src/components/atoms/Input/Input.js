import styled from "styled-components";

export const Input = styled.input`
  padding: 10px 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px 0px rgba(115, 124, 142, 0.09);

  border-radius: 25px;
  width: 100%;

  &:focus {
    outline: none;
    transition: 0.3;
    border-color: ${({ theme }) => theme.colors.lightPurple};
    box-shadow: -2px 4px 10px 0px rgba(25, 26, 27, 0.09);
  }
`;
