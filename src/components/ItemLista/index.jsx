import { Container, LabelContainer, Label, Button } from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { useState } from "react";

const ItemLista = ({ quantidade, unidade, nome }) => {
    const [checked, setChecked] = useState(false);

    function toggleChecked() {
        if (checked) {
            setChecked(false);
        } else {
            setChecked(true);
        }
    }

    return (
        <Container onPress={toggleChecked}>
            <Button>
                <Icon name={checked ? "check-square" : "square"} size={20} />
            </Button>
            <LabelContainer>
                <Label>
                    {quantidade}
                    {unidade}
                </Label>
                <Label>{nome}</Label>
            </LabelContainer>
            <Button>
                <Icon name="edit" size={20} />
            </Button>
        </Container>
    );
};

export default ItemLista;
