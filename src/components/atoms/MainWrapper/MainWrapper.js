import styled from "styled-components";

const MainWrapper = styled.div`
  margin: 25px;
  background-color: ${({ theme, bgColor }) => bgColor || theme.colors.white};
  width: 100%;
  max-width: ${({ width }) => width || "500px"};
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

export default MainWrapper;
