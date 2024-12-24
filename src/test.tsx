import { useState } from "react";
import {Node} from "./node";
import "./App.css";

const nodeData = [
  {
    id: 1,
    name: "A",
    arrive_time: "早上9点",
    leave_time: "早上10点",
    profile: "这里是北京天坛，它有着悠久的历史和独特的建筑。",
  },
  {
    id: 2,
    name: "B",
    arrive_time: "中午11点",
    leave_time: "中午12点",
    profile: "北京故宫是明清两代的皇家宫殿，规模宏大，建筑精美。",
  },
  {
    id: 3,
    name: "C",
    arrive_time: "下午1点",
    leave_time: "下午2点",
    profile: "四合院体现了老北京的传统居住文化充满生活气息。",
  },
  {
    id: 4,
    name: "D",
    arrive_time: "下午3点",
    leave_time: "下午4点",
    profile: "这里是一处很有特色的地方，有着别样的景致等待你去发现哦。",
  },
  {
    id: 5,
    name: "E",
    arrive_time: "下午5点",
    leave_time: "下午6点",
    profile: "北京22这个地方有着独特的韵味，值得细细品味一番",
  },
  {
    id: 6,
    name: "F",
    arrive_time: "晚上8点",
    leave_time: "晚上10点",
    profile: "北京33有着让人眼前一亮的特色，去了肯定会有收获呀。",
  },
];

function App() {
  // const [selectedNode, setSelectedNode] = useState(null);
  const [currentNodeIndex, setCurrentNodeIndex] = useState(0);

  const handleNext = () => {
    setCurrentNodeIndex((prevIndex) => (prevIndex + 1) % nodeData.length);
  };

  return (
    <div className="app">
      <div className="map">
        {/* 节点 */}
        {nodeData.map((node, index) => (
          <Node data={node}></Node>
        ))}
        {/* 线条 */}
        <div className="lines">
          {nodeData.map((node, index) => {
            if (index === 0) return null;
            const prevX = 100 + ((index - 1) % 3) * 150;
            const prevY = 100 + Math.floor((index - 1) / 3) * 150;
            const currX = 100 + (index % 3) * 150;
            const currY = 100 + Math.floor(index / 3) * 150;
            return (
              <div
                key={index}
                className="line"
                style={{
                  top: `${Math.min(prevY, currY) + 20}px`,
                  left: `${Math.min(prevX, currX) + 20}px`,
                  width: `${Math.abs(currX - prevX)}px`,
                  height: `${Math.abs(currY - prevY)}px`,
                }}
              />
            );
          })}
        </div>
        {/* 标记 */}
        <div
          className="marker"
          style={{
            top: `${100 + Math.floor(currentNodeIndex / 3) * 150 + 20}px`,
            left: `${100 + (currentNodeIndex % 3) * 150 + 20}px`,
          }}
        />
      </div>
      <button onClick={handleNext}>下一步</button>
      {selectedNode && (
        <div className="popup">
          <button onClick={() => setSelectedNode(null)}>关闭</button>
          <h2>{selectedNode.name}</h2>
          <p>{selectedNode.profile}</p>
        </div>
      )}
    </div>
  );
}

export default App;
