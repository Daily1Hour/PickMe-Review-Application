import axios from "axios";
import { FlattenedReview } from "@/entities/review/model/review";
import { reviewToUpdateDTO } from "../service/reviewToDto";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const TOKEN = import.meta.env.VITE_TOKEN;

const client = axios.create({
    baseURL: `${SERVER_URL}/review`,
    headers: {
        Authorization: `Bearer ${TOKEN}`,
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
