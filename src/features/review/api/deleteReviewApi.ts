import { client } from "@/shared/api";

/**
 * 인터뷰 리뷰를 삭제하는 API 요청 함수입니다.
 *
 * @param reviewId - 삭제할 인터뷰 리뷰의 고유 식별자입니다.
 * @returns 삭제 요청에 대한 Axios 응답 객체를 포함하는 Promise를 반환합니다.
 */
export const deleteReviewApi = async (reviewId: string) => {
    const response = await client.delete(`/interview`, {
        params: { reviewId: reviewId },
    });
    return response;
};
