"use client";

import { RateCard } from "@/app/(app)/exchange/_components/rates/ReteCard";
import { useExchangeStore } from "@/app/_features/exchange/exchangeStore";
import { RateCardSkeleton } from "@/app/(app)/exchange/_components/rates/ReteCardSkeleton";

export const RateCardGroup = () => {
  const latestRates = useExchangeStore((state) => state.latestRates);

  if (latestRates.length === 0) {
    return (
      <>
        <RateCardSkeleton />
        <RateCardSkeleton />
      </>
    );
  }
  return latestRates.map((rate) => (
    <RateCard
      key={rate.exchangeRateId}
      currency={rate.currency}
      rate={rate.rate}
      changePercentage={rate.changePercentage}
    />
  ));
};
