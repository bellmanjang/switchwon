import { ChevronUp, ChevronDown, Minus } from "lucide-react";

export const ChangePercentageIcon = ({
  changePercentage,
}: {
  changePercentage: number;
}) => {
  return (
    <span
      className={"flex justify-center items-center w-5 h-5 overflow-hidden"}
    >
      {changePercentage > 0 && (
        <ChevronUp
          className={"rate-change-icon"}
          size={24}
          fill={"currentColor"}
          strokeWidth={0}
          strokeLinecap={"round"}
        />
      )}
      {changePercentage < 0 && (
        <ChevronDown
          className={"rate-change-icon"}
          size={24}
          fill={"currentColor"}
          strokeWidth={0}
          strokeLinecap={"round"}
        />
      )}
      {changePercentage === 0 && (
        <Minus size={24} strokeWidth={4} strokeLinecap={"round"} />
      )}
    </span>
  );
};
