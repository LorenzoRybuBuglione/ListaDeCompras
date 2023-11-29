import { useState } from "react";
import CredenciaisInput from "../../components/CredenciaisInput";
import { Container, InputContainer, Title, Button, ButtonText } from "./styles";

import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function realizarLogin() {
        const resultado = await signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                console.log(userCredential);
                return "sucesso";
            })
            .catch((error) => {
                console.log(error);
                return "erro";
            });

        return resultado;
    }

    return (
        <Container>
            <Title>Insira seu e-mail e sua senha{"\n"}para fazer login</Title>
            <InputContainer>
                <CredenciaisInput
                    label="E-mail"
                    value={email}
                    onChange={setEmail}
                />
                <CredenciaisInput
                    label="Senha"
                    value={senha}
                    onChange={setSenha}
                    secret
                />
            </InputContainer>
            <Button onPress={realizarLogin}>
                <ButtonText>Entrar</ButtonText>
            </Button>
        </Container>
    );
}
