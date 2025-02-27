import { InterviewReviewsType } from "../schema/reviewSchema";

export const initialFormData: InterviewReviewsType = {
    companyName: "",
    position: "",
    interviewDateTime: "",
    category: "",
    strengths: "",
    improvements: "",
    format: "",
    mood: "",
    panel: "",
    interviewRatio: "",
    questionsAnswers: [
        {
            type: "",
            question: "",
            answer: "",
            feedback: "",
        },
    ],
    verbal: "",
    nonVerbal: "",
    interaction: "",
    analysisStrengths: "",
    analysisImprovements: "",
    analysisFeedback: "",
    difficulty: "",
    interviewResultAnalysis: "",
    technical: "",
    expression: "",
    additionalPractice: "",
};
