import { client } from "@/shared/api";

export const getSideData = async () => {
    try {
        const response = await client.get("/interview/side");
        return response.data;
    } catch (err: any) {
        console.error("백엔드 에러 메시지:", err.response?.data?.message);
        alert(err.response?.data?.message);
        throw err; //즉, 이 함수(getSideData)를 호출한 쪽에서 에러를 또 처리할 수 있게, 예를 들어 상위 컴포넌트나 useQuery에서 onError로 처리 가능하게!
    }
};
