import { useCallback, useEffect, useRef, useState } from "react";
import { orderApi } from "@/app/_features/orders/order-api";
import { useExchangeStore } from "@/app/_features/exchange/exchangeStore";
import {
  ApiResponseUnit,
  OrderQuoteResponse,
} from "@/app/_shared/schemes/response/response-dto";

export const useOrderQuote = () => {
  const toCurrency = useExchangeStore((state) => state.toCurrency);
  const amount = useExchangeStore((state) => state.forexAmount);

  const [quoteResult, setQuoteResult] = useState<OrderQuoteResponse | null>(
    null,
  );
  const [isFetching, setIsFetching] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);
  const latestReqId = useRef(0);

  const fetchQuote = useCallback(async (): Promise<
    ApiResponseUnit<OrderQuoteResponse>
  > => {
    if (amount <= 0) {
      setQuoteResult(null);
      return { code: "OK", message: "skip", data: undefined };
    }

    const reqId = ++latestReqId.current;
    setIsFetching(true);

    try {
      const result = await orderApi.quote({
        fromCurrency: "KRW",
        toCurrency,
        forexAmount: amount,
      });

      // 오래된 요청 응답 무시 (race condition 방지
      if (reqId !== latestReqId.current) return result;

      if (result.code === "OK" && result.data) setQuoteResult(result.data);
      else setQuoteResult(null);

      return result;
    } finally {
      if (reqId === latestReqId.current) setIsFetching(false);
    }
  }, [amount, toCurrency]);

  // 입력 변화 debounce
  useEffect(() => {
    if (amount <= 0) {
      setQuoteResult(null);
      return;
    }

    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      void fetchQuote();
    }, 300);

    return () => window.clearTimeout(timerRef.current);
  }, [amount, toCurrency, fetchQuote]);

  const refetch = useCallback(async () => {
    window.clearTimeout(timerRef.current);
    return await fetchQuote();
  }, [fetchQuote]);

  return { quoteResult, isFetching, reQuote: refetch };
};
