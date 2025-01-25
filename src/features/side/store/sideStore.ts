import { create } from "zustand";

export const useSideStore = create((set) => ({
    reviewId: undefined,
    setReviewId: (reviewId: string | undefined) => set({ reviewId }),
}));
