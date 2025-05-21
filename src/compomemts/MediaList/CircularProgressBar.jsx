import React from "react";

const CircularProgressBar = ({
  percent = 0,
  size = 3,
  strokeWidth = 0.25,
  strokeColor ,
}) => {
  const PI = 3.14;
  const radius = size / 2 - strokeWidth;
  const perimeter = 2 * Math.PI * radius;
  return (
    <div>
      <svg width={`${size}vw`} height={`${size}vw`}>
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke="white"
          strokeWidth={`${strokeWidth}vw`}
        />
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          fill="none"
          stroke={strokeColor}
          strokeWidth={`${strokeWidth}vw`}
          strokeDasharray={`${perimeter}vw`} //dash {1 3} => dash 1 gap 3 | dash 1 gap 3 | ....
          // Chu vi = 2*pi*r = 2*3.14*20 = 125,6px
          strokeDashoffset={`${perimeter - (percent / 100) * perimeter}vw`}
          // offset = chu vi - persen/100 * chu vi
          transform="rotate(-90)"
          style={{ transformOrigin: "center" }}
          strokeLinecap="round"
        />
        <text
          x={`${size / 2}vw`}
          y={`${size / 2}vw`}
          fontSize="1.2vw"
          fill="white"
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {percent}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
