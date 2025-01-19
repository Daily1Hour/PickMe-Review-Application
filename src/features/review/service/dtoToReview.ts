import { InterviewReviews } from "@/entities/review/model/review";
import { GetResponseDTO } from "../api/reviewDTOList";

export function dtoToReview(dto: GetResponseDTO) {
    return new InterviewReviews(
        dto.interviewReviews[0].interviewDetail,
        dto.interviewReviews[0].reviewDetail,
    );
}
