import { Stack, Fieldset } from "@chakra-ui/react";
import InputField from "./InputField";
import { ReviewInterface } from "@/entities/review/model/review";
import { dict } from "./reviewDetailsDict";

const ReviewDetails = ({ entity }: { entity: ReviewInterface }) => {
    const name = entity.constructor.name; // 클래스에서 클래스 명 추출
    const formattedName = (name.charAt(0).toLowerCase() +
        name.slice(1)) as keyof typeof dict; // 클래스 명 맨 앞글자 만 소문자로 변경

    type TypeKeys = keyof typeof entity;
    const keys = [...Object.keys(entity)] as TypeKeys[];
    const ob: Record<TypeKeys, string> = dict[formattedName].body;

    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">
                    {dict[formattedName].title}
                </Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                {keys.map((key, index) => (
                    <InputField
                        key={index}
                        label={ob[key]}
                        name={`reviewDetail.${formattedName}.${key}`}
                    />
                ))}
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default ReviewDetails;
