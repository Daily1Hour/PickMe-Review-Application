import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import { Heading, Button, Box, HStack } from "@chakra-ui/react";

import { initialFormData } from "../api/initialFormData";
import { putReviewApi, postReviewApi, deleteReviewApi } from "../api";
import { InterviewReviewParts } from "../ui";
import { InterviewReviews } from "@/entities/review/model/review";
import {
    InterviewReviewsSchema,
    InterviewReviewsType,
} from "../schema/reviewSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ActionButton from "./ActionButton";

interface ReviewFormProps {
    data: InterviewReviews | undefined;
    reviewId: string | undefined;
}

const ReviewForm = ({ data, reviewId }: ReviewFormProps) => {
    const methods = useForm<InterviewReviewsType>({
        mode: "onChange", // 실시간 유효성 검증
        resolver: zodResolver(InterviewReviewsSchema),
        values: data ?? initialFormData, // values가 props로 업데이트 되면 값 업데이트, defaultValue는 첫 마운트 시에만 초기값 설정됨
    });

    const navigate = useNavigate();

    const { handleSubmit, reset, watch } = methods;

    // useMutation 훅을 컴포넌트 최상위에서 호출
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (data: InterviewReviews) => {
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

            navigate(`${data.data.interviewDetailId}`);
        },
    });

    const onSubmit = handleSubmit(async (data) => {
        mutation.mutate(data);
    });

    const deleteMutation = useMutation({
        mutationFn: async () => {
            if (reviewId) return deleteReviewApi(reviewId);
        },
        onSuccess: () => {
            queryClient.refetchQueries({
                queryKey: ["side"],
            });
            // 삭제 시 초기 화면으로
            navigate("/");
            reset(initialFormData);
        },
    });

    const handleDelete = async () => {
        deleteMutation.mutate();
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={onSubmit}>
                <Box display="grid" gap="80px">
                    <Heading textAlign="center" size="3xl" marginTop="50px">
                        {`${watch("interviewDetail.companyName")} - ${watch(
                            "interviewDetail.category",
                        )}`}
                    </Heading>

                    <InterviewReviewParts />

                    <ActionButton
                        reviewId={reviewId}
                        handleDelete={handleDelete}
                    />
                </Box>
            </form>
        </FormProvider>
    );
};

export default ReviewForm;
