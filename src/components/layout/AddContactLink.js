import React from "react";
import { NavLink } from "react-router-dom";

const AddContactLink = () => {
  return (
    <button className="ui red compact button">
      <NavLink
        activeStyle={{ color: "white", bottom: "0" }}
        style={{ color: "white" }}
        to="/create"
      >
        Add Contact
      </NavLink>
    </button>
  );
};

export default AddContactLink;
