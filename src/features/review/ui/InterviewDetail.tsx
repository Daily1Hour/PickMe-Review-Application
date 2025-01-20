import { Stack, Fieldset } from "@chakra-ui/react";
import InputFieldMap from "./InputFieldMap";

const InterviewDetail = () => {
    const inputParams = [
        {
            label: "회사명",
            name: "interviewDetail.companyName",
            validationRules: {
                required: {
                    value: true,
                    message: "입력해주세요",
                },
            },
        },
        {
            label: "지원 직무",
            name: "interviewDetail.position",
            validationRules: {
                maxLength: {
                    value: 10,
                    message: "10자 이내로 작성해주세요",
                },
            },
        },
        {
            label: "면접 날짜",
            name: "interviewDetail.interviewDateTime",
            type: "datetime-local",
            validationRules: {
                required: {
                    value: true,
                    message: "입력해주세요",
                },
            },
        },
        {
            label: "면접 유형",
            name: "interviewDetail.category",
            validationRules: {
                required: {
                    value: true,
                    message: "입력해주세요",
                },
            },
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
