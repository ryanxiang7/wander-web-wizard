import { useState, useEffect, useRef, type RefObject } from 'react'
import Node, { type NodeController } from '~/components/node'
import Line from '~/components/line'
import Curve from '~/components/curve'
import Card from '~/components/card'
import { XOutlined } from '@ant-design/icons'
import { nodeData, type Node as NodeType } from '~/constant/mock'
import {
  NODE_HEIGHT,
  NODE_WIDTH,
  HORIZONTAL_SPACING,
  VERTICAL_SPACING,
  OFFSET_X,
  OFFSET_Y,
} from '~/constant/node-constant'
import './index.css'

enum CalcPositionType {
  /** 曲线连接 偶数行到奇数行 */
  CurveEven2Odd = 0,
  /** 曲线连接 从偶数行到奇数行 */
  CurveOdd2Even = 1,
  /** 直线链接 奇数行，从左到右 */
  LineOddLTR = 2,
  /** 直线链接 偶数行，从右到左 */
  LineOddRTL = 3,
}

export default function Main() {
  const [selectedNode, setSelectedNode] = useState<NodeType>()
  const [currentNodeIndex, setCurrentNodeIndex] = useState(0)
  const [markerPosition, setMarkerPosition] = useState({ top: 0, left: 0 })

  const nodeRefs = useRef<RefObject<NodeController>[]>([])
  const handleNext = () => {
    setCurrentNodeIndex((prevIndex) => (prevIndex + 1) % nodeData.length)
  }

  useEffect(() => {
    const updateMarkerPosition = () => {
      const index = currentNodeIndex
      const row = Math.floor(index / 3)
      const col = row % 2 === 0 ? index % 3 : 2 - (index % 3)

      const currX = OFFSET_X + col * HORIZONTAL_SPACING + NODE_WIDTH / 2
      const currY = OFFSET_Y + row * VERTICAL_SPACING + NODE_HEIGHT / 2

      setMarkerPosition({ top: currY, left: currX })
    }

    updateMarkerPosition()
  }, [currentNodeIndex])

  const getPosition = (type: CalcPositionType, prevRect: DOMRect, currRect: DOMRect): number[] => {
    switch (type) {
      case CalcPositionType.CurveEven2Odd: {
        return [prevRect.right, prevRect.top + prevRect.height / 2, currRect.right, currRect.top + currRect.height / 2]
      }
      case CalcPositionType.CurveOdd2Even: {
        return [prevRect.left, prevRect.top + prevRect.height / 2, currRect.left, currRect.top + currRect.height / 2]
      }
      case CalcPositionType.LineOddLTR: {
        return [prevRect.right, prevRect.top + prevRect.height / 2, currRect.left, currRect.top + currRect.height / 2]
      }
      case CalcPositionType.LineOddRTL: {
        return [prevRect.left, prevRect.top + prevRect.height / 2, currRect.right, currRect.top + currRect.height / 2]
      }
      default:
        return []
    }
  }

  return (
    <div className="app">
      <div className="map">
        <div className="map-title">今天去哪儿玩儿？</div>

        {/* 节点 */}
        {nodeData.map((node, index) => {
          const row = Math.floor(index / 3)
          const col = row % 2 === 0 ? index % 3 : 2 - (index % 3)
          return (
            <Node
              key={node.id}
              node={node}
              isCurrent={index === currentNodeIndex}
              onClick={() => setSelectedNode(node)}
              style={{
                top: `${OFFSET_Y + row * VERTICAL_SPACING}px`,
                left: `${OFFSET_X + col * HORIZONTAL_SPACING}px`,
              }}
              ref={nodeRefs.current[index]}
            />
          )
        })}
        {/* 线条和曲线 */}
        {nodeData.map((_, index) => {
          if (index === 0) return null
          const prevIndex = index - 1
          const prevNode = nodeRefs.current[prevIndex]
          const currNode = nodeRefs.current[index]

          if (!prevNode || !currNode) return null
          const prevRect = prevNode.current?.getBoundingClientRect()
          const currRect = currNode.current?.getBoundingClientRect()

          if (!prevRect || !currRect) return null

          if (Math.floor(prevIndex / 3) !== Math.floor(index / 3)) {
            // 换行时使用曲线连接
            if (Math.floor(index / 3) % 2 !== 0) {
              // 从奇数行到偶数行
              const [prevX, prevY, currX, currY] = getPosition(CalcPositionType.CurveEven2Odd, prevRect, currRect)
              return (
                // biome-ignore lint/suspicious/noArrayIndexKey: maybe it's not ok
                <Curve key={index} x1={prevX} y1={prevY} x2={currX} y2={currY} control={VERTICAL_SPACING} flag={true} />
              )
            } else {
              // 从偶数行到奇数行
              const [prevX, prevY, currX, currY] = getPosition(CalcPositionType.CurveOdd2Even, prevRect, currRect)
              return (
                <Curve
                  // biome-ignore lint/suspicious/noArrayIndexKey: maybe it's not ok
                  key={index}
                  x1={prevX}
                  y1={prevY}
                  x2={currX}
                  y2={currY}
                  control={VERTICAL_SPACING}
                  flag={false}
                />
              )
            }
          } else {
            // 同一行时使用直线连接

            const type =
              Math.floor(index / 3) % 2 === 0
                ? // 奇数行，从左到右
                  CalcPositionType.LineOddLTR
                : // 偶数行，从右到左
                  CalcPositionType.LineOddRTL
            const [prevX, prevY, currX, currY] = getPosition(type, prevRect, currRect)
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            return <Line key={index} x1={prevX} y1={prevY} x2={currX} y2={currY} />
          }
        })}
        <XOutlined
          src=""
          alt="aaaa"
          className="marker"
          style={{
            top: `${markerPosition.top + 100}px`,
            left: `${markerPosition.left + 85}px`,
            transition: 'top 0.5s, left 0.5s',
          }}
        />
        <button onClick={handleNext} className="next-position" type="button">
          下一个目的地
        </button>
      </div>
      {/* 详细介绍 */}
      {selectedNode && (
        <div className="popup">
          <Card node={selectedNode} onClose={() => setSelectedNode(undefined)} />
        </div>
      )}
    </div>
  )
}
