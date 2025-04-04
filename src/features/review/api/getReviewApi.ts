import { client } from "@/shared/api";
import { dtoToReview } from "../service/dtoToReview";
import { GetResponseDTO } from "./reviewDTOList";

export const getReviewApi = async (reviewId: string) => {
    const response = await client.get<GetResponseDTO>("/interview", {
        params: { reviewId: reviewId },
    });

    return dtoToReview(response.data);
};
