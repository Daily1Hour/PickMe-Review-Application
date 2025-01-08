import { Input, Stack, Fieldset } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";
import { InterviewDetailDTO } from "../api/reviewDTOList";

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
                <Field
                    orientation="horizontal"
                    label="회사명"
                    paddingBottom="10px"
                >
                    <Input
                        placeholder="회사명"
                        variant="flushed"
                        size="lg"
                        defaultValue={Data.companyName} // 초기값 설정
                        {...register("interviewDetail.companyName")}
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="지원 직무"
                    paddingBottom="10px"
                >
                    <Input
                        variant="flushed"
                        placeholder="지원 직무"
                        size="lg"
                        defaultValue={Data.position} // 초기값 설정
                        {...register("interviewDetail.position")}
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="면접 날짜"
                    paddingBottom="10px"
                >
                    <Input
                        type="datetime-local"
                        variant="flushed"
                        placeholder="면접 날짜"
                        size="lg"
                        defaultValue={Data.interviewDateTime} // 초기값 설정
                        {...register("interviewDetail.interviewDateTime")}
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="면접 유형"
                    paddingBottom="10px"
                >
                    <Input
                        variant="flushed"
                        placeholder="면접 유형"
                        size="lg"
                        defaultValue={Data.category} // 초기값 설정
                        {...register("interviewDetail.category")}
                    />
                </Field>
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default InterviewDetail;
