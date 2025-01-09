import { Stack, Fieldset } from "@chakra-ui/react";
import InputField from "./InputField";
import { useFormContext } from "react-hook-form";

const InterviewProcess = () => {
    const { register } = useFormContext();
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">면접 진행 과정</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <InputField
                    label="면접 방식"
                    name="reviewDetail.interviewProcess.format"
                    register={register}
                />
                <InputField
                    label="면접 분위기"
                    name="reviewDetail.interviewProcess.mood"
                    register={register}
                />
                <InputField
                    label="면접관 정보"
                    name="reviewDetail.interviewProcess.panel"
                    register={register}
                />
                <InputField
                    label="면접관 : 면접자 비율"
                    name="reviewDetail.interviewProcess.interviewRatio"
                    register={register}
                />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default InterviewProcess;
