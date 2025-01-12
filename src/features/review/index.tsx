import { Heading, Button, Box, HStack } from "@chakra-ui/react";

import InterviewDetail from "./ui/InterviewDetail";
import Preparation from "./ui/Preparation";
import InterviewProcess from "./ui/InterviewProcess";
import QuestionsAnswers from "./ui/QuestionsAnswers";
import Communication from "./ui/Communication";
import InterviewAnalysis from "./ui/InterviewAnalysis";
import NextPreparation from "./ui/NextPreparation";
import { useEffect, useState } from "react";
import { PostInterviewReviewsDTO } from "./api/reviewDTOList";
import { initialFormData } from "./api/initialFormData";
import { postReviewApi } from "./api/postReviewApi";

import { getReviewApi } from "@/features/review/api/getReviewApi";
import { FormProvider, useForm } from "react-hook-form";
import { updateReviewApi } from "./api/updateReviewApi";
import { DeleteReviewApi } from "./api/DeleteReviewApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props {
    reviewId: string | null;
    state: string;
    onSelect: (reviewId: string | null | undefined, state: string) => void;
}

const ReviewPage = ({ reviewId, state, onSelect }: Props) => {
    const [formData, setFormData] =
        useState<PostInterviewReviewsDTO>(initialFormData);

    const methods = useForm({
        defaultValues: initialFormData,
    });

    const { handleSubmit, reset } = methods;

    // useMutation 훅을 컴포넌트 최상위에서 호출
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (data: any) => {
            if (reviewId) {
                return await updateReviewApi(data, reviewId);
            } else {
                return await postReviewApi(data);
            }
        },
        onSuccess: () => {
            // 생성 & 수정 성공 시 사이드 바 "side" 쿼리의 캐시를 무효화하고 데이터를 새로 가져옴(refetch)
            queryClient.invalidateQueries({
                queryKey: ["side"],
            });
        },
    });

    const onSubmit = handleSubmit(async (data) => {
        mutation.mutate(data);
    });

    const handleDelete = async () => {
        console.log("삭제");
        if (reviewId) {
            const deleteReview = await DeleteReviewApi(reviewId);
            console.log(deleteReview);
            onSelect(undefined, "delete");
        }
    };

    useEffect(() => {
        if (reviewId) {
            const getData = async () => {
                const data = await getReviewApi(reviewId);
                console.log("reviewId가 있을 때", data.interviewReviews[0]);
                setFormData(data.interviewReviews[0]);
                reset(data.interviewReviews[0]);
            };
            getData();
        }
    }, [reviewId, state]);

    return (
        <FormProvider {...methods}>
            <form onSubmit={onSubmit}>
                <Box display="grid" gap="80px">
                    <Heading textAlign="center" size="3xl" marginTop="50px">
                        {reviewId
                            ? formData.interviewDetail.companyName
                            : "면접 회고 작성"}
                    </Heading>
                    <InterviewDetail />

                    <Preparation />

                    <InterviewProcess />

                    <QuestionsAnswers />

                    <Communication />

                    <InterviewAnalysis />

                    <NextPreparation />

                    {reviewId ? (
                        <HStack justify="flex-end">
                            <Button
                                colorPalette="green"
                                type="submit"
                                width="100px"
                            >
                                수정하기
                            </Button>
                            <Button
                                colorPalette="red"
                                onClick={handleDelete} // 삭제 처리 함수
                                type="button"
                                width="100px"
                            >
                                삭제하기
                            </Button>
                        </HStack>
                    ) : (
                        <Box display="flex" justifyContent="flex-end">
                            <Button
                                colorPalette="green"
                                type="submit"
                                width="100px"
                            >
                                저장하기
                            </Button>
                        </Box>
                    )}
                </Box>
            </form>
        </FormProvider>
    );
};

export default ReviewPage;
