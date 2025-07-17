import React, { useState, useEffect } from "react";
import { users, users as usersData } from "data/users";

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users) {
        resolve([...users]);
      } else {
        reject({ message: "error" });
      }
    }, 2000);
  });
};

export const UserContext = React.createContext({
  user: [],
  handleAddUser: () => {},
  deleteUser: () => {},
  isLoading: "",
});

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const [isLoading, setLoadingState] = useState("");

  useEffect(() => {
    setLoadingState(true);

    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (value) => {
    const newUser = {
      name: value.name,
      attendance: value.attendance,
      average: value.average,
    };

    setUsers([newUser, ...users]);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        handleAddUser,
        deleteUser,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
