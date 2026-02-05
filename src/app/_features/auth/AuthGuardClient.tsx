"use client";

import { PropsWithChildren, useLayoutEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export function AuthGuardClient({ children }: PropsWithChildren) {
  const router = useRouter();
  const pathname = usePathname();

  const [ready, setReady] = useState(false);

  const isProtected =
    pathname.startsWith("/exchange") || pathname.startsWith("/orders");

  useLayoutEffect(() => {
    if (!isProtected) {
      setReady(true);
      return;
    }

    let cancelled = false;

    const check = async () => {
      try {
        const res = await fetch("/api/auth/me", { cache: "no-store" });

        if (!res.ok) {
          if (!cancelled) {
            router.replace(`/login?next=${encodeURIComponent(pathname)}`);
            router.refresh();
          }
          return;
        }

        const json = (await res.json()) as { authenticated: boolean };

        if (cancelled) return;

        if (!json.authenticated) {
          router.replace(`/login?next=${encodeURIComponent(pathname)}`);
          router.refresh();
          return;
        }

        setReady(true);
      } catch {
        if (!cancelled) {
          router.replace(`/login?next=${encodeURIComponent(pathname)}`);
          router.refresh();
        }
      }
    };

    check();

    return () => {
      cancelled = true;
    };
  }, [pathname, router]);

  if (!ready) return null;
  return <>{children}</>;
}
