import axios from "axios";
import { accessToken } from "@/shared/api/tokens";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const client = axios.create({
    baseURL: `${SERVER_URL}`,
    headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
    },
});

export const deleteReviewApi = async (reviewId: string) => {
    const response = await client.delete(`/interview`, {
        params: { reviewId: reviewId },
    });
    return response;
};
