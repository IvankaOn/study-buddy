import React, { useContext } from "react";
import CenteredContainer from "components/atoms/CenteredContainer/CenteredContainer";
import UsersList from "components/organisms/UsersList/UsersList";
import { UserContext } from "providers/UsersProvider";

const Dashboard = () => {
  const { users } = useContext(UserContext);
  return (
    <CenteredContainer>
      <UsersList title="Users List" users={users} />
    </CenteredContainer>
  );
};

export default Dashboard;
