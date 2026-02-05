import type { CurrencyCode } from "@/app/_shared/schemes/types";

type CurrencyFlagIconProps = {
  currency: CurrencyCode;
  size?: number;
};

export const CurrencyFlagIcon = ({
  currency,
  size = 20,
}: CurrencyFlagIconProps) => {
  return (
    <span
      className={
        "flex justify-center items-center border bg-white border-border-tertiary rounded-full overflow-hidden"
      }
    >
      <img
        src={`/flags/${currency}.svg`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
        alt={`${currency} flag icon`}
      />
    </span>
  );
};
