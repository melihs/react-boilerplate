import React, { useState } from "react";
import { string } from "prop-types";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import Sidebar from "../../molecules/sidebar/Sidebar";

const NavMenu = ({ className = "" }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div
      className={`flex flex-row items-start justify-between gap-x-3 desktop:hidden ${className}`}>
      <nav>
        <section className="flex">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}>
            <HiMenuAlt3 size={40} color="gray" />
          </div>
          <div
            className={`${
              !isNavOpen
                ? "hidden"
                : `bg-white flex flex-col justify-evenly tablet:justify-start tablet:overflow-auto mobile:justify-start items-center
                 shadow-md fixed h-screen top-0 left-0 z-10 w-1/2 tablet:w-40 mobile:w-1/2 mobile:overflow-auto`
            }`}>
            <div
              className="absolute top-0 right-0 p-2"
              onClick={() => setIsNavOpen(false)}>
              <HiX size={40} color="gray" />
            </div>
            <Sidebar className="gap-y-3 tablet:gap-y-12 mobile:gap-y-1.5 tablet:mt-20 text-center min-h-[250px]" />
          </div>
        </section>
      </nav>
    </div>
  );
};

export default NavMenu;

NavMenu.propTypes = {
  className: string
};
