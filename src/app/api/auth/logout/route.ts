import {
  ACCESS_TOKEN_COOKIE,
  accessCookieOptions,
} from "@/app/_features/auth/cookies";
import { NextResponse } from "next/server";

export async function POST() {
  const next = NextResponse.json({
    code: "OK",
    message: "로그아웃",
    data: null,
  });

  next.cookies.set(ACCESS_TOKEN_COOKIE, "", {
    path: accessCookieOptions.path,
    maxAge: 0,
  });

  return next;
}
