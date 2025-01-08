import { Input, Stack, Fieldset } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";
import { InterviewProcessDTO } from "../api/reviewDTOList";
import InputField from "./InputField";

interface Props {
    data: InterviewProcessDTO;
    register: any;
}

const InterviewProcess = ({ data, register }: Props) => {
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">면접 진행 과정</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <InputField
                    label="면접 방식"
                    name="reviewDetail.interviewProcess.format"
                    defaultValue={data.format}
                    register={register}
                />
                <InputField
                    label="면접 분위기"
                    name="reviewDetail.interviewProcess.mood"
                    defaultValue={data.mood}
                    register={register}
                />
                <InputField
                    label="면접관 정보"
                    name="reviewDetail.interviewProcess.panel"
                    defaultValue={data.panel}
                    register={register}
                />
                <InputField
                    label="면접관 : 면접자 비율"
                    name="reviewDetail.interviewProcess.interviewRatio"
                    defaultValue={data.interviewRatio}
                    register={register}
                />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default InterviewProcess;
