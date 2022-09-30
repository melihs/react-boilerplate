import React from "react";
import { Line } from "react-chartjs-2";
import { array, object, string } from "prop-types";
import { get, keys, map, merge, uniq, values } from "lodash";
import {
  Title,
  Legend,
  Tooltip,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Chart as ChartJS
} from "chart.js";

ChartJS.register(
  Title,
  Legend,
  Tooltip,
  LinearScale,
  LineElement,
  PointElement,
  CategoryScale
);

const LineChart = ({ chartData, dataSet, options, className = "" }) => {
  const lineChartData = {
    labels: keys(get(chartData, "items")),
    datasets: [
      {
        data: dataSet,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132)",
        tension: 0.5
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
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = get(context, "dataset.label") || "";
            label += new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: get(
                uniq(
                  map(values(get(chartData, "items")), (d) =>
                    get(d, "currency")
                  )
                ),
                "0"
              )
            }).format(context.parsed.y);
            return label;
          }
        }
      }
    },
    scaleShowLabels: false,
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    }
  };

  return (
    <Line
      className={className}
      options={options ? merge(defaults, options) : defaults}
      data={lineChartData}
    />
  );
};

export default LineChart;

LineChart.propTypes = {
  dataSet: array,
  options: object,
  className: string,
  chartData: object
};
