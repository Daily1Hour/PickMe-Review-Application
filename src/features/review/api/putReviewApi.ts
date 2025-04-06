import { client } from "@/shared/api";
import { FlattenedReview } from "@/entities/review/model/review";
import { reviewToUpdateDTO } from "../service/reviewToDto";

export const putReviewApi = async (data: FlattenedReview, reviewId: string) => {
    const dto = reviewToUpdateDTO(data);
    const response = await client.put(`/interview`, dto, {
        params: { reviewId: reviewId },
    });
    return response;
};
