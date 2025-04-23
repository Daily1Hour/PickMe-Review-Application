import { client } from "@/shared/api";
import { FlattenedReview } from "@/entities/review/model/review";
import { reviewToCreateDTO } from "../service/reviewToDto";

/**
 * 새로운 인터뷰 리뷰를 생성하는 API 요청 함수입니다.
 *
 * @param data - 생성할 인터뷰 리뷰의 평탄화된 데이터 객체입니다.
 * @returns 생성된 인터뷰의 고유 ID를 포함하는 Promise를 반환합니다.
 */
export const postReviewApi = async (
    data: FlattenedReview,
): Promise<{ interviewDetailId: string }> => {
    const dto = reviewToCreateDTO(data);
    const response = await client.post(`/interview`, dto);
    return response.data;
};
