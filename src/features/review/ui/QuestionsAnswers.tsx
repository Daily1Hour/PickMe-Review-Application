import { Stack, Fieldset, Button, Box } from "@chakra-ui/react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";

const QuestionsAnswers = () => {
    const handleAddField = () => {
        append({ type: "", question: "", answer: "", feedback: "" });
    };

    const handleDeleteField = (index: number) => {
        remove(index);
    };
    const { control } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "questionsAnswers",
    });

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
                            name={`questionsAnswers.${index}.type`}
                            control={control}
                            render={() => (
                                <InputField
                                    label="질문 유형"
                                    name={`questionsAnswers.${index}.type`}
                                />
                            )}
                        />
                        <Controller
                            name={`questionsAnswers.${index}.question`}
                            control={control}
                            render={({ field, fieldState }) => (
                                <TextAreaField
                                    label="면접 질문"
                                    field={field}
                                    fieldState={fieldState}
                                />
                            )}
                        />
                        <Controller
                            name={`questionsAnswers.${index}.answer`}
                            control={control}
                            render={({ field, fieldState }) => (
                                <TextAreaField
                                    label="답변"
                                    field={field}
                                    fieldState={fieldState}
                                />
                            )}
                        />
                        <Controller
                            name={`questionsAnswers.${index}.feedback`}
                            control={control}
                            render={({ field, fieldState }) => (
                                <TextAreaField
                                    label="피드백"
                                    field={field}
                                    fieldState={fieldState}
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
