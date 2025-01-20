import { InterviewReviews } from "@/entities/review/model/review";
import {
    PostInterviewReviewsDTO,
    PutInterviewReviewsDTO,
} from "../api/reviewDTOList";

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
    } as PutInterviewReviewsDTO;
}
