import { useEffect } from "react";
import { Stack, Fieldset, Button, Box } from "@chakra-ui/react";

import { QuestionsAnswersDTO } from "../api/reviewDTOList";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";

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
    const { control, resetField, register } = useFormContext();

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

                        <Controller
                            name={`reviewDetail.questionsAnswers.${index}.type`}
                            control={control}
                            render={({ field }) => (
                                <InputField
                                    label="질문 유형"
                                    name={`reviewDetail.questionsAnswers.${index}.type`}
                                    defaultValue={field.value.type}
                                    register={register}
                                />
                            )}
                        />
                        <Controller
                            name={`reviewDetail.questionsAnswers.${index}.question`}
                            control={control}
                            render={({ field }) => (
                                <TextAreaField
                                    label="면접 질문"
                                    defaultValue={field.value.question}
                                    field={field}
                                />
                            )}
                        />
                        <Controller
                            name={`reviewDetail.questionsAnswers.${index}.answer`}
                            control={control}
                            render={({ field }) => (
                                <TextAreaField
                                    label="답변"
                                    defaultValue={field.value.answer}
                                    field={field}
                                />
                            )}
                        />
                        <Controller
                            name={`reviewDetail.questionsAnswers.${index}.feedback`}
                            control={control}
                            render={({ field }) => (
                                <TextAreaField
                                    label="피드백"
                                    defaultValue={field.value.feedback}
                                    field={field}
                                />
                            )}
                        />
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
