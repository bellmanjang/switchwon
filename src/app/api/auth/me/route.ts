import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ACCESS_TOKEN_COOKIE } from "@/app/_features/auth/cookies";

export async function GET() {
  const token = (await cookies()).get(ACCESS_TOKEN_COOKIE)?.value;
  return NextResponse.json({ authenticated: Boolean(token) });
}
