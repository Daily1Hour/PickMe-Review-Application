import { client } from "@/shared/api";
import { FlattenedReview } from "@/entities/review/model/review";
import { reviewToCreateDTO } from "../service/reviewToDto";

export const postReviewApi = async (
    data: FlattenedReview,
): Promise<{ interviewDetailId: string }> => {
    const dto = reviewToCreateDTO(data);
    const response = await client.post(`/interview`, dto);
    return response.data;
};
