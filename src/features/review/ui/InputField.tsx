import { Input } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";
import { useFormContext } from "react-hook-form";

interface InputFieldProps {
    label: string;
    name: string;
    type?: string;
}

const InputField = ({ label, name, type = "text" }: InputFieldProps) => {
    const { register } = useFormContext();
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
