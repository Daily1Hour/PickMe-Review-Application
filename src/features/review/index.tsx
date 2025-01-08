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
                setFormData(data.interviewReviews[0]);
            };
            getData();
        } else {
            setFormData(initialFormData);
        }
    }, [reviewId]);

    const handleSave = async () => {
        if (!reviewId) {
            const createReview = await postReviewApi(formData);
            console.log(createReview.data.interviewDetailId);
            onSelect(createReview.data.interviewDetailId);
        }
    };

    const method = useForm({
        defaultValues: initialFormData,
    });
    const { handleSubmit } = method;

    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <FormProvider {...method}>
            <form onSubmit={onSubmit}>
                <Heading textAlign="center" size="3xl" marginTop="50px">
                    {reviewId
                        ? formData.interviewDetail.companyName
                        : "면접 회고 작성"}
                </Heading>
                <InterviewDetail data={formData.interviewDetail} />

                <Preparation data={formData.reviewDetail.preparation} />

                <InterviewProcess
                    data={formData.reviewDetail.interviewProcess}
                />

                <QuestionsAnswers
                    data={formData.reviewDetail.questionsAnswers}
                />

                <Communication data={formData.reviewDetail.communication} />

                <InterviewAnalysis
                    data={formData.reviewDetail.interviewAnalysis}
                />

                <NextPreparation data={formData.reviewDetail.nextPreparation} />

                <Button colorPalette="green" type="submit">
                    {reviewId ? "수정" : "저장"}
                </Button>
            </form>
        </FormProvider>
    );
};

export default ReviewPage;
