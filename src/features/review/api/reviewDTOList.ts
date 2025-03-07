export interface PostInterviewReviewsDTO {
    interviewDetail: InterviewDetailDTO;
    reviewDetail: ReviewDetailDTO;
}

export interface PutInterviewReviewsDTO {
    interviewDetail: InterviewDetailDTO;
    reviewDetail: ReviewDetailDTO;
}

export interface GetResponseDTO {
    id: string;
    clientId: string;
    interviewReviews: GetInterviewReviewsDTO[];
}

export interface GetInterviewReviewsDTO {
    reviewId: string;
    createdAt: string;
    updatedAt: string;
    interviewDetail: InterviewDetailDTO;
    reviewDetail: ReviewDetailDTO;
}

export interface InterviewDetailDTO {
    companyName: string;
    position: string;
    interviewDateTime: string;
    category: string;
}

export interface ReviewDetailDTO {
    preparation: PreparationDTO;
    interviewProcess: InterviewProcessDTO;
    questionsAnswers: QuestionsAnswersDTO[];
    communication: CommunicationDTO;
    interviewAnalysis: InterviewAnalysisDTO;
    nextPreparation: NextPreparationDTO;
}

export interface PreparationDTO {
    strengths: string;
    improvements: string;
}

export interface InterviewProcessDTO {
    format: string;
    mood: string;
    panel: string;
    interviewRatio: string;
}

export interface QuestionsAnswersDTO {
    type: string;
    question: string;
    answer: string;
    feedback: string;
}

export interface CommunicationDTO {
    verbal: string;
    nonVerbal: string;
    interaction: string;
}

export interface InterviewAnalysisDTO {
    strengths: string;
    improvements: string;
    feedback: string;
    difficulty: string;
    interviewResultAnalysis: string;
}

export interface NextPreparationDTO {
    technical: string;
    expression: string;
    additionalPractice: string;
}
