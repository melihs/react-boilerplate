import React from "react";
import { get } from "lodash";
import { func, array, string } from "prop-types";

const SelectBox = ({ options, name, onChange, value, className = "" }) => {
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <select
          onChange={onChange}
          name={name}
          value={value}
          className={`
            m-0
            p-3
            pr-5
            form-select
            shadow-md
            appearance-none
            block
            w-full
            text-base
            font-normal
            bg-white
            bg-clip-padding
            bg-no-repeat
            rounded-xl
            transition
            ease-in-out
            hover:cursor-pointer
            focus:text-gray
            focus:bg-white
            focus:outline-none 
            ${className}
          `}>
          {options &&
            options?.map((option, key) => (
              <option key={key} value={get(option, "value")}>
                {get(option, "name")}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default SelectBox;

SelectBox.propTypes = {
  onChange: func,
  value: string,
  className: string,
  name: string.isRequired,
  options: array.isRequired
};
