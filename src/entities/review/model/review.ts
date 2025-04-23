/**
 * 서버 MongoDB에 저장되는 전체 면접 리뷰 데이터 구조
 */
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

/**
 * 프론트엔드에서 사용하는 평탄화된 면접 리뷰 데이터 구조
 *
 * - MongoDB의 nested 구조를 평탄화하여 접근성을 높임
 * - React 컴포넌트 바인딩 용이성 확보
 * @remarks
 * - 이 클래스는 MongoDB의 nested 구조를 React에서 효율적으로 사용할 수 있도록 단순화한 것입니다.
 * - 서버와의 통신 전용으로 사용하지 마세요.
 *
 * @param companyName - 면접을 본 회사 이름입니다.
 * @param position - 지원한 포지션명입니다.
 * @param interviewDateTime - 면접 일시 입니다.
 * @param category - 면접 유형 또는 분류 (예: 기술, 인성 등)입니다.
 * @param strengths - 사전 준비에서 잘했던 점입니다.
 * @param improvements - 사전 준비에서 개선할 점입니다.
 * @param format - 면접의 진행 형식 (예: 대면, 비대면 등)입니다.
 * @param mood - 면접 당시의 분위기입니다.
 * @param panel - 면접관 구성 정보입니다.
 * @param interviewRatio - 면접자 : 면접관 비율 정보입니다.
 * @param questionsAnswers - 질문과 답변 및 피드백 목록입니다.
 * @param verbal - 언어적 소통 방식에 대한 평가입니다.
 * @param nonVerbal - 비언어적 소통 방식에 대한 평가입니다.
 * @param interaction - 면접 중 상호작용에 대한 평가입니다.
 * @param analysisStrengths - 면접 후 분석한 강점입니다.
 * @param analysisImprovements - 면접 후 분석한 개선점입니다.
 * @param analysisFeedback - 면접 결과에 대한 피드백 요약입니다.
 * @param difficulty - 면접 난이도에 대한 주관적 평가입니다.
 * @param interviewResultAnalysis - 면접 결과 전반에 대한 분석입니다.
 * @param technical - 기술 역량과 관련된 향후 준비 사항입니다.
 * @param expression - 의사 표현과 관련된 향후 준비 사항입니다.
 * @param additionalPractice - 기타 보완해야 할 연습 사항입니다.
 * @param reviewId - (선택 사항) 리뷰의 고유 식별자입니다.
 * @param createdAt - (선택 사항) 리뷰 생성 일시입니다.
 * @param updatedAt - (선택 사항) 리뷰 수정 일시입니다.
 */
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
