import type { DiffTone } from "@/shared/schemes/types";
import { ChevronUp, ChevronDown, Minus } from "lucide-react";

export const DiffToneIcon = ({ diffTone }: { diffTone: DiffTone }) => {
  return (
    <span
      className={"flex justify-center items-center w-5 h-5 overflow-hidden"}
    >
      {diffTone === "up" && (
        <ChevronUp
          className={"rate-change-icon"}
          size={24}
          fill={"currentColor"}
          strokeWidth={0}
          strokeLinecap={"round"}
        />
      )}
      {diffTone === "down" && (
        <ChevronDown
          className={"rate-change-icon"}
          size={24}
          fill={"currentColor"}
          strokeWidth={0}
          strokeLinecap={"round"}
        />
      )}
      {diffTone === "neutral" && (
        <Minus size={24} strokeWidth={4} strokeLinecap={"round"} />
      )}
    </span>
  );
};
