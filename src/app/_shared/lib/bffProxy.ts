import { cookies } from "next/headers";
import { ApiResponseUnit } from "@/app/_shared/schemes/response/response-dto";
import { ACCESS_TOKEN_COOKIE } from "@/app/_features/auth/cookies";

export async function proxyApi<T>(
  path: string,
  init: RequestInit,
): Promise<{ res: Response; body: ApiResponseUnit<T> }> {
  const url = `${process.env.API_BASE_URL}${path}`;

  const token = (await cookies()).get(ACCESS_TOKEN_COOKIE)?.value;

  const headers = new Headers(init.headers);
  if (token) headers.set("Authorization", `Bearer ${token}`);

  const res = await fetch(url, {
    ...init,
    headers,
    cache: "no-store",
  });

  // 백엔드가 항상 ApiResponseUnit 형태로 준다는 전제
  const body = (await res.json()) as ApiResponseUnit<T>;

  return { res, body };
}
