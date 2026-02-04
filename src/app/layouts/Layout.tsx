import { Outlet } from "react-router-dom";
import { Header } from "@/app/layouts/Header";
import { Flex } from "@radix-ui/themes";

export function Layout() {
  return (
    <Flex direction={"column"} className={"w-full h-full min-h-dvh"}>
      <Header />

      <main
        className={
          "flex flex-col justify-start items-center w-full overflow-y-scroll"
        }
      >
        <Outlet />
      </main>
    </Flex>
  );
}
