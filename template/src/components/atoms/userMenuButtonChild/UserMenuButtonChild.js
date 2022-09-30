import React from "react";
import { string } from "prop-types";
import { HiChevronDown, HiUser } from "react-icons/hi";

const UserMenuButtonChild = ({ userName }) => {
  return (
    <>
      <HiUser />
      {userName}
      <HiChevronDown className="ml-2 -mr-1 h-5 w-5" />
    </>
  );
};

export default UserMenuButtonChild;

UserMenuButtonChild.propTypes = {
  userName: string.isRequired
};
