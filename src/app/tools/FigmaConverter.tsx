"use client";

import { useState } from "react";
import { generateJSXFromFigma } from "@/utils/figmaToJSX";

export default function FigmaConverter() {
  const [fileKey, setFileKey] = useState("");
  const [jsxCode, setJsxCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/convert?fileKey=${fileKey}`);
      const data = await res.json();
      const jsx = generateJSXFromFigma(data);
      setJsxCode(jsx);
    } catch (err) {
      console.error("Something went wrong:", err);
      alert("Failed to convert Figma file.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(jsxCode);
    alert("Copied to clipboard!");
  };

  const handleDownload = () => {
    const blob = new Blob([jsxCode], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "GeneratedComponent.tsx";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Figma File to React Converter
      </h2>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          value={fileKey}
          onChange={(e) => setFileKey(e.target.value)}
          placeholder="Enter your Figma file key"
          className="flex-grow border px-4 py-2 rounded shadow"
        />
        <button
          onClick={handleConvert}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          {loading ? "Converting..." : "Generate Code"}
        </button>
      </div>

      {jsxCode && (
        <div className="mt-6">
          <div className="flex justify-end gap-4 mb-2">
            <button
              onClick={handleCopy}
              className="text-sm px-4 py-1 bg-gray-200 rounded hover:bg-gray-300">
              Copy
            </button>
            <button
              onClick={handleDownload}
              className="text-sm px-4 py-1 bg-green-200 rounded hover:bg-green-300">
              Download
            </button>
          </div>
          <pre className="bg-gray-900 text-green-400 p-4 rounded max-h-[500px] overflow-auto text-sm">
            {jsxCode}
          </pre>
        </div>
      )}
    </div>
  );
}
