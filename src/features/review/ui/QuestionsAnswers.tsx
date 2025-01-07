import { useEffect, useState } from "react";
import {
    Input,
    Stack,
    Fieldset,
    Button,
    Textarea,
    Box,
} from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";
import { QuestionsAnswersDTO, ReviewDetailDTO } from "../api/reviewDTOList";

interface Props {
    inputData?: (
        pFieldName: keyof ReviewDetailDTO,
        cFieldName: string,
        value: string,
        index?: number,
    ) => void;
    currentData?: QuestionsAnswersDTO[];
    isReadOnly?: boolean; // 읽기 전용 설정을 위한 prop
}

const QuestionsAnswers = ({
    inputData,
    currentData,
    isReadOnly = false,
}: Props) => {
    type FieldData = {
        type: string;
        question: string;
        answer: string;
        feedback: string;
    };

    const [fields, setFields] = useState<QuestionsAnswersDTO[]>([
        { type: "", question: "", answer: "", feedback: "" },
    ]);

    useEffect(() => {
        if (currentData) {
            // currentData가 있을 경우 이를 fields 상태로 설정
            setFields(currentData);
        }
    }, [currentData]);

    const handleInputChange = (
        index: number,
        name: keyof FieldData,
        value: string,
    ) => {
        // 로컬 상태에서 해당 인덱스의 값을 업데이트
        const updatedFields = [...fields];
        updatedFields[index][name] = value;
        setFields(updatedFields);
    };

    const handleInput = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number,
    ) => {
        // 이벤트 발생 시 `inputData`로 부모 상태를 업데이트
        handleInputChange(
            index,
            event.target.name as keyof FieldData,
            event.target.value,
        );
        if (inputData)
            inputData(
                "questionsAnswers",
                event.target.name,
                event.target.value,
                index,
            );
    };

    const handleAddField = () => {
        if (!currentData)
            setFields([
                ...fields,
                { type: "", question: "", answer: "", feedback: "" },
            ]);
    };

    const handleDeleteField = (index: number) => {
        if (!currentData) setFields(fields.filter((_, i) => i !== index));
    };

    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">
                    면접 질문과 답변
                </Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                {fields.map((field, index) => (
                    <Stack key={index} marginBottom="10px">
                        {/* 0번째 인덱스는 삭제 버튼 숨김 */}
                        {index !== 0 && !currentData && (
                            <Box
                                display="flex"
                                justifyContent="flex-end"
                                mt="50px"
                            >
                                <Button
                                    colorPalette="red"
                                    size="sm"
                                    onClick={() => handleDeleteField(index)}
                                >
                                    삭제
                                </Button>
                            </Box>
                        )}
                        <Field
                            orientation="horizontal"
                            label="질문 유형"
                            paddingBottom="10px"
                        >
                            <Input
                                placeholder="질문 유형"
                                variant="flushed"
                                name="type"
                                size="lg"
                                value={field.type}
                                onChange={(e) => handleInput(e, index)}
                                readOnly={isReadOnly}
                            />
                        </Field>

                        <Field
                            orientation="horizontal"
                            label="면접 질문"
                            paddingBottom="10px"
                        >
                            <Textarea
                                autoresize
                                name="question"
                                variant="outline"
                                placeholder="면접 질문"
                                size="sm"
                                value={field.question}
                                onChange={(e) => handleInput(e, index)}
                                readOnly={isReadOnly}
                            />
                        </Field>

                        <Field
                            orientation="horizontal"
                            label="답변"
                            paddingBottom="10px"
                        >
                            <Textarea
                                autoresize
                                name="answer"
                                variant="outline"
                                placeholder="답변"
                                size="sm"
                                value={field.answer}
                                onChange={(e) => handleInput(e, index)}
                                readOnly={isReadOnly}
                            />
                        </Field>

                        <Field
                            orientation="horizontal"
                            label="피드백"
                            paddingBottom="10px"
                        >
                            <Textarea
                                autoresize
                                name="feedback"
                                variant="outline"
                                placeholder="피드백"
                                size="sm"
                                value={field.feedback}
                                onChange={(e) => handleInput(e, index)}
                                readOnly={isReadOnly}
                            />
                        </Field>
                    </Stack>
                ))}

                {!currentData && (
                    <Box display="flex" justifyContent="center">
                        <Button
                            colorScheme="teal"
                            onClick={handleAddField}
                            size="sm"
                            width="100px"
                            colorPalette="blue"
                        >
                            추가
                        </Button>
                    </Box>
                )}
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default QuestionsAnswers;
