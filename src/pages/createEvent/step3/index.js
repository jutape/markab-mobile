import React from "react";
import { Clipboard, Alert, Share } from "react-native";
import { normalize } from "../../../services/normalize";
import { Ionicons } from "@expo/vector-icons";
import { metalBlue } from "../../../utils/color";
import {
    Container,
    CodePanel,
    TitlePanel,
    CodeEvent,
    CopyText,
    LineSeparator,
    ShareButton,
    OkButton
} from "./style";

export default ({ route, navigation }) => {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    "Olá você esta sendo convidado para registrar presença no evento\n -> " + route.params.eventCode + "\nBaixe agora o app Markab e marque sua presença!",
            });
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <Container>
            <CodePanel
                onPress={() => {
                    Clipboard.setString(route.params.eventCode);
                    Alert.alert("Copiado com sucesso!");
                }}
            >
                <TitlePanel>Seu código do evento é:</TitlePanel>
                <CodeEvent>{route.params.eventCode}</CodeEvent>
                <LineSeparator></LineSeparator>
                <CopyText>Copiar</CopyText>
            </CodePanel>
            <ShareButton onPress={onShare}>
                <Ionicons
                    name={"ios-share"}
                    size={normalize(40)}
                    color={metalBlue}
                />
            </ShareButton>
            <OkButton onPress={() => {navigation.navigate("Menu")}}>
                <Ionicons
                    name={"ios-checkmark"}
                    size={normalize(70)}
                    color={metalBlue}
                />
            </OkButton>
        </Container>
    );
};
