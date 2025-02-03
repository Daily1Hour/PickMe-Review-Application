import { create } from "zustand";

type reviewIdType = {
    reviewId: string | undefined;
};

export const useReviewIdStore = create<reviewIdType>((set) => ({
    reviewId: undefined,
    setReviewId: (reviewId: string | undefined) => set({ reviewId }),
}));
