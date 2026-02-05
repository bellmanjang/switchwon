"use client";

import { Toast } from "radix-ui";
import { useToastStore } from "../../store/toastStore";
import { X } from "lucide-react";
import type {
  ExchangeErrorToast,
  ToastComponentProps,
} from "@/app/_features/toast/types";
import { IconButton } from "@radix-ui/themes";

export function ExchangeErrorToast({
  toast,
  isVisible,
}: ToastComponentProps<ExchangeErrorToast>) {
  const { removeToast } = useToastStore();

  return (
    <>
      <Toast.Root className="ToastRoot" open={isVisible}>
        <Toast.Title asChild>
          <h4 className={"font-semibold text-text-primary"}>
            환전 처리 중 문제가 발생했어요.
          </h4>
        </Toast.Title>
        <Toast.Description asChild>
          <p className={"font-medium text-text-tertiary"}>{toast.message}</p>
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
