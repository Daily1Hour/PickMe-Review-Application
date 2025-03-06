import { Separator, HStack } from "@chakra-ui/react";
import DynamicReviewFields from "./DynamicReviewFields";
import QuestionsAnswers from "./QuestionsAnswers";
import { dict } from "./ReviewDict";

const InterviewReviewParts = () => {
    // dict 객체에서 최상위 키와 body의 key만 추출
    const reviewDetailKeyMap: { name: string; fields: string[] }[] =
        Object.entries(dict).map(([name, { body }]) => ({
            name,
            fields: Object.keys(body),
        }));

    return (
        <>
            {reviewDetailKeyMap.map(({ name, fields }) =>
                name === "questionsAnswers" ? (
                    <div id={name}>
                        <QuestionsAnswers key={name} />
                        <Separator borderColor="black" size="sm" />
                    </div>
                ) : (
                    <div id={name}>
                        <DynamicReviewFields
                            key={name}
                            sectionName={name}
                            fieldNames={fields}
                        />
                    </div>
                ),
            )}
        </>
    );
};

export default InterviewReviewParts;
