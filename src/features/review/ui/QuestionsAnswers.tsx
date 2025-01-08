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
import { useFieldArray, useFormContext } from "react-hook-form";

interface Props {
    data: QuestionsAnswersDTO[];
}

const QuestionsAnswers = ({ data }: Props) => {
    const handleAddField = () => {
        append({ type: "", question: "", answer: "", feedback: "" });
    };

    const handleDeleteField = (index: number) => {
        remove(index);
    };
    const { control, resetField } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "reviewDetail.questionsAnswers",
    });

    useEffect(() => {
        resetField("reviewDetail.questionsAnswers", { defaultValue: data });
    }, [data]);

    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">
                    면접 질문과 답변
                </Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                {fields.map((field, index) => (
                    <Stack key={field.id} marginBottom="10px">
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
                            />
                        </Field>

                        <Field
                            orientation="horizontal"
                            label="피드백"
                            paddingBottom="10px"
                        >
                            {/* <Textarea
                                autoresize
                                name="feedback"
                                variant="outline"
                                placeholder="피드백"
                                size="sm"
                                value={field.feedback}
                                onChange={(e) => handleInput(e, index)}
                                readOnly={isReadOnly}
                            /> */}
                        </Field>
                    </Stack>
                ))}

                {
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
                }
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default QuestionsAnswers;
