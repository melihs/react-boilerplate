import React from "react";
import { node, string } from "prop-types";
import { usePopperTooltip } from "react-popper-tooltip";

const Tooltip = ({ children, message = "" }) => {
  const {
    visible,
    setTriggerRef,
    setTooltipRef,
    getArrowProps,
    getTooltipProps
  } = usePopperTooltip({ placement: "auto" });

  return (
    <>
      <button type="button" ref={setTriggerRef}>
        {children}
      </button>

      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({
            className:
              "tooltip-container text-white bg-dark p-2 rounded-md shadow-lg whitespace-normal"
          })}>
          {message}
          <div {...getArrowProps({ className: "tooltip-arrow" })} />
        </div>
      )}
    </>
  );
};

export default Tooltip;

Tooltip.propTypes = {
  message: string,
  children: node
};
