import { z } from "zod";

// Preparation
export const PreparationSchema = z.object({
    strengths: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    improvements: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
});

// InterviewProcess
export const InterviewProcessSchema = z.object({
    format: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    mood: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    panel: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    interviewRatio: z
        .string()
        .max(100, { message: "100자 이하로 작성해주세요" }),
});

// QuestionsAnswers
export const QuestionsAnswersSchema = z.object({
    type: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    question: z.string().max(500, { message: "500자 이하로 작성해주세요" }),
    answer: z.string().max(500, { message: "500자 이하로 작성해주세요" }),
    feedback: z.string().max(300, { message: "300자 이하로 작성해주세요" }),
});

// Communication
export const CommunicationSchema = z.object({
    verbal: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    nonVerbal: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    interaction: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
});

// InterviewAnalysis
export const InterviewAnalysisSchema = z.object({
    strengths: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    improvements: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    feedback: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    difficulty: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    interviewResultAnalysis: z
        .string()
        .max(100, { message: "100자 이하로 작성해주세요" }),
});

// NextPreparation
export const NextPreparationSchema = z.object({
    technical: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    expression: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    additionalPractice: z
        .string()
        .max(100, { message: "100자 이하로 작성해주세요" }),
});

// ReviewDetail
export const ReviewDetailSchema = z.object({
    preparation: PreparationSchema,
    interviewProcess: InterviewProcessSchema,
    questionsAnswers: z.array(QuestionsAnswersSchema),
    communication: CommunicationSchema,
    interviewAnalysis: InterviewAnalysisSchema,
    nextPreparation: NextPreparationSchema,
});

// InterviewDetail
export const InterviewDetailSchema = z.object({
    companyName: z.string().min(1, { message: "화사명은 필수값입니다." }),
    position: z.string().min(1, { message: "지원 직무는 필수값입니다." }),
    interviewDateTime: z.string(),
    category: z.string().min(1, { message: "면접 유형은 필수값입니다." }),
});

// InterviewReviews
export const InterviewReviewsSchema = z.object({
    interviewDetail: InterviewDetailSchema,
    reviewDetail: ReviewDetailSchema,
    reviewId: z.string().optional(),
});

// Review
export const ReviewSchema = z.object({
    id: z.string(),
    clientId: z.string(),
    interviewReviews: z.array(InterviewReviewsSchema),
});

/**
 * 인터뷰 리뷰 폼 데이터를 검증하기 위한 Zod 스키마입니다.
 *
 * 이 스키마는 평탄화된 인터뷰 리뷰 객체의 구조를 정의하고, 다음과 같은 검증 규칙을 강제합니다:
 * - 회사명, 직무, 면접 유형 등은 모두 필수이며 최소 1자 이상이어야 합니다.
 * - 사전 준비, 면접 과정, 커뮤니케이션, 분석, 다음 준비 항목은 각각 100자 이하로 작성해야 합니다.
 * - 질의응답(questionsAnswers)은 객체 배열이며, 각 항목의 질문과 답변은 최대 500자, 피드백은 최대 300자까지 허용됩니다.
 * - 전체 폼 항목에 대해 세부적인 길이 제한과 필수 여부를 검사합니다.
 */
export const FlattenedInterviewReviewsSchema = z.object({
    // InterviewDetail
    companyName: z.string().min(1, { message: "화사명은 필수값입니다." }),
    position: z.string().min(1, { message: "지원 직무는 필수값입니다." }),
    interviewDateTime: z.string(),
    category: z.string().min(1, { message: "면접 유형은 필수값입니다." }),

    // Preparation
    strengths: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    improvements: z.string().max(100, { message: "100자 이하로 작성해주세요" }),

    // InterviewProcess
    format: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    mood: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    panel: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    interviewRatio: z
        .string()
        .max(100, { message: "100자 이하로 작성해주세요" }),

    // QuestionsAnswers
    questionsAnswers: z.array(
        z.object({
            type: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
            question: z
                .string()
                .max(500, { message: "500자 이하로 작성해주세요" }),
            answer: z
                .string()
                .max(500, { message: "500자 이하로 작성해주세요" }),
            feedback: z
                .string()
                .max(300, { message: "300자 이하로 작성해주세요" }),
        }),
    ),

    // Communication
    verbal: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    nonVerbal: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    interaction: z.string().max(100, { message: "100자 이하로 작성해주세요" }),

    // InterviewAnalysis
    analysisStrengths: z
        .string()
        .max(100, { message: "100자 이하로 작성해주세요" }),
    analysisImprovements: z
        .string()
        .max(100, { message: "100자 이하로 작성해주세요" }),
    analysisFeedback: z
        .string()
        .max(100, { message: "100자 이하로 작성해주세요" }),
    difficulty: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    interviewResultAnalysis: z
        .string()
        .max(100, { message: "100자 이하로 작성해주세요" }),

    // NextPreparation
    technical: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    expression: z.string().max(100, { message: "100자 이하로 작성해주세요" }),
    additionalPractice: z
        .string()
        .max(100, { message: "100자 이하로 작성해주세요" }),

    // Review ID
    reviewId: z.string().optional(),
});

export type InterviewReviewsType = z.infer<
    typeof FlattenedInterviewReviewsSchema
>;
