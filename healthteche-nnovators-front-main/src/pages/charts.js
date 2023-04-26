import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";

const ChartCard = ({ chart }) => {

  const chatState = {
    name: chart.name,
    position: chart.position,
    waiting_time: chart.waiting_time,
    lab_courtesy: chart.lab_courtesy,
    querry_response:chart.querry_response,
    lab_reliability:chart.lab_reliability,
    services_liked:chart.services_liked,
    services_unliked:chart.services_unliked,
    suggestions:chart.suggestions
  };
  const labels = ["Waiting Time", "Lab Courtesy", "Query Response", "Lab Reliability"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Client Responded",
        backgroundColor: [
          "rgb(255, 99, 132)",
          "#244D70",
          "#D123B3",
          "#F7E018",
        
        ],
        borderColor: "rgb(255, 99, 132)",
        data: [chart.waiting_time, chart.lab_courtesy, chart.querry_response,chart.lab_reliability],
      },
    ],
  };
  console.log(chart.name);
  if(data.datasets[0].backgroundColor[0]){
    console.log("red")
  }
  return (
    <div>
      {
        

      }
   <Link state={chatState} to="/feed"> <h1  className="text-center dark:text-white"> {chart.name} </h1> </Link> 
     <h1 className="text-center dark:text-white">{chart.position}</h1> 
      <Pie className="dark:text-white"  data={data} />
    </div>
  );
};

export default ChartCard;
