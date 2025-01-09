import { Input } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";

interface InputFieldProps {
    label: string;
    name: string;
    type?: string;
    register: any;
}

const InputField = ({
    label,
    name,
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
                {...register(name)}
            />
        </Field>
    );
};

export default InputField;
