import styled from "styled-components";
import { normalize } from "../../../services/normalize";
import { metalBlue } from "../../../utils/color";

export const SafeView = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: ${metalBlue};
`;

export const InputBox = styled.SafeAreaView`
    margin-top: ${ normalize(20) }px;
    width: ${ normalize(360) }px;
    height: ${ (props) => props.size == 'big'?normalize(230) : normalize(120)}px;
    background-color: #56e3ee;
    border-radius: 10px;
`;

export const TittleBox = styled.Text`
    font-family: 'roboto-black';
    margin-top: ${ normalize(5) }px;
    font-size: 20px;
    width: 100%;
    text-align: center;
    color: ${metalBlue};
`

export const TextInputBox = styled.View`
    font-family: "roboto";
    margin-bottom: ${normalize(65)}px;
    text-align: center;
    padding-top: ${normalize(10)}px;
    padding-bottom: ${normalize(10)}px;
    width: ${normalize(315)}px;
    height: 60px;
    font-size: ${normalize(18)}px;
    border-color: ${metalBlue};
    border-bottom-width: 4px;
    border-radius: 1px;
    border-style: dashed;
`;
