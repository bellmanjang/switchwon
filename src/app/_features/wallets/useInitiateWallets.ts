"use client";

import { useEffect } from "react";
import { useWalletStore } from "@/app/_features/wallets/walletStore";

export const useInitiateWallets = () => {
  const refreshWallets = useWalletStore((state) => state.refreshWallets);

  useEffect(() => {
    refreshWallets();
  }, []);
};
