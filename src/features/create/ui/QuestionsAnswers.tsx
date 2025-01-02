import { useState } from "react";
import {
    Input,
    Stack,
    Fieldset,
    Button,
    Textarea,
    Box,
} from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";

const QuestionsAnswers = () => {
    type FieldData = {
        type: string;
        question: string;
        answer: string;
        feedback: string;
    };

    const [fields, setFields] = useState<FieldData[]>([
        { type: "", question: "", answer: "", feedback: "" },
    ]);

    const handleAddField = () => {
        setFields([
            ...fields,
            { type: "", question: "", answer: "", feedback: "" },
        ]);
    };

    const handleDeleteField = (index: number) => {
        setFields(fields.filter((_, i) => i !== index));
    };

    const handleInputChange = (
        index: number,
        name: keyof FieldData,
        value: string,
    ) => {
        const updatedFields = [...fields];
        updatedFields[index][name] = value;
        setFields(updatedFields);
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
                        {index !== 0 && (
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
                                onChange={(e) =>
                                    handleInputChange(
                                        index,
                                        "type",
                                        e.target.value,
                                    )
                                }
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
                                onChange={(e) =>
                                    handleInputChange(
                                        index,
                                        "question",
                                        e.target.value,
                                    )
                                }
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
                                onChange={(e) =>
                                    handleInputChange(
                                        index,
                                        "answer",
                                        e.target.value,
                                    )
                                }
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
                                onChange={(e) =>
                                    handleInputChange(
                                        index,
                                        "feedback",
                                        e.target.value,
                                    )
                                }
                            />
                        </Field>
                    </Stack>
                ))}

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
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default QuestionsAnswers;
