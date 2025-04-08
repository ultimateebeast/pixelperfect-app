"use client";

import { useState } from "react";
import { generateJSXFromFigma } from "@/utils/figmaToJSX";

export default function FigmaUploader() {
  const [fileName, setFileName] = useState("");
  const [jsonPreview, setJsonPreview] = useState("");
  const [generatedJSX, setGeneratedJSX] = useState("");
  const [figmaKey, setFigmaKey] = useState("");
  const [mode, setMode] = useState<"upload" | "key">("upload");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result as string);
        setJsonPreview(JSON.stringify(json, null, 2));
        setGeneratedJSX(generateJSXFromFigma(json));
      } catch (_) {
        alert("Invalid JSON file");
      }
    };
    reader.readAsText(file);
  };

  const handleFigmaKeyFetch = async () => {
    if (!figmaKey.trim()) return alert("Please enter a Figma File Key");

    try {
      const res = await fetch(`/api/convert?fileKey=${figmaKey}`);
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Fetch failed");

      setJsonPreview(JSON.stringify(data, null, 2));
      setGeneratedJSX(generateJSXFromFigma(data));
    } catch (err: any) {
      alert("Error fetching Figma file: " + err.message);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-md border border-gray-200 space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center">
        Convert Figma to React JSX
      </h2>

      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => setMode("upload")}
          className={`px-4 py-2 rounded ${
            mode === "upload"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-800"
          }`}>
          Upload JSON
        </button>
        <button
          onClick={() => setMode("key")}
          className={`px-4 py-2 rounded ${
            mode === "key"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-800"
          }`}>
          Use Figma File Key
        </button>
      </div>

      {mode === "upload" ? (
        <input
          type="file"
          accept=".json"
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0 file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
        />
      ) : (
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Enter Figma File Key"
            value={figmaKey}
            onChange={(e) => setFigmaKey(e.target.value)}
            className="p-2 border rounded"
          />
          <button
            onClick={handleFigmaKeyFetch}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Fetch & Convert
          </button>
        </div>
      )}

      {jsonPreview && (
        <>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              📄 Raw JSON
            </h3>
            <pre className="bg-gray-900 text-green-400 text-xs p-4 rounded overflow-auto max-h-80 whitespace-pre-wrap">
              {jsonPreview}
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ⚙️ Generated JSX
            </h3>
            <pre className="bg-gray-900 text-yellow-300 text-xs p-4 rounded overflow-auto max-h-80 whitespace-pre-wrap">
              {generatedJSX}
            </pre>
          </div>
        </>
      )}
    </div>
  );
}
