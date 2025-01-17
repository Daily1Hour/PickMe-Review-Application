export class Review {
    constructor(
        public id: string,
        public clientId: string,
        public interviewReviews: InterviewReviews[],
    ) {}
}

export class InterviewReviews {
    constructor(
        public reviewId: string,
        public interviewDetail: InterviewDetail,
        public reviewDetail: ReviewDetail,
    ) {}
}

export class InterviewDetail {
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

export class Preparation {
    constructor(public strengths: string, public improvements: string) {}
}

export class InterviewProcess {
    constructor(
        public format: string,
        public mood: string,
        public panel: string,
        public interviewRatio: string,
    ) {}
}

export class QuestionsAnswers {
    constructor(
        public type: string,
        public question: string,
        public answer: string,
        public feedback: string,
    ) {}
}

export class Communication {
    constructor(
        public verbal: string,
        public nonVerbal: string,
        public interaction: string,
    ) {}
}

export class InterviewAnalysis {
    constructor(
        public strengths: string,
        public improvements: string,
        public feedback: string,
        public difficulty: string,
        public interviewResultAnalysis: string,
    ) {}
}

export class NextPreparation {
    constructor(
        public technical: string,
        public expression: string,
        public additionalPractice: string,
    ) {}
}
