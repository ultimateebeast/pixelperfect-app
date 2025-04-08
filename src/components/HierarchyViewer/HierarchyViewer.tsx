import React from "react";
import NodeItem from "./NodeItem";

type Props = {
  hierarchy: {
    id: string;
    name: string;
    type: string;
    children?: Props["hierarchy"][];
  };
};

const HierarchyViewer: React.FC<Props> = ({ hierarchy }) => {
  return (
    <div className="p-4 border rounded bg-white shadow">
      <h2 className="text-lg font-bold mb-3">Component Hierarchy</h2>
      <NodeItem node={hierarchy} />
    </div>
  );
};

export default HierarchyViewer;
