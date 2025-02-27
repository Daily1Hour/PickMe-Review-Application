import { FlattenedReview } from "@/entities/review/model/review";
import { create } from "zustand";
import { initialFormData } from "../api/initialFormData";

type reviewType = {
    review: FlattenedReview;
    setReview: (review: FlattenedReview) => void;
};

export const useReviewStore = create<reviewType>((set) => ({
    review: initialFormData,
    setReview: (review) => set({ review }),
}));
