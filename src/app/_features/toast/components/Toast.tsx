"use client";

import { type ComponentType, useEffect, useState } from "react";
import type { ToastComponentProps, Toast as ToastType } from "../types";
import { ExchangeRateMismatchToast } from "@/app/_features/toast/components/variants/ExchangeRateMismatchToast";
import { ExchangeErrorToast } from "@/app/_features/toast/components/variants/ExchangeErrorToast";

function wrapVariant<V extends ToastType["variant"]>(
  variant: V,
  Comp: ComponentType<ToastComponentProps<Extract<ToastType, { variant: V }>>>,
): ComponentType<ToastComponentProps> {
  return (props) => {
    if (props.toast.variant !== variant) return null;
    return <Comp {...(props as any)} />;
  };
}

const variantComponents: Record<
  ToastType["variant"],
  ComponentType<ToastComponentProps>
> = {
  EXCHANGE_RATE_MISMATCH: wrapVariant(
    "EXCHANGE_RATE_MISMATCH",
    ExchangeRateMismatchToast,
  ),
  EXCHANGE_ERROR: wrapVariant("EXCHANGE_ERROR", ExchangeErrorToast),
};

interface ToastProps {
  toast: ToastType;
}

export default function Toast({ toast }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);

    const enterTimer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    const exitTimer = setTimeout(
      () => {
        setIsVisible(false);
      },
      (toast.duration ?? 3000) - 300,
    );

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, [toast.id, toast.duration]);

  const ToastComponent = variantComponents[toast.variant];

  if (!ToastComponent) {
    console.error(`No component found for toast variant: ${toast.variant}`);
    return null;
  }
  return <ToastComponent toast={toast} isVisible={isVisible} />;
}
