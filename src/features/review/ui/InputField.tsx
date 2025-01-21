import { Flex, Input, Text } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";
import { RegisterOptions, useFormContext } from "react-hook-form";

interface InputFieldProps {
    label: string;
    name: string;
    type?: string;
}

const InputField = ({ label, name, type = "text" }: InputFieldProps) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    // 중첩된 객체 경로를 동적으로 탐색
    const nameParts = name.split(".");
    let error: any = errors;
    for (const part of nameParts) {
        error = error?.[part];
    }
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
                    placeholder={label}
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
