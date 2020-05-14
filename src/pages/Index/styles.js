import styled from "styled-components";
import { normalize } from "../../services/normalize";

export const Screen = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #40495a;
`;

export const ButtonLogin = styled.TouchableOpacity`
    width: ${normalize(320)}px;
`;

export const Input = styled.TextInput`
    font-family: "roboto";
    margin-bottom: ${normalize(65)}px;
    text-align: center;
    padding-top: ${normalize(10)}px;
    padding-bottom: ${normalize(10)}px;
    width: ${normalize(315)}px;
    font-size: ${normalize(18)}px;
    background-color: #ffffff;
    border-radius: 5px;
`;

export const ViewOptions = styled.View`
    margin-top: ${normalize(30)}px;
    width: ${normalize(305)}px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Option = styled.Text`
    font-family: "roboto-thin";
    color: #ffffff;
    font-size: ${normalize(19)}px;
`;
