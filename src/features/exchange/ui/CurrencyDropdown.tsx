import { DropdownMenu, Text } from "@radix-ui/themes";
import { CurrencyFlagIcon } from "@/features/exchange/ui/CurrencyFlagIcon";
import { CURRENCY_META } from "@/shared/schemes/types";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

export const CurrencyDropdown = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger>
        <h3
          className={
            "cursor-pointer inline-flex items-center gap-2 w-fit whitespace-nowrap font-bold text-cta-pressed"
          }
        >
          <CurrencyFlagIcon currency={"USD"} size={24} /> USD 환전하기
          <ChevronDown
            size={28}
            color={"var(--color-cta-pressed)"}
            strokeWidth={2.25}
            strokeLinecap={"square"}
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s",
            }}
          />
        </h3>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        color={"gray"}
        variant={"soft"}
        className={"currency-dropdown-content"}
      >
        {Object.values(CURRENCY_META)
          .filter((v) => v.code !== "KRW")
          .map((v) => (
            <DropdownMenu.Item
              key={v.code}
              className={clsx(
                "currency-dropdown-item",
                `${v.code === "USD" ? "bg-surface-tertiary" : ""}`,
              )}
            >
              <Text
                size={"2"}
                weight={"medium"}
                className={
                  "cursor-pointer inline-flex items-center gap-3 whitespace-nowrap"
                }
              >
                <CurrencyFlagIcon currency={v.code} size={20} /> {v.name}{" "}
                {v.code}
              </Text>
            </DropdownMenu.Item>
          ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
