import { bff } from "@/app/_shared/lib/bffClient";
import { ExchangeRateResponse } from "@/app/_shared/schemes/response/response-dto";

export const exchangeRateApi = {
  latest: () =>
    bff<ExchangeRateResponse[]>("/api/exchange-rates/latest", {
      method: "GET",
    }),
};
