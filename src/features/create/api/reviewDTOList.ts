export interface postInterviewReviewsDTO {
    interviewDetail: PostInterviewDetailDTO;
    reviewDetail: PostReviewDetailDTO;
}

export interface PostInterviewDetailDTO {
    companyName: string;
    position: string;
    interviewDateTime: string;
    category: string;
}

export interface PostReviewDetailDTO {
    preparation: PostPreparationDTO;
    interviewProcess: PostInterviewProcessDTO;
    questionsAnswers: PostQuestionsAnswersDTO[];
    communication: PostCommunicationDTO;
    interviewAnalysis: PostInterviewAnalysisDTO;
    nextPreparation: PostNextPreparationDTO;
}

export interface PostPreparationDTO {
    strengths: string;
    improvements: string;
}

export interface PostInterviewProcessDTO {
    format: string;
    mood: string;
    panel: string;
    interviewRatio: string;
}

export interface PostQuestionsAnswersDTO {
    type: string;
    question: string;
    answer: string;
    feedback: string;
}

export interface PostCommunicationDTO {
    verbal: string;
    nonVerbal: string;
    interaction: string;
}

export interface PostInterviewAnalysisDTO {
    strengths: string;
    improvements: string;
    feedback: string;
    difficulty: string;
    interviewResultAnalysis: string;
}

export interface PostNextPreparationDTO {
    technical: string;
    expression: string;
    additionalPractice: string;
}
