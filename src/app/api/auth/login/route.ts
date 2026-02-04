import { proxyApi } from "@/shared/lib/bffProxy";
import { TokenResponse } from "@/shared/schemes/response/response-dto";
import {
  ACCESS_TOKEN_COOKIE,
  accessCookieOptions,
} from "@/app/(auth)/_features/auth/cookies";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  const { res, body } = await proxyApi<TokenResponse>("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ email }),
  });

  const next = NextResponse.json(body, {
    status: res.status,
  });

  if (body.code === "OK" && body.data?.token) {
    next.cookies.set(ACCESS_TOKEN_COOKIE, body.data.token, accessCookieOptions);
  }

  return next;
}
