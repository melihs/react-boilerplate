import React from "react";
import { node, string } from "prop-types";

const CardHeader = ({ children, className = "" }) => {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
};

export default CardHeader;

CardHeader.propTypes = {
  children: node,
  className: string
};
