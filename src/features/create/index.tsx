import { Heading, Button } from "@chakra-ui/react";

import InterviewDetail from "./ui/InterviewDetail";
import Preparation from "./ui/Preparation";
import InterviewProcess from "./ui/InterviewProcess";
import QuestionsAnswers from "./ui/QuestionsAnswers";
import Communication from "./ui/Communication";
import InterviewAnalysis from "./ui/InterviewAnalysis";
import NextPreparation from "./ui/NextPreparation";
import { useEffect, useState } from "react";
import {
    GetInterviewReviewsDTO,
    PostInterviewReviewsDTO,
    ReviewDetailDTO,
} from "./api/reviewDTOList";
import { getInitialFormData, initialFormData } from "./api/initialFormData";
import { reviewPostApi } from "./api/reviewPostApi";
import { Dispatch, SetStateAction } from "react";
import { getReviewApi } from "@/pages/review/api/getReviewApi";

interface Props {
    reviewId: string | null;
}

const CreateReviewPage = ({ reviewId }: Props) => {
    const [selectedData, setSelectedData] =
        useState<PostInterviewReviewsDTO>(initialFormData);

    useEffect(() => {
        if (reviewId !== null) {
            const getData = async () => {
                const data = await getReviewApi(reviewId);
                setSelectedData(data.interviewReviews[0]);
            };
            getData();
        } else {
            setSelectedData(initialFormData);
        }
    }, [reviewId]);

    const handleSave = async () => {
        // console.log("Collected Data:", formData);
        // // 데이터 전송 로직 작성 (예: API 호출)
        // console.log(reviewPostApi(formData));
        const createReview = await reviewPostApi(formData);
        console.log(createReview.data.interviewDetailId);
        // state({
        //     reviewId: createReview.data.interviewDetailId,
        //     isCreatingReview: false,
        // });
    };
    return (
        <>
            <Heading textAlign="center" size="3xl" marginTop="50px">
                {reviewId
                    ? selectedData.interviewDetail.companyName
                    : "면접 회고 작성"}
            </Heading>

            <InterviewDetail Data={selectedData.interviewDetail} />
            <Preparation inputData={handleReviewDetail} formData={formData} />
            <InterviewProcess
                inputData={handleReviewDetail}
                formData={formData}
            />
            <QuestionsAnswers
                inputData={handleReviewDetail}
                //formData={formData}
            />
            <Communication inputData={handleReviewDetail} formData={formData} />
            <InterviewAnalysis
                inputData={handleReviewDetail}
                formData={formData}
            />
            <NextPreparation
                inputData={handleReviewDetail}
                formData={formData}
            />
            <Button colorPalette="green" onClick={handleSave}>
                저장
            </Button>
        </>
    );
};

export default CreateReviewPage;
