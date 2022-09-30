import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    className: {
      description: "Bileşene ekstra class tanımlar."
    },
    variant: {
      control: {
        type: "select",
        options: ["info", "success", "danger", "warning", "primary"]
      },
      description: "Bileşenin rengini belirler."
    },
    borderRadius: {
      description: "Bileşenin kenar yuvarlaklağını belirler."
    },
    children: {
      description: "Bileşenin içeriğini belirler."
    },
    onClick: {
      description: "Bileşenin tetiklendiğinde yapacağı işlemi belirler."
    }
  }
};

const Template = (args) => <Button {...args}></Button>;

export const Default = Template.bind({});
Default.args = {
  variant: "",
  borderRadius: "10",
  children: "Default"
};

export const Info = Template.bind({});
Info.args = {
  variant: "info",
  borderRadius: "10",
  children: "Info"
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  borderRadius: "10",
  children: "Primary"
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  borderRadius: "10",
  children: "Warning"
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  borderRadius: "10",
  children: "Success"
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  borderRadius: "10",
  children: "Danger"
};
