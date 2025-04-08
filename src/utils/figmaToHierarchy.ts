import { FigmaNode } from "./figmaTypes";

export function extractHierarchy(node: FigmaNode): any {
  return {
    id: node.id,
    name: node.name,
    type: node.type,
    children: (node.children || []).map(extractHierarchy),
  };
}
