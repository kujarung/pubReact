import React from "react";

export default function CircleProgress(props) {
  const percent1 = props.percent1;
  const percent2 = props.percent2;
  const percent3 = props.percent3;
  return (
    <div className="tc">
      <svg width="100%" height="100%" viewBox="0 0 42 42">
        <defs>
          <filter id="innershadow2" x0="0%" y0="0%" width={10} height={10}>
            <feGaussianBlur
              in="SourceAlpha"
              stdDeviation="0.2"
              result="blur"
            ></feGaussianBlur>
            <feComposite
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowDiff"
            ></feComposite>
            <feFlood floodColor="#000" floodOpacity="0.75"></feFlood>
            <feComposite in2="shadowDiff" operator="in"></feComposite>
            <feComposite
              in2="SourceGraphic"
              operator="over"
              result="firstfilter"
            ></feComposite>

            <feGaussianBlur
              in="firstfilter"
              stdDeviation="3"
              result="blur2"
            ></feGaussianBlur>
            <feComposite
              in2="firstfilter"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowDiff"
            ></feComposite>
          </filter>
        </defs>
        <circle cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
        <circle
          filter="url(#innershadow2)"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#F6F6F6"
          stroke-width="1.2"
        ></circle>

        <circle
          cx="21"
          cy="21"
          r="15.91549430918954"
          strokeLinecap="round"
          fill="none"
          stroke="#1769FF"
          strokeWidth="1"
          strokeDasharray={`${percent1 - 1.2}, ${100 - percent1 + 1.2}`}
          strokeDashoffset="25"
        ></circle>

        <circle
          cx="21"
          cy="21"
          r="15.91549430918954"
          strokeLinecap="round"
          fill="none"
          stroke="#002872"
          strokeWidth="1"
          strokeDasharray={`${percent2 - 1.2}, ${100 - percent2 + 1.2}`}
          strokeDashoffset={100 - percent1 + 25}
        ></circle>

        <circle
          cx="21"
          cy="21"
          r="15.91549430918954"
          strokeLinecap="round"
          fill="none"
          stroke="#9ABEFF"
          strokeWidth="1"
          strokeDasharray={`${percent3 - 1.2}, ${100 - percent3 + 1.2}`}
          strokeDashoffset={100 - (percent1 + percent2) + 25}
        ></circle>
      </svg>
    </div>
  );
}
