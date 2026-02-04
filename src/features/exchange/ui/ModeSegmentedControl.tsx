import { SegmentedControl } from "@radix-ui/themes";
import clsx from "clsx";
import type { ExchangeMode } from "@/shared/schemes/types";

type ModeSegmentedControlProps = {
  mode: ExchangeMode;
  onChange: (v: ExchangeMode) => void;
};

export const ModeSegmentedControl = ({
  mode,
  onChange,
}: ModeSegmentedControlProps) => {
  return (
    <SegmentedControl.Root
      value={mode}
      onValueChange={onChange}
      className={clsx(
        "exchange-mode-seg border border-border-tertiary",
        mode === "BUY" && "seg-buy",
        mode === "SELL" && "seg-sell",
      )}
    >
      <SegmentedControl.Item
        value={"BUY"}
        className={"seg-buy-item overflow-hidden"}
        style={{
          borderRadius: "12px",
        }}
      >
        <h4 className={"font-bold"}>살래요</h4>
      </SegmentedControl.Item>
      <SegmentedControl.Item
        value={"SELL"}
        className={"seg-sell-item overflow-hidden"}
        style={{
          borderRadius: "12px",
        }}
      >
        <h4 className={"font-bold"}>팔래요</h4>
      </SegmentedControl.Item>
    </SegmentedControl.Root>
  );
};
