import { client } from "@/shared/api";
import { dtoToReview } from "../service/dtoToReview";
import { GetResponseDTO } from "./reviewDTOList";

/**
 * 주어진 리뷰 ID에 해당하는 인터뷰 리뷰를 조회하는 API 요청 함수입니다.
 *
 * @param reviewId - 조회할 인터뷰 리뷰의 고유 식별자입니다.
 * @returns 조회된 인터뷰 리뷰 데이터를 도메인 객체로 변환한 결과를 반환합니다.
 */
export const getReviewApi = async (reviewId: string) => {
    const response = await client.get<GetResponseDTO>("/interview", {
        params: { reviewId: reviewId },
    });

    return dtoToReview(response.data);
};
