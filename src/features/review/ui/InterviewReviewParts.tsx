import { Separator, Flex } from "@chakra-ui/react";
import DynamicReviewFields from "./DynamicReviewFields";
import QuestionsAnswers from "./QuestionsAnswers";
import { dict } from "../../../shared/data/ReviewDict";

/**
 * InterviewReviewParts 컴포넌트
 *
 * 이 컴포넌트는 인터뷰 리뷰 폼에서 입력해야 할 여러 섹션(사전 준비, 진행 과정, 질문/답변 등)을 동적으로 렌더링합니다.
 * `src/shared/data/ReviewDict.ts`의 `dict` 객체를 기반으로 섹션 이름과 필드 목록을 추출하여 구성합니다.
 *
 * 기능:
 * - `dict` 객체의 키를 기준으로 각 섹션을 반복 렌더링합니다.
 * - `questionsAnswers`는 별도로 `QuestionsAnswers` 컴포넌트를 사용하고, 나머지는 `DynamicReviewFields`를 사용합니다.
 *
 * UI 컴포넌트:
 * - `Flex`: 섹션 정렬과 간격 조절
 * - `QuestionsAnswers`: 질문/답변 입력 섹션
 * - `DynamicReviewFields`: 일반 필드 렌더링 컴포넌트
 * - `Separator`: 구분선
 *
 * @remarks
 * - `dict`는 각 항목을 `title`과 `body`로 나누어 정의하며, `body`의 키들을 폼 필드로 사용합니다.
 * - 이 컴포넌트는 `ReviewForm` 내에서 각 리뷰 세부 항목을 자동으로 구성하는 역할을 합니다.
 *
 * @example
 * ```tsx
 * <form onSubmit={handleSubmit}>
 *   <InterviewReviewParts />
 * </form>
 * ```
 */
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
