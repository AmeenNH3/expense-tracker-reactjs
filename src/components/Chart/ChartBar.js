import React from "react";
import "./ChartBar.css";

function ChartBar({ value, label, maxValue }) {
  let fillHeight = "0%";

  if (maxValue > 0) {
    fillHeight = Math.round((value / maxValue) * 100) + "%";
    console.log(fillHeight);
  }

  return (
    <div className="chartBar">
      <div className="chartBar--inner">
        <div className="chartBar--fill" style={{ height: fillHeight }}></div>
      </div>
      <div className="label">{label}</div>
    </div>
  );
}

export default ChartBar;
