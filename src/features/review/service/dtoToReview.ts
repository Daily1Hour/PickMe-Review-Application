import { Review } from "@/entities/review/model/review";
import { GetResponseDTO } from "../api/reviewDTOList";

export function dtoToReview(dto: GetResponseDTO) {
    return new Review(dto.id, dto.clientId, dto.interviewReviews);
}
