import React, { useState } from "react";
import { ScrollView, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { normalize } from "../../../services/normalize";
import {
    SafeView,
    InputBox,
    TittleBox,
    TextInput,
    AlternativeInput,
    Input,
    InputText,
    BigTextInput,
    ConfirmBox,
    ConfirmButton,
} from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";

export default ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState("date");
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === "ios");
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode("date");
    };

    const showTimepicker = () => {
        showMode("time");
    };

    const createThreeButtonAlert = () =>
        Alert.alert("Tem certeza que deseja criar esse evento?", "", [
            { text: "Sim", onPress: () => navigation.navigate("step3") },
            {
                text: "Não",
                style: "cancel",
            },
        ]);

    const dateFormate = (data) => {
        var dia = data.getDate().toString(),
            diaF = dia.length == 1 ? "0" + dia : dia,
            mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = mes.length == 1 ? "0" + mes : mes,
            anoF = data.getFullYear();
        return diaF + "/" + mesF + "/" + anoF;
    };

    const hourFormate = (data) => {
        var hora = data.getHours();
        var hora = hora.toString().length == 1 ? "0" + hora : hora;
        var minuto = data.getMinutes();
        var minuto = minuto.toString().length == 1 ? "0" + minuto : minuto;
        return hora + ":" + minuto;
    };

    return (
        <SafeView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    marginHorizontal: 0,
                    marginBottom: 15,
                }}
            >
                <Ionicons
                    onPress={() => navigation.navigate("step1")}
                    name={"ios-arrow-round-back"}
                    size={normalize(60)}
                    color="white"
                />
                <InputBox>
                    <TittleBox>Nome do evento</TittleBox>
                    <TextInput></TextInput>
                </InputBox>
                <InputBox>
                    <TittleBox>Senha do evento</TittleBox>
                    <TextInput
                        autoCompleteType="password"
                        textContentType="password"
                        autoCapitalize="none"
                    ></TextInput>
                </InputBox>
                <InputBox>
                    <TittleBox>Raio de presença do evento</TittleBox>
                    <AlternativeInput>
                        <Input
                            width="40"
                            align="center"
                            keyboardType="numeric"
                        ></Input>
                        <InputText>Metros</InputText>
                    </AlternativeInput>
                </InputBox>
                <InputBox>
                    <TittleBox>Data do evento</TittleBox>
                    <AlternativeInput>
                        <InputText onPress={showDatepicker}>
                            {dateFormate(date)}
                        </InputText>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                    </AlternativeInput>
                </InputBox>
                <InputBox>
                    <TittleBox>Hora do evento</TittleBox>
                    <AlternativeInput>
                        <InputText onPress={showTimepicker}>
                            {hourFormate(date)}
                        </InputText>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                    </AlternativeInput>
                </InputBox>
                <InputBox>
                    <TittleBox>Máximo de convidados</TittleBox>
                    <TextInput keyboardType="numeric"></TextInput>
                </InputBox>
                <InputBox size="big">
                    <TittleBox>Descrição</TittleBox>
                    <BigTextInput
                        multiline={true}
                        numberOfLines={4}
                    ></BigTextInput>
                </InputBox>
                <ConfirmBox>
                    <ConfirmButton>
                        <InputText onPress={createThreeButtonAlert}>
                            Confirmar
                        </InputText>
                    </ConfirmButton>
                </ConfirmBox>
            </ScrollView>
        </SafeView>
    );
};
