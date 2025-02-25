export class Review {
    constructor(
        public id: string,
        public clientId: string,
        public interviewReviews: InterviewReviews[],
    ) {}
}

export class InterviewReviews {
    constructor(
        public interviewDetail: InterviewDetail,
        public reviewDetail: ReviewDetail,
        public reviewId?: string,
    ) {}
}

export class InterviewDetail implements ReviewInterface {
    constructor(
        public companyName: string,
        public position: string,
        public interviewDateTime: string,
        public category: string,
    ) {}
}

export class ReviewDetail {
    constructor(
        public preparation: Preparation,
        public interviewProcess: InterviewProcess,
        public questionsAnswers: QuestionsAnswers[],
        public communication: Communication,
        public interviewAnalysis: InterviewAnalysis,
        public nextPreparation: NextPreparation,
    ) {}
}

export class Preparation implements ReviewInterface {
    constructor(public strengths: string, public improvements: string) {}
}

export class InterviewProcess implements ReviewInterface {
    constructor(
        public format: string,
        public mood: string,
        public panel: string,
        public interviewRatio: string,
    ) {}
}

export class QuestionsAnswers implements ReviewInterface {
    constructor(
        public type: string,
        public question: string,
        public answer: string,
        public feedback: string,
    ) {}
}

export class Communication implements ReviewInterface {
    constructor(
        public verbal: string,
        public nonVerbal: string,
        public interaction: string,
    ) {}
}

export class InterviewAnalysis implements ReviewInterface {
    constructor(
        public strengths: string,
        public improvements: string,
        public feedback: string,
        public difficulty: string,
        public interviewResultAnalysis: string,
    ) {}
}

export class NextPreparation implements ReviewInterface {
    constructor(
        public technical: string,
        public expression: string,
        public additionalPractice: string,
    ) {}
}

export class FlattenedReview {
    constructor(
        public companyName: string,
        public position: string,
        public interviewDateTime: string,
        public category: string,
        public strengths: string,
        public improvements: string,
        public format: string,
        public mood: string,
        public panel: string,
        public interviewRatio: string,
        public questionsAnswers: {
            type: string;
            question: string;
            answer: string;
            feedback: string;
        }[],
        public verbal: string,
        public nonVerbal: string,
        public interaction: string,
        public analysisStrengths: string,
        public analysisImprovements: string,
        public analysisFeedback: string,
        public difficulty: string,
        public interviewResultAnalysis: string,
        public technical: string,
        public expression: string,
        public additionalPractice: string,
        public reviewId?: string,
        public createdAt?: string,
        public updatedAt?: string,
    ) {}
}

export interface ReviewInterface {}
