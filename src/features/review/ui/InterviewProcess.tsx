import { Input, Stack, Fieldset } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";
import {
    InterviewProcessDTO,
    PostInterviewReviewsDTO,
    ReviewDetailDTO,
} from "../api/reviewDTOList";

interface Props {
    inputData?: (
        pFieldName: keyof ReviewDetailDTO,
        cFieldName: string,
        value: string,
    ) => void;
    currentData?: InterviewProcessDTO;
    isReadOnly?: boolean; // 읽기 전용 설정을 위한 prop
    formData?: PostInterviewReviewsDTO;
}

const InterviewProcess = ({
    inputData,
    currentData,
    isReadOnly = false,
    formData,
}: Props) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // event.target.name을 사용하여 fieldName을 유추하고, event.target.value를 value로 전달
        if (inputData)
            inputData(
                "interviewProcess",
                event.target.name,
                event.target.value,
            );
    };
    //console.log("currentData", currentData, isReadOnly);
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">면접 진행 과정</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <Field
                    orientation="horizontal"
                    label="면접 방식"
                    paddingBottom="10px"
                >
                    <Input
                        placeholder="면접 방식"
                        variant="flushed"
                        name="format"
                        size="lg"
                        onChange={handleInputChange}
                        value={
                            currentData?.format ||
                            formData?.reviewDetail.interviewProcess.format ||
                            ""
                        }
                        readOnly={isReadOnly}
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="면접 분위기"
                    paddingBottom="10px"
                >
                    <Input
                        name="mood"
                        variant="flushed"
                        placeholder="면접 분위기"
                        size="lg"
                        onChange={handleInputChange}
                        value={
                            currentData?.mood ||
                            formData?.reviewDetail.interviewProcess.mood ||
                            ""
                        }
                        readOnly={isReadOnly}
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="면접관 정보"
                    paddingBottom="10px"
                >
                    <Input
                        name="panel"
                        variant="flushed"
                        placeholder="면접관 정보"
                        size="lg"
                        onChange={handleInputChange}
                        value={
                            currentData?.panel ||
                            formData?.reviewDetail.interviewProcess.panel ||
                            ""
                        }
                        readOnly={isReadOnly}
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="면접관 : 면접자 비율"
                    paddingBottom="10px"
                >
                    <Input
                        name="interviewRatio"
                        variant="flushed"
                        placeholder="면접관 : 면접자 비율"
                        size="lg"
                        onChange={handleInputChange}
                        value={
                            currentData?.interviewRatio ||
                            formData?.reviewDetail.interviewProcess
                                .interviewRatio ||
                            ""
                        }
                        readOnly={isReadOnly}
                    />
                </Field>
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default InterviewProcess;