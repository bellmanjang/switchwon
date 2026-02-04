import type {
  ExchangeRateResponse,
  OrderQuoteResponse,
  OrderResponse,
  TokenResponse,
  WalletSummaryResponse,
} from "@/shared/schemes/response/response-dto";

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
 * ApiResponseTokenResponse
 * API 응답 DTO (TokenResponse)
 */
export type ApiResponseTokenResponse = ApiResponseUnit<TokenResponse>;

/**
 * ApiResponseWalletSummaryResponse
 * API 응답 DTO (WalletSummaryResponse)
 */
export type ApiResponseWalletSummaryResponse =
  ApiResponseUnit<WalletSummaryResponse>;

/**
 * ApiResponseListOrderResponse
 * API 응답 DTO (주문 목록)
 */
export type ApiResponseListOrderResponse = {
  /** 응답 코드 Example="OK" */
  code: string;

  /** 응답 메시지 Example="정상적으로 처리되었습니다." */
  message: string;

  /** 주문 목록 */
  data?: OrderResponse[];
};

/**
 * ApiResponseOrderQuoteResponse
 * API 응답 DTO (OrderQuoteResponse)
 */
export type ApiResponseOrderQuoteResponse = {
  /** 응답 코드 Example="OK" */
  code: string;

  /** 응답 메시지 Example="정상적으로 처리되었습니다." */
  message: string;

  /** 견적 데이터 */
  data?: OrderQuoteResponse;
};

/**
 * ApiResponseListExchangeRateResponse
 * API 응답 DTO (환율 목록)
 */
export type ApiResponseListExchangeRateResponse = {
  /** 응답 코드 Example="OK" */
  code: string;

  /** 응답 메시지 Example="정상적으로 처리되었습니다." */
  message: string;

  /** 환율 목록 */
  data?: ExchangeRateResponse[];
};
