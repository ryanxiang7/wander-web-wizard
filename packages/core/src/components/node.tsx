import type { FC, RefObject } from 'react'
import { useImperativeHandle, useRef } from 'react'

export interface NodeProps {
  node: {
    id: number
    name: string
    arrive_time: string
    leave_time: string
    profile: string
  }
  isCurrent: boolean
  onClick: () => void
  style: React.CSSProperties
  ref: RefObject<NodeController>
}

export interface NodeController {
  getBoundingClientRect: () => DOMRect | undefined
}

const Node: FC<NodeProps> = ({ node, isCurrent, onClick, style, ref }) => {
  const nodeRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => ({
    getBoundingClientRect: () => nodeRef.current?.getBoundingClientRect(),
  }))

  return (
    <div style={style} className="node-container">
      <div className="profile">{node.profile}</div>
      <div className={`node${isCurrent ? ' current' : ''}`} onClick={onClick} ref={nodeRef}>
        {node.name}
      </div>
    </div>
  )
}

export default Node
