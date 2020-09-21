import React from "react";

export default function CircleProgress(props) {
  const { width, percent, small } = props;
  const max = Math.ceil((Math.PI * 2 * (width - 20)) / 2);
  const circleFill = Math.ceil((max / 100) * percent);
  return (
    <div className="tc">
      <svg className="circle-chart" width={width} height={width}>
        <circle
          className="circle-chart__background"
          stroke="#efefef"
          strokeWidth={small ? "5" : "10"}
          fill="none"
          cx={width / 2}
          cy={width / 2}
          r={width / 2 - 10}
        />
        {circleFill == "0" ? null : (
          <circle
            className="circle-chart__circle"
            stroke="#1769ff"
            strokeWidth={small ? "3" : "6"}
            strokeDasharray={`${circleFill},${max}`}
            strokeLinecap="round"
            fill="none"
            cx={width / 2}
            cy={width / 2}
            r={width / 2 - 10}
          />
        )}
      </svg>
    </div>
  );
}
