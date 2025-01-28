import {
    InterviewDetailSchema,
    ReviewDetailSchema,
} from "../schema/reviewSchema";
import getFieldKeyMap from "../util/getFieldKeyMap";
import DynamicReviewFields from "./DynamicReviewFields";
import QuestionsAnswers from "./QuestionsAnswers";

const InterviewReviewParts = () => {
    // 스키마에서 필드 이름을 Map으로 추출
    const reviewDetailKeyMap = getFieldKeyMap(ReviewDetailSchema);
    const interviewDetailKeyMap = getFieldKeyMap(InterviewDetailSchema);

    return (
        <>
            <DynamicReviewFields
                rootName="interviewDetail"
                fieldNames={Object.keys(interviewDetailKeyMap)}
            />
            {Object.entries(reviewDetailKeyMap).map(([name, fields]) =>
                name === "questionsAnswers" ? (
                    <QuestionsAnswers key={name} />
                ) : (
                    <DynamicReviewFields
                        key={name}
                        rootName="reviewDetail"
                        sectionName={name}
                        fieldNames={Object.keys(fields!)}
                    />
                ),
            )}
        </>
    );
};

export default InterviewReviewParts;
