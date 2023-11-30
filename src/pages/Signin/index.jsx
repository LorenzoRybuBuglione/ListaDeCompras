import { useState } from "react";
import CredenciaisInput from "../../components/CredenciaisInput";
import Icon from "react-native-vector-icons/Feather";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
    Container,
    InputContainer,
    Title,
    Button,
    ButtonText,
    BackButton,
} from "./styles";

export default function Signin({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [repeteSenha, setRepeteSenha] = useState("");

    const createUser = () => {
        if (senha === repeteSenha && senha !== "") {
            createUserWithEmailAndPassword(auth, email, senha)
                .then((userCredential) => {
                    console.log(userCredential);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            Alert.alert("Erro");
        }
    };

    return (
        <Container>
            <BackButton onPress={() => navigation.goBack()}>
                <Icon name="chevron-left" size={30} />
            </BackButton>
            <Title>
                Insira seu e-mail e sua senha{"\n"}para criar sua conta
            </Title>
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
                <CredenciaisInput
                    label="Repita sua senha"
                    value={repeteSenha}
                    onChange={setRepeteSenha}
                    secret
                />
            </InputContainer>
            <Button onPress={createUser}>
                <ButtonText>Realizar cadastro</ButtonText>
            </Button>
        </Container>
    );
}
