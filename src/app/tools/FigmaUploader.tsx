"use client";

import { useState } from "react";
import { generateJSXFromFigma } from "@/utils/figmaToJSX";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function FigmaUploader() {
  const [fileName, setFileName] = useState("GeneratedComponent.tsx");
  const [jsonPreview, setJsonPreview] = useState("");
  const [generatedJSX, setGeneratedJSX] = useState("");
  const [figmaKey, setFigmaKey] = useState("");
  const [mode, setMode] = useState<"upload" | "key">("upload");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name.replace(/\.json$/, ".tsx"));

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result as string);
        setJsonPreview(JSON.stringify(json, null, 2));
        setGeneratedJSX(generateJSXFromFigma(json));
      } catch (err) {
        console.error("Something went wrong:", err);
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
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert("Error fetching Figma file: " + err.message);
      } else {
        alert("Unknown error occurred while fetching Figma file.");
      }
    }
  };

  const handleDownload = () => {
    const blob = new Blob([generatedJSX], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName || "GeneratedComponent.tsx";
    link.click();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto mt-16 p-10 rounded-2xl border border-white/10 bg-white/80 dark:bg-neutral-900/70 backdrop-blur-2xl shadow-xl dark:shadow-white/5 transition-all duration-300">
          <h2 className="text-4xl font-semibold text-center text-gray-900 dark:text-white mb-10">
            Convert <span className="text-blue-600">Figma</span> to{" "}
            <span className="text-yellow-500">React JSX</span>
          </h2>

          <div className="flex justify-center gap-4 mb-8">
            {["upload", "key"].map((m) => (
              <motion.button
                key={m}
                onClick={() => setMode(m as "upload" | "key")}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-2 rounded-full font-medium text-sm backdrop-blur-md transition-all duration-200 ${
                  mode === m
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                    : "bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-gray-200"
                }`}>
                {m === "upload" ? "Upload JSON" : "Use Figma Key"}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {mode === "upload" ? (
              <motion.div
                key="upload"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleFileUpload}
                  className="w-full cursor-pointer file:cursor-pointer file:mr-4 file:py-2 file:px-5 file:rounded-full file:border-0 file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 dark:file:bg-blue-900 dark:file:text-white dark:hover:file:bg-blue-800 text-sm text-gray-800 dark:text-gray-100"
                />
              </motion.div>
            ) : (
              <motion.div
                key="key"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Enter Figma File Key"
                  value={figmaKey}
                  onChange={(e) => setFigmaKey(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleFigmaKeyFetch}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                  Fetch & Convert
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {jsonPreview && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-12 space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    📄 Raw Figma JSON
                  </h3>
                  <pre className="bg-black/90 text-green-400 text-sm p-4 rounded-xl overflow-auto max-h-80 whitespace-pre-wrap">
                    {jsonPreview}
                  </pre>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    ⚙️ Generated JSX Code
                  </h3>
                  <input
                    type="text"
                    value={fileName}
                    onChange={(e) => setFileName(e.target.value)}
                    placeholder="Enter file name"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white mb-3"
                  />

                  <pre className="bg-black/90 text-yellow-300 text-sm p-4 rounded-xl overflow-auto max-h-80 whitespace-pre-wrap">
                    {generatedJSX}
                  </pre>

                  <motion.button
                    onClick={handleDownload}
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.05 }}
                    className="mt-4 px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition">
                    ⬇️ Download JSX
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
