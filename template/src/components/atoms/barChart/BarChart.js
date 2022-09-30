import React from "react";
import {
  Title,
  Legend,
  Tooltip,
  BarElement,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Chart as ChartJS
} from "chart.js";
import { merge } from "lodash";
import { Bar } from "react-chartjs-2";
import { array, object, string } from "prop-types";

ChartJS.register(
  Title,
  Legend,
  Tooltip,
  BarElement,
  LinearScale,
  LineElement,
  PointElement,
  CategoryScale
);

const BarChart = ({ dataSet, options, className = "" }) => {
  const barChartData = {
    labels: [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "now",
      "dec"
    ],
    datasets: [
      {
        data: dataSet,
        backgroundColor: "rgb(255, 99, 132)"
      }
    ]
  };

  const defaults = {
    responsive: true,
    barShowLabels: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <Bar
      redraw
      className={className}
      options={options ? merge(defaults, options) : defaults}
      data={barChartData}
    />
  );
};

export default BarChart;

BarChart.propTypes = {
  dataSet: array,
  options: object,
  className: string
};
