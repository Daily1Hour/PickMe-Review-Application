import { create } from "zustand";

type sideStore = {
    selectedReviewId: string | undefined;
};

export const useSideStore = create<sideStore>((set) => ({
    selectedReviewId: undefined,
    setSelectedReviewId: (selectedReviewId: string | undefined) =>
        set({ selectedReviewId }),
}));
