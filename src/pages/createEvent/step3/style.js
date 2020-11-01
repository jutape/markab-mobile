import styled from "styled-components";
import { normalize } from "../../../services/normalize";
import { metalBlue } from "../../../utils/color";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${metalBlue};
`;

export const CodePanel = styled.TouchableOpacity`
    width: ${normalize(350)}px;
    height: ${normalize(200)}px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: #56e3ee;
`;

export const TitlePanel = styled.Text`
    font-family: "roboto-black";
    margin-top: ${normalize(5)}px;
    font-size: 18px;
    width: 100%;
    text-align: center;
    color: ${metalBlue};
`;

export const CodeEvent = styled.Text`
    font-family: "roboto-black";
    margin-top: ${normalize(5)}px;
    margin-bottom: ${normalize(10)}px;
    font-size: 50px;
    width: 100%;
    text-align: center;
    color: ${metalBlue};
`;

export const LineSeparator = styled.View`
    width: ${normalize(200)}px;
    border-color: ${metalBlue};
    border-bottom-width: 2px;
`;

export const CopyText = styled.Text`
    font-family: "roboto-black";
    margin-top: ${normalize(5)}px;
    font-size: 24px;
    width: 100%;
    text-align: center;
    color: ${metalBlue};
`;

export const ShareButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: ${ normalize(350) }px;
    height: ${ normalize(60) }px;
    padding-bottom: ${normalize(3)}px;
    background-color: #41b6bf;
    border-radius: 5px;
`;

export const OkButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: ${ normalize(60) }px;
    height: ${ normalize(60) }px;
    padding-bottom: ${normalize(3)}px;
    background-color: #3ac66d;
    border-radius: 60px;
`;