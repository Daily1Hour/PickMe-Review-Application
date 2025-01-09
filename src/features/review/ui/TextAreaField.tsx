import { Field } from "@/shared/chakra-ui/field";
import { Textarea } from "@chakra-ui/react";

interface TextAreaFieldProps {
    label: string;
    defaultValue: string;
    field: any;
}

const TextAreaField = ({ label, defaultValue, field }: TextAreaFieldProps) => {
    return (
        <Field orientation="horizontal" label={label} paddingBottom="10px">
            <Textarea
                autoresize
                variant="outline"
                placeholder={label}
                size="sm"
                defaultValue={defaultValue} // 초기값 설정
                {...field}
            />
        </Field>
    );
};

export default TextAreaField;
