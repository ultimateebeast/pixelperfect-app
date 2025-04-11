import { authMiddleware } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: [
    "/", // ✅ Public landing page
    "/sign-in",
    "/sign-up",
    "/forgot-password",
  ],

  async afterAuth(auth, req) {
    const { userId, isPublicRoute } = auth;
    const url = req.nextUrl;
    const pathname = url.pathname;

    // ✅ Allow access to public routes if not signed in
    if (!userId && isPublicRoute) return NextResponse.next();

    // 🔐 Redirect unauthenticated users from protected routes
    if (!userId && !isPublicRoute) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    // ✅ User is authenticated here — fetch user
    const user = await clerkClient.users.getUser(userId as string);

    // ✅ Fix: Safely extract `plan` as string
    const plan = (user.publicMetadata?.plan as string) ?? "free";

    // ⛔ Block free users from /pro-tools
    if (pathname.startsWith("/pro-tools") && plan === "free") {
      return NextResponse.redirect(new URL("/upgrade", req.url));
    }

    // ⛔ Only enterprise users allowed in /enterprise-zone
    if (
      pathname.startsWith("/enterprise-zone") &&
      !["enterprise"].includes(plan)
    ) {
      return NextResponse.redirect(new URL("/upgrade", req.url));
    }

    return NextResponse.next();
  },
});

// ✅ Applies to all routes except static, api, favicon
export const config = {
  matcher: [
    "/((?!_next|.*\\..*|api|favicon.ico).*)",
    "/(en|hi)/((?!_next|.*\\..*|api|favicon.ico).*)",
  ],
};
