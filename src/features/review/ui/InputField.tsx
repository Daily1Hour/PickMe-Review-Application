import { Input } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";

interface InputFieldProps {
    label: string;
    name: string;
    defaultValue: string;
    type?: string;
    register: any;
}

const InputField = ({
    label,
    name,
    defaultValue,
    type = "text",
    register,
}: InputFieldProps) => {
    return (
        <Field orientation="horizontal" label={label} paddingBottom="10px">
            <Input
                placeholder={label}
                variant="flushed"
                size="lg"
                type={type}
                defaultValue={defaultValue} // 초기값 설정
                {...register(name)}
            />
        </Field>
    );
};

export default InputField;
