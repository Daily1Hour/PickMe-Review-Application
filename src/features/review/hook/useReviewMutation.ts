import { useMutation, useQueryClient } from "@tanstack/react-query";

import { putReviewApi, postReviewApi, deleteReviewApi } from "../api";
import { FlattenedReview } from "@/entities/review/model/review";

/**
 * 인터뷰 리뷰를 생성, 수정, 삭제하기 위한 mutation 함수를 제공하는 커스텀 훅입니다.
 * 이 훅은 React Query의 `useMutation`을 활용하여 레코드의 상태를 관리하며,
 * 성공적인 mutation 이후 관련 쿼리의 캐시를 무효화하여 데이터를 최신 상태로 유지합니다.
 *
 * @returns 다음과 같은 mutation 함수를 포함하는 객체를 반환합니다:
 * - `createMutation`: 새로운 리뷰를 생성하는 mutation 함수.
 * - `updateMutation`: 기존 리뷰를 수정하는 mutation 함수.
 * - `deleteMutation`: 리뷰를 삭제하는 mutation 함수.
 */
export const useReviewMutation = () => {
    const queryClient = useQueryClient();

    const { mutateAsync: createMutation } = useMutation({
        mutationFn: ({ data }: { data: FlattenedReview }) =>
            postReviewApi(data),
        onSuccess: () => {
            // // 생성 성공 시 사이드 바 "side" 쿼리의 캐시를 무효화하고 데이터를 새로 가져옴(refetch)
            queryClient.refetchQueries({
                queryKey: ["side"],
            });
        },
    });

    const { mutate: updateMutation } = useMutation({
        mutationFn: async ({
            reviewId,
            data,
        }: {
            reviewId: string;
            data: FlattenedReview;
        }) => putReviewApi(data, reviewId),
        onSuccess: (data) => {
            // 수정 성공 시 쿼리의 캐시를 무효화하고 데이터를 새로 가져옴(refetch)
            queryClient.refetchQueries({
                queryKey: ["side"],
            });

            queryClient.refetchQueries({
                queryKey: ["review", `${data.data.interviewDetailId}`],
            });
        },
    });

    const { mutate: deleteMutation } = useMutation({
        mutationFn: async (reviewId: string | undefined) => {
            if (reviewId) return deleteReviewApi(reviewId);
        },
        onSuccess: () => {
            queryClient.refetchQueries({
                queryKey: ["side"],
            });
        },
    });
    return { createMutation, updateMutation, deleteMutation };
};
