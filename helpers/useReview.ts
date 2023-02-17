import { create } from "zustand";

export interface Switch {
  toggle: boolean;
  reviewToggle: () => void;
}

export const useReview = create<Switch>((set) => ({
  toggle: false,
  reviewToggle: () =>
    set((state) => {
      return { toggle: !state.toggle };
    }),
}));
