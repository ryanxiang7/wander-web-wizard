import type React from 'react'

interface CurveProps {
  x1: number
  y1: number
  x2: number
  y2: number
  control: number
  flag: boolean
}

const Curve: React.FC<CurveProps> = ({ x1, y1, x2, y2, control, flag }) => {
  const [controlPointX1, controlPointY1, controlPointX2, controlPointY2] = flag
    ? [x1 + control / 4, y1 + control / 4, x2 + control / 4, y2 - control / 4]
    : [x1 - control / 4, y1 + control / 4, x2 - control / 4, y2 - control / 4]

  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }} width="100%" height="100%">
      <path
        d={`M${x1},${y1} C${controlPointX1},${controlPointY1} ${controlPointX2},${controlPointY2} ${x2},${y2}`}
        stroke="rgb(239, 148, 44)"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export default Curve
