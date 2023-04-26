import React from "react";
import { useLocation } from "react-router-dom";
import { Line, Bar, Pie } from "react-chartjs-2";

const ViewFeed = (props) => {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  const labels = [
    "Waiting Time",
    "Lab Courtesy",
    "Query Response",
    "Lab Reliability",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Client Responded",
        backgroundColor: ["rgb(255, 99, 132)", "#244D70", "#D123B3", "#F7E018"],
        borderColor: "rgb(255, 99, 132)",
        data: [
          state.waiting_time,
          state.lab_courtesy,
          state.querry_response,
          state.lab_reliability,
        ],
      },
    ],
  };
  return (
    <div>
      {/* <h1>{state.name}</h1>
        <h1>{state.position}</h1>
        <h1>{state.services_liked}</h1>
        <h1>{state.services_unliked}</h1>
        <h1>{state.suggestions}</h1> */}
      <div className="px-4   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
        <div className="p-8 rounded shadow-xl sm:p-16">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h2 className="font-sans mb-12 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                <h1>{state.name}</h1>
              </h2>
              <p>
                <h2 className="font-bold text-2xl  text-gray-900">Position</h2>
                <h1>{state.position}</h1>
                <h2 className="font-bold text-2xl   text-gray-900">Services liked</h2>
                <h1>{state.services_liked}</h1>
                <h2 className="font-bold text-2xl  text-gray-900">Services unliked</h2>
                <h1>{state.services_unliked}</h1>
                <h2 className="font-bold text-2xl   text-gray-900">Suggestions</h2>
                <h1>{state.suggestions}</h1>
              </p>
            </div>
            <div className="lg:w-1/2">
              <p className="mb-4 text-base text-gray-700">
                <Pie className="dark:text-white" data={data} />
                {/* <Bar className="dark:text-white" data={data} />
                <Line className="dark:text-white" data={data} /> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewFeed;
