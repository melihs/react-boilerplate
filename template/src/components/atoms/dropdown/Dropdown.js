import React, { Fragment } from "react";
import { node, string } from "prop-types";

import { Menu, Transition } from "@headlessui/react";

const Dropdown = ({ children, className = "", menuButtonChild }) => {
  return (
    <Menu as="div" className="justify-center text-base">
      <Menu.Button
        className={`${className} flex items-center gap-x-2.5 h-auto p-3 mb-2 rounded-2xl border-none outline-none shadow-md bg-white`}>
        {menuButtonChild}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="outline-none">{children}</Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  children: node,
  className: string,
  menuButtonChild: node
};
