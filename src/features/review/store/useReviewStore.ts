import { FlattenedReview } from "@/entities/review/model/review";
import { create } from "zustand";

type reviewType = {
    review: FlattenedReview | undefined;
    setReview: (review: FlattenedReview | undefined) => void;
};

export const useReviewStore = create<reviewType>((set) => ({
    review: undefined,
    setReview: (review: FlattenedReview | undefined) => set({ review }),
}));
