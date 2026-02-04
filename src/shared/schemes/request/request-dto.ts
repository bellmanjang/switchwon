import type { CurrencyCode } from "@/shared/schemes/types";

/**
 * OrderRequest
 * 환전 주문 요청 DTO
 */
export type OrderRequest = {
  /** 환율 ID (int64) Example=100 */
  exchangeRateId: number;

  /** 매수 통화 Example="KRW" */
  fromCurrency: CurrencyCode;

  /** 매도 통화 Example="USD" */
  toCurrency: CurrencyCode;

  /** 주문 금액 Example=10000, >= 0.01 */
  forexAmount: number;
};

/**
 * LoginRequest
 * 로그인 요청 DTO
 */
export type LoginRequest = {
  /** 이메일 (format: email) Example="example@switchwon.com" */
  email: string;
};

/**
 * OrderQuoteRequest
 * 환전 주문 견적 요청 DTO
 */
export type OrderQuoteRequest = {
  /** 매수 통화 Example="KRW" */
  fromCurrency: CurrencyCode;

  /** 매도 통화 Example="USD" */
  toCurrency: CurrencyCode;

  /** 주문 금액 Example=10000, >= 0.01 */
  forexAmount: number;
};
