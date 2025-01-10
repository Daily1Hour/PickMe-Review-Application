import { Field } from "@/shared/chakra-ui/field";
import { Textarea } from "@chakra-ui/react";

interface TextAreaFieldProps {
    label: string;
    field: any;
}

const TextAreaField = ({ label, field }: TextAreaFieldProps) => {
    return (
        <Field orientation="horizontal" label={label} paddingBottom="10px">
            <Textarea
                autoresize
                variant="outline"
                placeholder={label}
                size="sm"
                {...field}
            />
        </Field>
    );
};

export default TextAreaField;
