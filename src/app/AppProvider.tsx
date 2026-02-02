import "@radix-ui/themes/styles.css";

import type { PropsWithChildren } from "react";
import { Theme } from "@radix-ui/themes";

export function AppProviders({ children }: PropsWithChildren) {
  return <Theme hasBackground={false}>{children}</Theme>;
}
