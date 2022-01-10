import React from "react";
import Chart from "./Chart/Chart";
import "./ExpenseChart.css";
function ExpenseChart(props) {
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
      <Chart></Chart>
    </div>
  );
}

export default ExpenseChart;
