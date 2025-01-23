import InterviewDetailField from "./InterviewDetail";
import ReviewDetails from "./ReviewDetails";
import QuestionsAnswers from "./QuestionsAnswers";
import {
    Communication,
    InterviewAnalysis,
    InterviewDetail,
    InterviewProcess,
    NextPreparation,
    Preparation,
} from "@/entities/review/model/review";

const InterviewReviewParts = () => {
    return (
        <>
            <InterviewDetailField
                entity={new InterviewDetail("", "", "", "")}
            />
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
