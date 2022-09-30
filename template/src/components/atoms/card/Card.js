import React from "react";
import { node, string } from "prop-types";

const Card = ({ className, children }) => {
  return <div className={`p-2 shadow-sm ${className}`}>{children}</div>;
};

export default Card;

Card.propTypes = {
  children: node,
  className: string
};
