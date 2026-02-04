export const CURRENCY_META = {
  KRW: {
    code: "KRW",
    name: "대한민국",
    label: "대한민국 원",
    symbol: "₩",
  },
  USD: {
    code: "USD",
    name: "미국",
    label: "미국 달러",
    symbol: "$",
  },
  JPY: {
    code: "JPY",
    name: "일본",
    label: "일본 엔",
    symbol: "¥",
  },
} as const;

export type CurrencyCode = keyof typeof CURRENCY_META;

export type DiffTone = "up" | "down" | "neutral";

export type ExchangeMode = "BUY" | "SELL";
