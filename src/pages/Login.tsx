import { Box, Button, Flex } from "@radix-ui/themes";
import { TextInput } from "@/shared/ui/TextInput/TextInput";
import { useState } from "react";
import { Rss } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  return (
    <Flex justify={"center"} align={"center"} className={"min-h-screen"}>
      <Flex direction={"column"} justify={"center"} align={"center"} gap={"8"}>
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          gap={"5"}
        >
          <Rss
            color={"var(--color-sell)"}
            strokeWidth={4}
            strokeLinecap={"square"}
            className={"login-page-logo"}
          />
          <Flex direction={"column"} justify={"center"} align={"center"}>
            <h1 className={"text-text-secondary"}>반갑습니다.</h1>
            <h2 className={"font-medium text-text-tertiary"}>
              로그인 정보를 입력해주세요.
            </h2>
          </Flex>
        </Flex>

        <Box
          className={
            "login-box mb-16 bg-surface-tertiary border border-border-tertiary rounded-[20px]"
          }
        >
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
            >
              로그인 하기
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
