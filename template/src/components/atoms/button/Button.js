import React from "react";
import { func, string } from "prop-types";

import "./style.scss";

const Button = (props) => {
  const { variant = "", borderRadius = "10px", children, onClick } = props;

  const style = {
    borderRadius: `${borderRadius}px`
  };

  let colorVariant = "";

  switch (variant) {
    case "primary":
      colorVariant = "btn-primary";
      break;
    case "danger":
      colorVariant = "btn-danger";
      break;
    case "warning":
      colorVariant = "btn-warning";
      break;
    case "info":
      colorVariant = "btn-info";
      break;
    case "success":
      colorVariant = "btn-success";
      break;
    case "secondary":
      colorVariant = "btn-secondary";
      break;
    default:
      colorVariant = "btn-default";
  }

  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className={`${colorVariant} btn btn-container`}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: func,
  variant: string,
  children: string,
  borderRadius: string
};
