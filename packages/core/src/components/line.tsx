import type React from 'react'

interface LineProps {
  x1: number
  y1: number
  x2: number
  y2: number
}

const Line: React.FC<LineProps> = ({ x1, y1, x2, y2 }) => {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgb(239, 148, 44)" className="line" strokeWidth="7" />
    </svg>
  )
}

export default Line
