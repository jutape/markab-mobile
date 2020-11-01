import styled from "styled-components";
import { normalize } from "../../services/normalize";
import { white, metalBlue } from '../../utils/color';

export const Screen = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${metalBlue};
`;

export const ButtonLogin = styled.TouchableOpacity`
    width: ${normalize(320)}px;
`;

export const Input = styled.TextInput`
    font-family: "roboto";
    margin-bottom: ${normalize(30)}px;
    text-align: center;
    padding-top: ${normalize(10)}px;
    padding-bottom: ${normalize(10)}px;
    width: ${normalize(315)}px;
    font-size: ${normalize(18)}px;
    background-color: ${white};
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
    color: ${white};
    font-size: ${normalize(19)}px;
`;

export const Logo = styled.Image`
    width: ${normalize(330)}px;
    height: ${normalize(330)}px;
    margin-left: ${normalize(-95)}px;
    margin-top: ${normalize(-85)}px;
`;