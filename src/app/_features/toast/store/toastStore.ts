"use client";

import { create } from "zustand";
import { Toast, ToastQueueState } from "@/app/_features/toast/types";

const DEFAULT_TOAST_DURATION = 4000;

export const useToastStore = create<ToastQueueState>((set, get) => ({
  queue: [],
  currentToast: null,

  addToast: (toastData) => {
    const toast: Toast = {
      ...toastData,
      id: `toast-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`,
      duration: toastData.duration ?? DEFAULT_TOAST_DURATION,
    };

    set((state) => ({
      queue: [...state.queue, toast],
    }));

    const { currentToast } = get();
    if (!currentToast) {
      get().processQueue();
    }
  },

  removeToast: (id) => {
    set((state) => ({
      queue: state.queue.filter((t) => t.id !== id),
      currentToast: state.currentToast?.id === id ? null : state.currentToast,
    }));
  },

  processQueue: () => {
    const { queue, currentToast } = get();

    if (currentToast) {
      return;
    }

    if (queue.length === 0) {
      set({ currentToast: null });
      return;
    }

    const [nextToast, ...remainingQueue] = queue;
    set({
      currentToast: nextToast,
      queue: remainingQueue,
    });

    setTimeout(() => {
      const state = get();
      if (state.currentToast?.id === nextToast.id) {
        set({ currentToast: null });
        setTimeout(() => {
          get().processQueue();
        }, 300);
      }
    }, nextToast.duration);
  },

  clearQueue: () => {
    set({
      queue: [],
      currentToast: null,
    });
  },
}));
