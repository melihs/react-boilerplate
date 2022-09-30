import React from "react";
import Dropdown from "./Dropdown";
import { HiChevronDown, HiUser } from "react-icons/hi";

export default {
  title: "Dropdown",
  parameters: {
    layout: "centered"
  },
  component: Dropdown,
  argTypes: {
    className: {
      description: "Bileşene ekstra class tanımlar."
    },
    menuButtonChild: {
      description:
        "Bileşenin buton içeriğini belirler. component ya da text olabilir.",
      control: "none"
    },
    children: {
      description: "Menüye yeni item eklemek için kullanılır.",
      control: "none"
    }
  }
};

const Template = (args) => (
  <Dropdown {...args}>
    <div
      className="ml-2 px-1 py-1 shadow-md bg-white rounded-2xl w-fit hover:bg-gray-200"
      role="menu">
      <a role="menuitem" tabIndex="-1" href="/login">
        <button className="group justify-center flex w-full items-center rounded-md px-2 py-2 text-sm">
          Logout
        </button>
      </a>
    </div>
  </Dropdown>
);

export const Default = Template.bind({});

Default.args = {
  className: "",
  menuButtonChild: (
    <>
      <HiUser />
      Test User
      <HiChevronDown className="ml-2 -mr-1 h-5 w-5" />
    </>
  )
};
