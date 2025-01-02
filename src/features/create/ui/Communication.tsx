import { Input, Stack, Fieldset } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";

const Communication = () => {
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
                    />
                </Field>
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default Communication;
