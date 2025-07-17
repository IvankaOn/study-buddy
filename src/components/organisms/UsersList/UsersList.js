import React, { useContext } from "react";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import styled from "styled-components";
import MainWrapper from "components/atoms/MainWrapper/MainWrapper";
import { Title } from "components/atoms/Title/Title";
import { UserContext } from "providers/UsersProvider";

const ListWrapper = styled.ul`
  padding: 0;
  margin-top: 30px;
  overflow-y: auto;
  max-height: 55vh;
`;

const UsersList = ({ users }) => {
  const { isLoading } = useContext(UserContext);

  return (
    <>
      <MainWrapper>
        <Title>{isLoading ? "loading..." : "Users List"}</Title>
        <ListWrapper>
          {users.map((userData, i) => (
            <UsersListItem index={i} key={userData.name} userData={userData} />
          ))}
        </ListWrapper>
      </MainWrapper>
    </>
  );
};

/* class UsersList extends React.Component {
  state = {
    users,
  };
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  deleteUser = (name) => {
    const filteredUsers = this.state.users.filter((user) => user.name !== name);
    this.setState({ users: filteredUsers });
  };

  render() {
    const { title } = this.props;

    return (
      <Wrapper>
        <div>
          <h1>{title}</h1>
          <ul style={{ padding: 0 }}>
            {this.state.users.map((userData, i) => (
              <UsersListItem
                deleteUser={this.deleteUser}
                index={i}
                key={userData.name}
                userData={userData}
              />
            ))}
          </ul>
        </div>
      </Wrapper>
    );
  }
} */

export default UsersList;
