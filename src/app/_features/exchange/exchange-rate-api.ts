import { bff } from "@/shared/lib/bffClient";
import { ExchangeRateResponse } from "@/shared/schemes/response/response-dto";

export const exchangeRateApi = {
  latest: () =>
    bff<ExchangeRateResponse[]>("/api/exchange-rates/latest", {
      method: "GET",
    }),
};
