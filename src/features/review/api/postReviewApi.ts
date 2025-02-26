import axios from "axios";
import { FlattenedReview } from "@/entities/review/model/review";
import { reviewToCreateDTO } from "../service/reviewToDto";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const TOKEN = import.meta.env.VITE_TOKEN;

const client = axios.create({
    baseURL: `${SERVER_URL}/review`,
    headers: {
        Authorization: `Bearer ${TOKEN}`,
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
