import { proxyApi } from "@/app/_shared/lib/bffProxy";
import { WalletSummaryResponse } from "@/app/_shared/schemes/response/response-dto";
import { NextResponse } from "next/server";

export async function GET() {
  const { res, body } = await proxyApi<WalletSummaryResponse>("/orders", {
    method: "GET",
  });

  return NextResponse.json(body, {
    status: res.status,
  });
}

export async function POST(req: Request) {
  const rawBody = await req.text();

  const { res, body } = await proxyApi<WalletSummaryResponse>("/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: rawBody,
  });

  return NextResponse.json(body, {
    status: res.status,
  });
}
