import { Input, Stack, Fieldset } from "@chakra-ui/react";
import { Field } from "@/widgets/chakra-ui/field";

const InterviewDetail = () => {
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">면접 정보</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <Field
                    orientation="horizontal"
                    label="회사명"
                    paddingBottom="10px"
                >
                    <Input
                        placeholder="회사명"
                        variant="flushed"
                        name="companyName"
                        size="lg"
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="지원 직무"
                    paddingBottom="10px"
                >
                    <Input
                        name="position"
                        variant="flushed"
                        placeholder="지원 직무"
                        size="lg"
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="면접 날짜"
                    paddingBottom="10px"
                >
                    <Input
                        name="interviewDateTime"
                        type="datetime-local"
                        variant="flushed"
                        placeholder="면접 날짜"
                        size="lg"
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="면접 유형"
                    paddingBottom="10px"
                >
                    <Input
                        name="category"
                        variant="flushed"
                        placeholder="면접 유형"
                        size="lg"
                    />
                </Field>
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default InterviewDetail;
