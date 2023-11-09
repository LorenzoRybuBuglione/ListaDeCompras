import { styled } from "styled-components";

export const Container = styled.View`
    padding: 5%;
    background-color: #fff;
    width: 90%;
    justify-content: space-between;
    margin: 10px 5%;
    flex-direction: row;
    border-radius: 50%;
`;

export const LabelContainer = styled.View`
    margin-left: 10px;
    justify-content: flex-start;
    flex-direction: row;
    flex: 1;
    gap: 10px;
`;

export const Label = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonContainer = styled.View`
    flex-direction: row;
    gap: 5px;
`;
