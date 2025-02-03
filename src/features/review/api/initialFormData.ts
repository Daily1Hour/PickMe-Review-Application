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
