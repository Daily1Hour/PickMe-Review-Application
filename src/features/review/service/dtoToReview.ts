import { InterviewReviews } from "@/entities/review/model/review";
import { GetResponseDTO } from "../api/reviewDTOList";

export function dtoToReview(dto: GetResponseDTO) {
    const interview = dto.interviewReviews[0];

    return {
        companyName: interview.interviewDetail.companyName,
        position: interview.interviewDetail.position,
        interviewDateTime: interview.interviewDetail.interviewDateTime,
        category: interview.interviewDetail.category,
        strengths: interview.reviewDetail.preparation.strengths,
        improvements: interview.reviewDetail.preparation.improvements,
        format: interview.reviewDetail.interviewProcess.format,
        mood: interview.reviewDetail.interviewProcess.mood,
        panel: interview.reviewDetail.interviewProcess.panel,
        interviewRatio: interview.reviewDetail.interviewProcess.interviewRatio,
        questionsAnswers: interview.reviewDetail.questionsAnswers.map((q) => ({
            type: q.type,
            question: q.question,
            answer: q.answer,
            feedback: q.feedback,
        })),
        verbal: interview.reviewDetail.communication.verbal,
        nonVerbal: interview.reviewDetail.communication.nonVerbal,
        interaction: interview.reviewDetail.communication.interaction,
        analysisStrengths: interview.reviewDetail.interviewAnalysis.strengths,
        analysisImprovements:
            interview.reviewDetail.interviewAnalysis.improvements,
        analysisFeedback: interview.reviewDetail.interviewAnalysis.feedback,
        difficulty: interview.reviewDetail.interviewAnalysis.difficulty,
        interviewResultAnalysis:
            interview.reviewDetail.interviewAnalysis.interviewResultAnalysis,
        technical: interview.reviewDetail.nextPreparation.technical,
        expression: interview.reviewDetail.nextPreparation.expression,
        additionalPractice:
            interview.reviewDetail.nextPreparation.additionalPractice,
        reviewId: interview.reviewId ?? null,
    };
}
