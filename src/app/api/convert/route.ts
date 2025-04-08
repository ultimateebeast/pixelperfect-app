import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const fileKey = searchParams.get("fileKey");

  if (!fileKey) {
    return NextResponse.json({ error: "Missing fileKey" }, { status: 400 });
  }

  try {
    const figmaRes = await fetch(`https://api.figma.com/v1/files/${fileKey}`, {
      headers: {
        "X-Figma-Token": process.env.NEXT_PUBLIC_FIGMA_TOKEN || "",
      },
    });

    if (!figmaRes.ok) {
      const err = await figmaRes.text();
      console.error("Figma API error:", err);
      return NextResponse.json(
        { error: "Failed to fetch from Figma" },
        { status: 500 }
      );
    }

    const data = await figmaRes.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
