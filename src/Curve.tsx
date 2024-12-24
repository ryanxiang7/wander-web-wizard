import React from "react";

interface CurveProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const Curve: React.FC<CurveProps> = ({ x1, y1, x2, y2 }) => {
  const controlPointX1 = x1 + (x2 - x1) / 2;
  const controlPointY1 = y1;
  const controlPointX2 = x1 + (x2 - x1) / 2;
  const controlPointY2 = y2;

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        overflow: "visible",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <path
        d={`M${x1},${y1} C${controlPointX1},${controlPointY1} ${controlPointX2},${controlPointY2} ${x2},${y2}`}
        stroke="black"
        fill="transparent"
      />
    </svg>
  );
};

export default Curve;
