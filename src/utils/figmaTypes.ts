export type FigmaNode = {
  id: string;
  name: string;
  type: string;
  layoutMode?: "VERTICAL" | "HORIZONTAL";
  children?: FigmaNode[];
};
