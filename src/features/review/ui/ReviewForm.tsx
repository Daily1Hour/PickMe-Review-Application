import { FormProvider, useForm } from "react-hook-form";
import { Heading, Box } from "@chakra-ui/react";

import InterviewReviewParts from "./InterviewReviewParts";
import { InterviewReviews } from "@/entities/review/model/review";
import {
    InterviewReviewsSchema,
    InterviewReviewsType,
} from "../schema/reviewSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ActionButton from "./ActionButton";
import { useReviewMutation } from "../hook/useReviewMutation";

interface ReviewFormProps {
    data: InterviewReviews | undefined;
    reviewId: string | undefined;
}

const ReviewForm = ({ data, reviewId }: ReviewFormProps) => {
    const methods = useForm<InterviewReviewsType>({
        mode: "onChange", // 실시간 유효성 검증
        resolver: zodResolver(InterviewReviewsSchema),
        values: data, // values가 props로 업데이트 되면 값 업데이트, defaultValue는 첫 마운트 시에만 초기값 설정됨
    });

    const { mutation, deleteMutation } = useReviewMutation();

    const { handleSubmit, watch } = methods;

    const onSubmit = handleSubmit(async (data) => {
        mutation.mutate({ reviewId, data });
    });

    const handleDelete = async () => {
        deleteMutation.mutate(reviewId);
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
