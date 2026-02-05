import { proxyApi } from "@/app/_shared/lib/bffProxy";
import { WalletSummaryResponse } from "@/app/_shared/schemes/response/response-dto";
import { NextResponse } from "next/server";

export async function GET() {
  const { res, body } = await proxyApi<WalletSummaryResponse>("/wallets", {
    method: "GET",
  });

  return NextResponse.json(body, {
    status: res.status,
  });
}
