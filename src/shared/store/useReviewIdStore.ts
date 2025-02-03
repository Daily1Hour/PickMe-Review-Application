import { create } from "zustand";

type reviewIdType = {
    reviewId: string | undefined;
    setReviewId: (reviewId: string | undefined) => void;
};

export const useReviewIdStore = create<reviewIdType>((set) => ({
    reviewId: undefined,
    setReviewId: (reviewId: string | undefined) => set({ reviewId }),
}));
