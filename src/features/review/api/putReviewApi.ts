import { client } from "@/shared/api";
import { FlattenedReview } from "@/entities/review/model/review";
import { reviewToUpdateDTO } from "../service/reviewToDto";

/**
 * 기존 인터뷰 리뷰를 수정하는 API 요청 함수입니다.
 *
 * @param data - 수정할 인터뷰 리뷰의 평탄화된 데이터 객체입니다.
 * @param reviewId - 수정 대상 인터뷰 리뷰의 고유 식별자입니다.
 * @returns 수정 요청에 대한 Axios 응답 객체를 포함하는 Promise를 반환합니다.
 */
export const putReviewApi = async (data: FlattenedReview, reviewId: string) => {
    const dto = reviewToUpdateDTO(data);
    const response = await client.put(`/interview`, dto, {
        params: { reviewId: reviewId },
    });
    return response;
};
