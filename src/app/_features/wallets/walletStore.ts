import { create } from "zustand";
import { WalletSummaryResponse } from "@/shared/schemes/response/response-dto";
import { walletApi } from "@/app/_features/wallets/wallet-api";

interface WalletState {
  wallets: WalletSummaryResponse | null;

  refreshWallets: () => void;
}

export const useWalletStore = create<WalletState>((set, get) => ({
  wallets: null,

  refreshWallets: async () => {
    const result = await walletApi.wallets();
    if (result.code === "OK" && result.data) {
      set({ wallets: result.data });
    }
  },
}));
