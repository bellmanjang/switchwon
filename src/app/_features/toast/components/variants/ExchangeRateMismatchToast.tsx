"use client";

import { Toast } from "radix-ui";
import { useToastStore } from "../../store/toastStore";
import { X } from "lucide-react";
import type {
  ExchangeRateMismatchToast,
  ToastComponentProps,
} from "@/app/_features/toast/types";
import { IconButton } from "@radix-ui/themes";

export function ExchangeRateMismatchToast({
  toast,
  isVisible,
}: ToastComponentProps<ExchangeRateMismatchToast>) {
  const { removeToast } = useToastStore();

  return (
    <>
      <Toast.Root className="ToastRoot" open={isVisible}>
        <Toast.Title asChild>
          <h4 className={"font-semibold text-text-primary"}>
            최신 환율로 업데이트됐어요.
          </h4>
        </Toast.Title>
        <Toast.Description asChild>
          <p className={"font-medium text-text-tertiary"}>
            환율이 갱신되어 견적이 변경될 수 있어요.
            <br />
            확인 후 다시 눌러주세요
          </p>
        </Toast.Description>
        <Toast.Action
          className="ToastAction"
          asChild
          altText="Goto schedule to undo"
        >
          <IconButton
            color={"red"}
            variant={"soft"}
            onClick={() => removeToast(toast.id)}
          >
            <X />
          </IconButton>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </>
  );
}
