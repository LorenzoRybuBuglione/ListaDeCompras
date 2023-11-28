import CredenciaisInput from "../../components/CredenciaisInput";
import {
    Container,
    InputContainer,
    Title,
    Button,
    ButtonText,
} from "./styles";

export default function Signin() {
    return (
        <Container>
            <Title>
                Insira seu e-mail e sua senha{"\n"}para criar sua conta
            </Title>
            <InputContainer>
                <CredenciaisInput label="E-mail" />
                <CredenciaisInput label="Senha" />
                <CredenciaisInput label="Repita sua senha" />
            </InputContainer>
            <Button>
                <ButtonText>Entrar</ButtonText>
            </Button>
        </Container>
    );
}
