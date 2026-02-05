"use client";

import { Box, Button, Flex, Separator, Skeleton } from "@radix-ui/themes";
import { CurrencyDropdown } from "@/app/(app)/exchange/_components/exchange/CurrencyDropdown";
import { ModeSegmentedControl } from "@/app/(app)/exchange/_components/exchange/ModeSegmentedControl";
import { TextInput } from "@/app/_shared/components/input/TextInput";
import { formatNumberToString } from "@/app/_shared/utils/format-util";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { useExchangeStore } from "@/app/_features/exchange/exchangeStore";
import { useOrderQuote } from "@/app/_features/orders/useOrderQuote";
import { CURRENCY_META } from "@/app/_shared/schemes/types";
import { orderApi } from "@/app/_features/orders/order-api";
import { useWalletStore } from "@/app/_features/wallets/walletStore";
import { useToastStore } from "@/app/_features/toast/store/toastStore";

export function ExchangeFormCard() {
  const appliedRate = useExchangeStore((state) => state.appliedRate);

  const mode = useExchangeStore((state) => state.exchangeMode);
  const toCurrency = useExchangeStore((state) => state.toCurrency);
  const amount = useExchangeStore((state) => state.forexAmount);
  const changeForexAmount = useExchangeStore(
    (state) => state.changeForexAmount,
  );
  const refreshLatestRates = useExchangeStore(
    (state) => state.refreshLatestRates,
  );

  const refreshWallets = useWalletStore((state) => state.refreshWallets);

  const { quoteResult, isFetching, reQuote } = useOrderQuote();

  const { addToast } = useToastStore();

  const disabled = !appliedRate || isFetching;

  return (
    <Flex
      direction={"column"}
      gap={"6"}
      className={
        "card h-full bg-surface-tertiary border border-border-tertiary rounded-2xl"
      }
      style={{
        gridArea: "exchange",
      }}
    >
      <Flex direction={"column"} gap={"6"} className={"flex-1"}>
        <Flex direction={"column"} gap={"4"}>
          <CurrencyDropdown />
          <ModeSegmentedControl />
        </Flex>

        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          gap={"3"}
        >
          <Box className={"w-full"}>
            <TextInput
              className={"!px-6"}
              type={"number"}
              value={String(amount)}
              onChange={(e) => {
                changeForexAmount(Number(e.target.value));
              }}
              label={`${mode === "BUY" ? "매수" : "매도"} 금액`}
              size={"7"}
              align={"right"}
              suffix={`${CURRENCY_META[toCurrency].unit} ${mode === "BUY" ? "사기" : "팔기"}`}
            />
          </Box>

          <Flex
            justify={"center"}
            align={"center"}
            className={"w-10 h-10 rounded-full bg-exchange-icon-bg"}
          >
            <ChevronDown
              color={"var(--white-a12)"}
              size={28}
              strokeLinecap={"square"}
            />
          </Flex>

          <Flex direction={"column"} gap={"1"} className={"w-full"}>
            <h4 className={"font-medium text-text-tertiary"}>
              {mode === "BUY" ? "필요" : "받을"} 원화
            </h4>
            <Box
              className={
                "rt-Button custom custom-size-7 bg-surface-secondary border border-border-secondary rounded-lg"
              }
            >
              <Flex justify={"end"} align={"center"} className={"h-full"}>
                <h4 className={"px-6 font-semibold text-text-tertiary"}>
                  {formatNumberToString(quoteResult?.krwAmount ?? 0, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 3,
                  })}{" "}
                  <span
                    className={clsx(mode === "BUY" ? "text-buy" : "text-sell")}
                  >
                    원 {mode === "BUY" ? "필요해요" : "받을 수 있어요"}
                  </span>
                </h4>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Separator size={"4"} className={"!bg-border-secondary"} />

      <Flex direction={"column"} gap={"4"}>
        <Flex justify={"between"} className={"my-1"}>
          <h4 className={"font-medium text-text-tertiary"}>적용 환율</h4>
          {quoteResult ? (
            <h4 className={"font-semibold text-text-tertiary"}>
              1 {toCurrency} = {quoteResult.appliedRate} 원
            </h4>
          ) : (
            <Skeleton width={"120px"} height={"24px"} />
          )}
        </Flex>
        <Button
          className={"custom custom-size-7 !bg-cta !hover:bg-cta-hover"}
          size={"4"}
          disabled={disabled}
          onClick={async () => {
            if (disabled) return;

            const result = await orderApi.make_order({
              exchangeRateId: appliedRate.exchangeRateId,
              fromCurrency: mode === "BUY" ? "KRW" : toCurrency,
              toCurrency: mode === "BUY" ? toCurrency : "KRW",
              forexAmount: amount,
            });

            if (result.code === "OK") {
              refreshWallets();
              return;
            }

            if (result.code === "EXCHANGE_RATE_MISMATCH") {
              refreshLatestRates();
              reQuote().then(() => {
                addToast({ variant: "EXCHANGE_RATE_MISMATCH" });
              });
            } else {
              addToast({ variant: "EXCHANGE_ERROR", message: result.message });
            }
          }}
        >
          <p className={"cta-button-text text-white"}>환전하기</p>
        </Button>
      </Flex>
    </Flex>
  );
}
