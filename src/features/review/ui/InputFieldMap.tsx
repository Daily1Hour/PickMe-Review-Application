import { RegisterOptions } from "react-hook-form";
import InputField from "./InputField";

interface Props {
    params: {
        label: string;
        name: string;
        type?: string;
        validationRules?: RegisterOptions;
    }[];
}

const InputFieldMap = ({ params }: Props) => {
    return (
        <>
            {params.map((param, index) => (
                <InputField
                    key={index}
                    label={param.label}
                    name={param.name}
                    type={param.type}
                    validationRules={param.validationRules}
                />
            ))}
        </>
    );
};
export default InputFieldMap;
