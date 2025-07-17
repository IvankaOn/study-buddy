import styled from "styled-components";

const CenteredContainer = styled.div`
  background-color: ${({ theme, bgColor }) => bgColor || theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
`;

export default CenteredContainer;
