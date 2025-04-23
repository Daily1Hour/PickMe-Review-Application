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

/**
 * 평탄화된 리뷰 데이터를 서버 전송용 생성 DTO 형태로 변환하는 함수입니다.
 *
 * @param data - 인터뷰 리뷰의 평탄화된 데이터 객체입니다.
 * @returns 서버에 인터뷰 리뷰를 생성할 때 사용하는 DTO 객체를 반환합니다.
 */
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

/**
 * 평탄화된 리뷰 데이터를 서버 전송용 수정 DTO 형태로 변환하는 함수입니다.
 *
 * @param data - 인터뷰 리뷰의 평탄화된 데이터 객체입니다.
 * @returns 서버에 인터뷰 리뷰를 수정할 때 사용하는 DTO 객체를 반환합니다.
 */
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
