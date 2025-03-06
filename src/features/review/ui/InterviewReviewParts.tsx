import { Separator, Flex } from "@chakra-ui/react";
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
            {reviewDetailKeyMap.map(({ name, fields }, index) =>
                name === "questionsAnswers" ? (
                    <Flex
                        key={`${name}-${index}`}
                        id={name}
                        direction="column"
                        gap="30px"
                    >
                        <QuestionsAnswers key={`${name}-${index}`} />
                        <Separator borderColor="black" size="sm" />
                    </Flex>
                ) : (
                    <Flex
                        key={`${name}-${index}`}
                        id={name}
                        direction="column"
                        gap="30px"
                    >
                        <DynamicReviewFields
                            key={`${name}-${index}`}
                            sectionName={name}
                            fieldNames={fields}
                        />
                    </Flex>
                ),
            )}
        </>
    );
};

export default InterviewReviewParts;
