// app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const plan = searchParams.get("plan");

  if (!plan || !["pro", "enterprise"].includes(plan)) {
    return NextResponse.json(
      { error: "Invalid plan selected." },
      { status: 400 }
    );
  }

  // For now, just return a mock success response
  return NextResponse.json({
    message: `Checkout for ${plan} initiated.`,
    redirectTo: `/profile?upgraded=true&plan=${plan}`,
  });
}
