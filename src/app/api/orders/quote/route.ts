import { proxyApi } from "@/shared/lib/bffProxy";
import { WalletSummaryResponse } from "@/shared/schemes/response/response-dto";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const qs = url.searchParams;

  const { res, body } = await proxyApi<WalletSummaryResponse>(
    `/orders/quote?${qs.toString()}`,
    {
      method: "GET",
    },
  );

  return NextResponse.json(body, {
    status: res.status,
  });
}
