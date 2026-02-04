import { Flex, Separator } from "@radix-ui/themes";

type BalanceRow = {
  currency: string;
  amountText: string;
};

type WalletCardProps = {
  balances: BalanceRow[];
  totalText: string;
};

export function WalletCard({ balances, totalText }: WalletCardProps) {
  return (
    <Flex
      direction={"column"}
      gap={"6"}
      className={
        "card h-full bg-surface-tertiary border border-border-tertiary rounded-2xl"
      }
      style={{ gridArea: "wallet" }}
    >
      <h3 className={"font-extrabold"}>내 지갑</h3>

      <Flex direction={"column"} className={"flex-1"}>
        <Flex direction={"column"} gap={"3"} className={"flex-1 mb-4"}>
          {balances.map((b) => (
            <Flex key={b.currency} justify="between">
              <h4 className={"font-medium text-text-tertiary"}>{b.currency}</h4>
              <h4 className={"font-semibold text-text-tertiary"}>
                {b.amountText}
              </h4>
            </Flex>
          ))}
        </Flex>

        <Flex direction={"column"} gap={"3"}>
          <Separator size={"4"} className={"!bg-border-secondary"} />
          <Flex justify={"between"} className={"py-2"}>
            <h4 className={"font-medium text-text-tertiary"}>총 보유 자산</h4>
            <h4 className={"font-bold text-sell"}>{totalText}</h4>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
