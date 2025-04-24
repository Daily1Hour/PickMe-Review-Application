import { client } from "@/shared/api";

/**
 * 사이드바 인터뷰 리뷰 목록을 서버에서 가져오는 API 요청 함수입니다.
 *
 * 기능:
 * - `/interview/side` 엔드포인트로 GET 요청을 보내 인터뷰 리뷰 리스트를 조회합니다.
 * - 응답은 각 리뷰의 ID와 간략한 인터뷰 정보를 포함한 배열입니다.
 *
 * @returns 사이드바에 표시할 인터뷰 리뷰 리스트를 반환합니다.
 *
 * @remarks
 * - 이 함수는 React Query의 `useQuery` 등과 함께 사용되어 사이드바 목록 렌더링에 사용됩니다.
 * - 응답 구조는 `GetSideDTO[]` 형태이며, 각 항목은 리뷰 ID와 회사명, 면접 유형을 포함합니다.
 *
 * @example
 * ```ts
 * const { data } = useQuery(["side"], getSideData);
 * ```
 */
export const getSideData = async () => {
    const response = await client.get("/interview/side");
    return response.data;
};
