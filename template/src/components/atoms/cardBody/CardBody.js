import React from "react";
import { node, string } from "prop-types";

const CardBody = ({ children, className = "" }) => {
  return <div className={`h-auto ${className}`}>{children}</div>;
};

export default CardBody;

CardBody.propTypes = {
  children: node,
  className: string
};
