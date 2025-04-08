export async function fetchFigmaFile(fileKey: string) {
  const res = await fetch(`https://api.figma.com/v1/files/${fileKey}`, {
    headers: {
      "X-Figma-Token": process.env.NEXT_PUBLIC_FIGMA_TOKEN || "",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Figma file.");
  }

  const data = await res.json();
  return data;
}
