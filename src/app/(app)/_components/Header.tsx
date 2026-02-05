import { Flex } from "@radix-ui/themes";
import { Rss } from "lucide-react";
import { LogoutButton } from "@/app/_shared/components/buttons/LogoutButton";
import { RouteButton } from "@/app/_shared/components/buttons/RouteButton";

export const Header = () => {
  return (
    <header
      className={
        "header flex justify-between items-center h-18 border-b border-b-border-tertiary"
      }
    >
      <Flex justify={"center"} align={"center"} gap={"2"}>
        <Rss
          className={"header-logo"}
          color={"var(--color-sell)"}
          strokeWidth={4}
          strokeLinecap={"square"}
        />
        <h3 className={"header-title whitespace-nowrap font-bold"}>
          Exchange app
        </h3>
      </Flex>

      <Flex gap={"4"}>
        <RouteButton path={"/exchange"}>환전 하기</RouteButton>
        <RouteButton path={"/orders"}>환전 내역</RouteButton>
        <LogoutButton />
      </Flex>
    </header>
  );
};
