import { Stack, Fieldset } from "@chakra-ui/react";
import InputFieldMap from "./InputFieldMap";

const InterviewProcess = () => {
    const inputParams = [
        { label: "면접 방식", name: "reviewDetail.interviewProcess.format" },
        { label: "면접 분위기", name: "reviewDetail.interviewProcess.mood" },
        { label: "면접관 정보", name: "reviewDetail.interviewProcess.panel" },
        {
            label: "면접관 : 면접자 비율",
            name: "reviewDetail.interviewProcess.interviewRatio",
        },
    ];
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">면접 진행 과정</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <InputFieldMap params={inputParams} />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default InterviewProcess;
