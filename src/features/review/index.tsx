import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getReviewApi } from "./api";
import { FlattenedReview } from "@/entities/review/model/review";
import { ReviewForm } from "./ui";
import { useReviewStore } from "./store/useReviewStore";
import { initialFormData } from "./api/initialFormData";
import { useEffect } from "react";
import ReviewSkeleton from "./ui/ReviewSkeleton";

const ReviewPage = () => {
    const { review, setReview } = useReviewStore();

    // useParams로 url의 reviewId값 가져옴
    const { reviewId } = useParams<{ reviewId: string | undefined }>();

    // reviewId가 있을 경우에만 작동
    const { data: fetchedReview, isLoading } = useQuery<FlattenedReview>({
        queryKey: ["review", reviewId],
        queryFn: () => getReviewApi(reviewId as string),
        enabled: !!reviewId,
        staleTime: 1000 * 60 * 60,
        initialData: reviewId ? undefined : initialFormData,
    });

    useEffect(() => {
        if (fetchedReview) {
            setReview(fetchedReview);
        }
    }, [fetchedReview, setReview]);

    return isLoading ? (
        <ReviewSkeleton />
    ) : (
        <ReviewForm key={review.updatedAt} />
    );
};

export default ReviewPage;
