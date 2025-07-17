import React from "react";
import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "assets/icons/delete-icon.svg";

const StyledButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.grey};
  /*   background-color: ${(props) =>
    props.secondary ? "#cw5wd6;" : "#c8c7d6;"}; */
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin-left: 14px;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const CircleButton = (props) => (
  <StyledButton {...props}>
    <DeleteIcon />
  </StyledButton>
);

export default CircleButton;
