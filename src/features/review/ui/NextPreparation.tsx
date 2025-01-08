import { Stack, Fieldset } from "@chakra-ui/react";
import { NextPreparationDTO } from "../api/reviewDTOList";
import InputField from "./InputField";

interface Props {
    data: NextPreparationDTO;
    register: any;
}

const NextPreparation = ({ data, register }: Props) => {
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">
                    다음 면접을 위한 준비
                </Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <InputField
                    label="기술적 준비"
                    name="reviewDetail.nextPreparation.technical"
                    defaultValue={data.technical}
                    register={register}
                />
                <InputField
                    label="표현적 준비"
                    name="reviewDetail.nextPreparation.expression"
                    defaultValue={data.expression}
                    register={register}
                />
                <InputField
                    label="추가 사항"
                    name="reviewDetail.nextPreparation.additionalPractice"
                    defaultValue={data.additionalPractice}
                    register={register}
                />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default NextPreparation;
