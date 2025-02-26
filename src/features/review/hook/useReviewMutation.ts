import { useMutation, useQueryClient } from "@tanstack/react-query";

import { putReviewApi, postReviewApi, deleteReviewApi } from "../api";
import { FlattenedReview } from "@/entities/review/model/review";

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
