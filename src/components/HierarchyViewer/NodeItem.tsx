import React, { useState } from "react";

type NodeItemProps = {
  node: {
    id: string;
    name: string;
    type: string;
    children?: NodeItemProps["node"][];
  };
};

const NodeItem: React.FC<NodeItemProps> = ({ node }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="ml-4 mt-1">
      <div
        className="cursor-pointer text-sm font-medium text-blue-700"
        onClick={() => setExpanded(!expanded)}>
        ▶ {node.name} ({node.type})
      </div>
      {expanded && node.children && (
        <div className="pl-4 border-l border-gray-300">
          {node.children.map((child) => (
            <NodeItem key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NodeItem;
