import { Input, Stack, Fieldset } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";

const InterviewProcess = () => {
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">면접 진행 과정</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <Field
                    orientation="horizontal"
                    label="면접 방식"
                    paddingBottom="10px"
                >
                    <Input
                        placeholder="면접 방식"
                        variant="flushed"
                        name="format"
                        size="lg"
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="면접 분위기"
                    paddingBottom="10px"
                >
                    <Input
                        name="mood"
                        variant="flushed"
                        placeholder="면접 분위기"
                        size="lg"
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="면접관 정보"
                    paddingBottom="10px"
                >
                    <Input
                        name="panel"
                        variant="flushed"
                        placeholder="면접관 정보"
                        size="lg"
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="면접관 : 면접자 비율"
                    paddingBottom="10px"
                >
                    <Input
                        name="interviewRatio"
                        variant="flushed"
                        placeholder="면접관 : 면접자 비율"
                        size="lg"
                    />
                </Field>
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default InterviewProcess;
