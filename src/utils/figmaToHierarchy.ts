import { FigmaNode } from "./figmaNode";

export function extractHierarchy(node: FigmaNode): any {
  return {
    id: node.id,
    name: node.name,
    type: node.type,
    children: (node.children || []).map(extractHierarchy),
  };
}
