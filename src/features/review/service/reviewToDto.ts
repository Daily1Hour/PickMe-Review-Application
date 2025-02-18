import { FlattenedReview } from "@/entities/review/model/review";
import {
    CommunicationDTO,
    InterviewAnalysisDTO,
    InterviewDetailDTO,
    InterviewProcessDTO,
    NextPreparationDTO,
    PostInterviewReviewsDTO,
    PreparationDTO,
    PutInterviewReviewsDTO,
    QuestionsAnswersDTO,
    ReviewDetailDTO,
} from "../api/reviewDTOList";

export function reviewToCreateDTO(data: FlattenedReview) {
    return {
        interviewDetail: {
            companyName: data.companyName,
            position: data.position,
            interviewDateTime: data.interviewDateTime,
            category: data.category,
        } as InterviewDetailDTO,
        reviewDetail: {
            preparation: {
                strengths: data.strengths,
                improvements: data.improvements,
            } as PreparationDTO,
            interviewProcess: {
                format: data.format,
                mood: data.mood,
                panel: data.panel,
                interviewRatio: data.interviewRatio,
            } as InterviewProcessDTO,
            questionsAnswers: data.questionsAnswers.map((qa) => ({
                type: qa.type,
                question: qa.question,
                answer: qa.answer,
                feedback: qa.feedback,
            })) as QuestionsAnswersDTO[],
            communication: {
                verbal: data.verbal,
                nonVerbal: data.nonVerbal,
                interaction: data.interaction,
            } as CommunicationDTO,
            interviewAnalysis: {
                strengths: data.analysisStrengths,
                improvements: data.analysisImprovements,
                feedback: data.analysisFeedback,
                difficulty: data.difficulty,
                interviewResultAnalysis: data.interviewResultAnalysis,
            } as InterviewAnalysisDTO,
            nextPreparation: {
                technical: data.technical,
                expression: data.expression,
                additionalPractice: data.additionalPractice,
            } as NextPreparationDTO,
        } as ReviewDetailDTO,
    } as PostInterviewReviewsDTO;
}

export function reviewToUpdateDTO(data: FlattenedReview) {
    return {
        interviewDetail: {
            companyName: data.companyName,
            position: data.position,
            interviewDateTime: data.interviewDateTime,
            category: data.category,
        } as InterviewDetailDTO,
        reviewDetail: {
            preparation: {
                strengths: data.strengths,
                improvements: data.improvements,
            } as PreparationDTO,
            interviewProcess: {
                format: data.format,
                mood: data.mood,
                panel: data.panel,
                interviewRatio: data.interviewRatio,
            } as InterviewProcessDTO,
            questionsAnswers: data.questionsAnswers.map((qa) => ({
                type: qa.type,
                question: qa.question,
                answer: qa.answer,
                feedback: qa.feedback,
            })) as QuestionsAnswersDTO[],
            communication: {
                verbal: data.verbal,
                nonVerbal: data.nonVerbal,
                interaction: data.interaction,
            } as CommunicationDTO,
            interviewAnalysis: {
                strengths: data.analysisStrengths,
                improvements: data.analysisImprovements,
                feedback: data.analysisFeedback,
                difficulty: data.difficulty,
                interviewResultAnalysis: data.interviewResultAnalysis,
            } as InterviewAnalysisDTO,
            nextPreparation: {
                technical: data.technical,
                expression: data.expression,
                additionalPractice: data.additionalPractice,
            } as NextPreparationDTO,
        } as ReviewDetailDTO,
    } as PutInterviewReviewsDTO;
}
