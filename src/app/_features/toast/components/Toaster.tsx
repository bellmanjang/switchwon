"use client";

import { useEffect } from "react";
import { useToastStore } from "../store/toastStore";
import Toast from "./Toast";
import { Toast as ToastPrim } from "radix-ui";

export default function Toaster() {
  const { currentToast, processQueue, queue } = useToastStore();

  useEffect(() => {
    if (queue.length > 0 && !currentToast) {
      processQueue();
    }
  }, []);

  if (!currentToast) return null;
  return (
    <ToastPrim.Provider swipeDirection="right">
      <Toast toast={currentToast} />
    </ToastPrim.Provider>
  );
}
