import { bff } from "@/shared/lib/bffClient";
import { WalletSummaryResponse } from "@/shared/schemes/response/response-dto";

export const walletApi = {
  wallets: () =>
    bff<WalletSummaryResponse>("/api/wallets", {
      method: "GET",
    }),
};
