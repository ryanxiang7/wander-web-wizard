import React, { useState, useEffect,useRef} from "react";
import Node from "./components/Node";
import Line from "./components/Line";
import Curve from "./components/Curve";
import Card1 from "./components/Card";
import { XOutlined } from "@ant-design/icons";
import "./App.css";

//todo 节点之间的连线应该要有出行方式与时间
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
  {
    id: 8,
    name: "D",
    arrive_time: "下午3点",
    leave_time: "下午4点",
    profile: "这里是一处很有特色的地方，有着别样的景致等待你去发现哦。",
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/301"],
  },
  {
    id: 9,
    name: "E",
    arrive_time: "下午5点",
    leave_time: "下午6点",
    profile: "北京22这个地方有着独特的韵味，值得细细品味一番",
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
  },
  {
    id: 10,
    name: "F",
    arrive_time: "晚上8点",
    leave_time: "晚上10点",
    profile: "北京33有着让人眼前一亮的特色，去了肯定会有收获呀。",
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
  },
  {
    id: 11,
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
const HORIZONTAL_SPACING = 300;
const VERTICAL_SPACING = 180;
const OFFSET_X = 200;
const OFFSET_Y = 100;

export default function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [currentNodeIndex, setCurrentNodeIndex] = useState(0);
  const [markerPosition, setMarkerPosition] = useState({ top: 0, left: 0 });
  const [isMarkerVisible, setIsMarkerVisible] = useState(true);

  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);



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
        <div className="map-title">今天去哪儿玩儿？</div>
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
              ref={(el) => (nodeRefs.current[index] = el)}
            />
          );
        })}
        {/* 线条和曲线 */}
        {nodeData.map((node, index) => {
          if (index === 0) return null;
          const prevIndex = index - 1;
          const prevNode = nodeRefs.current[prevIndex];
          const currNode = nodeRefs.current[index];

          if (!prevNode || !currNode) return null;

          const prevRect = prevNode
            .querySelector(".node")!
            .getBoundingClientRect();
          const currRect = currNode
            .querySelector(".node")!
            .getBoundingClientRect();

          let prevX, prevY, currX, currY;

          if (Math.floor(prevIndex / 3) !== Math.floor(index / 3)) {
            // 换行时使用曲线连接
            if (Math.floor(index / 3) % 2 !== 0) {
              // 从奇数行到偶数行
              prevX = prevRect.right;
              prevY = prevRect.top + prevRect.height / 2;
              currX = currRect.right;
              currY = currRect.top + currRect.height / 2;
              return (
                <Curve
                  key={index}
                  x1={prevX}
                  y1={prevY}
                  x2={currX}
                  y2={currY}
                  control={VERTICAL_SPACING}
                  flag={true}
                />
              );
            } else {
              // 从偶数行到奇数行
              prevX = prevRect.left;
              prevY = prevRect.top + prevRect.height / 2;
              currX = currRect.left;
              currY = currRect.top + currRect.height / 2;
              return (
                <Curve
                  key={index}
                  x1={prevX}
                  y1={prevY}
                  x2={currX}
                  y2={currY}
                  control={VERTICAL_SPACING}
                  flag={false}
                />
              );
            }
          } else {
            // 同一行时使用直线连接
            if (Math.floor(index / 3) % 2 === 0) {
              // 奇数行，从左到右
              prevX = prevRect.right;
              prevY = prevRect.top + prevRect.height / 2;
              currX = currRect.left;
              currY = currRect.top + currRect.height / 2;
            } else {
              // 偶数行，从右到左
              prevX = prevRect.left;
              prevY = prevRect.top + prevRect.height / 2;
              currX = currRect.right;
              currY = currRect.top + currRect.height / 2;
            }
            return (
              <Line key={index} x1={prevX} y1={prevY} x2={currX} y2={currY} />
            );
          }
        })}
        {isMarkerVisible && (
          <XOutlined
            src=""
            alt="aaaa"
            className="marker"
            style={{
              top: `${markerPosition.top + 100}px`,
              left: `${markerPosition.left + 85}px`,
              transition: "top 0.5s, left 0.5s",
            }}
          />
        )}
        <button onClick={handleNext} className="next-position">下一个目的地</button>
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
