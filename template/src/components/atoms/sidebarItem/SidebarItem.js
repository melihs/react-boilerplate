import React from "react";
import { node, string } from "prop-types";

const SidebarItem = ({ children = "", className = "" }) => {
  return (
    <div
      className={`text-gray flex flex-col items-center gap-y-4 text-base font-bold cursor-pointer ${className}`}>
      {children}
    </div>
  );
};

export default SidebarItem;

SidebarItem.propTypes = {
  children: node,
  className: string
};
