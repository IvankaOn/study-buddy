import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "components/atoms/Button/Button";
import Average from "components/atoms/Average/Average";
import { theme } from "assets/styles/theme";

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 24px 0;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

const UserListName = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 0;
  line-height: 0.4;
`;

const UsersListItem = ({ userData: { average, name, attendance = "0%" } }) => (
  <Wrapper>
    <Average average={average} />
    <div style={{ color: theme.colors.dark }}>
      <UserListName>{name}</UserListName>
      <span style={{ fontSize: theme.fontSize.s }}>
        attendance: {attendance}
      </span>
    </div>
    <Button />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
