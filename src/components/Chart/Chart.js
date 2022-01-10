import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  console.log(props);
  const values = props.dataPoints.map((dataPoint) => {
    return Math.round(dataPoint.value);
  });

  const sum = values.reduce((prev, curr) => {
    return Math.round(prev + curr);
  });

  console.log(values);

  const maxValue = Math.max(...values);
  console.log(maxValue);
  return (
    <div className="chart-container">
      <div className="chart">
        {props.dataPoints.map((dataPoint) => {
          return (
            <ChartBar
              key={dataPoint.label}
              value={dataPoint.value}
              label={dataPoint.label}
              maxValue={maxValue}
            ></ChartBar>
          );
        })}
      </div>
      <div className="info-container">
        <p className="total-amount-spent">Total amount spent: ${sum}</p>
        <p className="max-amount-spent">Maximum amount spent on a month: ${maxValue}</p>
      </div>
    </div>
  );
}

export default Chart;
