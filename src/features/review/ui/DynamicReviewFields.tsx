import { Stack, Fieldset } from "@chakra-ui/react";
import { Separator } from "@chakra-ui/react";
import InputField from "./InputField";
import { dict } from "../../../shared/data/ReviewDict";
import safeReadDictionary from "../util/safeReadDictionary";

/**
 * DynamicReviewFields 컴포넌트
 *
 * 이 컴포넌트는 주어진 섹션 이름과 필드 키 배열을 기반으로 입력 필드를 동적으로 렌더링합니다.
 * `ReviewDict`의 정의를 바탕으로 각 필드의 라벨과 타입을 자동으로 구성합니다.
 *
 * 기능:
 * - `sectionName`에 해당하는 섹션 정보를 `dict`에서 추출하여 제목과 필드 레이블을 설정합니다.
 * - `fieldNames` 배열을 순회하며 각 필드를 `InputField` 컴포넌트로 렌더링합니다.
 * - `"interviewDateTime"` 필드는 `datetime-local` 타입으로, 나머지는 `text` 타입으로 렌더링됩니다.
 *
 * UI 컴포넌트:
 * - `Fieldset.Root`, `Fieldset.Legend`, `Fieldset.Content`: 섹션 레이아웃 및 시각적 그룹화를 구성합니다.
 * - `InputField`: 단일 입력 필드를 렌더링합니다.
 * - `Separator`: 섹션 간 시각적 구분을 제공합니다.
 *
 * @remarks
 * - 이 컴포넌트는 `InterviewReviewParts` 내부에서 각 리뷰 섹션을 동적으로 렌더링하는 데 사용됩니다.
 * - `dict[sectionName]`의 구조에 따라 섹션 제목과 각 필드의 라벨이 자동으로 결정되며, 필드 키는 `fieldNames` 배열로 전달받습니다.
 * - 라벨이나 구조가 변경될 경우 `dict`만 수정하면 모든 렌더링 로직에 자동 반영됩니다.
 *
 * @example
 * ```tsx
 * // InterviewReviewParts 내부에서 사용되는 예시
 * <DynamicReviewFields
 *   sectionName="interviewProcess"
 *   fieldNames={["format", "mood", "panel", "interviewRatio"]}
 * />
 * ```
 */
const DynamicReviewFields = ({
    sectionName,
    fieldNames,
}: {
    sectionName: string;
    fieldNames: string[];
}) => {
    const section = safeReadDictionary(dict, sectionName);

    return (
        <>
            <Fieldset.Root size="lg" maxW="100%">
                <Stack>
                    <Fieldset.Legend fontSize="2xl">
                        {section?.title}
                    </Fieldset.Legend>
                </Stack>

                <Fieldset.Content>
                    {fieldNames.map((fieldName) => {
                        const type =
                            fieldName === "interviewDateTime"
                                ? "datetime-local"
                                : "text"; // 면접 날짜인 경우 datetime-local, 아니면 text
                        return (
                            <InputField
                                key={fieldName}
                                label={safeReadDictionary(
                                    section?.body,
                                    fieldName,
                                )}
                                name={fieldName}
                                type={type} // 여기서 type을 적용
                            />
                        );
                    })}
                </Fieldset.Content>
            </Fieldset.Root>
            <Separator borderColor="black" size="sm" />
        </>
    );
};

export default DynamicReviewFields;
