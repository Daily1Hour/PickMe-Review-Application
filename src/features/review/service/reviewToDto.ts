import { InterviewReviews } from "@/entities/review/model/review";
import { PostInterviewReviewsDTO } from "../api/reviewDTOList";

export function reviewToCreateDTO(data: InterviewReviews) {
    return {
        interviewDetail: data.interviewDetail,
        reviewDetail: data.reviewDetail,
    } as PostInterviewReviewsDTO;
}

export function reviewToUpdateDTO(data: InterviewReviews) {
    return {
        interviewDetail: data.interviewDetail,
        reviewDetail: data.reviewDetail,
        reviewId: data.reviewId,
    };
}
