import { Input, Stack, Fieldset } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";
import {
    InterviewAnalysisDTO,
    PostInterviewReviewsDTO,
    ReviewDetailDTO,
} from "../api/reviewDTOList";

interface Props {
    inputData?: (
        pFieldName: keyof ReviewDetailDTO,
        cFieldName: string,
        value: string,
    ) => void;
    currentData?: InterviewAnalysisDTO;
    isReadOnly?: boolean; // 읽기 전용 설정을 위한 prop
    formData?: PostInterviewReviewsDTO;
}

const InterviewAnalysis = ({
    inputData,
    currentData,
    isReadOnly = false,
    formData,
}: Props) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // event.target.name을 사용하여 fieldName을 유추하고, event.target.value를 value로 전달
        if (inputData)
            inputData(
                "interviewAnalysis",
                event.target.name,
                event.target.value,
            );
    };

    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">
                    면접 분석 및 종합적 평가
                </Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <Field
                    orientation="horizontal"
                    label="잘한 점"
                    paddingBottom="10px"
                >
                    <Input
                        placeholder="면접에서 잘한 점"
                        variant="flushed"
                        name="strengths"
                        size="lg"
                        onChange={handleInputChange}
                        value={
                            currentData?.strengths ||
                            formData?.reviewDetail.interviewAnalysis
                                .strengths ||
                            ""
                        }
                        readOnly={isReadOnly}
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="개선할 점"
                    paddingBottom="10px"
                >
                    <Input
                        name="improvements"
                        variant="flushed"
                        placeholder="면접에서 개선할 점"
                        size="lg"
                        onChange={handleInputChange}
                        value={
                            currentData?.improvements ||
                            formData?.reviewDetail.interviewAnalysis
                                .improvements ||
                            ""
                        }
                        readOnly={isReadOnly}
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="피드백"
                    paddingBottom="10px"
                >
                    <Input
                        name="feedback"
                        variant="flushed"
                        placeholder="면접에 대한 피드백"
                        size="lg"
                        onChange={handleInputChange}
                        value={
                            currentData?.feedback ||
                            formData?.reviewDetail.interviewAnalysis.feedback ||
                            ""
                        }
                        readOnly={isReadOnly}
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="난이도"
                    paddingBottom="10px"
                >
                    <Input
                        name="difficulty"
                        variant="flushed"
                        placeholder="면접 난이도"
                        size="lg"
                        onChange={handleInputChange}
                        value={
                            currentData?.difficulty ||
                            formData?.reviewDetail.interviewAnalysis
                                .difficulty ||
                            ""
                        }
                        readOnly={isReadOnly}
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="결과 분석"
                    paddingBottom="10px"
                >
                    <Input
                        name="interviewResultAnalysis"
                        variant="flushed"
                        placeholder="ex. 추가질문에 대한 대비 부족이 약점"
                        size="lg"
                        onChange={handleInputChange}
                        value={
                            currentData?.interviewResultAnalysis ||
                            formData?.reviewDetail.interviewAnalysis
                                .interviewResultAnalysis ||
                            ""
                        }
                        readOnly={isReadOnly}
                    />
                </Field>
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default InterviewAnalysis;
