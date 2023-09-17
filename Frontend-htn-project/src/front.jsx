import React from "react";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Distance v Time (Milliseconds)",
      backgroundColor: "rgba(0, 128, 0, 0.2)", // Dark green background
      borderColor: "#008000", // Dark green border color
      borderWidth: 2,
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const options = {
  scales: {
    x: {
      grid: {
        color: "white", // White grid lines for x-axis
      },
    },
    y: {
      grid: {
        color: "white", // White grid lines for y-axis
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
    <div style={{ width: "600px", height: "300px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
