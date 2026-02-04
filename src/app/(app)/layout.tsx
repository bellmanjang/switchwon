import { Header } from "@/app/(app)/_components/Header";
import { Flex } from "@radix-ui/themes";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex direction={"column"} className={"w-full h-full min-h-dvh"}>
      <Header />

      <main
        className={
          "flex flex-col justify-start items-center w-full overflow-x-hidden overflow-y-auto"
        }
      >
        {children}
      </main>
    </Flex>
  );
}
