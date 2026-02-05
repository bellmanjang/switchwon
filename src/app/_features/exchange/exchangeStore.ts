import { create } from "zustand";
import { ExchangeRateResponse } from "@/app/_shared/schemes/response/response-dto";
import { CurrencyCode, ExchangeMode } from "@/app/_shared/schemes/types";
import { exchangeRateApi } from "@/app/_features/exchange/exchange-rate-api";

interface ExchangeState {
  latestRates: ExchangeRateResponse[];
  appliedRate: ExchangeRateResponse | null;

  exchangeMode: ExchangeMode;
  toCurrency: CurrencyCode;
  forexAmount: number;

  refreshLatestRates: () => void;
  changeExchangeMode: (exchangeMode: ExchangeMode) => void;
  changeToCurrency: (toCurrency: CurrencyCode) => void;
  changeForexAmount: (forexAmount: number) => void;
}

export const useExchangeStore = create<ExchangeState>((set, get) => ({
  latestRates: [],
  appliedRate: null,
  exchangeMode: "BUY",
  toCurrency: "USD",
  forexAmount: 10,

  refreshLatestRates: async () => {
    const result = await exchangeRateApi.latest();

    if (result.code === "OK" && result.data) {
      const data = result.data;

      set((state) => ({
        latestRates: data,
        appliedRate:
          data.filter((r) => r.currency === state.toCurrency)[0] ?? null,
      }));
    }
  },
  changeExchangeMode: (exchangeMode) => set({ exchangeMode }),
  changeToCurrency: (toCurrency) => set({ toCurrency }),
  changeForexAmount: (forexAmount) =>
    set({ forexAmount: Math.max(0, forexAmount) }),
}));
