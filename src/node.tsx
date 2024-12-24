import React from "react";
import Card1 from "./Card";

interface NodeProps {
  node: {
    id: number;
    name: string;
    arrive_time: string;
    leave_time: string;
    profile: string;
  };
  isCurrent: boolean;
  onClick: () => void;
  style: React.CSSProperties;
}

const Node: React.FC<NodeProps> = ({ node, isCurrent, onClick, style }) => {
   return (
     <div style={style} className="node-container">
       <div className="profile">{node.profile}</div>
       <div
         className={"node" + (isCurrent ? " current" : "")}
         onClick={onClick}
       >
         {node.name}
       </div>
     </div>
   );


};

export default Node;
