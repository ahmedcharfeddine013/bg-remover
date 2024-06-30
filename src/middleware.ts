import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  ignoredRoutes: ["/", "/pricing", "/examples", "/api/webhooks(.*)"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
