export type ToastVariant = "EXCHANGE_RATE_MISMATCH" | "EXCHANGE_ERROR";

export type ToastPayloadMap = {
  EXCHANGE_RATE_MISMATCH: {};
  EXCHANGE_ERROR: { message?: string };
};

export interface BaseToast {
  id: string;
  duration?: number;
  onClose?: () => void;
}

export type Toast = {
  [V in ToastVariant]: BaseToast & { variant: V } & ToastPayloadMap[V];
}[ToastVariant];

export type ToastInput = {
  [V in ToastVariant]: Omit<
    BaseToast & { variant: V } & ToastPayloadMap[V],
    "id"
  >;
}[ToastVariant];

export type ExchangeRateMismatchToast = Extract<
  Toast,
  { variant: "EXCHANGE_RATE_MISMATCH" }
>;

export type ExchangeErrorToast = Extract<Toast, { variant: "EXCHANGE_ERROR" }>;

export interface ToastQueueState {
  queue: Toast[];
  currentToast: Toast | null;
  addToast: (toast: ToastInput) => void;
  removeToast: (id: string) => void;
  processQueue: () => void;
  clearQueue: () => void;
}

export interface ToastComponentProps<T extends Toast = Toast> {
  toast: T;
  isVisible: boolean;
}
