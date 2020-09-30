import styled from "styled-components";
import { normalize } from "../../services/normalize";
import { white } from '../../utils/color';

const optionSize = {
    'one': 150,
    'two': 340
}

export const SafeView = styled.SafeAreaView`
    flex: 1;
    align-items: stretch;
    justify-content: center;
    background-color: ${white};
`;

export const ProfileImage = styled.Image`
    margin-top: ${normalize(30)}px;
    align-self: center;
    width: ${normalize(150)}px;
    height: ${normalize(150)}px;
    border-radius: ${normalize(150 / 2)}px;
`;

export const WelcomeText = styled.Text`
    margin-top: ${normalize(15)}px;
    text-align: center;
    font-family: "roboto-black";
    font-size: ${normalize(25)}px;
`;

export const MenuOptionsView = styled.View`
    align-self: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: ${normalize(340)}px;
    margin-top: ${normalize(30)}px;
    margin-bottom: ${normalize(30)}px;
    justify-content: space-between;
`;

export const Option = styled.TouchableOpacity`
    background-color: ${(props)=>props.colour};
    margin-top: ${normalize(30)}px;
    width: ${props => normalize(optionSize[props.size])}px;
    height: ${normalize(150)}px;
    align-items: center;
    border-radius: 15px;
    justify-content: center;
`;

export const OptionText = styled.Text`
    font-family: "roboto-black";
    font-size: ${normalize(25)}px;
    color: ${white};
    text-align: center;
`