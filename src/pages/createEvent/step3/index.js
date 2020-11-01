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

export default ({ navigation }) => {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    "Olá você esta sendo convidado para registrar presença no evento\n -> EB30J2\n Baixe agora o app Markab",
            });
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <Container>
            <CodePanel
                onPress={() => {
                    Clipboard.setString("EB30J2");
                    Alert.alert("Copiado com sucesso!");
                }}
            >
                <TitlePanel>Seu código do evento é:</TitlePanel>
                <CodeEvent>EB30J2</CodeEvent>
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
            <OkButton onPress={onShare}>
                <Ionicons
                    name={"ios-checkmark"}
                    size={normalize(70)}
                    color={metalBlue}
                />
            </OkButton>
        </Container>
    );
};
