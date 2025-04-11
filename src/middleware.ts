import { authMiddleware } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: [
    "/", // ✅ Public landing page
    "/sign-in", // ✅ Needed for sign-in form
    "/sign-up", // ✅ Sign-up form
    "/forgot-password", // ✅ Optional (if using)
  ],

  async afterAuth(auth, req) {
    const { userId, isPublicRoute } = auth;
    const url = req.nextUrl;
    const pathname = url.pathname;

    // ✅ Allow access to public routes if user not logged in
    if (!userId && isPublicRoute) return NextResponse.next();

    // 🔐 Redirect unauthenticated users trying to access protected routes
    if (!userId && !isPublicRoute) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    // ✅ At this point, user is authenticated
    const user = await clerkClient.users.getUser(userId);
    const plan = user.publicMetadata?.plan ?? "free";

    // ⛔ Free users blocked from /pro-tools
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

    // ✅ All good
    return NextResponse.next();
  },
});

// 🛡️ Apply to all routes except static files and API
export const config = {
  matcher: [
    "/((?!_next|.*\\..*|api|favicon.ico).*)", // All routes except _next, static, api, favicon
    "/(en|hi)/((?!_next|.*\\..*|api|favicon.ico).*)", // For i18n (optional)
  ],
};
