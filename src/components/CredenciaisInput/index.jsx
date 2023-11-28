import { Label, Input } from "./styles";

const CredenciaisInput = ({ label, value, onChange, secret = false }) => {
    return (
        <>
            <Label>{label}</Label>
            <Input
                placeholder={label}
                value={value}
                onChangeText={onChange}
                secureTextEntry={secret}
            />
        </>
    );
};

export default CredenciaisInput;
