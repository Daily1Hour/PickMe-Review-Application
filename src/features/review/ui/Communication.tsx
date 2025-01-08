import { Stack, Fieldset } from "@chakra-ui/react";
import { CommunicationDTO } from "../api/reviewDTOList";
import InputField from "./InputField";
import { useFormContext } from "react-hook-form";

interface Props {
    data: CommunicationDTO;
}

const Communication = ({ data }: Props) => {
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
                    defaultValue={data.verbal}
                    register={register}
                />
                <InputField
                    label="비언어적"
                    name="reviewDetail.communication.nonVerbal"
                    defaultValue={data.nonVerbal}
                    register={register}
                />
                <InputField
                    label="상호작용"
                    name="reviewDetail.communication.interaction"
                    defaultValue={data.interaction}
                    register={register}
                />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default Communication;
