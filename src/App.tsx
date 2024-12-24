import React, { useState, useEffect } from "react";
import Node from "./Node";
import Line from "./Line";
import Curve from "./Curve";
import Card1 from "./Card";
import { XOutlined } from "@ant-design/icons";
import "./App.css";

const nodeData = [
  {
    id: 1,
    name: "北京",
    arrive_time: "早上9点",
    leave_time: "早上10点",
    profile: "这里是北京天坛，它有着悠久的历史和独特的建筑。",
    images: [
      "https://picsum.photos/id/1011/800/600",
      "https://picsum.photos/id/1012/800/600",
      "https://picsum.photos/id/1013/800/600",
    ],
  },
  {
    id: 2,
    name: "B",
    arrive_time: "中午11点",
    leave_time: "中午12点",
    profile: "北京故宫是明清两代的皇家宫殿，规模宏大，建筑精美。",
    images: [
      "https://pic1.zhimg.com/v2-7d8c6d8d9d6688898c6789c655675a66_r.jpg",
      "https://pic4.zhimg.com/v2-9c8d8d9d668888898c6789c655675a66_r.jpg ",
    ],
  },
  {
    id: 3,
    name: "C",
    arrive_time: "下午1点",
    leave_time: "下午2点",
    profile: "四合院体现了老北京的传统居住文化充满生活气息。",
    images: [
      "https://pic2.zhimg.com/v2-9c8d8d9d668888898c6789c655675a66_r.jpg ",
      "https://pic3.zhimg.com/v2-8d9d6688898c6789c655675a66_r.jpg",
    ],
  },
  {
    id: 4,
    name: "D",
    arrive_time: "下午3点",
    leave_time: "下午4点",
    profile: "这里是一处很有特色的地方，有着别样的景致等待你去发现哦。",
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/301"],
  },
  {
    id: 5,
    name: "E",
    arrive_time: "下午5点",
    leave_time: "下午6点",
    profile: "北京22这个地方有着独特的韵味，值得细细品味一番",
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
  },
  {
    id: 6,
    name: "F",
    arrive_time: "晚上8点",
    leave_time: "晚上10点",
    profile: "北京33有着让人眼前一亮的特色，去了肯定会有收获呀。",
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
  },
  {
    id: 7,
    name: "H",
    arrive_time: "晚上8点",
    leave_time: "晚上10点",
    profile: "北京33有着让人眼前一亮的特色，去了肯定会有收获呀。",
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
  },
];


// todo: 1. 高度和宽度的设置应该由节点的个数动态的调整
const NODE_WIDTH = 80;
const NODE_HEIGHT = 40;
const HORIZONTAL_SPACING = 400;
const VERTICAL_SPACING = 200;
const OFFSET_X = 200;
const OFFSET_Y = 200;

export default function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [currentNodeIndex, setCurrentNodeIndex] = useState(0);
  const [markerPosition, setMarkerPosition] = useState({ top: 0, left: 0 });

  const handleNext = () => {
    setCurrentNodeIndex((prevIndex) => (prevIndex + 1) % nodeData.length);

  };

  useEffect(() => {
    const updateMarkerPosition = () => {
      const index = currentNodeIndex;
      const row = Math.floor(index / 3);
      const col = row % 2 === 0 ? index % 3 : 2 - (index % 3);

      const currX = OFFSET_X + col * HORIZONTAL_SPACING + NODE_WIDTH / 2;
      const currY = OFFSET_Y + row * VERTICAL_SPACING + NODE_HEIGHT / 2;

      setMarkerPosition({ top: currY, left: currX });
    };

    updateMarkerPosition();
  }, [currentNodeIndex]);


  return (
    <div className="app">
      <div className="map">
        {/* 节点 */}
        {nodeData.map((node, index) => {
          const row = Math.floor(index / 3);
          const col = row % 2 === 0 ? index % 3 : 2 - (index % 3);
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
            />
          );
        })}
        {/* 线条和曲线 */}
        {/* {nodeData.map((node, index) => {
          if (index === 0) return null;
          const prevX =
            OFFSET_X + ((index - 1) % 3) * HORIZONTAL_SPACING + NODE_WIDTH / 2;
          const prevY =
            OFFSET_Y +
            Math.floor((index - 1) / 3) * VERTICAL_SPACING +
            NODE_HEIGHT / 2;
          const currX =
            OFFSET_X + (index % 3) * HORIZONTAL_SPACING + NODE_WIDTH / 2;
          const currY =
            OFFSET_Y +
            Math.floor(index / 3) * VERTICAL_SPACING +
            NODE_HEIGHT / 2;

          if (Math.floor((index - 1) / 3) !== Math.floor(index / 3)) {
            return (
              <Curve key={index} x1={prevX} y1={prevY} x2={currX} y2={currY} />
            );
          } else {
            return (
              <Line key={index} x1={prevX} y1={prevY} x2={currX} y2={currY} />
            );
          }
        })} */}
        {/* 标记 动漫小人儿？x!!!启动！！ */}
        <XOutlined
          src=""
          alt="aaaa"
          className="marker"
          style={{
            top: `${markerPosition.top + 100}px`,
            left: `${markerPosition.left + 85}px`,
          }}
        />
        <button onClick={handleNext}>下一个目的地</button>
      </div>
      {/* 详细介绍 */}
      {selectedNode && (
        <div className="popup">
          <Card1
            node={selectedNode}
            onClose={() => setSelectedNode(null)}
          ></Card1>
        </div>
      )}
    </div>
  );










}
