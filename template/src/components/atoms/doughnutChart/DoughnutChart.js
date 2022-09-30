import React from "react";
import { get, merge } from "lodash";
import { Doughnut } from "react-chartjs-2";
import { object, string } from "prop-types";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ doughnutChart, className = "" }) => {
  const defaults = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${get(context, "label")}: % ${get(context, "formattedValue")}`
        }
      }
    },
    centerText: {
      display: true,
      text: `90%`
    }
  };

  const plugins = [
    {
      beforeDraw(chart) {
        const { width } = chart;
        const { height } = chart;
        const { ctx } = chart;
        ctx.restore();
        const fontSize = (height / 320).toFixed(2);
        ctx.font = `${fontSize}em sans-serif`;
        ctx.textBaseline = "middle";
        const text = `${localStorage.getItem("doughnut_chart_text")}`;
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }
  ];

  return (
    <Doughnut
      className={className}
      data={get(doughnutChart, "data")}
      options={
        get(doughnutChart, "options")
          ? merge(defaults, get(doughnutChart, "options"))
          : defaults
      }
      plugins={get(doughnutChart, "showText") ? plugins : ""}
    />
  );
};

export default DoughnutChart;

DoughnutChart.propTypes = {
  className: string,
  doughnutChart: object
};
