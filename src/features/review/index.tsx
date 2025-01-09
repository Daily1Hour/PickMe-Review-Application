import { Heading, Button } from "@chakra-ui/react";

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

interface Props {
    reviewId: string | null;
    onSelect: (reviewId: string | null) => void;
}

const ReviewPage = ({ reviewId, onSelect }: Props) => {
    const [formData, setFormData] =
        useState<PostInterviewReviewsDTO>(initialFormData);

    useEffect(() => {
        if (reviewId !== null) {
            const getData = async () => {
                const data = await getReviewApi(reviewId);
                console.log("reviewId가 있을 때", data.interviewReviews[0]);
                setFormData(data.interviewReviews[0]);
                reset(data.interviewReviews[0]);
            };
            getData();
        } else {
            //setFormData(initialFormData);
        }
    }, [reviewId]);
    //console.log(formData);
    const methods = useForm({
        defaultValues: initialFormData,
    });

    const { handleSubmit, reset } = methods;

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        const createReview = await postReviewApi(data);
        console.log(createReview.data, createReview.data.interviewDetailId);
        onSelect(createReview.data.interviewDetailId);
    });

    return (
        <FormProvider {...methods}>
            <form onSubmit={onSubmit}>
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

                <Button colorPalette="green" type="submit">
                    {reviewId ? "수정" : "저장"}
                </Button>
            </form>
        </FormProvider>
    );
};

export default ReviewPage;
