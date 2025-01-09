import { Stack, Fieldset } from "@chakra-ui/react";
import { InterviewDetailDTO } from "../api/reviewDTOList";
import InputField from "./InputField";
import { useFormContext } from "react-hook-form";

interface Props {
    data: InterviewDetailDTO;
}

const InterviewDetail = ({ data }: Props) => {
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
                    defaultValue={data.companyName}
                    register={register}
                />
                <InputField
                    label="지원 직무"
                    name="interviewDetail.position"
                    defaultValue={data.position}
                    register={register}
                />
                <InputField
                    label="면접 날짜"
                    name="interviewDetail.interviewDateTime"
                    defaultValue={data.interviewDateTime}
                    type="datetime-local"
                    register={register}
                />
                <InputField
                    label="면접 유형"
                    name="interviewDetail.category"
                    defaultValue={data.category}
                    register={register}
                />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default InterviewDetail;
