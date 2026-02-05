import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ACCESS_TOKEN_COOKIE } from "@/app/_features/auth/cookies";

export function proxy(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  const token = req.cookies.get(ACCESS_TOKEN_COOKIE)?.value;

  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set(
      "next",
      pathname + (searchParams.toString() ? `?${searchParams}` : ""),
    );
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/exchange/:path*", "/orders/:path*"],
};
