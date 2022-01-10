import React from "react";
import "./ChartBar.css";

function ChartBar() {
  return (
    <div className="chartBar">
      <div className="chartBar--inner">
        <div className="chartBar--fill"></div>
      </div>
      <div className="label">Jan</div>
    </div>
  );
}

export default ChartBar;
