import React from "react";
import Chart from "chart.js/auto";
import { Line, Bar, Pie } from "react-chartjs-2";
import { useState, useEffect } from "react";

const labels = ["Very Bad", "Bad", "Good", "Very Good", "Excellent", ];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Client Responses",
      backgroundColor: [
        "rgb(255, 99, 132)",
        "#244D70",
        "#D123B3",
        "#F7E018",
        "#fff",
        "#FE452A",
      ],
      borderColor: "rgb(255, 99, 132)",
      data: [2, 10, 70, 5, 2, 20, 30],
    },
  ],
};

const Stats = () => {
  return (
    <div style={{width:400}} className="h-400 w-200">
      <h1>Stats</h1>
      <Line data={data} />
      <Pie width={400} data={data} />
      <Bar data={data} />
    </div>
  );
};

export default Stats;
