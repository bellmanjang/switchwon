import { proxyApi } from "@/shared/lib/bffProxy";
import { WalletSummaryResponse } from "@/shared/schemes/response/response-dto";
import { NextResponse } from "next/server";

export async function GET() {
  const { res, body } = await proxyApi<WalletSummaryResponse>("/wallets", {
    method: "GET",
  });

  return NextResponse.json(body, {
    status: res.status,
  });
}
