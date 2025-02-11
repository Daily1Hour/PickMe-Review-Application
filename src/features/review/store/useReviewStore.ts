import { InterviewReviews } from "@/entities/review/model/review";
import { create } from "zustand";

type reviewType = {
    review: InterviewReviews | undefined;
    setReview: (review: InterviewReviews | undefined) => void;
};

export const useReviewStore = create<reviewType>((set) => ({
    review: undefined,
    setReview: (review: InterviewReviews | undefined) => set({ review }),
}));
