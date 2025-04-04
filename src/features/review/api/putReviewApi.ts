import axios from "axios";
import { accessToken } from "@/shared/api/tokens";
import { FlattenedReview } from "@/entities/review/model/review";
import { reviewToUpdateDTO } from "../service/reviewToDto";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const client = axios.create({
    baseURL: `${SERVER_URL}/review`,
    headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
    },
});

export const putReviewApi = async (data: FlattenedReview, reviewId: string) => {
    const dto = reviewToUpdateDTO(data);
    const response = await client.put(`/interview`, dto, {
        params: { reviewId: reviewId },
    });
    return response;
};
