import { Flex, Separator } from "@radix-ui/themes";
import { useWalletStore } from "@/app/_features/wallets/walletStore";
import { formatNumberToString } from "@/app/_shared/utils/format-util";
import { CURRENCY_META } from "@/app/_shared/schemes/types";

export function WalletCard() {
  const wallets = useWalletStore((state) => state.wallets);

  if (!wallets) return null;
  return (
    <Flex
      direction={"column"}
      gap={"6"}
      className={
        "card h-full bg-surface-tertiary border border-border-tertiary rounded-2xl"
      }
      style={{ gridArea: "wallets" }}
    >
      <h3 className={"font-extrabold"}>내 지갑</h3>

      <Flex direction={"column"} className={"flex-1"}>
        <Flex direction={"column"} gap={"3"} className={"flex-1 mb-4"}>
          {wallets.wallets.map((w) => (
            <Flex key={w.currency} justify="between">
              <h4 className={"font-medium text-text-tertiary"}>{w.currency}</h4>
              <h4 className={"font-semibold text-text-tertiary"}>
                {CURRENCY_META[w.currency].symbol}{" "}
                {formatNumberToString(w.balance, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 3,
                })}
              </h4>
            </Flex>
          ))}
        </Flex>

        <Flex direction={"column"} gap={"3"}>
          <Separator size={"4"} className={"!bg-border-secondary"} />
          <Flex justify={"between"} className={"py-2"}>
            <h4 className={"font-medium text-text-tertiary"}>총 보유 자산</h4>
            <h4 className={"font-bold text-sell"}>
              {CURRENCY_META.KRW.symbol}{" "}
              {formatNumberToString(wallets.totalKrwBalance, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </h4>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
