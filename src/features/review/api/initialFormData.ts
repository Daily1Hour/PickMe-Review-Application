// initialFormData.ts
import { GetInterviewReviewsDTO } from "./reviewDTOList"; // DTO 타입이 정의된 파일 경로
import { InterviewReviewsType } from "../schema/reviewSchema";

export const initialFormData: InterviewReviewsType = {
    interviewDetail: {
        companyName: "",
        position: "",
        interviewDateTime: "",
        category: "",
    },
    reviewDetail: {
        preparation: {
            strengths: "",
            improvements: "",
        },
        interviewProcess: {
            format: "",
            mood: "",
            panel: "",
            interviewRatio: "",
        },
        questionsAnswers: [
            {
                type: "",
                question: "",
                answer: "",
                feedback: "",
            },
        ],
        communication: {
            verbal: "",
            nonVerbal: "",
            interaction: "",
        },
        interviewAnalysis: {
            strengths: "",
            improvements: "",
            feedback: "",
            difficulty: "",
            interviewResultAnalysis: "",
        },
        nextPreparation: {
            technical: "",
            expression: "",
            additionalPractice: "",
        },
    },
};

export const getInitialFormData: GetInterviewReviewsDTO = {
    reviewId: "",
    interviewDetail: {
        companyName: "",
        position: "",
        interviewDateTime: "",
        category: "",
    },
    reviewDetail: {
        preparation: {
            strengths: "",
            improvements: "",
        },
        interviewProcess: {
            format: "",
            mood: "",
            panel: "",
            interviewRatio: "",
        },
        questionsAnswers: [
            {
                type: "",
                question: "",
                answer: "",
                feedback: "",
            },
        ],
        communication: {
            verbal: "",
            nonVerbal: "",
            interaction: "",
        },
        interviewAnalysis: {
            strengths: "",
            improvements: "",
            feedback: "",
            difficulty: "",
            interviewResultAnalysis: "",
        },
        nextPreparation: {
            technical: "",
            expression: "",
            additionalPractice: "",
        },
    },
};
