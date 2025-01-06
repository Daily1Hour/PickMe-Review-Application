import { Input, Stack, Fieldset } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";
import {
    InterviewDetailDTO,
    PostInterviewReviewsDTO,
} from "../api/reviewDTOList";

interface Props {
    inputData?: (fieldName: string, value: string) => void;
    currentData?: InterviewDetailDTO;
    isReadOnly?: boolean; // 읽기 전용 설정을 위한 prop
    formData?: PostInterviewReviewsDTO;
}

const InterviewDetail = ({
    inputData,
    currentData,
    isReadOnly = false,
    formData,
}: Props) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // event.target.name을 사용하여 fieldName을 유추하고, event.target.value를 value로 전달
        if (inputData) {
            inputData(event.target.name, event.target.value);
        }
    };
    console.log("currentData", currentData, isReadOnly);

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
                        onChange={handleInputChange}
                        value={
                            currentData?.companyName ||
                            formData?.interviewDetail.companyName ||
                            ""
                        }
                        readOnly={isReadOnly}
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
                        onChange={handleInputChange}
                        value={
                            currentData?.position ||
                            formData?.interviewDetail.position ||
                            ""
                        }
                        readOnly={isReadOnly}
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
                        onChange={handleInputChange}
                        value={
                            currentData?.interviewDateTime ||
                            formData?.interviewDetail.interviewDateTime ||
                            ""
                        }
                        readOnly={isReadOnly}
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
                        onChange={handleInputChange}
                        value={
                            currentData?.category ||
                            formData?.interviewDetail.category ||
                            ""
                        }
                        readOnly={isReadOnly}
                    />
                </Field>
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default InterviewDetail;
