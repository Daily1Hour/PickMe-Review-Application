import { Heading, Button, Box, HStack } from "@chakra-ui/react";

import InterviewDetail from "./ui/InterviewDetail";
import Preparation from "./ui/Preparation";
import InterviewProcess from "./ui/InterviewProcess";
import QuestionsAnswers from "./ui/QuestionsAnswers";
import Communication from "./ui/Communication";
import InterviewAnalysis from "./ui/InterviewAnalysis";
import NextPreparation from "./ui/NextPreparation";
import { useState } from "react";
import { GetResponseDTO } from "./api/reviewDTOList";
import { initialFormData } from "./api/initialFormData";
import { postReviewApi } from "./api/postReviewApi";

import { getReviewApi } from "@/features/review/api/getReviewApi";
import { FormProvider, useForm } from "react-hook-form";
import { updateReviewApi } from "./api/updateReviewApi";
import { DeleteReviewApi } from "./api/DeleteReviewApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface Props {
    reviewId: string | null;
    onSelect: (reviewId: string | null) => void;
}

const ReviewPage = ({ reviewId, onSelect }: Props) => {
    const [id, setId] = useState<string | null>();

    const methods = useForm({
        defaultValues: initialFormData,
    });

    const { handleSubmit, reset } = methods;

    // useMutation 훅을 컴포넌트 최상위에서 호출
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (data: any) => {
            if (id) {
                return await updateReviewApi(data, id);
            } else {
                return await postReviewApi(data);
            }
        },
        onSuccess: (data) => {
            console.log(data.data.interviewDetailId);
            // 생성 & 수정 성공 시 사이드 바 "side" 쿼리의 캐시를 무효화하고 데이터를 새로 가져옴(refetch)
            queryClient.invalidateQueries({
                queryKey: ["side"],
            });
            setId(data.data.interviewDetailId);
            queryClient.invalidateQueries({
                queryKey: ["review"],
            });
            window.scrollTo(0, 0);
        },
    });

    const onSubmit = handleSubmit(async (data) => {
        mutation.mutate(data);
    });

    const deleteMutation = useMutation({
        mutationFn: async () => {
            if (reviewId) return DeleteReviewApi(reviewId);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["side"],
            });
        },
    });

    const handleDelete = async () => {
        deleteMutation.mutate();
    };

    const { data } = useQuery<GetResponseDTO>({
        queryKey: ["review"],
        queryFn: () => getReviewApi(id as string),
        enabled: !!id,
    });

    return (
        <FormProvider {...methods}>
            <form onSubmit={onSubmit}>
                <Box display="grid" gap="80px">
                    <Heading textAlign="center" size="3xl" marginTop="50px">
                        {data
                            ? data.interviewReviews[0].interviewDetail
                                  .companyName
                            : "면접 회고 작성"}
                    </Heading>
                    <InterviewDetail />

                    <Preparation />

                    <InterviewProcess />

                    <QuestionsAnswers />

                    <Communication />

                    <InterviewAnalysis />

                    <NextPreparation />

                    {id ? (
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
