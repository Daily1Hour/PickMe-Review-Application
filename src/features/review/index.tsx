import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getReviewApi } from "./api";
import { InterviewReviews } from "@/entities/review/model/review";
import { ReviewForm } from "./ui";

const ReviewPage = () => {
    // 렌더링 시 화면을 맨 위로
    window.scrollTo(0, 0);
    // useParams로 url의 reviewId값 가져옴
    const { reviewId } = useParams<{ reviewId: string | undefined }>();

    // reviewId가 있을 경우에만 작동
    const { data } = useQuery<InterviewReviews>({
        queryKey: ["review", reviewId],
        queryFn: () => getReviewApi(reviewId as string),
        enabled: !!reviewId,
        staleTime: 1000 * 60 * 60,
    });

    return <ReviewForm data={data} reviewId={reviewId} />;
};

export default ReviewPage;
