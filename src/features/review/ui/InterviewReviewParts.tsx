import InterviewDetail from "./InterviewDetail";
import ReviewDetails from "./ReviewDetails";
import QuestionsAnswers from "./QuestionsAnswers";
import {
    Communication,
    InterviewAnalysis,
    InterviewProcess,
    NextPreparation,
    Preparation,
} from "@/entities/review/model/review";

const InterviewReviewParts = () => {
    return (
        <>
            <InterviewDetail />
            <ReviewDetails entity={new Preparation("", "")} />
            <ReviewDetails entity={new InterviewProcess("", "", "", "")} />
            <QuestionsAnswers />
            <ReviewDetails entity={new Communication("", "", "")} />
            <ReviewDetails entity={new InterviewAnalysis("", "", "", "", "")} />
            <ReviewDetails entity={new NextPreparation("", "", "")} />
        </>
    );
};

export default InterviewReviewParts;
