"use client";

import { TextInput } from "@/shared/components/input/TextInput";
import { useState } from "react";
import { Button, Flex } from "@radix-ui/themes";
import { authApi } from "@/app/_features/auth/auth-api";
import { useRouter } from "next/navigation";

export const LoginForm = ({ next }: { next: string }) => {
  const router = useRouter();

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

          const result = await authApi.login({ email });

          if (result.code !== "OK" || !result.data) {
            alert(result.message);
            return;
          }

          router.replace(next);
        }}
      >
        <p className={"cta-button-text"}>로그인 하기</p>
      </Button>
    </Flex>
  );
};
