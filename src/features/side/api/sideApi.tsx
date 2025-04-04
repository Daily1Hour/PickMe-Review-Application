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

export const getSideData = async () => {
    const response = await client.get("/interview/side");
    return response.data;
};
