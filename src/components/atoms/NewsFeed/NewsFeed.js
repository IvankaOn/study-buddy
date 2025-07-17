import styled from "styled-components";

const NewsFeed = styled.div`
  max-width: 540px;
  width: 100%;
  border-left: 1px solid ${({ theme }) => theme.colors.easyGrey};
  padding-top: 20px;
`;
export default NewsFeed;
