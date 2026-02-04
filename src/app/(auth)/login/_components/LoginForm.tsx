"use client";

import { TextInput } from "@/shared/ui/input/TextInput";
import { useState } from "react";
import { Button, Flex } from "@radix-ui/themes";
import { loginApi } from "@/app/(auth)/_features/auth/auth-api";
import { useRouter, useSearchParams } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();
  const sp = useSearchParams();

  const [email, setEmail] = useState("");

  const disabled = !email;

  return (
    <Flex direction={"column"} gap={"6"} className={"p-1"}>
      <TextInput
        size={"7"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label={"이메일 주소를 입력해주세요."}
      />
      <Button
        size={"4"}
        color={"gray"}
        highContrast
        className={"custom custom-size-7"}
        disabled={disabled}
        onClick={async () => {
          if (disabled) return;

          const result = await loginApi({ email });

          if (result.code !== "OK" || !result.data) {
            alert(result.message);
            return;
          }

          const next = sp.get("next") ?? "/exchange";
          router.replace(next);
        }}
      >
        로그인 하기
      </Button>
    </Flex>
  );
};
