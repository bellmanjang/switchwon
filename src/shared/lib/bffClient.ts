import { ApiResponseUnit } from "@/shared/schemes/response/api-response";

export async function bff<T>(
  path: string,
  init: RequestInit = {},
): Promise<ApiResponseUnit<T>> {
  const res = await fetch(path, {
    ...init,
    headers: {
      ...(init?.headers ?? {}),
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  return (await res.json()) as ApiResponseUnit<T>;
}
