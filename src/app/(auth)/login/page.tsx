import { Box, Flex } from "@radix-ui/themes";
import { Rss } from "lucide-react";
import { LoginForm } from "@/app/(auth)/login/_components/LoginForm";

interface Props {
  searchParams: Promise<{
    next?: string;
  }>;
}

export default async function LoginPage({ searchParams }: Props) {
  const sp = await searchParams;
  const next = sp.next ?? "/exchange";

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
          <LoginForm next={next} />
        </Box>
      </Flex>
    </Flex>
  );
}
