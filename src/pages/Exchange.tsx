import { ExchangeRateCard } from "@/features/exchange/ui/ExchangeReteCard";
import { WalletCard } from "@/features/exchange/ui/WalletCard";
import { ExchangeFormCard } from "@/features/exchange/ui/ExchangeFormCard";
import { PageTitle } from "@/shared/ui/PageTitle";
import { Flex } from "@radix-ui/themes";

export default function ExchangePagePage() {
  return (
    <Flex direction={"column"} gap={"5"} className={"page-wrapper w-full"}>
      <PageTitle
        title={"환율 정보"}
        subtitle={"실시간 환율을 확인하고 간편하게 환전하세요."}
      />

      <div className={"exchange-page-content w-full h-full"}>
        <ExchangeRateCard
          currency={"USD"}
          rate={1320.5}
          changePercentage={0.5}
          diffTone={"up"}
        />
        <ExchangeRateCard
          currency={"JPY"}
          rate={9.85}
          changePercentage={-1.1}
          diffTone={"down"}
        />
        <WalletCard
          balances={[
            { currency: "KRW", amountText: "₩ 1,200,000" },
            { currency: "USD", amountText: "$ 50.00" },
            { currency: "JPY", amountText: "¥ 150,000" },
          ]}
          totalText={"₩ 3,000,000"}
        />

        <ExchangeFormCard />
      </div>
    </Flex>
  );
}
