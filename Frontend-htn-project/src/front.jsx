import Chart from "chart.js/auto";
import React from "react";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Distance v Time (Milliseconds)",
      backgroundColor: "#00FFF6", // Dark green background
      borderColor: "#00FFF6", // Dark green border color
      borderWidth: 2,
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const options = {
  scales: {
    x: {
      ticks: {
        color: "#00FFF6",
      },
      grid: {
        color: "#F3C556", // White grid lines for x-axis
      },
    },
    y: {
      ticks: {
        color: "#00FFF6",
      },
      grid: {
        color: "#F3C556", // White grid lines for y-axis
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
  },
};

const LineChart = () => {
  return (
    <div style={{width:"70vw", height:"65vh"}}>
      <Line  data={data} options={options} />
    </div>
  );
};

export default LineChart;
