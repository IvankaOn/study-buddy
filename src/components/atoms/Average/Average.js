import { theme } from "assets/styles/theme";
import React from "react";
import styled from "styled-components";

const getBackgroundColor = (average) => {
  const avg = parseFloat(average);
  return avg < 2
    ? theme.colors.error
    : avg < 3
      ? theme.colors.warning
      : theme.colors.success;
};

const StyledAverage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ average }) => getBackgroundColor(average)};
  color: white;
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 50%;
  width: 34px;
  height: 34px;
  font-weight: bold;
  margin-right: 24px;
`;

const Average = ({ average }) => (
  <StyledAverage average={average}>{average}</StyledAverage>
);

export default Average;
