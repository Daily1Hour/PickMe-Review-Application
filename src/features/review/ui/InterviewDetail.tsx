import { Stack, Fieldset } from "@chakra-ui/react";
import InputField from "./InputField";
import { InterviewDetail } from "@/entities/review/model/review";
import { InterviewDetaildict } from "./reviewDetailsDict";

const InterviewDetailField = ({ entity }: { entity: InterviewDetail }) => {
    type TypeKeys = keyof typeof entity; // entity 객체에서 타입 받음
    const keys = [...Object.keys(entity)] as TypeKeys[]; // Object.keys(entity)로 만들어진 배열을 풀고 다시 한번 진짜 배열로 만들고 타입을 entity타입으로 지정
    const reviewFields: Record<TypeKeys, string> = InterviewDetaildict.body;

    return (
        <Fieldset.Root size="lg" maxW="100%">
            <Stack>
                <Fieldset.Legend fontSize="2xl">
                    {InterviewDetaildict.title}
                </Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                {/* <InputFieldMap params={inputParams} /> */}
                {keys.map((key, index) => {
                    const type =
                        key === "interviewDateTime" ? "datetime-local" : "text"; // 면접 날짜인 경우 datetime-local, 아니면 text

                    return (
                        <InputField
                            key={index}
                            label={reviewFields[key]}
                            name={`interviewDetail.${key}`}
                            type={type} // 여기서 type을 적용
                        />
                    );
                })}
            </Fieldset.Content>
        </Fieldset.Root>
    );
};

export default InterviewDetailField;
