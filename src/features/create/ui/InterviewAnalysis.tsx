import { Input, Stack, Fieldset } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";

const InterviewAnalysis = () => {
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">
                    면접 분석 및 종합적 평가
                </Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <Field
                    orientation="horizontal"
                    label="잘한 점"
                    paddingBottom="10px"
                >
                    <Input
                        placeholder="면접에서 잘한 점"
                        variant="flushed"
                        name="strengths"
                        size="lg"
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="개선할 점"
                    paddingBottom="10px"
                >
                    <Input
                        name="improvements"
                        variant="flushed"
                        placeholder="면접에서 개선할 점"
                        size="lg"
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="피드백"
                    paddingBottom="10px"
                >
                    <Input
                        name="feedback"
                        variant="flushed"
                        placeholder="면접에 대한 피드백"
                        size="lg"
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="난이도"
                    paddingBottom="10px"
                >
                    <Input
                        name="difficulty"
                        variant="flushed"
                        placeholder="면접 난이도"
                        size="lg"
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="결과 분석"
                    paddingBottom="10px"
                >
                    <Input
                        name="interviewResultAnalysis"
                        variant="flushed"
                        placeholder="ex. 추가질문에 대한 대비 부족이 약점"
                        size="lg"
                    />
                </Field>
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default InterviewAnalysis;
