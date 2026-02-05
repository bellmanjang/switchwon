import { Flex, Skeleton } from "@radix-ui/themes";
import clsx from "clsx";
import { CURRENCY_META } from "@/shared/schemes/types";

export function RateCardSkeleton() {
  return (
    <Flex
      direction={"column"}
      justify={"between"}
      gap={"2"}
      className={"card rate-card rounded-xl border border-border-tertiary"}
    >
      <Flex justify={"between"} align={"center"}>
        <Skeleton>
          <h4 className={"font-semibold text-text-tertiary"}>
            {CURRENCY_META.USD.code}
          </h4>
        </Skeleton>
        <Skeleton>
          <p className={"text-text-tertiary"}>{CURRENCY_META.USD.label}</p>
        </Skeleton>
      </Flex>

      <Flex direction={"column"} gap={"1"}>
        <Skeleton>
          <h3 className={"font-bold text-text-primary"}>1500.00</h3>
        </Skeleton>
        <Skeleton width={"60px"}>
          <p className={clsx("inline-flex items-center gap-1")}>0.00</p>
        </Skeleton>
      </Flex>
    </Flex>
  );
}
