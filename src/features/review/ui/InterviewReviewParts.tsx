import {
    InterviewDetailSchema,
    ReviewDetailSchema,
} from "../schema/reviewSchema";
import DynamicReviewFields from "./DynamicReviewFields";
import QuestionsAnswers from "./QuestionsAnswers";
import getFieldKeyMap from "../util/getFieldKeyMap";

const InterviewReviewParts = () => {
    // 스키마에서 필드 이름을 Map으로 추출
    const reviewDetailKeyMap = getFieldKeyMap(ReviewDetailSchema);
    const interviewDetailKeyMap = getFieldKeyMap(InterviewDetailSchema);

    return (
        <>
            <DynamicReviewFields
                rootName="interviewDetail"
                sectionFields={interviewDetailKeyMap}
            />
            {Object.entries(reviewDetailKeyMap).map(([name, fields]) =>
                name === "questionsAnswers" ? (
                    <QuestionsAnswers key={name} />
                ) : (
                    <DynamicReviewFields
                        key={name}
                        rootName="reviewDetail"
                        sectionName={name}
                        sectionFields={fields!}
                    />
                ),
            )}
        </>
    );
};

export default InterviewReviewParts;
