// types/figmaNode.ts

export type FigmaNode = {
  id?: string;
  name?: string;
  type: string;
  layoutMode?: string;
  children?: FigmaNode[];
  characters?: string;
  absoluteBoundingBox?: {
    width: number;
    height: number;
  };
};
