import { Box, Button, Flex, Separator, Text } from "@radix-ui/themes";
import { type ExchangeMode } from "@/shared/schemes/types";
import { CurrencyDropdown } from "@/features/exchange/ui/CurrencyDropdown";
import { ModeSegmentedControl } from "@/features/exchange/ui/ModeSegmentedControl";
import { useState } from "react";
import { TextInput } from "@/shared/ui/TextInput/TextInput";
import { formatNumberToString } from "@/shared/utils/format-util";
import { ChevronDown } from "lucide-react";

export function ExchangeFormCard() {
  const [mode, setMode] = useState<ExchangeMode>("BUY");
  const [amount, setAmount] = useState<number>(10);

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
          <ModeSegmentedControl mode={mode} onChange={setMode} />
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
              value={String(amount)}
              onChange={(v) => setAmount(Number(v))}
              label={`${mode === "BUY" ? "매수" : "매도"} 금액`}
              size={"7"}
              align={"right"}
              suffix={`${"달러"} ${mode === "BUY" ? "사기" : "팔기"}`}
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
                  {formatNumberToString(42530, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 3,
                  })}{" "}
                  <span
                    style={{
                      marginLeft: "2px",
                      color: mode === "BUY" ? "var(--red-9)" : "var(--blue-9)",
                      fontWeight: "600",
                    }}
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
          <h4 className={"font-semibold text-text-tertiary"}>
            1 USD = ₩ 1,320.50
          </h4>
        </Flex>
        <Button
          className={"custom custom-size-7 !bg-cta !hover:bg-cta-hover"}
          size={"4"}
        >
          <p className={"exchange-button-text font-bold"}>환전하기</p>
        </Button>
      </Flex>
    </Flex>
  );
}
