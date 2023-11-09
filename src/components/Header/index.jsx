import { Container, InputContainer, Input, Button } from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { useState } from "react";

const Header = ({ addToList }) => {
    const [qnt, setQnt] = useState("");
    const [un, setUn] = useState("");
    const [nome, setNome] = useState("");

    const handleClick = () => {
        addToList(nome, qnt, un);
        setNome("");
        setQnt("");
        setUn("");
    };

    return (
        <Container>
            <InputContainer>
                <Input placeholder="Qnt." value={qnt} onChangeText={setQnt} style={{ width: '15%'}}/>
                <Input placeholder="Un." value={un} onChangeText={setUn}  style={{ width: '15%'}}/>
                <Input
                    placeholder="Nome do item"
                    value={nome}
                    onChangeText={setNome}
                    style={{ width: '50%'}}
                />
                <Button onPress={handleClick}>
                    <Icon name="plus-circle" size={40} color="#FBFFDC" />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default Header;
