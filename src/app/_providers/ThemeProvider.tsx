import { PropsWithChildren } from "react";
import { Theme } from "@radix-ui/themes";
import Toaster from "@/app/_features/toast/components/Toaster";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <Theme
      className={"h-full"}
      hasBackground={false}
      appearance={"light"}
      accentColor={"indigo"}
      radius={"large"}
    >
      {children}
      <Toaster />
    </Theme>
  );
};
