import { Flex } from "@radix-ui/themes";
import type { ExchangeRateResponse } from "@/shared/schemes/response/response-dto";
import { CURRENCY_META, type DiffTone } from "@/shared/schemes/types";
import { formatNumberToString } from "@/shared/utils/format-util";
import { DiffToneIcon } from "@/features/exchange/ui/DiffToneIcon";
import clsx from "clsx";

type ExchangeRateCardProps = Pick<
  ExchangeRateResponse,
  "currency" | "rate" | "changePercentage"
> & { diffTone: DiffTone };

function changePercentageColor(diffTone: DiffTone) {
  switch (diffTone) {
    case "up": {
      return "buy";
    }
    case "down": {
      return "sell";
    }
    case "neutral": {
      return "text-tertiary";
    }
  }
}

export function ExchangeRateCard({
  currency,
  rate,
  changePercentage,
  diffTone = "neutral",
}: ExchangeRateCardProps) {
  return (
    <Flex
      direction={"column"}
      gap={"2"}
      className={"card rounded-xl border border-border-tertiary"}
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
          })}{" "}
          {CURRENCY_META[currency].code}
        </h3>
        <p
          className={clsx(
            "inline-flex items-center gap-1",
            `text-${changePercentageColor(diffTone)}`,
          )}
        >
          <DiffToneIcon diffTone={diffTone} />
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
