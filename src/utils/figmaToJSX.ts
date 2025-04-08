type FigmaNode = {
  name: string;
  type: string;
  layoutMode?: "VERTICAL" | "HORIZONTAL";
  children?: FigmaNode[];
  characters?: string;
  absoluteBoundingBox?: {
    width: number;
    height: number;
  };
};

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

      return `<div className="${layout} gap-4">
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

type FigmaDocument = {
  document?: {
    children?: FigmaNode[];
  };
  type?: string;
};

export function generateJSXFromFigma(json: any): string {
  let body = "";

  if (json.document?.children?.length) {
    // Traverse all top-level nodes under the document
    body = json.document.children
      .map((node: FigmaNode) => figmaNodeToJSX(node))
      .join("\n\n");
  } else if (json.type && typeof json.type === "string") {
    body = figmaNodeToJSX(json);
  } else {
    return "// Invalid Figma JSON";
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
