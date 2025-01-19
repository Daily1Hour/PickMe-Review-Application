import { Stack, Fieldset } from "@chakra-ui/react";
import InputField from "./InputField";

const InterviewDetail = () => {
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">면접 정보</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <InputField label="회사명" name="interviewDetail.companyName" />
                <InputField label="지원 직무" name="interviewDetail.position" />
                <InputField
                    label="면접 날짜"
                    name="interviewDetail.interviewDateTime"
                    type="datetime-local"
                />
                <InputField label="면접 유형" name="interviewDetail.category" />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default InterviewDetail;
