import { Stack, Fieldset } from "@chakra-ui/react";
import InputField from "./InputField";

const Preparation = () => {
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">사전 준비</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <InputField
                    label="잘한 점"
                    name="reviewDetail.preparation.strengths"
                />
                <InputField
                    label="개선할 점"
                    name="reviewDetail.preparation.improvements"
                />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default Preparation;
