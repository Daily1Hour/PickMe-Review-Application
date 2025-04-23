import { Field } from "@/shared/chakra-ui/field";
import { Flex, Text, Textarea } from "@chakra-ui/react";

interface TextAreaFieldProps {
    label: string;
    field: any;
    fieldState?: any;
}

/**
 * TextAreaField 컴포넌트
 *
 * 이 컴포넌트는 긴 텍스트 입력을 위한 텍스트 영역(`Textarea`)을 렌더링합니다.
 * React Hook Form의 `Controller`에서 전달받은 `field` 및 `fieldState`를 바탕으로 폼 상태를 관리하고, 에러 메시지를 표시합니다.
 *
 * 기능:
 * - `field`와 `fieldState`를 기반으로 폼 필드와 상태를 구성합니다.
 * - 텍스트 영역 아래에 유효성 검사 실패 시 에러 메시지를 표시합니다.
 * - `label`은 레이블 및 placeholder로 사용됩니다.
 *
 * UI 컴포넌트:
 * - `Field`: 레이블과 입력 필드를 수평 정렬하여 감싸는 컨테이너입니다.
 * - `Textarea`: 사용자의 입력을 받는 다중 행 입력 필드입니다.
 * - `Text`: 유효성 오류가 있을 경우 에러 메시지를 표시하는 컴포넌트입니다.
 * - `Flex`: 입력 필드와 에러 메시지를 수직 정렬합니다.
 *
 * @remarks
 * - `Textarea`의 `placeholder`는 전달된 `label`과 동일하게 설정됩니다.
 * - `field`와 `fieldState`는 React Hook Form의 `Controller`로부터 주입되어야 합니다.
 *
 * @example
 * ```tsx
 * <Controller
 *   name="answer"
 *   control={control}
 *   render={({ field, fieldState }) => (
 *     <TextAreaField label="답변" field={field} fieldState={fieldState} />
 *   )}
 * />
 * ```
 */
const TextAreaField = ({ label, field, fieldState }: TextAreaFieldProps) => {
    return (
        <Field orientation="horizontal" label={label} paddingBottom="10px">
            <Flex flexDirection="column" width="100%">
                <Textarea
                    autoresize
                    variant="outline"
                    placeholder={label}
                    size="sm"
                    {...field}
                />
                {fieldState?.error && (
                    <Text color="red.500" fontSize="xs" mt={1}>
                        {fieldState.error.message}
                    </Text>
                )}
            </Flex>
        </Field>
    );
};

export default TextAreaField;
