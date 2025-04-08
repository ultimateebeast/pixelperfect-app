"use client";

import { useState } from "react";
import { generateJSXFromFigma } from "@/utils/figmaToJSX"; // Make sure this path is correct

export default function FigmaUploader() {
  const [fileName, setFileName] = useState("");
  const [jsonPreview, setJsonPreview] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result as string);
        setJsonPreview(JSON.stringify(json, null, 2));
        const jsxCode = generateJSXFromFigma(json);
        setGeneratedCode(jsxCode);
      } catch (err) {
        console.error("❌ Failed to parse JSON:", err);
        alert("Invalid JSON file");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        Upload Figma JSON File
      </h2>

      <input
        type="file"
        accept=".json"
        onChange={handleUpload}
        className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4
                   file:rounded-md file:border-0 file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
      />

      {fileName && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">{fileName}</h3>

          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">
              JSON Preview
            </h4>
            <pre className="bg-gray-900 text-green-400 text-sm p-4 rounded overflow-auto max-h-[300px] whitespace-pre-wrap">
              {jsonPreview}
            </pre>
          </div>
        </div>
      )}

      {generatedCode && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Generated JSX Code
          </h3>
          <pre className="bg-gray-100 text-gray-800 text-sm p-4 rounded overflow-auto max-h-[500px] whitespace-pre-wrap">
            {generatedCode}
          </pre>
        </div>
      )}
    </div>
  );
}
