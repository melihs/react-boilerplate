import { string } from "prop-types";

import "./style.scss";

const Alert = (props) => {
  const {
    variant = "",
    borderRadius = "10px",
    fontSize = "12px",
    children
  } = props;

  const style = {
    fontSize: `${fontSize}px`,
    borderRadius: `${borderRadius}px`
  };

  let colorVariant = "";

  switch (variant) {
    case "danger":
      colorVariant = "danger-variant";
      break;
    case "warning":
      colorVariant = "warning-variant";
      break;
    case "info":
      colorVariant = "info-variant";
      break;
    case "success":
      colorVariant = "success-variant";
      break;
    default:
      colorVariant = "default-variant";
  }

  return (
    <div
      style={style}
      className={`alert ${colorVariant} rounded-lg py-5 px-6 mb-3 text-base inline-flex items-center w-full alert-dismissible fade show`}
      role="alert">
      {children}
      <button
        type="button"
        className="btn-close box-content w-4 h-4 p-1 ml-auto border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:opacity-75 hover:no-underline"
        data-bs-dismiss="alert"
        aria-label="Close"></button>
    </div>
  );
};

export default Alert;

Alert.propTypes = {
  variant: string,
  borderRadius: string,
  fontSize: string,
  children: string
};
