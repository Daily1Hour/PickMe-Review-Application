import { Flex, Input, Text } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";
import { useFormContext } from "react-hook-form";

interface InputFieldProps {
    label: string | null;
    name: string;
    type?: string;
}

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
