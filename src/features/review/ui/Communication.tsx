import { Stack, Fieldset } from "@chakra-ui/react";
import InputField from "./InputField";
import { useFormContext } from "react-hook-form";

const Communication = () => {
    const { register } = useFormContext();
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">의사소통</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <InputField
                    label="언어적"
                    name="reviewDetail.communication.verbal"
                    register={register}
                />
                <InputField
                    label="비언어적"
                    name="reviewDetail.communication.nonVerbal"
                    register={register}
                />
                <InputField
                    label="상호작용"
                    name="reviewDetail.communication.interaction"
                    register={register}
                />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default Communication;
