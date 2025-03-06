import { FormProvider, useForm } from "react-hook-form";
import { Heading, Box } from "@chakra-ui/react";
import { ScrollRestoration } from "react-router-dom";

import InterviewReviewParts from "./InterviewReviewParts";
import {
    FlattenedInterviewReviewsSchema,
    InterviewReviewsType,
} from "../schema/reviewSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ActionButton from "./ActionButton";
import { initialFormData } from "../api/initialFormData";
import React from "react";
import { useReviewMutation } from "../hook/useReviewMutation";
import { useReviewStore } from "../store/useReviewStore";
import { navigateTo } from "@/shared/api/router";

const ReviewForm = () => {
    const { review, setReview } = useReviewStore();
    const methods = useForm<InterviewReviewsType>({
        mode: "onChange", // 실시간 유효성 검증
        resolver: zodResolver(FlattenedInterviewReviewsSchema),
        defaultValues: review || initialFormData,
    });

    const reviewId = review.reviewId;

    const { createMutation, updateMutation, deleteMutation } =
        useReviewMutation();

    const { handleSubmit } = methods;

    const onSubmit = handleSubmit(async (data) => {
        if (!reviewId) {
            const newReview = await createMutation({ data });
            navigateTo(`/${newReview.interviewDetailId}`);
        } else {
            updateMutation({ reviewId, data });
            setReview(data);
        }
    });

    const handleDelete = async () => {
        deleteMutation(reviewId);
        navigateTo("/");
    };

    const title = review ? `${review?.companyName} - ${review?.category}` : "-";

    return (
        <>
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
            <ScrollRestoration />
        </>
    );
};

export default React.memo(ReviewForm);
