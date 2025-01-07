import { Input, Stack, Fieldset } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";
import {
    NextPreparationDTO,
    PostInterviewReviewsDTO,
    ReviewDetailDTO,
} from "../api/reviewDTOList";

interface Props {
    inputData?: (
        pFieldName: keyof ReviewDetailDTO,
        cFieldName: string,
        value: string,
    ) => void;
    currentData?: NextPreparationDTO;
    isReadOnly?: boolean; // 읽기 전용 설정을 위한 prop
    formData?: PostInterviewReviewsDTO;
}

const NextPreparation = ({
    inputData,
    currentData,
    isReadOnly = false,
    formData,
}: Props) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // event.target.name을 사용하여 fieldName을 유추하고, event.target.value를 value로 전달
        if (inputData)
            inputData("nextPreparation", event.target.name, event.target.value);
    };

    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">
                    다음 면접을 위한 준비
                </Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <Field
                    orientation="horizontal"
                    label="기술적 준비"
                    paddingBottom="10px"
                >
                    <Input
                        placeholder="ex. 특정 기술 스킬 향상 등"
                        variant="flushed"
                        name="technical"
                        size="lg"
                        onChange={handleInputChange}
                        value={
                            currentData?.technical ||
                            formData?.reviewDetail.nextPreparation.technical ||
                            ""
                        }
                        readOnly={isReadOnly}
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="표현적 준비"
                    paddingBottom="10px"
                >
                    <Input
                        name="expression"
                        variant="flushed"
                        placeholder="ex. 답변의 표현, 제스처, 표정 등"
                        size="lg"
                        onChange={handleInputChange}
                        value={
                            currentData?.expression ||
                            formData?.reviewDetail.nextPreparation.expression ||
                            ""
                        }
                        readOnly={isReadOnly}
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="추가"
                    paddingBottom="10px"
                >
                    <Input
                        name="additionalPractice"
                        variant="flushed"
                        placeholder="추가적으로 연습이 필요한 부분"
                        size="lg"
                        onChange={handleInputChange}
                        value={
                            currentData?.additionalPractice ||
                            formData?.reviewDetail.nextPreparation
                                .additionalPractice ||
                            ""
                        }
                        readOnly={isReadOnly}
                    />
                </Field>
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default NextPreparation;