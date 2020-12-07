import React, { useState, useEffect } from "react";
import { ScrollView, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { normalize } from "../../../services/normalize";
import api from "../../../services/api";
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

export default ({ route, navigation }) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState("date");
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [rPresence, setRPresence] = useState(null);
    const [description, setDescription] = useState("");

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

    const createEvent = async () => {
        if (!name || !rPresence || !description) {
            Alert.alert("Preenchas os campos obrigatórios.");
        } else {
            try {
                const response = await api.post("/api/event", {
                    name,
                    password,
                    radius: parseInt(rPresence, 10),
                    dateTime: date.toISOString(),
                    description,
                    location: {
                        type: "Point",
                        coordinates: [route.params.location.coords.latitude, route.params.location.coords.longitude],
                    },
                });
                navigation.navigate("step3", { eventCode: response.data.event.eventCode });
            } catch (_err) {
                console.log(_err)
                Alert.alert(
                    "Houve um erro ao cadastrar o evento, tente novamente mais tarde!"
                );
            }
        }
    };

    const createThreeButtonAlert = () =>
        Alert.alert("Tem certeza que deseja criar esse evento?", "", [
            { text: "Sim", onPress: createEvent },
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
                    <TittleBox>Nome do evento*</TittleBox>
                    <TextInput value={name} onChangeText={setName}></TextInput>
                </InputBox>
                <InputBox>
                    <TittleBox>Senha do evento</TittleBox>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        autoCompleteType="password"
                        textContentType="password"
                        autoCapitalize="none"
                    ></TextInput>
                </InputBox>
                <InputBox>
                    <TittleBox>Raio de presença do evento*</TittleBox>
                    <AlternativeInput>
                        <Input
                            width="40"
                            align="center"
                            keyboardType="numeric"
                            value={rPresence}
                            onChangeText={setRPresence}
                        ></Input>
                        <InputText>Metros</InputText>
                    </AlternativeInput>
                </InputBox>
                <InputBox>
                    <TittleBox>Data do evento*</TittleBox>
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
                    <TittleBox>Hora do evento*</TittleBox>
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
                <InputBox size="big">
                    <TittleBox>Descrição*</TittleBox>
                    <BigTextInput
                        multiline={true}
                        numberOfLines={4}
                        value={description}
                        onChangeText={setDescription}
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
