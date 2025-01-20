import { Stack, Fieldset } from "@chakra-ui/react";
import InputFieldMap from "./InputFieldMap";

const NextPreparation = () => {
    const inputParams = [
        {
            label: "기술적 준비",
            name: "reviewDetail.nextPreparation.technical",
        },
        {
            label: "표현적 준비",
            name: "reviewDetail.nextPreparation.expression",
        },
        {
            label: "추가 사항",
            name: "reviewDetail.nextPreparation.additionalPractice",
        },
    ];
    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">
                    다음 면접을 위한 준비
                </Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <InputFieldMap params={inputParams} />
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default NextPreparation;
