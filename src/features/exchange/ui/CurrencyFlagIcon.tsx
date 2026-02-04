import type { CurrencyCode } from "@/shared/schemes/types";

type CurrencyFlagIconProps = {
  currency: CurrencyCode;
  size?: number;
};

export const CurrencyFlagIcon = ({
  currency,
  size = 20,
}: CurrencyFlagIconProps) => {
  return (
    <img
      className={"currency-flag-icon"}
      src={`/${currency}-flag.svg`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};
