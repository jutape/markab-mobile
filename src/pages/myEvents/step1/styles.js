import styled from "styled-components";
import {normalize} from "../../../services/normalize";
import {metalBlue, white, yellow} from "../../../utils/color";

export const SafeView = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    background-color: ${white};
`;

export const ListEvents = styled.ScrollView`

`;

export const MainScreen = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: 'roboto-black';
    alignItems: center;
    margin-top: ${normalize(100)}px;
    font-size: 30px;
    width: 100%;
    text-align: center;
    color: ${metalBlue};
`;

export const EventBox = styled.TouchableOpacity`
    margin: ${normalize(10)}px 0;
    width: ${normalize(360)}px;
    justify-content: center;
    align-items: center;
    height: ${(props) => props.size == 'big' ? normalize(230) : normalize(120)}px;
    background-color: ${yellow};
    border-radius: 10px;
`;

export const TitleEvent = styled.Text`
    font-family: 'roboto-black';
    font-size: 25px;
    color: ${metalBlue};
`;
export const NumParticipants = styled.Text`
    font-family: 'roboto';
    font-size: 20px;
    color: ${metalBlue};
`;