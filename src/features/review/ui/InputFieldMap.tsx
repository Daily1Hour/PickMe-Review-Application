import InputField from "./InputField";

interface Props {
    params: { label: string; name: string; type?: string }[];
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
                />
            ))}
        </>
    );
};
export default InputFieldMap;
