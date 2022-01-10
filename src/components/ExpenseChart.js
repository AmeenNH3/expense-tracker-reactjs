import React from "react";
import Chart from "./Chart/Chart";
import "./ExpenseChart.css";
function ExpenseChart(props) {
  let dataPoints = [
    {
      label: "Jan",
      value: +0,
    },
    {
      label: "Feb",
      value: +0,
    },
    {
      label: "Mar",
      value: +0,
    },
    {
      label: "Apr",
      value: +0,
    },
    {
      label: "May",
      value: +0,
    },
    {
      label: "Jun",
      value: +0,
    },
    {
      label: "Jul",
      value: +0,
    },
    {
      label: "Aug",
      value: +0,
    },
    {
      label: "Sep",
      value: +0,
    },
    {
      label: "Oct",
      value: +0,
    },
    {
      label: "Nov",
      value: +0,
    },
    {
      label: "Dec",
      value: +0,
    },
  ];

  console.log(dataPoints);

  for (const expense of props.expenses) {
    // let month = expense.date.toLocaleString("en-US", { month: "long" });
    let month = expense.date.getMonth();
    // console.log(month);

    dataPoints[month].value = dataPoints[month].value + expense.amount;
  }

  console.log(dataPoints);

  function closeChartHandler() {
    props.closeChart();
  }
  return (
    <div className="expense-chart">
      <div className="close-icon-div">
        <ion-icon
          onClick={closeChartHandler}
          className="close-icon"
          name="close-outline"
        ></ion-icon>
      </div>
      <Chart dataPoints={dataPoints}></Chart>
    </div>
  );
}

export default ExpenseChart;
