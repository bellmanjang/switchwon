import { PageTitle } from "@/shared/ui/PageTitle";
import { OrdersHistory } from "@/features/orders/ui/OrdersHistory";
import { Box, Flex } from "@radix-ui/themes";

export default function OrdersPage() {
  return (
    <Flex direction={"column"} gap={"5"} className={"page-wrapper w-full"}>
      <PageTitle
        title={"환전 내역"}
        subtitle={"환전 내역을 확인할 수 있어요."}
      />

      <Box className={"w-full h-full"}>
        <OrdersHistory />
      </Box>
    </Flex>
  );
}
