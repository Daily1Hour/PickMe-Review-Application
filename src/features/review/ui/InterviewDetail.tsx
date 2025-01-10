import { Stack, Fieldset } from "@chakra-ui/react";
import InputField from "./InputField";
import { useFormContext } from "react-hook-form";

const InterviewDetail = () => {
    const { register } = useFormContext();
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">면접 정보</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <InputField
                    label="회사명"
                    name="interviewDetail.companyName"
                    register={register}
                />
                <InputField
                    label="지원 직무"
                    name="interviewDetail.position"
                    register={register}
                />
                <InputField
                    label="면접 날짜"
                    name="interviewDetail.interviewDateTime"
                    type="datetime-local"
                    register={register}
                />
                <InputField
                    label="면접 유형"
                    name="interviewDetail.category"
                    register={register}
                />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default InterviewDetail;
