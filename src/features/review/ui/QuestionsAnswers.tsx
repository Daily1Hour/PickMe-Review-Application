import { Stack, Fieldset, Button, Box } from "@chakra-ui/react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";

/**
 * QuestionsAnswers 컴포넌트
 *
 * 이 컴포넌트는 면접 질문과 답변을 입력할 수 있는 다중 입력 필드를 렌더링합니다.
 * 사용자는 질문 항목을 자유롭게 추가하거나 삭제할 수 있으며, 각 항목은 유형, 질문, 답변, 피드백으로 구성됩니다.
 *
 * 기능:
 * - `useFieldArray`를 이용해 질문/답변 항목을 동적으로 추가 및 삭제합니다.
 * - 각 항목은 React Hook Form의 `Controller`를 통해 상태를 관리합니다.
 * - 첫 번째 항목을 제외한 모든 항목은 삭제 버튼을 제공하며, 추가 버튼을 통해 새로운 항목을 삽입할 수 있습니다.
 *
 * UI 컴포넌트:
 * - `Fieldset.Root`, `Fieldset.Legend`, `Fieldset.Content`: 섹션 레이아웃을 구성하는 컴포넌트입니다.
 * - `InputField`, `TextAreaField`: 질문 항목의 입력 필드를 구성하는 재사용 컴포넌트입니다.
 * - `Button`: 질문 항목 추가 및 삭제 기능을 트리거합니다.
 *
 * @remarks
 * - `useFormContext`와 `useFieldArray`를 활용하여 React Hook Form의 컨텍스트 기반 상태 관리를 적용합니다.
 * - 항목 추가 시 기본값은 빈 문자열이며, 각 항목은 고유 ID를 통해 구분됩니다.
 *
 * @example
 * ```tsx
 * <FormProvider {...methods}>
 *   <QuestionsAnswers />
 * </FormProvider>
 * ```
 */
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
