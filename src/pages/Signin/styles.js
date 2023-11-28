import { styled } from "styled-components";

export const Container = styled.View`
    flex: 1;
    background-color: #98EECC;
    align-items: center;
    justify-content: center;
`;

export const InputContainer = styled.View`
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 20px;
`;

export const Title = styled.Text`
 font-size: 20px;
 text-align: center;
 font-weight: bold;
`;

export const Button  = styled.TouchableOpacity`
    background-color: #FBFFDC;
    padding: 10px 20px; 
    border-radius: 10px;
`;
export const ButtonText = styled.Text`
    font-size: 18px;
    font-weight: 500;
`;