import { generateSmartComponentName } from "./smartNameGenerator";

type FigmaNode = {
  id: string;
  name: string;
  type: string;
  layoutMode?: "VERTICAL" | "HORIZONTAL";
  children?: FigmaNode[];
  characters?: string;
  parent?: string;
  absoluteBoundingBox?: {
    width: number;
    height: number;
  };
};

type FigmaFile = {
  document: {
    children: FigmaNode[];
  };
  type: string;
};

type FigmaJSON = FigmaNode | FigmaFile;

// ✅ Strict type guard with no `any`
function isFigmaFile(obj: FigmaJSON): obj is FigmaFile {
  return (
    "document" in obj &&
    obj.document !== undefined &&
    "children" in obj.document &&
    Array.isArray(obj.document.children)
  );
}

export function figmaNodeToJSX(node: FigmaNode): string {
  switch (node.type) {
    case "TEXT":
      return `<p className="text-base text-black">${node.characters || ""}</p>`;

    case "RECTANGLE":
      return `<div className="w-[${
        node.absoluteBoundingBox?.width || 100
      }px] h-[${
        node.absoluteBoundingBox?.height || 100
      }px] bg-gray-300"></div>`;

    case "VECTOR":
      return `<div className="w-[${
        node.absoluteBoundingBox?.width || 100
      }px] h-[${
        node.absoluteBoundingBox?.height || 100
      }px] bg-blue-300 rounded"></div>`;

    case "LINE":
      return `<div className="w-[${
        node.absoluteBoundingBox?.width || 100
      }px] h-[1px] bg-black"></div>`;

    case "ELLIPSE":
      return `<div className="w-[${
        node.absoluteBoundingBox?.width || 100
      }px] h-[${
        node.absoluteBoundingBox?.height || 100
      }px] bg-pink-300 rounded-full"></div>`;

    case "FRAME":
    case "GROUP":
      const layout =
        node.layoutMode === "VERTICAL"
          ? "flex flex-col"
          : node.layoutMode === "HORIZONTAL"
          ? "flex flex-row"
          : "";

      const componentName = generateSmartComponentName(node.name, node.type);

      return `<div className="${layout} gap-4" data-component="${componentName}">
  ${(node.children || []).map((child) => figmaNodeToJSX(child)).join("\n  ")}
</div>`;

    case "CANVAS":
      return (node.children || [])
        .map((child) => figmaNodeToJSX(child))
        .join("\n");

    default:
      return `<!-- Unsupported node type: ${node.type} -->`;
  }
}

export function generateJSXFromFigma(json: FigmaJSON): string {
  let body = "";

  if (isFigmaFile(json)) {
    body = json.document.children
      .map((node) => figmaNodeToJSX(node))
      .join("\n\n");
  } else {
    body = figmaNodeToJSX(json);
  }

  return `import React from "react";

const GeneratedComponent = () => {
  return (
    <>
      ${body}
    </>
  );
};

export default GeneratedComponent;
`;
}
