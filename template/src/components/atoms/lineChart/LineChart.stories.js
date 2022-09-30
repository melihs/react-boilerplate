import LineChart from "./LineChart";

export default {
  title: "LineChart",
  component: LineChart,
  argTypes: {
    options: {
      description: "Bileşen ayarlarını belirler."
    },
    chartData: {
      description: "Bileşenin label vs. gibi diğer verilerini belirler."
    },
    dataSet: {
      description: "Bileşenin verisini belirler."
    },
    className: {
      description: "Bileşene ekstra class tanımlar."
    }
  }
};

const Template = (args) => <LineChart {...args}></LineChart>;

export const Default = Template.bind({});

Default.args = {
  chartData: {
    items: {
      Mar: {
        currency: "EUR",
        occupancy: "0.00"
      },
      Apr: {
        currency: "EUR",
        occupancy: "0.00"
      },
      May: {
        currency: "EUR",
        occupancy: "0.00"
      },
      Jun: {
        currency: "EUR",
        occupancy: "0.00"
      },
      Jul: {
        currency: "EUR",
        occupancy: "6.00"
      },
      Aug: {
        currency: "EUR",
        occupancy: "19.00"
      }
    }
  },
  dataSet: [0, 12, 100, 0, -21, 165]
};
