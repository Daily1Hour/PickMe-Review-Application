import { Input, Stack, Fieldset } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";
import {
    InterviewDetailDTO,
    PostInterviewReviewsDTO,
} from "../api/reviewDTOList";
import { initialFormData } from "../api/initialFormData";
import { useEffect, useState } from "react";

interface Props {
    updateFormData: (fieldName: string, value: string) => void;
    Data: InterviewDetailDTO;
}

const InterviewDetail = ({ updateFormData, Data }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData(e.target.name, e.target.value); // 부모 상태 업데이트
    };

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
                        name="companyName"
                        size="lg"
                        value={Data.companyName} // 초기값 설정
                        onChange={handleChange}
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="지원 직무"
                    paddingBottom="10px"
                >
                    <Input
                        name="position"
                        variant="flushed"
                        placeholder="지원 직무"
                        size="lg"
                        value={Data.position} // 초기값 설정
                        onChange={handleChange}
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="면접 날짜"
                    paddingBottom="10px"
                >
                    <Input
                        name="interviewDateTime"
                        type="datetime-local"
                        variant="flushed"
                        placeholder="면접 날짜"
                        size="lg"
                        value={Data.interviewDateTime} // 초기값 설정
                        onChange={handleChange}
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="면접 유형"
                    paddingBottom="10px"
                >
                    <Input
                        name="category"
                        variant="flushed"
                        placeholder="면접 유형"
                        size="lg"
                        value={Data.category} // 초기값 설정
                        onChange={handleChange}
                    />
                </Field>
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default InterviewDetail;
