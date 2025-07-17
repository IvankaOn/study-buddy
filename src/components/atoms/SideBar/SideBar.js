import styled from "styled-components";

const SideBar = styled.div`
  max-width: 110px;
  width: 100%;
  position: relative;
  border-right: 1px solid ${({ theme }) => theme.colors.easyGrey};
`;

export default SideBar;
