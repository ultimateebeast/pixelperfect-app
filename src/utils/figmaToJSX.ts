type FigmaNode = {
  name: string;
  type: string;
  children?: FigmaNode[];
  characters?: string;
};

export function figmaNodeToJSX(node: FigmaNode): string {
  switch (node.type) {
    case "TEXT":
      return `<p className="text-base text-gray-800 mb-2">${
        node.characters || ""
      }</p>`;
    case "FRAME":
      return `<div className="p-4 border rounded-md bg-white shadow-sm space-y-4">
  ${(node.children || []).map((child) => figmaNodeToJSX(child)).join("\n")}
</div>`;
    case "GROUP":
      return `<div className="flex gap-4">
  ${(node.children || []).map((child) => figmaNodeToJSX(child)).join("\n")}
</div>`;
    case "RECTANGLE":
      return `<div className="w-32 h-16 bg-gray-300 rounded-md"></div>`;
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
  if (json.document?.children?.[0]) {
    return figmaNodeToJSX(json.document.children[0]);
  }

  // 👇 Handle raw node input like your example
  if (json.type && typeof json.type === "string") {
    return figmaNodeToJSX(json);
  }

  return "// Invalid Figma JSON";
}

