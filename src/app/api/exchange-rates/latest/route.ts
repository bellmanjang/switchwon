import { proxyApi } from "@/app/_shared/lib/bffProxy";
import { ExchangeRateResponse } from "@/app/_shared/schemes/response/response-dto";
import { NextResponse } from "next/server";

export async function GET() {
  const { res, body } = await proxyApi<ExchangeRateResponse>(
    "/exchange-rates/latest",
    { method: "GET" },
  );

  return NextResponse.json(body, {
    status: res.status,
  });
}
