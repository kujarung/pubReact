import React from "react";

export default function CircleProgress(props) {
  const { width, percent, small } = props;
  const max = Math.ceil((Math.PI * 2 * (width - 20)) / 2);
  const circleFill = Math.ceil((max / 100) * percent);
  const { color, railColor } = props;
  return (
    <div className="tc">
      <svg className="circle-chart" width={width} height={width}>
        <defs>
          <filter id="innershadow" x0="0%" y0="0%" width={width} height={width}>
            <feGaussianBlur
              in="SourceAlpha"
              stdDeviation="1"
              result="blur"
            ></feGaussianBlur>
            <feComposite
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowDiff"
            ></feComposite>
            <feFlood floodColor="#000" floodOpacity="0.5"></feFlood>
            <feComposite in2="shadowDiff" operator="in"></feComposite>
            <feComposite
              in2="SourceGraphic"
              operator="over"
              result="firstfilter"
            ></feComposite>

            <feGaussianBlur
              in="firstfilter"
              stdDeviation="1"
              result="blur2"
            ></feGaussianBlur>
            <feComposite
              in2="firstfilter"
              operator="arithmetic"
              k2="0"
              k3="1"
              result="shadowDiff"
            ></feComposite>
          </filter>
        </defs>

        <circle
          filter="url(#innershadow)"
          className="circle-chart__background"
          stroke={railColor ? railColor : "#F6F6F6"}
          strokeWidth={small ? "5" : "10"}
          fill="none"
          cx={width / 2}
          cy={width / 2}
          r={width / 2 - 10}
        />
        <circle
          className="circle-chart__circle"
          stroke={color ? color : "#1769ff"}
          strokeWidth={small ? "3" : "8"}
          strokeDasharray={`${circleFill},${max}`}
          strokeLinecap="round"
          fill="none"
          cx={width / 2}
          cy={width / 2}
          r={width / 2 - 10}
        />
      </svg>
    </div>
  );
}
