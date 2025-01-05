import { Input, Stack, Fieldset } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";
import { PostReviewDetailDTO } from "../api/reviewDTOList";

interface Props {
    inputData: (
        pFieldName: keyof PostReviewDetailDTO,
        cFieldName: string,
        value: string,
    ) => void;
}

const Preparation = ({ inputData }: Props) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // event.target.name을 사용하여 fieldName을 유추하고, event.target.value를 value로 전달
        inputData("preparation", event.target.name, event.target.value);
    };

    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">사전 준비</Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <Field
                    orientation="horizontal"
                    label="잘한 점"
                    paddingBottom="10px"
                >
                    <Input
                        placeholder="잘한 점"
                        variant="flushed"
                        name="strengths"
                        size="lg"
                        onChange={handleInputChange}
                    />
                </Field>

                <Field
                    orientation="horizontal"
                    label="개선할 점"
                    paddingBottom="10px"
                >
                    <Input
                        name="improvements"
                        variant="flushed"
                        placeholder="개선할 점"
                        size="lg"
                        onChange={handleInputChange}
                    />
                </Field>
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default Preparation;
