import type { LoginRequest } from "@/app/_shared/schemes/request/request-dto";
import { bff } from "@/app/_shared/lib/bffClient";
import { TokenResponse } from "@/app/_shared/schemes/response/response-dto";

export const authApi = {
  login: (req: LoginRequest) =>
    bff<TokenResponse>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(req),
    }),
  logout: () =>
    bff<TokenResponse>("/api/auth/logout", {
      method: "POST",
    }),
};
