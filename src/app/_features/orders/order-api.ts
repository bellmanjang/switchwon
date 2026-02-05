import { bff } from "@/app/_shared/lib/bffClient";
import {
  OrderQuoteResponse,
  OrderResponse,
} from "@/app/_shared/schemes/response/response-dto";
import {
  OrderQuoteRequest,
  OrderRequest,
} from "@/app/_shared/schemes/request/request-dto";

export const orderApi = {
  history: () =>
    bff<OrderResponse[]>("/api/orders", {
      method: "GET",
    }),
  make_order: (req: OrderRequest) =>
    bff<string>("/api/orders", {
      method: "POST",
      body: JSON.stringify(req),
    }),
  quote: (req: OrderQuoteRequest) => {
    const qs = new URLSearchParams({
      fromCurrency: req.fromCurrency,
      toCurrency: req.toCurrency,
      forexAmount: String(req.forexAmount),
    });
    return bff<OrderQuoteResponse>(`/api/orders/quote?${qs.toString()}`, {
      method: "GET",
    });
  },
};
