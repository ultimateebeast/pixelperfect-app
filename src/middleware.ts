import { authMiddleware } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/landing",
    "/privacy",
    "/:locale",
    "/:locale/landing",
    "/:locale/privacy",
  ],

  async afterAuth(auth, req) {
    const { userId, isPublicRoute } = auth;
    const url = req.nextUrl;
    const pathname = url.pathname;

    if (!userId || isPublicRoute) return NextResponse.next();

    const user = await clerkClient.users.getUser(userId);
    const plan = user.publicMetadata?.plan ?? "free";

    if (pathname.startsWith("/pro-tools") && plan === "free") {
      return NextResponse.redirect(new URL("/upgrade", req.url));
    }

    if (
      pathname.startsWith("/enterprise-zone") &&
      !["enterprise"].includes(plan)
    ) {
      return NextResponse.redirect(new URL("/upgrade", req.url));
    }

    return NextResponse.next();
  },
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*|api|favicon.ico).*)",
    "/(en|hi)/((?!_next|.*\\..*|api|favicon.ico).*)",
  ],
};
