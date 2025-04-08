"use client";

import { useState } from "react";

export default function FigmaFetcher() {
  const [fileKey, setFileKey] = useState("");
  const [output, setOutput] = useState("");

  const handleFetch = async () => {
    setOutput("Fetching...");
    const res = await fetch(`/api/fetch-figma?fileKey=${fileKey}`);
    const json = await res.json();
    setOutput(JSON.stringify(json, null, 2));
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-md space-y-4">
      <h2 className="text-2xl font-bold">Figma File Fetcher</h2>
      <input
        className="border rounded w-full px-3 py-2"
        type="text"
        placeholder="Enter Figma File Key"
        value={fileKey}
        onChange={(e) => setFileKey(e.target.value)}
      />
      <button
        onClick={handleFetch}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Fetch & Preview
      </button>
      <pre className="bg-gray-100 text-sm p-4 rounded overflow-auto max-h-[400px]">
        {output}
      </pre>
    </div>
  );
}
