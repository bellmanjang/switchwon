import type { PropsWithChildren } from "react";
import { Theme } from "@radix-ui/themes";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <Theme
      className={"h-full"}
      hasBackground={false}
      appearance={"light"}
      accentColor={"indigo"}
      radius={"large"}
    >
      {children}
    </Theme>
  );
}
