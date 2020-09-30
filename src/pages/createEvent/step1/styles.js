import styled from "styled-components";
import { normalize } from "../../../services/normalize";
import { white, metalBlue} from "../../../utils/color";

export const Screen = styled.SafeAreaView`
    flex: 1;
    background-color: ${metalBlue};
    align-items: center;
    justify-content: center;
`;

export const MapContainer = styled.View`
    width: ${normalize(380)}px;
    height: ${normalize(760)}px;
    background-color: ${white};
    border-radius: 10px;
    align-items: center;
`;

export const TitleConfirm = styled.Text`
    color: ${metalBlue};
    margin-top: ${normalize(18)}px;
    font-size: ${normalize(26)}px;
    font-family: "roboto-black";
`;

export const Loading = styled.Image`
    margin-top: ${normalize(150)}px;
`;
