import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Pretendard",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "sans-serif",
        ],
      },
      colors: {
        text: {
          primary: "rgb(var(--text-primary) / <alpha-value>)",
          secondary: "rgb(var(--text-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--text-tertiary) / <alpha-value>)",
        },

        border: {
          primary: "rgb(var(--border-primary) / <alpha-value>)",
          secondary: "rgb(var(--border-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--border-tertiary) / <alpha-value>)",
        },

        "surface-secondary": "rgb(var(--surface-secondary) / <alpha-value>)",
        "surface-tertiary": "rgb(var(--surface-tertiary) / <alpha-value>)",
        divider: "rgb(var(--divider) / <alpha-value>)",

        cta: "rgb(var(--cta) / <alpha-value>)",
        "cta-hover": "rgb(var(--cta-hover) / <alpha-value>)",
        "cta-pressed": "rgb(var(--cta-pressed) / <alpha-value>)",

        buy: "rgb(var(--buy) / <alpha-value>)",
        "buy-disabled": "rgb(var(--buy-disabled) / <alpha-value>)",
        sell: "rgb(var(--sell) / <alpha-value>)",
        "sell-disabled": "rgb(var(--sell-disabled) / <alpha-value>)",
        "exchange-icon-bg": "rgb(var(--exchange-icon-bg) / <alpha-value>)",
      },
    },
  },
  plugins: [],
} satisfies Config;
