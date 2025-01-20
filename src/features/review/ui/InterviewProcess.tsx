import { Stack, Fieldset } from "@chakra-ui/react";
import InputField from "./InputField";

const InterviewProcess = () => {
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">면접 진행 과정</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <InputField
                    label="면접 방식"
                    name="reviewDetail.interviewProcess.format"
                />
                <InputField
                    label="면접 분위기"
                    name="reviewDetail.interviewProcess.mood"
                />
                <InputField
                    label="면접관 정보"
                    name="reviewDetail.interviewProcess.panel"
                />
                <InputField
                    label="면접관 : 면접자 비율"
                    name="reviewDetail.interviewProcess.interviewRatio"
                />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default InterviewProcess;
