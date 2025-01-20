import { Field } from "@/shared/chakra-ui/field";
import { Flex, Text, Textarea } from "@chakra-ui/react";

interface TextAreaFieldProps {
    label: string;
    field: any;
    fieldState?: any;
}

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
