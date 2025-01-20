import { Stack, Fieldset } from "@chakra-ui/react";
import InputFieldMap from "./InputFieldMap";

const Communication = () => {
    const inputParams = [
        { label: "언어적", name: "reviewDetail.communication.verbal" },
        { label: "비언어적", name: "reviewDetail.communication.nonVerbal" },
        { label: "상호작용", name: "reviewDetail.communication.interaction" },
    ];
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">의사소통</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <InputFieldMap params={inputParams} />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default Communication;
