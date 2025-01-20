import { Stack, Fieldset } from "@chakra-ui/react";
import InputFieldMap from "./InputFieldMap";

const InterviewAnalysis = () => {
    const inputParams = [
        { label: "잘한 점", name: "reviewDetail.interviewAnalsis.strengths" },
        {
            label: "개선할 점",
            name: "reviewDetail.interviewAnalsis.improvements",
        },
        { label: "피드백", name: "reviewDetail.interviewAnalsis.feedback" },
        { label: "난이도", name: "reviewDetail.interviewAnalsis.difficulty" },
        {
            label: "결과 분석",
            name: "reviewDetail.interviewAnalsis.interviewResultAnalysis",
        },
    ];
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">
                    면접 분석 및 종합적 평가
                </Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <InputFieldMap params={inputParams} />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default InterviewAnalysis;
