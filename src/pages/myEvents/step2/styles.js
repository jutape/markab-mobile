import styled from "styled-components";
import { normalize } from "../../../services/normalize";
import { metalBlue } from "../../../utils/color";

export const SafeView = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    background-color: ${metalBlue};
`;

export const CardEvent = styled.View`
    width: ${normalize(350)}px;
    padding: 20px;
    border-radius: 20px;
    justify-content: center;
    align-content: center;
    background: #6f93db;
`;

export const TextTitle = styled.Text`
    font-family: "roboto-black";
    text-align: center;
    font-size: ${normalize(30)}px;
    color: ${metalBlue};
`;

export const TextValue = styled.Text`
    font-family: "roboto";
    text-align: center;
    font-size: ${normalize(28)}px;
    color: ${metalBlue};
`;

export const OkButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: ${normalize(70)}px;
    height: ${normalize(70)}px;
    padding-bottom: ${normalize(3)}px;
    background-color: #3ac66d;
    border-radius: 60px;
`;

export const NoButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: ${normalize(70)}px;
    height: ${normalize(70)}px;
    padding-bottom: ${normalize(3)}px;
    background-color: #e96363;
    border-radius: 60px;
`;


