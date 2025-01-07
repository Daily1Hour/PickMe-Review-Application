import axios from "axios";
import { PostInterviewReviewsDTO } from "./reviewDTOList";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const TOKEN = import.meta.env.VITE_TOKEN;

const client = axios.create({
    baseURL: `${SERVER_URL}/review`,
    headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
    },
});

export const reviewPostApi = async (data: PostInterviewReviewsDTO) => {
    const response = await client.post(`/interview`, data);
    return response;
};
