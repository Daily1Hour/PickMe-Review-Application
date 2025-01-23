import DynamicReviewFields from "./DynamicReviewFields";
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
            <DynamicReviewFields entity={new InterviewDetail("", "", "", "")} />
            <DynamicReviewFields entity={new Preparation("", "")} />
            <DynamicReviewFields
                entity={new InterviewProcess("", "", "", "")}
            />
            <QuestionsAnswers />
            <DynamicReviewFields entity={new Communication("", "", "")} />
            <DynamicReviewFields
                entity={new InterviewAnalysis("", "", "", "", "")}
            />
            <DynamicReviewFields entity={new NextPreparation("", "", "")} />
        </>
    );
};

export default InterviewReviewParts;
