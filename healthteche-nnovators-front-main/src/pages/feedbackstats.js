import React, { useState, useEffect } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";
import ChartCard from "./charts";

function Chart() {
  const [data, setData] = useState([]);
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    getFeeds();
    fetch(`/api/feedbacks/`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const getFeeds = async () => {
    fetch(`https://healthitfeed-production.up.railway.app/api/?format=json`)
      .then((res) => res.json())
      .then((data) => {
        setFeeds(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const chartData = {
    labels: ["Waiting Time", "Lab courtesy", "querry_response", "relability"],
    datasets: [
      {
        label: "Data",
        data: data.map((datum) => [
          datum.waiting_time,
          datum.lab_courtesy,
          datum.querry_response,
          datum.relability,
        ]),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: [
          "rgb(255, 99, 132)",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
        ],
        tension: 0.1,
      },
    ],
  };

  const chartWaitingTime = {
    labels: data.map((datum) => [datum.name, datum.waiting_time]),
    datasets: [
      {
        label: "Waiting Time",
        data: data.map((datum) => datum.waiting_time),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-12 bg-white dark:bg-gray-900">
    <div  style={{ width: 1000 }}>
      <h1 className="text-xl dark:text-white font-bold">Facilities Responses</h1>
      <div className="mx-auto p-8">
      <div className="grid gap-3 mx-10 grid-cols-3  ">
      {feeds.map((feed) => (

        <div key={feed.id}>
          <ChartCard key={feed.id} chart={feed} />
        </div>
      ))}
       
      </div>
      </div>
    </div>
    </div>
   
  );
}

export default Chart;
