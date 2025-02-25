import { FormProvider, useForm } from "react-hook-form";
import { Heading, Box } from "@chakra-ui/react";

import InterviewReviewParts from "./InterviewReviewParts";
import { FlattenedReview } from "@/entities/review/model/review";
import {
    FlattenedInterviewReviewsSchema,
    InterviewReviewsType,
} from "../schema/reviewSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ActionButton from "./ActionButton";
import { initialFormData } from "../api/initialFormData";
import React, { useEffect } from "react";
import { useReviewMutation } from "../hook/useReviewMutation";

interface ReviewFormProps {
    data: FlattenedReview | undefined;
    reviewId: string | undefined;
}

const ReviewForm = ({ data, reviewId }: ReviewFormProps) => {
    const methods = useForm<InterviewReviewsType>({
        mode: "onChange", // 실시간 유효성 검증
        resolver: zodResolver(FlattenedInterviewReviewsSchema),
        defaultValues: initialFormData, // values가 props로 업데이트 되면 값 업데이트, defaultValue는 첫 마운트 시에만 초기값 설정됨
    });

    const { mutation, deleteMutation } = useReviewMutation();

    const { handleSubmit } = methods;

    const onSubmit = handleSubmit(async (data) => {
        mutation.mutate({ reviewId, data });
    });

    const handleDelete = async () => {
        deleteMutation.mutate(reviewId);
    };

    const { reset } = methods;
    useEffect(() => {
        if (data) {
            reset(data); // data가 있을 때만 reset 실행
        }
        if (reviewId === undefined) {
            reset(initialFormData);
        }
    }, [data, reset]); // data가 변경될 때마다 실행

    const title = data ? `${data?.companyName} - ${data?.category}` : "-";

    return (
        <FormProvider {...methods}>
            <form onSubmit={onSubmit}>
                <Box display="grid" gap="50px">
                    <Heading textAlign="center" size="3xl" marginTop="50px">
                        {title}
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

export default React.memo(ReviewForm);
