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
import React from "react";

interface ReviewFormProps {
    data: FlattenedReview | undefined;
    reviewId: string | undefined;
}

const ReviewForm = ({ data, reviewId }: ReviewFormProps) => {
    const methods = useForm<InterviewReviewsType>({
        mode: "onChange", // 실시간 유효성 검증
        resolver: zodResolver(FlattenedInterviewReviewsSchema),
        values: data ?? initialFormData, // values가 props로 업데이트 되면 값 업데이트, defaultValue는 첫 마운트 시에만 초기값 설정됨
    });

    const title = data ? `${data?.companyName} - ${data?.category}` : "-";

    return (
        <FormProvider {...methods}>
            <form>
                <Box display="grid" gap="50px">
                    <Heading textAlign="center" size="3xl" marginTop="50px">
                        {title}
                    </Heading>

                    <InterviewReviewParts />

                    <ActionButton reviewId={reviewId} methods={methods} />
                </Box>
            </form>
        </FormProvider>
    );
};

export default React.memo(ReviewForm);
