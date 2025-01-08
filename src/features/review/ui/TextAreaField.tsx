import { Field } from "@/shared/chakra-ui/field";
import { Textarea } from "@chakra-ui/react";
import React from "react";

interface TextAreaFieldProps {
    label: string;
    name: string;
    defaultValue: string;
    register: any;
}

const TextAreaField = ({
    label,
    name,
    defaultValue,
    register,
}: TextAreaFieldProps) => {
    return (
        <Field orientation="horizontal" label={label} paddingBottom="10px">
            <Textarea
                autoresize
                variant="outline"
                placeholder={label}
                size="sm"
                defaultValue={defaultValue} // 초기값 설정
                {...register(name)}
            />
        </Field>
    );
};

export default TextAreaField;
