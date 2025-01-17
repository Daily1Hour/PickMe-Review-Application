import axios from "axios";
import { dtoToReview } from "../service/dtoToReview";
import { GetResponseDTO } from "./reviewDTOList";

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
    const response = await client.get<GetResponseDTO>("/interview", {
        params: { reviewId: reviewId },
    });

    return dtoToReview(response.data);
};
