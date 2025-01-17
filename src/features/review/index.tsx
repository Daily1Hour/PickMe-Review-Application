import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import { Heading, Button, Box, HStack } from "@chakra-ui/react";

import { initialFormData } from "./api/initialFormData";
import {
    putReviewApi,
    postReviewApi,
    deleteReviewApi,
    getReviewApi,
} from "./api";
import { InterviewReviewParts } from "./ui";
import { InterviewReviews } from "@/entities/review/model/review";

const ReviewPage = () => {
    const [title, setTitle] = useState<string>();
    // 렌더링 시 화면을 맨 위로
    window.scrollTo(0, 0);
    // useParams로 url의 reviewId값 가져옴
    const { reviewId } = useParams<{ reviewId: string | undefined }>();

    const navigate = useNavigate();

    // reviewId가 있을 경우에만 작동
    const { data, refetch } = useQuery<InterviewReviews>({
        queryKey: ["review", reviewId],
        queryFn: () => getReviewApi(reviewId as string),
        enabled: !!reviewId,
        staleTime: 1000 * 60 * 60,
    });

    const methods = useForm({
        defaultValues: initialFormData,
    });

    const { handleSubmit, reset } = methods;

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

            if (reviewId) {
                refetch();
            }

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

    // useQuery가 성공 시 useForm을 가져온 데이터로 업데이트
    // reviewId가 있으면 해당 데이터로 없으면 초기 값으로 reset
    // 데이터가 로드될 때마다 reset 호출
    useEffect(() => {
        if (data && reviewId) {
            reset(data);
            setTitle(
                `${data.interviewDetail.companyName} | ${data.interviewDetail.category}`,
            );
        } else if (!reviewId) {
            reset(initialFormData);
            setTitle("면접 회고 작성");
        }
    }, [data, reviewId]);

    return (
        <FormProvider {...methods}>
            <form onSubmit={onSubmit}>
                <Box display="grid" gap="80px">
                    <Heading textAlign="center" size="3xl" marginTop="50px">
                        {title}
                    </Heading>

                    <InterviewReviewParts />

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
