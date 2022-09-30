import DoughnutChart from "./DoughnutChart";

export default {
  title: "Doughnut Chart",
  component: DoughnutChart,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    className: {
      description: "Bileşene ekstra class tanımlar."
    },
    doughnutChart: {
      description: "Bileşenin verisini ve ayarlarını belirler."
    }
  }
};

const Template = (args) => (
  <div className="w-fit">
    <DoughnutChart {...args}></DoughnutChart>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  doughnutChart: {
    data: {
      labels: ["Occupancy", "Non occupied days"],
      weight: 2,
      datasets: [
        {
          data: ["19.00", "81.00"],
          backgroundColor: ["rgb(178,25,64)", "rgb(168,193,189)"]
        }
      ]
    },
    showText: false
  },
  className: ""
};
