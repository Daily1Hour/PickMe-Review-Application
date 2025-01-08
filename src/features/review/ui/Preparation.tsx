import { Stack, Fieldset } from "@chakra-ui/react";
import { PreparationDTO } from "../api/reviewDTOList";
import InputField from "./InputField";

interface Props {
    Data: PreparationDTO;
    register: any;
}

const Preparation = ({ Data, register }: Props) => {
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">사전 준비</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <InputField
                    label="잘한 점"
                    name="reviewDetail.preparation.strengths"
                    defaultValue={Data.strengths}
                    register={register}
                />
                <InputField
                    label="개선할 점"
                    name="reviewDetail.preparation.improvements"
                    defaultValue={Data.strengths}
                    register={register}
                />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default Preparation;
