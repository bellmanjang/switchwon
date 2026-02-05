import { Flex } from "@radix-ui/themes";
import type { ExchangeRateResponse } from "@/app/_shared/schemes/response/response-dto";
import { CURRENCY_META } from "@/app/_shared/schemes/types";
import { formatNumberToString } from "@/app/_shared/utils/format-util";
import { ChangePercentageIcon } from "@/app/(app)/exchange/_components/rates/ChangePercentageIcon";
import clsx from "clsx";
import { changePercentageColor } from "@/app/_features/exchange/rate-util";

type RateCardProps = Pick<
  ExchangeRateResponse,
  "currency" | "rate" | "changePercentage"
>;

export function RateCard({ currency, rate, changePercentage }: RateCardProps) {
  return (
    <Flex
      direction={"column"}
      justify={"between"}
      gap={"2"}
      className={"card rate-card rounded-xl border border-border-tertiary"}
    >
      <Flex justify={"between"} align={"center"}>
        <h4 className={"font-semibold text-text-tertiary"}>
          {CURRENCY_META[currency].code}
        </h4>
        <p className={"text-text-tertiary"}>{CURRENCY_META[currency].label}</p>
      </Flex>

      <Flex direction={"column"} gap={"1"}>
        <h3 className={"font-bold text-text-primary"}>
          {formatNumberToString(rate, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 3,
          })}
          {" KRW"}
        </h3>
        <p
          className={clsx(
            "inline-flex items-center gap-1",
            `text-${changePercentageColor(changePercentage)}`,
          )}
        >
          <ChangePercentageIcon changePercentage={changePercentage} />
          {formatNumberToString(changePercentage, {
            signDisplay: "always",
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          })}
          %
        </p>
      </Flex>
    </Flex>
  );
}
