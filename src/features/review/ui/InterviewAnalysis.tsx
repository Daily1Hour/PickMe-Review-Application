import { Stack, Fieldset } from "@chakra-ui/react";
import InputField from "./InputField";

const InterviewAnalysis = () => {
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">
                    면접 분석 및 종합적 평가
                </Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <InputField
                    label="잘한 점"
                    name="reviewDetail.interviewAnalsis.strengths"
                />
                <InputField
                    label="개선할 점"
                    name="reviewDetail.interviewAnalsis.improvements"
                />
                <InputField
                    label="피드백"
                    name="reviewDetail.interviewAnalsis.feedback"
                />
                <InputField
                    label="난이도"
                    name="reviewDetail.interviewAnalsis.difficulty"
                />
                <InputField
                    label="결과 분석"
                    name="reviewDetail.interviewAnalsis.interviewResultAnalysis"
                />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default InterviewAnalysis;
