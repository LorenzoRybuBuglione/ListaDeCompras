import {
    Container,
    LabelContainer,
    Label,
    Button,
    ButtonContainer,
} from "./styles";
import Icon from "react-native-vector-icons/Feather";

const ItemLista = ({
    quantidade,
    unidade,
    nome,
    deleteFromList,
    id,
    marcado,
    toggleChecked,
}) => {
    return (
        <Container>
            <Button onPress={() => toggleChecked(id)}>
                <Icon name={marcado ? "check-square" : "square"} size={20} />
            </Button>
            <LabelContainer>
                <Label>
                    {quantidade}
                    {unidade}
                </Label>
                <Label>{nome}</Label>
            </LabelContainer>
            <ButtonContainer>
                <Button onPress={() => deleteFromList(id)}>
                    <Icon name="trash" size={20} />
                </Button>
                <Button>
                    <Icon name="edit" size={20} />
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default ItemLista;
