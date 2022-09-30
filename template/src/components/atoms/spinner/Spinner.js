import React from "react";
import { string } from "prop-types";

const Spinner = ({ variant = "black", size = "", className = "" }) => {
  let sizeVariant = "";

  switch (size) {
    case "small":
      sizeVariant = "w-4 h-4";
      break;
    case "large":
      sizeVariant = "w-12 h-12";
      break;
    default:
      sizeVariant = "w-8 h-8";
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div
        className={`spinner-border animate-spin bg-white inline-block border-4 rounded-full text-${variant} ${sizeVariant}`}
        role="status"></div>
    </div>
  );
};

export default Spinner;

Spinner.propTypes = {
  size: string,
  variant: string,
  className: string
};
