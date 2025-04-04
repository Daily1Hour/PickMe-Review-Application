import { client } from "@/shared/api";

export const deleteReviewApi = async (reviewId: string) => {
    const response = await client.delete(`/interview`, {
        params: { reviewId: reviewId },
    });
    return response;
};
