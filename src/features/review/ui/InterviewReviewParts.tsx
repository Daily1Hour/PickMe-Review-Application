import InterviewDetail from "./InterviewDetail";
import Preparation from "./Preparation";
import Communication from "./Communication";
import InterviewAnalysis from "./InterviewAnalysis";
import InterviewProcess from "./InterviewProcess";
import NextPreparation from "./NextPreparation";
import QuestionsAnswers from "./QuestionsAnswers";

const InterviewReviewParts = () => {
    return (
        <>
            <InterviewDetail />
            <Preparation />
            <InterviewProcess />
            <QuestionsAnswers />
            <Communication />
            <InterviewAnalysis />
            <NextPreparation />
        </>
    );
};

export default InterviewReviewParts;
