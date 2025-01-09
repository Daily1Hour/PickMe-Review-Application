import { Stack, Fieldset } from "@chakra-ui/react";
import InputField from "./InputField";
import { useFormContext } from "react-hook-form";

const InterviewAnalysis = () => {
    const { register } = useFormContext();
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
                    register={register}
                />
                <InputField
                    label="개선할 점"
                    name="reviewDetail.interviewAnalsis.improvements"
                    register={register}
                />
                <InputField
                    label="피드백"
                    name="reviewDetail.interviewAnalsis.feedback"
                    register={register}
                />
                <InputField
                    label="난이도"
                    name="reviewDetail.interviewAnalsis.difficulty"
                    register={register}
                />
                <InputField
                    label="결과 분석"
                    name="reviewDetail.interviewAnalsis.interviewResultAnalysis"
                    register={register}
                />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default InterviewAnalysis;
