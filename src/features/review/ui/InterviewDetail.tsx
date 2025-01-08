import { Input, Stack, Fieldset } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";
import { InterviewDetailDTO } from "../api/reviewDTOList";
import InputField from "./InputField";

interface Props {
    Data: InterviewDetailDTO;
    register: any;
}

const InterviewDetail = ({ Data, register }: Props) => {
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">면접 정보</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <InputField
                    label="회사명"
                    name="interviewDetail.companyName"
                    defaultValue={Data.companyName}
                    register={register}
                />
                <InputField
                    label="지원 직무"
                    name="interviewDetail.position"
                    defaultValue={Data.position}
                    register={register}
                />
                <InputField
                    label="면접 날짜"
                    name="interviewDetail.interviewDateTime"
                    defaultValue={Data.interviewDateTime}
                    type="datetime-local"
                    register={register}
                />
                <InputField
                    label="면접 유형"
                    name="interviewDetail.category"
                    defaultValue={Data.category}
                    register={register}
                />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default InterviewDetail;
