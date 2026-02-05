"use client";

import { useEffect } from "react";
import { useExchangeStore } from "@/app/_features/exchange/exchangeStore";

export const useLatestExchangeRates = () => {
  const refreshLatestRates = useExchangeStore(
    (state) => state.refreshLatestRates,
  );

  useEffect(() => {
    let mounted = true;

    const fetchRates = async () => {
      if (!mounted) return;

      refreshLatestRates();
    };

    // 최초 1회
    fetchRates();

    // 1분 폴링
    const timer = window.setInterval(fetchRates, 60_000);

    return () => {
      mounted = false;
      window.clearInterval(timer);
    };
  }, [refreshLatestRates]);
};
