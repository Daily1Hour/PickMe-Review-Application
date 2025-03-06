import { Stack, Fieldset } from "@chakra-ui/react";
import { Separator } from "@chakra-ui/react";
import InputField from "./InputField";
import { dict } from "../../../shared/data/ReviewDict";
import safeReadDictionary from "../util/safeReadDictionary";

const DynamicReviewFields = ({
    sectionName,
    fieldNames,
}: {
    sectionName: string;
    fieldNames: string[];
}) => {
    const section = safeReadDictionary(dict, sectionName);

    return (
        <>
            <Fieldset.Root size="lg" maxW="100%">
                <Stack>
                    <Fieldset.Legend fontSize="2xl">
                        {section?.title}
                    </Fieldset.Legend>
                </Stack>

                <Fieldset.Content>
                    {fieldNames.map((fieldName) => {
                        const type =
                            fieldName === "interviewDateTime"
                                ? "datetime-local"
                                : "text"; // 면접 날짜인 경우 datetime-local, 아니면 text
                        return (
                            <InputField
                                key={fieldName}
                                label={safeReadDictionary(
                                    section?.body,
                                    fieldName,
                                )}
                                name={fieldName}
                                type={type} // 여기서 type을 적용
                            />
                        );
                    })}
                </Fieldset.Content>
            </Fieldset.Root>
            <Separator borderColor="black" size="sm" />
        </>
    );
};

export default DynamicReviewFields;
