import { Flex, Input, Text } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";
import { useFormContext } from "react-hook-form";

interface InputFieldProps {
    label: string | null;
    name: string;
    type?: string;
}

/**
 * InputField 컴포넌트
 *
 * 이 컴포넌트는 React Hook Form의 컨텍스트를 활용하여 단일 입력 필드를 렌더링합니다.
 * 레이블, 타입, 이름을 기반으로 구성되며, 유효성 검증 실패 시 에러 메시지를 하단에 표시합니다.
 *
 * 기능:
 * - `useFormContext`를 통해 폼 상태와 에러 정보를 가져옵니다.
 * - `register`를 사용해 입력값을 폼과 바인딩합니다.
 * - 입력 필드 아래에 해당 필드의 에러 메시지를 출력합니다.
 *
 * UI 컴포넌트:
 * - `Field`: 레이블과 입력 필드를 수평 정렬하여 감싸는 레이아웃 컴포넌트입니다.
 * - `Input`: 실제 입력 필드입니다.
 * - `Text`: 유효성 검사 실패 시 표시되는 에러 메시지입니다.
 * - `Flex`: 입력 필드와 에러 메시지를 수직 정렬합니다.
 *
 * @remarks
 * - `label`이 null인 경우 입력 필드의 placeholder도 설정되지 않습니다.
 * - 기본 입력 타입은 `text`이며, `type`을 통해 `datetime-local`, `email` 등의 타입도 지원할 수 있습니다.
 *
 * @example
 * ```tsx
 * <InputField
 *   label="회사명"
 *   name="companyName"
 * />
 * ```
 */
const InputField = ({ label, name, type = "text" }: InputFieldProps) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    let error: any = errors[name];

    return (
        <Field
            orientation="horizontal"
            label={label}
            paddingBottom="10px"
            invalid={!!error}
        >
            {/* Flex로 감싸서 에러 메세지 입력칸 아래에 뜨게 설정 */}
            <Flex flexDirection="column" width="100%">
                <Input
                    placeholder={label || undefined}
                    variant="flushed"
                    size="lg"
                    type={type}
                    {...register(name)}
                />
                {error?.message && (
                    <Text color="red.500" fontSize="xs" mt={1}>
                        {error.message}
                    </Text>
                )}
            </Flex>
        </Field>
    );
};

export default InputField;
