import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const TOKEN = import.meta.env.VITE_TOKEN;

const client = axios.create({
    baseURL: `${SERVER_URL}/review`,
    headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
    },
});

export const getReviewApi = async (reviewId: string) => {
    const response = await client.get("/interview", {
        params: { reviewId: reviewId },
    });
    return response.data;
};