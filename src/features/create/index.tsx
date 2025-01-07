import { Heading, Button } from "@chakra-ui/react";

import InterviewDetail from "./ui/InterviewDetail";
import Preparation from "./ui/Preparation";
import InterviewProcess from "./ui/InterviewProcess";
import QuestionsAnswers from "./ui/QuestionsAnswers";
import Communication from "./ui/Communication";
import InterviewAnalysis from "./ui/InterviewAnalysis";
import NextPreparation from "./ui/NextPreparation";
import { useState } from "react";
import { PostInterviewReviewsDTO, ReviewDetailDTO } from "./api/reviewDTOList";
import { initialFormData } from "./api/initialFormData";
import { reviewPostApi } from "./api/reviewPostApi";
import { Dispatch, SetStateAction } from "react";

interface Props {
    reviewId: string | null;
}

const CreateReviewPage = ({ reviewId }: Props) => {
    const [formData, setFormData] =
        useState<PostInterviewReviewsDTO>(initialFormData);

    const handleInterviewDetail = (fieldName: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            interviewDetail: {
                ...prev.interviewDetail,
                [fieldName]: value, // PostInterviewDetailDTO의 필드에 대해서만 업데이트
            },
        }));
    };

    const handleReviewDetail = (
        pFieldName: keyof ReviewDetailDTO,
        cFieldName: string,
        value: string,
        index?: number,
    ) => {
        setFormData((prev) => {
            if (pFieldName === "questionsAnswers") {
                // 인덱스가 주어졌다면 해당 인덱스의 항목을 수정
                if (index !== undefined) {
                    const updatedQuestionsAnswers = [
                        ...prev.reviewDetail.questionsAnswers,
                    ];
                    updatedQuestionsAnswers[index] = {
                        ...updatedQuestionsAnswers[index],
                        [cFieldName]: value, // 특정 필드만 업데이트
                    };
                    return {
                        ...prev,
                        reviewDetail: {
                            ...prev.reviewDetail,
                            questionsAnswers: updatedQuestionsAnswers,
                        },
                    };
                }
                // 인덱스가 주어지지 않았다면 새 항목을 추가
                return {
                    ...prev,
                    reviewDetail: {
                        ...prev.reviewDetail,
                        questionsAnswers: [
                            ...prev.reviewDetail.questionsAnswers,
                            {
                                type: "",
                                question: "",
                                answer: "",
                                feedback: "",
                            },
                        ],
                    },
                };
            }

            // 'preparation', 'interviewProcess', 등 다른 필드일 경우
            return {
                ...prev,
                reviewDetail: {
                    ...prev.reviewDetail,
                    [pFieldName]: {
                        ...prev.reviewDetail[pFieldName],
                        [cFieldName]: value, // 해당 필드 업데이트
                    },
                },
            };
        });
    };

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
                면접 회고 작성
            </Heading>

            <InterviewDetail
                inputData={handleInterviewDetail}
                formData={formData}
            />
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
