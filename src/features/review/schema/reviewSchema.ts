import { z } from "zod";

// Preparation
export const PreparationSchema = z.object({
    strengths: z.string(),
    improvements: z.string(),
});

// InterviewProcess
export const InterviewProcessSchema = z.object({
    format: z.string(),
    mood: z.string(),
    panel: z.string(),
    interviewRatio: z.string(),
});

// QuestionsAnswers
export const QuestionsAnswersSchema = z.object({
    type: z.string(),
    question: z.string(),
    answer: z.string(),
    feedback: z.string(),
});

// Communication
export const CommunicationSchema = z.object({
    verbal: z.string(),
    nonVerbal: z.string(),
    interaction: z.string(),
});

// InterviewAnalysis
export const InterviewAnalysisSchema = z.object({
    strengths: z.string(),
    improvements: z.string(),
    feedback: z.string(),
    difficulty: z.string(),
    interviewResultAnalysis: z.string(),
});

// NextPreparation
export const NextPreparationSchema = z.object({
    technical: z.string(),
    expression: z.string(),
    additionalPractice: z.string(),
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
    companyName: z.string(),
    position: z.string(),
    interviewDateTime: z.string(),
    category: z.string(),
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
