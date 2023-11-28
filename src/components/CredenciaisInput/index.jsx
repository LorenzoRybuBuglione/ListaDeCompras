import { Label, Input } from "./styles";

const CredenciaisInput = ({label}) => {
    return (
        <>
            <Label>{label}</Label>
            <Input placeholder={label} />
        </>
    );
};

export default CredenciaisInput;
