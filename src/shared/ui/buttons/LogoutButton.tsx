"use client";

import { Button } from "@radix-ui/themes";
import { logoutApi } from "@/app/(auth)/_features/auth/auth-api";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
  const router = useRouter();

  return (
    <Button
      size={"3"}
      className={"!bg-sell"}
      onClick={async () => {
        try {
          await logoutApi();
        } finally {
          router.replace("/login");
        }
      }}
    >
      <h4 className={"font-semibold text-white"}>Log out</h4>
    </Button>
  );
};
