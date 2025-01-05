import { Input, Stack, Fieldset } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";
import { CommunicationDTO, ReviewDetailDTO } from "../api/reviewDTOList";

interface Props {
    inputData?: (
        pFieldName: keyof ReviewDetailDTO,
        cFieldName: string,
        value: string,
    ) => void;
    currentData?: CommunicationDTO;
    isReadOnly?: boolean; // 읽기 전용 설정을 위한 prop
}

const Communication = ({
    inputData,
    currentData,
    isReadOnly = false,
}: Props) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // event.target.name을 사용하여 fieldName을 유추하고, event.target.value를 value로 전달
        if (inputData)
            inputData("communication", event.target.name, event.target.value);
    };

    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">의사소통</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <Field
                    orientation="horizontal"
                    label="언어적"
                    paddingBottom="10px"
                >
                    <Input
                        placeholder="말투, 발음 등"
                        variant="flushed"
                        name="verbal"
                        size="lg"
                        onChange={handleInputChange}
                        value={currentData?.verbal || ""}
                        readOnly={isReadOnly}
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="비언어적"
                    paddingBottom="10px"
                >
                    <Input
                        name="nonVerbal"
                        variant="flushed"
                        placeholder="제스처, 표정 등"
                        size="lg"
                        onChange={handleInputChange}
                        value={currentData?.nonVerbal || ""}
                        readOnly={isReadOnly}
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="상호작용"
                    paddingBottom="10px"
                >
                    <Input
                        name="interaction"
                        variant="flushed"
                        placeholder="면접관과의 상호작용(대화의 흐름 등)"
                        size="lg"
                        onChange={handleInputChange}
                        value={currentData?.interaction || ""}
                        readOnly={isReadOnly}
                    />
                </Field>
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default Communication;
