import { GetResponseDTO } from "../api/reviewDTOList";

/**
 * 서버에서 전달받은 응답 DTO를 평탄화된 리뷰 객체로 변환하는 함수입니다.
 *
 * @param dto - 서버로부터 조회한 인터뷰 리뷰 응답 데이터입니다.
 * @returns 프론트엔드에서 사용하는 평탄화된 리뷰 데이터 객체를 반환합니다.
 */
export function dtoToReview(dto: GetResponseDTO) {
    const interview = dto.interviewReviews[0];

    return {
        createdAt: interview.createdAt,
        updatedAt: interview.updatedAt,
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
