import BarChart from "./BarChart";

export default {
  title: "Bar Chart",
  component: BarChart,
  argTypes: {
    options: {
      control: "none",
      description: "Bileşen ayarlarını belirler."
    },
    className: {
      description: "Bileşene ekstra class tanımlar."
    },
    dataSet: {
      description: "Bileşenin verisini belirler."
    }
  }
};

const Template = (args) => <BarChart {...args}></BarChart>;

export const Default = Template.bind({});

Default.args = {
  options: null,
  className: "",
  dataSet: [12, 14, 141, 193, 124, 45]
};
