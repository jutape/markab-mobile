import React from "react";
import { ScrollView } from "react-native";
import { SafeView, InputBox, TittleBox, TextInputBox} from "./styles";

export default () => {
    return (
        <SafeView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    marginHorizontal: 0,
                    marginBottom: 15,
                }}
            >
                <InputBox>
                    <TittleBox>Nome do evento</TittleBox>
                    <TextInputBox ></TextInputBox>
                </InputBox>
                <InputBox>
                    <TittleBox>Senha do evento</TittleBox>
                </InputBox>
                <InputBox>
                    <TittleBox>Raio de presença do evento</TittleBox>
                </InputBox>
                <InputBox>
                    <TittleBox>Data do evento</TittleBox>
                </InputBox>
                <InputBox>
                    <TittleBox>Hora do evento</TittleBox>
                </InputBox>
                <InputBox>
                    <TittleBox>Máximo de convidados</TittleBox>
                </InputBox>
                <InputBox
                    size={'big'}
                >
                    <TittleBox>Descrição</TittleBox>
                </InputBox>
            </ScrollView>
        </SafeView>
    );
};
