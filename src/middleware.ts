import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { PublicPages } from "./lib";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  console.log("✅ Middleware hit:", req.nextUrl.pathname);

  const pathname = req.nextUrl.pathname as PublicPages;

  const publicPaths = Object.values(PublicPages);

  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  if (!token || !token.isVerified) {
    return NextResponse.redirect(new URL(PublicPages.Login, req.url));
  }

  return NextResponse.next();
}

//Note: Run this middleware on every route, except Next.js internals and favicon
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/auth).*)"], // ignore Next.js internals
};
