import styled from "styled-components";
import { normalize } from "../../../services/normalize";
import { metalBlue, white } from "../../../utils/color";

export const SafeView = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    background-color: ${white};
    justify-content: center;
    align-items: center;
`;

export const BigText = styled.Text`
  font-family: 'roboto-black';
  text-align: center;
  font-size: ${normalize(45)}px;
  color: ${metalBlue};
`;

export const OkButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: ${ normalize(70) }px;
    height: ${ normalize(70) }px;
    padding-bottom: ${normalize(3)}px;
    background-color: #3ac66d;
    border-radius: 60px;
`;

