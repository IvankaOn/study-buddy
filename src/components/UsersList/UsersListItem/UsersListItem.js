import React from "react";
import PropTypes from "prop-types";

const UsersListItem = ({ userData: { average, name, attendance = "0%" } }) => (
  <li>
    {console.log(userData)}
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
    <button>X</button>
  </li>
);

UsersListItem.PropTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
