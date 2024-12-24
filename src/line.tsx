import React from "react";

interface LineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const Line: React.FC<LineProps> = ({ x1, y1, x2, y2 }) => {
  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

  return (
    <div
      className="line"
      style={{
        width: `${length}px`,
        transform: `rotate(${angle}deg)`,
        transformOrigin: "0 0",
        position: "absolute",
        top: `${y1}px`,
        left: `${x1}px`,
      }}
    />
  );
};

export default Line;
