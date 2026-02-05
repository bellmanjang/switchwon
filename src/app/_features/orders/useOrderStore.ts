import { create } from "zustand";
import { OrderResponse } from "@/app/_shared/schemes/response/response-dto";
import { orderApi } from "@/app/_features/orders/order-api";

interface OrderState {
  history: OrderResponse[];

  refreshHistory: () => void;
}

export const useOrderStore = create<OrderState>((set, get) => ({
  history: [],

  refreshHistory: async () => {
    const result = await orderApi.history();

    if (result.code === "OK" && result.data) {
      set({ history: result.data });
    }
  },
}));
