import { Container, InputContainer, Input, Button } from "./styles";
import Icon from "react-native-vector-icons/Feather";

const Header = () => {
    return (
        <Container>
            <InputContainer>
                <Input placeholder="Qnt."  />
                <Input placeholder="Un."  />
                <Input placeholder="Nome do item"  />
                <Button>
                    <Icon name="plus-circle" size={40} color="#FBFFDC" />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default Header;
