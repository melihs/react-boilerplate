import Spinner from "./Spinner";

export default {
  title: "Spinner",
  component: Spinner,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    size: {
      description: "Bileşenin boyutunu belirler.",
      control: {
        type: "select",
        options: ["small", "large", "default"]
      }
    },
    className: {
      description: "Bileşene ekstra class tanımlar."
    },
    variant: {
      description: "Bileşenin rengini belirler.",
      control: {
        type: "select",
        options: ["red", "green", "gray", "blue", "black"]
      }
    }
  }
};

const Template = (args) => <Spinner {...args}></Spinner>;

export const Default = Template.bind({});

Default.args = {
  size: "",
  variant: "",
  className: ""
};
