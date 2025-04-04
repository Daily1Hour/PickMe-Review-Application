import axios from "axios";
import { accessToken } from "@/shared/api/tokens";
import { FlattenedReview } from "@/entities/review/model/review";
import { reviewToCreateDTO } from "../service/reviewToDto";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const client = axios.create({
    baseURL: `${SERVER_URL}`,
    headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
    },
});

export const postReviewApi = async (
    data: FlattenedReview,
): Promise<{ interviewDetailId: string }> => {
    const dto = reviewToCreateDTO(data);
    const response = await client.post(`/interview`, dto);
    return response.data;
};
