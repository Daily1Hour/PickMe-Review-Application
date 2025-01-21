import { Stack, Fieldset } from "@chakra-ui/react";
import InputFieldMap from "./InputFieldMap";

const InterviewDetail = () => {
    const inputParams = [
        {
            label: "회사명",
            name: "interviewDetail.companyName",
        },
        {
            label: "지원 직무",
            name: "interviewDetail.position",
        },
        {
            label: "면접 날짜",
            name: "interviewDetail.interviewDateTime",
            type: "datetime-local",
        },
        {
            label: "면접 유형",
            name: "interviewDetail.category",
        },
    ];
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">면접 정보</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <InputFieldMap params={inputParams} />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default InterviewDetail;
