import React from "react";
import { node, string } from "prop-types";

const CardItem = ({ children, className }) => {
  return <span className={`${className}`}>{children}</span>;
};

export default CardItem;

CardItem.propTypes = {
  children: node,
  className: string
};
