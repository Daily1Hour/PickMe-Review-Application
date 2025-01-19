import { Stack, Fieldset } from "@chakra-ui/react";
import InputField from "./InputField";

const Communication = () => {
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">의사소통</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <InputField
                    label="언어적"
                    name="reviewDetail.communication.verbal"
                />
                <InputField
                    label="비언어적"
                    name="reviewDetail.communication.nonVerbal"
                />
                <InputField
                    label="상호작용"
                    name="reviewDetail.communication.interaction"
                />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default Communication;
