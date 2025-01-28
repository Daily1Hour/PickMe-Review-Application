import { Stack, Fieldset } from "@chakra-ui/react";
import InputField from "./InputField";
import { dict } from "./ReviewDict";
import safeReadDictionary from "../util/safeReadDictionary";

const DynamicReviewFields = ({
    rootName,
    sectionName,
    sectionFields,
}: {
    rootName: string;
    sectionName?: string;
    sectionFields: { [key: string]: string };
}) => {
    const section = safeReadDictionary(dict, sectionName ?? rootName);
    const prefix = sectionName ? `${rootName}.${sectionName}` : rootName;

    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">
                    {section?.title}
                </Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                {Object.keys(sectionFields).map((fieldName) => {
                    const type =
                        fieldName === "interviewDateTime"
                            ? "datetime-local"
                            : "text"; // 면접 날짜인 경우 datetime-local, 아니면 text
                    return (
                        <InputField
                            key={fieldName}
                            label={safeReadDictionary(section?.body, fieldName)}
                            name={`${prefix}.${fieldName}`}
                            type={type} // 여기서 type을 적용
                        />
                    );
                })}
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default DynamicReviewFields;
