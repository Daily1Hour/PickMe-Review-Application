import { Stack, Fieldset } from "@chakra-ui/react";
import InputField from "./InputField";
import { useFormContext } from "react-hook-form";

const Preparation = () => {
    const { register } = useFormContext();
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">사전 준비</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <InputField
                    label="잘한 점"
                    name="reviewDetail.preparation.strengths"
                    register={register}
                />
                <InputField
                    label="개선할 점"
                    name="reviewDetail.preparation.improvements"
                    register={register}
                />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default Preparation;
