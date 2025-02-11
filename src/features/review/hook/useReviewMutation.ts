import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { putReviewApi, postReviewApi, deleteReviewApi } from "../api";
import { FlattenedReview } from "@/entities/review/model/review";

export const useReviewMutation = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async ({
            reviewId,
            data,
        }: {
            reviewId: string | undefined;
            data: FlattenedReview;
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
                queryKey: ["review", `${data.data.interviewDetailId}`],
            });

            navigate(`${data.data.interviewDetailId}`);
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
            navigate("/");
        },
    });
    return { mutation, deleteMutation };
};
