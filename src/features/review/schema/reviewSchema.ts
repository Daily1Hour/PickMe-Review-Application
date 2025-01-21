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
    question: z.string().max(500, { message: "100자 이하로 작성해주세요" }),
    answer: z.string().max(500, { message: "100자 이하로 작성해주세요" }),
    feedback: z.string().max(300, { message: "100자 이하로 작성해주세요" }),
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

export type InterviewReviewsType = z.infer<typeof InterviewReviewsSchema>;
