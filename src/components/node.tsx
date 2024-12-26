import React, { forwardRef, useImperativeHandle, useRef } from "react";
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

const Node = forwardRef<HTMLDivElement, NodeProps>(
  ({ node, isCurrent, onClick, style }, ref) => {
    const nodeRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      getBoundingClientRect: () => nodeRef.current?.getBoundingClientRect(),
      querySelector: (selectors: string) =>
        nodeRef.current?.querySelector(selectors),
    }));

    return (
      <div style={style} className="node-container" ref={nodeRef}>
        <div className="profile">{node.profile}</div>
        <div
          className={"node" + (isCurrent ? " current" : "")}
          onClick={onClick}
        >
          {node.name}
        </div>
      </div>
    );
  }
);

export default Node;
