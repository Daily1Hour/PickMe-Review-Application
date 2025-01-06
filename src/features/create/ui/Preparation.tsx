import { Input, Stack, Fieldset } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";
import {
    PostInterviewReviewsDTO,
    PreparationDTO,
    ReviewDetailDTO,
} from "../api/reviewDTOList";

interface Props {
    inputData?: (
        pFieldName: keyof ReviewDetailDTO,
        cFieldName: string,
        value: string,
    ) => void;
    currentData?: PreparationDTO;
    isReadOnly?: boolean; // 읽기 전용 설정을 위한 prop
    formData?: PostInterviewReviewsDTO;
}

const Preparation = ({
    inputData,
    currentData,
    isReadOnly = false,
    formData,
}: Props) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // event.target.name을 사용하여 fieldName을 유추하고, event.target.value를 value로 전달
        if (inputData)
            inputData("preparation", event.target.name, event.target.value);
    };

    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">사전 준비</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <Field
                    orientation="horizontal"
                    label="잘한 점"
                    paddingBottom="10px"
                >
                    <Input
                        placeholder="잘한 점"
                        variant="flushed"
                        name="strengths"
                        size="lg"
                        onChange={handleInputChange}
                        value={
                            currentData?.strengths ||
                            formData?.reviewDetail.preparation.strengths ||
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
                        placeholder="개선할 점"
                        size="lg"
                        onChange={handleInputChange}
                        value={
                            currentData?.improvements ||
                            formData?.reviewDetail.preparation.improvements ||
                            ""
                        }
                        readOnly={isReadOnly}
                    />
                </Field>
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default Preparation;
