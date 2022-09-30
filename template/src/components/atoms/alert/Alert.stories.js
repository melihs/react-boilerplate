import Alert from "./Alert";

export default {
  title: "Alert",
  component: Alert,
  argTypes: {
    children: {
      description: "Bileşen içeriğini belirler."
    },
    variant: {
      control: {
        type: "select",
        options: ["info", "success", "danger", "warning"]
      },
      description:
        "Bileşenin, arka plan rengi tanımlı değerleri belirler: <strong>info</strong> ,<strong>success</strong>," +
        " <strong>danger</strong>, <strong>warning</strong>"
    }
  }
};

const Template = (args) => <Alert {...args}></Alert>;

export const Info = Template.bind({});
Info.args = {
  fontSize: "20",
  variant: "info",
  borderRadius: "10",
  children: "Info alert"
};

export const Danger = Template.bind({});
Danger.args = {
  fontSize: "20",
  variant: "danger",
  borderRadius: "10",
  children: "Danger alert"
};

export const Warning = Template.bind({});
Warning.args = {
  fontSize: "20",
  variant: "warning",
  borderRadius: "10",
  children: "Warning Alert"
};

export const Success = Template.bind({});
Success.args = {
  fontSize: "20",
  variant: "success",
  borderRadius: "10",
  children: "Success Alert"
};
