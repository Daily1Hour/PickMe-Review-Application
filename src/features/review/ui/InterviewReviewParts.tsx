import { useFormContext } from "react-hook-form";
import QuestionsAnswers from "./QuestionsAnswers";
import DynamicReviewFields from "./DynamicReviewFields";
import { InterviewReviewsType } from "../schema/reviewSchema";

type SectionFieldsType = { [key: string]: string };

const InterviewReviewParts = () => {
    const { watch } = useFormContext();
    const { interviewDetail, reviewDetail } = watch() as InterviewReviewsType;

    return (
        <>
            <DynamicReviewFields
                rootName="interviewDetail"
                sectionFields={interviewDetail}
            />
            {Object.entries(reviewDetail).map(([name, fields]) =>
                name === "questionsAnswers" ? (
                    <QuestionsAnswers key={name} />
                ) : (
                    <DynamicReviewFields
                        key={name}
                        rootName="reviewDetail"
                        sectionName={name}
                        sectionFields={fields as SectionFieldsType}
                    />
                ),
            )}
        </>
    );
};

export default InterviewReviewParts;
