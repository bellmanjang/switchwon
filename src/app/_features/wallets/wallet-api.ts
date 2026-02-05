import { bff } from "@/app/_shared/lib/bffClient";
import { WalletSummaryResponse } from "@/app/_shared/schemes/response/response-dto";

export const walletApi = {
  wallets: () =>
    bff<WalletSummaryResponse>("/api/wallets", {
      method: "GET",
    }),
};
