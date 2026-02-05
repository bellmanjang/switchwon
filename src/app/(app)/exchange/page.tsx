"use client";

import { WalletCard } from "@/app/(app)/exchange/_components/wallets/WalletCard";
import { ExchangeFormCard } from "@/app/(app)/exchange/_components/exchange/ExchangeFormCard";
import { PageTitle } from "@/shared/components/PageTitle";
import { Flex } from "@radix-ui/themes";
import { RateCardGroup } from "@/app/(app)/exchange/_components/rates/RateCardGroup";
import { useLatestExchangeRates } from "@/app/_features/exchange/useLatestExchangeRates";
import { useInitiateWallets } from "@/app/_features/wallets/useInitiateWallets";

export default function ExchangePage() {
  useLatestExchangeRates();
  useInitiateWallets();

  return (
    <Flex direction={"column"} gap={"5"} className={"page-wrapper w-full"}>
      <PageTitle
        title={"환율 정보"}
        subtitle={"실시간 환율을 확인하고 간편하게 환전하세요."}
      />

      <div className={"exchange-page-content w-full h-full"}>
        <RateCardGroup />

        <WalletCard />

        <ExchangeFormCard />
      </div>
    </Flex>
  );
}
