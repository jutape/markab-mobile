import styled from "styled-components";
import { normalize } from "../../../services/normalize";
import { metalBlue } from "../../../utils/color";

export const SafeView = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${metalBlue};
`;

export const InputBox = styled.SafeAreaView`
    margin-top: ${ normalize(20) }px;
    alignItems: center;
    width: ${ normalize(360) }px;
    height: ${ (props) => props.size == 'big'?normalize(230) : normalize(120)}px;
    background-color: #56e3ee;
    border-radius: 10px;
`;

export const TittleBox = styled.Text`
    font-family: 'roboto-black';
    alignItems: center;
    margin-top: ${ normalize(5) }px;
    font-size: 20px;
    width: 100%;
    text-align: center;
    color: ${metalBlue};
`

export const TextInput = styled.TextInput`
    font-family: 'roboto-black';
    margin-top: ${normalize(30)}px;
    color: ${metalBlue};
    text-align: center;
    padding-bottom: ${normalize(3)}px;
    width: 70%;
    font-size: ${normalize(18)}px;
    border-color: ${metalBlue};
    border-bottom-width: 2px;
`;

export const InputText = styled.Text`
    font-family: 'roboto-black';
    font-size: ${normalize(20)}px;
    text-align: center;
    color: ${metalBlue};
`;

export const ConfirmBox = styled.View`
    margin-top: ${ normalize(20) }px;
    width: 100%;
    justify-content: center;
    alignItems: center;
`;

export const ConfirmButton = styled.TouchableOpacity`
    justify-content: center;
    width: ${ normalize(150) }px;
    height: ${ normalize(50) }px;
    padding-bottom: ${normalize(3)}px;
    background-color: #56e3ee;
    border-radius: 5px;
`;

