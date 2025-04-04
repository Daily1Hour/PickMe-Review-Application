import { client } from "@/shared/api";

export const getSideData = async () => {
    const response = await client.get("/interview/side");
    return response.data;
};
