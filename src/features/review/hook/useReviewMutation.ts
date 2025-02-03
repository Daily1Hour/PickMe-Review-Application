import { useMutation, useQueryClient } from "@tanstack/react-query";

import { putReviewApi, postReviewApi, deleteReviewApi } from "../api";
import { InterviewReviews } from "@/entities/review/model/review";
import { useReviewIdStore } from "@/shared/store/useReviewIdStore";

export const useReviewMutation = () => {
    const queryClient = useQueryClient();
    const { setReviewId } = useReviewIdStore();

    const mutation = useMutation({
        mutationFn: async ({
            reviewId,
            data,
        }: {
            reviewId: string | undefined;
            data: InterviewReviews;
        }) => {
            if (reviewId) {
                return await putReviewApi(data, reviewId);
            } else {
                return await postReviewApi(data);
            }
        },
        onSuccess: (data) => {
            // // 생성 & 수정 성공 시 사이드 바 "side" 쿼리의 캐시를 무효화하고 데이터를 새로 가져옴(refetch)
            queryClient.refetchQueries({
                queryKey: ["side"],
            });

            queryClient.refetchQueries({
                queryKey: ["review"],
            });
            setReviewId(`${data.data.interviewDetailId}`);
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (reviewId: string | undefined) => {
            if (reviewId) return deleteReviewApi(reviewId);
        },
        onSuccess: () => {
            queryClient.refetchQueries({
                queryKey: ["side"],
            });
            // 삭제 시 초기 화면으로
            setReviewId(undefined);
        },
    });
    return { mutation, deleteMutation };
};
