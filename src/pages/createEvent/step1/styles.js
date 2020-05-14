import styled from "styled-components";
import { normalize } from "../../../services/normalize";

export const Screen = styled.SafeAreaView`
    flex: 1;
    background-color: #40495a;
    align-items: center;
    justify-content: center;
`;

export const MapContainer = styled.View`
    width: ${normalize(380)}px;
    height: ${normalize(760)}px;
    background-color: #ffffff;
    border-radius: 10px;
    align-items: center;
`;

export const TitleConfirm = styled.Text`
    color: #40495a;
    margin-top: ${normalize(18)}px;
    font-size: ${normalize(26)}px;
    font-family: "roboto-black";
`;