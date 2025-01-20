import { Stack, Fieldset } from "@chakra-ui/react";
import InputFieldMap from "./InputFieldMap";

const Preparation = () => {
    const inputParams = [
        { label: "잘한 점", name: "reviewDetail.preparation.strengths" },
        { label: "개선할 점", name: "reviewDetail.preparation.improvements" },
    ];
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">사전 준비</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <InputFieldMap params={inputParams} />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default Preparation;
