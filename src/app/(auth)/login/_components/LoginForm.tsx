"use client";

import { TextInput } from "@/shared/ui/input/TextInput";
import { useState } from "react";
import { Button, Flex } from "@radix-ui/themes";

export const LoginForm = () => {
  const [email, setEmail] = useState("");

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
        onClick={() => {}}
      >
        로그인 하기
      </Button>
    </Flex>
  );
};
