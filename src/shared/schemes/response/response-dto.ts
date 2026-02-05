import type { CurrencyCode } from "@/shared/schemes/types";

/**
 * ApiResponseUnit
 * API 응답 DTO
 */
export type ApiResponseUnit<T> = {
  /** 응답 코드 Example="OK" */
  code: string;

  /** 응답 메시지 Example="정상적으로 처리되었습니다." */
  message: string;

  /** 응답 데이터 */
  data?: T;
};

/**
 * TokenResponse
 * 인증 토큰 응답 DTO
 */
export type TokenResponse = {
  /** 회원 ID (int64) Example=1 */
  memberId: number;

  /** JWT 인증 토큰 Example="eyJhbGciOiJIUzM4NCJ9..." */
  token: string;
};

/**
 * WalletResponse
 * 지갑 응답 DTO
 */
type WalletResponse = {
  /** 지갑 ID (int64) Example=1 */
  walletId: number;

  /** 통화 Example="KRW" */
  currency: CurrencyCode;

  /** 잔액 Example=1000000 */
  balance: number;
};

/**
 * WalletSummaryResponse
 * 지갑 요약 응답 DTO
 */
export type WalletSummaryResponse = {
  /** 총 원화 잔액 Example=1000000 */
  totalKrwBalance: number;

  /** 지갑 목록 */
  wallets: WalletResponse[];
};

/**
 * OrderResponse
 * 환전 주문 응답 DTO
 */
export type OrderResponse = {
  /** 주문 ID (int64) Example=100 */
  orderId: number;

  /** 매수 통화 Example="KRW" */
  fromCurrency: CurrencyCode;

  /** 매수 금액 Example=10000 */
  fromAmount: number;

  /** 매도 통화 Example="USD" */
  toCurrency: CurrencyCode;

  /** 매도 금액 Example=100 */
  toAmount: number;

  /** 적용된 환율 Example=1450 */
  appliedRate: number;

  /** 주문 생성 시간 (date-time) Example="2023-10-01T12:00:00" */
  orderedAt: string; // ISO 8601
};

/**
 * OrderQuoteResponse
 * 환전 주문 견적 응답 DTO
 */
export type OrderQuoteResponse = {
  /** 원화 금액 Example=10000 */
  krwAmount: number;

  /** 적용된 환율 Example=1450.25 */
  appliedRate: number;
};

/**
 * ExchangeRateResponse
 * 환율 응답 DTO
 */
export type ExchangeRateResponse = {
  /** 환율 ID (int64) Example=100 */
  exchangeRateId: number;

  /** 통화 Example="USD" */
  currency: CurrencyCode;

  /** 환율 Example=1450.25 */
  rate: number;

  /** 변동률 Example=0.25 */
  changePercentage: number;

  /** 적용 일시 (date-time) Example="2023-10-01T12:00:00" */
  applyDateTime: string; // ISO 8601
};
